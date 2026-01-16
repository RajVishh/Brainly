import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyA_VDLCWFnT_a5r5bzod0H7MNiiwHkINsc");


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
  // else if (Link.includes("x.com") || Link.includes("X.COM")){



  // }

  else{

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
  const text = await result.response.text();
  return text;


  }

 
}