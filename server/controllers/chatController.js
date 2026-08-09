const Chat = require("../models/Chat");



// AI Response Function

const generateAIResponse = (message)=>{


    const text = message.toLowerCase();



    if(
        text.includes("stress") ||
        text.includes("stressed")
    ){

        return "I understand you are feeling stressed. Try deep breathing, take a small break and focus on one task at a time. 💙";

    }



    if(
        text.includes("sad") ||
        text.includes("lonely")
    ){

        return "I am here for you. Talking about your feelings can help. Remember to take care of yourself. ❤️";

    }



    if(
        text.includes("happy")
    ){

        return "That's great! Keep maintaining this positive energy and continue your healthy habits 😊";

    }



    if(
        text.includes("sleep")
    ){

        return "Good sleep is important for mental wellness. Try maintaining a regular sleep schedule. 😴";

    }



    return "Thank you for sharing. I am here to support you. Tell me more about how you are feeling.";

};







// Send Chat

exports.sendMessage = async(req,res)=>{


try{


const {message}=req.body;


const userId=req.user.id;



const aiResponse = generateAIResponse(message);



const chat = await Chat.create({

    userId,
    message,
    response:aiResponse

});



res.status(200).json({

    success:true,
    chat

});


}
catch(error){


console.log(error);


res.status(500).json({

    message:error.message

});


}


};






// Chat History

exports.getChatHistory = async(req,res)=>{


try{


const userId=req.user.id;



const chats = await Chat.find({

    userId

})
.sort({
    createdAt:1
});



res.json({

    success:true,
    chats

});


}
catch(error){

res.status(500).json({

message:error.message

});


}


};