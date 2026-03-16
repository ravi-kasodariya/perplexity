import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY
});

export async function testAi() {
    model.invoke("how to get WEB DEVELOPER job in uk in current market of 2026").then((response) => {
        console.log(response.text);
    })
}