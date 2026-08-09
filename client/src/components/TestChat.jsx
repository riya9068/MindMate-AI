import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";


function TestChat(){

  const sendMessage = useMutation(api.messages.sendMessage);

  const messages = useQuery(
    api.messages.getMessages,
    {
      userId:"test-user"
    }
  );


  const send = async()=>{

    await sendMessage({
      userId:"test-user",
      message:"Hello Convex",
      role:"user"
    });

  };


  return(
    <div>

      <button onClick={send}>
        Send Message
      </button>


      {
        messages?.map((msg)=>(
          <p key={msg._id}>
            {msg.message}
          </p>
        ))
      }

    </div>
  )

}

export default TestChat;