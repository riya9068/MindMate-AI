// import { action } from "./_generated/server";
// import { v } from "convex/values";
// import { GoogleGenerativeAI } from "@google/generative-ai";


// export const askAI = action({

//   args:{
//     message:v.string()
//   },


//   handler: async(ctx,args)=>{
   

//     const genAI = new GoogleGenerativeAI(
//       process.env.GEMINI_API_KEY!
//     );


//     const model = genAI.getGenerativeModel({
//       model:"gemini-2.0-flash"
//     });



//     const result = await model.generateContent(
//       [
//         {
//           text:
//           `
//           You are MindMate AI,
//           a mental wellness assistant.

//           Give supportive,
//           empathetic and helpful replies.

//           User message:
//           ${args.message}
//           `
//         }
//       ]
//     );


//     const response =
//     result.response.text();



//     return response;


//   }

// });
// import { action } from "./_generated/server";
// import { v } from "convex/values";
// import { GoogleGenerativeAI } from "@google/generative-ai";


// export const askAI = action({

//   args:{
//     message:v.string()
//   },


//   handler: async(ctx,args)=>{

//     const apiKey = process.env.GEMINI_API_KEY;

//     if(!apiKey){
//       throw new Error("Missing GEMINI_API_KEY");
//     }
//     console.log("API KEY EXISTS", !!process.env.GEMINI_API_KEY);

//     const genAI = new GoogleGenerativeAI(apiKey);


//     const model = genAI.getGenerativeModel({
//       model:"gemini-2.0-flash"
//     });


//     const result = await model.generateContent(args.message);


//     return result.response.text();

//   }

// });
import { action } from "./_generated/server";
import { v } from "convex/values";
import Groq from "groq-sdk";

export const askAI = action({
  args: {
    message: v.string(),
  },

  handler: async (ctx, args) => {
    try {
      const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY,
      });

      const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content:
            `You are MindMate AI, a friendly and supportive mental health companion.

            Always reply in a clear and easy-to-read format.

            Rules:
            - Use short paragraphs.
            - Use bullet points when explaining things.
            - Use emojis where appropriate.
            - Add line breaks between different points.
            - Avoid writing long paragraphs.
            - Make responses feel warm, human, and supportive.
            - For advice, provide numbered steps.

            Example format:

            😊 I understand how you feel.

            Here are some things you can try:

            1. 🌿 Take a deep breath
            2. 🚶 Go for a short walk
            3. 📝 Write down your thoughts

            Ask a gentle follow-up question at the end.`
          },
          {
            role: "user",
            content: args.message,
          },
        ],
        temperature: 0.7,
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error("Groq AI Error:", error);
      return "Sorry, I am unable to respond right now. Please try again.";
    }
  },
});

export const analyzeJournal = action({
  args: {
    journal: v.string(),
  },

  handler: async (ctx, args) => {
    try {
      const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY,
      });

      const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content: `
You are MindMate AI.

Analyze the user's journal.

Return your answer in this format.

🧠 Emotion

📌 Reason

🥗 Wellness Advice

❤️ Motivation

Use emojis.

Keep answer under 150 words.
`,
          },
          {
            role: "user",
            content: args.journal,
          },
        ],
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error("Groq AI Error:", error);
      return "Sorry, I am unable to analyze the journal right now. Please try again.";
    }
  },
});