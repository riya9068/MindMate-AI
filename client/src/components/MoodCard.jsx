import { useState } from "react";
import API from "../api/api";

const MoodCard = ({selectedMood, setSelectedMood}) => {

//   const [selectedMood, setSelectedMood] = useState("");

  const saveMood = async () => {

    try {

      const response = await API.post("/mood/add", {
        userId: "6a4de75c8deb677f2490fcc3",
        mood: selectedMood,
        stressLevel: 3,
        note: "Today's mood"
      });

      console.log(response.data);

      alert("Mood Saved Successfully");

    } catch(error) {
      console.log(error);
      alert("Something went wrong");
    }

  };


  return (
    <div className="mood-card">

      <h2>How are you feeling today?</h2>

      <div className="moods">

        <button onClick={()=>setSelectedMood("Happy")}>
          😊 Happy
        </button>

        <button onClick={()=>setSelectedMood("Neutral")}>
          😐 Neutral
        </button>

        <button onClick={()=>setSelectedMood("Sad")}>
          😔 Sad
        </button>

        <button onClick={()=>setSelectedMood("Stressed")}>
          😰 Stressed
        </button>
         <button onClick={()=>setSelectedMood("Burnout")}>
          😰 Burnout
        </button>

      </div>


      <button onClick={saveMood}>
        Save Mood
      </button>

    </div>
  );
};


export default MoodCard;