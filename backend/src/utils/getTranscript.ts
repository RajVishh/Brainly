import { Innertube } from "youtubei.js";
import axios from "axios"


function videoId(url) {
  const regex =
    /(?:youtube\.com\/(?:.*v=|v\/|embed\/|shorts\/)|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export const getTranscript = async (url)=>{

    try {
        const videoID = videoId(url)
    const youtube = await Innertube.create();
    
    // 1. Fetch video metadata
    const info = await youtube.getInfo(videoID);
    
    // 2. Get transcript data
    // This handles both manual and auto-generated captions automatically
    const transcriptData = await info.getTranscript();

    // 3. Clean up the data to look like standard objects
    //@ts-ignore
    let cleanTranscript = transcriptData.transcript.content.body.initial_segments.map(segment => ({
      text: segment.snippet.text,
      start: Number(segment.start_ms) / 1000,
      duration: (Number(segment.end_ms) - Number(segment.start_ms)) / 1000
    }));

    // 2. FALLBACK: Manually find the caption tracks
    const captionTracks = info.captions?.caption_tracks;

    if (!captionTracks || captionTracks.length === 0) {
      console.error(`No captions found for video: ${videoId}`);
      return [];
    }

    // 3. Select the best track (Prioritize English, or just take the first one)
    // You can filter specifically for 'en' here if you want
    const bestTrack = captionTracks.find((track: any) => track.language_code === 'en') || captionTracks[0];
    
    if(!bestTrack){
        return
    }
    console.log(`Fetching manual track: ${bestTrack.name.text} (${bestTrack.language_code})`);

    // 4. Fetch the XML transcript directly from the baseUrl
    const { data: xmlData } = await axios.get(bestTrack.base_url);

    // 5. Parse the XML (Simple regex parser to avoid heavy XML libraries)
    // The format is usually: <text start="0.0" dur="1.5">Hello world</text>
    const matches = [...xmlData.matchAll(/<text start="([\d.]+)" dur="([\d.]+)">([^<]+)<\/text>/g)];

    cleanTranscript = matches.map(match => ({
      start: parseFloat(match[1]),
      duration: parseFloat(match[2]),
      text: match[3].replace(/&amp;#39;/g, "'").replace(/&amp;/g, "&") // Decode simple entities
    }));

    return cleanTranscript;


  } catch (error) {
    console.error("Youtubei Error:", error);
    return null;
  }
}