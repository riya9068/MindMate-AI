
// export default ChatBox;
import { useState, useEffect, useRef } from "react";
import { useMutation, useQuery, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";

const ChatBox = () => {
    const [isTyping, setIsTyping] = useState(false);

  const [message, setMessage] = useState("");

  const messagesEndRef = useRef(null);


  const messages = useQuery(
    api.chat.getMessages
    // {
    //   userId: "demo-user",
    // }
  );


  const sendMessage = useMutation(
    api.chat.sendMessage
  );


  const askAI = useAction(
    api.ai.askAI
  );


//   const handleSend = async () => {

//     if (!message.trim()) return;


//     const userMessage = message;


//     setMessage("");


//     // Save user message
//     await sendMessage({

//       userId: "demo-user",

//       message: userMessage,

//       role: "user",

//       createdAt: Date.now(),

//     });



//     // Get AI response
//     const aiResponse = await askAI({

//       message: userMessage,

//     });



//     // Save AI response
//     await sendMessage({

//       userId: "demo-user",

//       message: aiResponse,

//       role: "assistant",

//       createdAt: Date.now(),

//     });

//   };
const handleSend = async () => {

  if (!message.trim()) return;


  const userMessage = message;

  setMessage("");


  await sendMessage({
    // userId:"demo-user",
    message:userMessage,
    role:"user",
    // createdAt:Date.now()
  });


  setIsTyping(true);


  const aiResponse = await askAI({
    message:userMessage
  });


  setIsTyping(false);


  await sendMessage({
    // userId:"demo-user",
    message:aiResponse,
    role:"assistant",
    // createdAt:Date.now()
  });

};


  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);



  return (

    <div className="bg-white dark:bg-slate-800 dark:text-white rounded-3xl shadow-lg p-6">


      <h2 className="text-2xl font-bold mb-5">
        MindMate AI Chat 🤖
      </h2>



      <div className="h-80 overflow-y-auto space-y-3">


        {messages?.slice().reverse().map((msg) => (

          <div

            key={msg._id}

            className={
                `max-w-[80%] p-4 rounded-2xl shadow-sm whitespace-pre-line
                ${
              msg.role === "user"
                ? "bg-blue-100 dark:bg-blue-600 dark:text-white p-3 rounded-xl ml-10 shadow-lg"
            //     : "bg-purple-100 dark:bg-slate-700 dark:text-white p-3 rounded-xl mr-10"
            :"bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-3 rounded-xl shadow-lg"
            }
            `}

          >

            <div className="whitespace-pre-line">
            {msg.message}
            </div>

                    </div>

        ))}
        {
        isTyping && (
        <div className="bg-purple-100 p-3 dark:text-white dark:bg-slate-700 rounded-xl mr-10 animate-pulse">
        MindMate AI is thinking... 🤖
        </div>
        )
        }


        <div ref={messagesEndRef}></div>


      </div>




      <div className="flex gap-3 mt-5">


        <input

          value={message}

          onChange={(e) => setMessage(e.target.value)}

          onKeyDown={(e) => {
            if(e.key === "Enter"){
              handleSend();
            }
          }}

          placeholder="Share your thoughts..."

          className="flex-1 border rounded-xl p-3 bg-white dark:bg-slate-700 dark:text-white dark:border-slate-600"

        />



        <button

          onClick={handleSend}

          className="bg-blue-600 text-white  dark:text-black dark:bg-blue-600 px-6 rounded-xl"

        >

          Send

        </button>


      </div>


    </div>

  );

};


export default ChatBox;