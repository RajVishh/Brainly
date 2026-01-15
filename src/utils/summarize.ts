import { GoogleGenerativeAI } from "@google/generative-ai";
import * as cheerio from 'cheerio';
import axios from "axios"

const genAI = new GoogleGenerativeAI("AIzaSyAK1en2eVdIGROhICeo2bU3FgKdwUZ6ea0");


 export async function summarize(Link) {

  if(Link.includes("youtube") || Link.includes("Youtube") ) {

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent([
    {
      fileData: {
        mimeType: "video/mp4",
        fileUri: Link 
      }
    },
    { text: "Summarize this video in bullet points." }
  ]);

  console.log(result.response.text());
  }
  else if (Link.includes("x.com") || Link.includes("X.COM")){



  }

  else{
    // const { data } = await axios.get(Link);

    // const $ = cheerio.load(data);
    
    // $('script, style, nav, footer, iframe, .ad-container').remove();

    // const articleText = $('article').text() || $('body').text();

    // const cleanText = articleText.replace(/\s+/g, ' ').trim().slice(0, 30000);

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent([
    {
      fileData: {
        mimeType: "text/html",
        fileUri: Link 
      }
    },
    { text: "Analyze this text from a website and provide a 5-bullet summary." }
  ]);

  console.log(result.response.text());


  }

 
}