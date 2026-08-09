const Mood = require("../models/Mood");


// =============================
// Add Mood
// =============================

const addMood = async (req, res) => {

    try {

        const { mood, stressLevel, note } = req.body;

        const userId = req.user.id;

        const newMood = await Mood.create({

            userId,
            mood,
            stressLevel,
            note

        });

        res.status(201).json({

            success: true,
            message: "Mood saved successfully",
            mood: newMood

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};




// =============================
// Get Mood History
// =============================

// const getMoodHistory = async (req, res) => {

//     try {

//         const { userId } = req.user.id;

//         const moods = await Mood.find({

//             userId

//         }).sort({

//             createdAt: -1

//         });

//         res.status(200).json({

//             success: true,
//             count: moods.length,
//             moods

//         });

//     }

//     catch (error) {

//         console.log(error);

//         res.status(500).json({

//             success: false,
//             message: error.message

//         });

//     }

// };
const getMoodHistory = async (req,res)=>{

    try{

        console.log("USER FROM TOKEN:", req.user);


        const userId = req.user.id;


        console.log("SEARCHING USER ID:", userId);


        const moods = await Mood.find({
            userId:userId
        }).sort({
            createdAt:-1
        });


        console.log("MOODS FOUND:", moods);


        res.status(200).json({
            success:true,
            count:moods.length,
            moods
        });


    }
    catch(error){

        console.log(error);

        res.status(500).json({
            message:error.message
        });

    }

};



// =============================
// Exports
// =============================

module.exports = {

    addMood,
    getMoodHistory

};