import { useEffect, useState } from "react";
import {
  Smile,
  Brain,
  Activity,
  CalendarDays,
} from "lucide-react";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import ChatBox from "../components/ChatBox";
import MoodRecommendation from "../components/MoodRecommendation";
import Journal from "../components/Journal";
import EmergencyCard from "../components/EmergencyCard";
import { useConvexAuth } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
// import { useQuery } from "convex/react";


const Dashboard = () => {
    
    const user = useQuery(api.users.me);
    const { isAuthenticated } = useConvexAuth();
    const { signOut } = useAuthActions();
    const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});
useEffect(() => {

  if(darkMode){

    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");

  }

  else{

    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme","light");

  }

},[darkMode]);

  const [selectedMood,setSelectedMood] = useState("");

  const [latestMood,setLatestMood] = useState("No mood");

  const [wellness,setWellness] = useState(0);

  const [streak,setStreak] = useState(0);

  const [chartData,setChartData] = useState([]);

  const [insight,setInsight] = useState(
    "Track your mood to get AI insights"
  );

  const [message,setMessage] = useState("");



//   const moods = useQuery(
//     api.moods.getMoods,
//     {
//       userId: identity?.subject
//     }
//   );
        const moods = useQuery(
        api.moods.getMoods,
       
        );

  const addMood = useMutation(
    api.moods.addMood
  );




  useEffect(()=>{


    if(moods && moods.length>0){


      setLatestMood(
        moods[0].mood
      );


      calculateWellness(moods);

      calculateStreak(moods);

      createChart(moods);

      generateInsight(
        moods[0].mood
      );


    }


  },[moods]);





  const saveMood = async()=>{


    if(!selectedMood){

      alert("Select mood");

      return;

    }



    try{


      await addMood({

        

        mood:selectedMood,

        note:"Dashboard mood",

        createdAt:Date.now()

      });



      setMessage(
        "Mood saved successfully 😊"
      );


    //   setSelectedMood("");



    }

    catch(error){

      console.log(error);

      setMessage(
        "Something went wrong"
      );

    }


  };







  const calculateWellness=(data)=>{


    let score=0;


    data.forEach(item=>{


      if(item.mood==="Happy")
      score+=100;


      else if(item.mood==="Neutral")
      score+=70;


      else if(item.mood==="Sad")
      score+=40;


      else if(item.mood==="Stressed")
      score+=20;
    else if(item.mood==="Burnout")
    score+=10;


    });



    setWellness(
      Math.round(score/data.length)
    );


  };








  const calculateStreak=(data)=>{


    const dates=data.map(item=>

      new Date(
        item.createdAt
      ).toDateString()

    );


    setStreak(
      [...new Set(dates)].length
    );


  };









  const createChart=(data)=>{


    const values=data
    .slice(0,7)
    .reverse()
    .map(item=>{


      if(item.mood==="Happy")
      return 90;


      if(item.mood==="Neutral")
      return 60;


      if(item.mood==="Sad")
      return 40;


      if(item.mood==="Stressed")
      return 20;
      if(item.mood==="Burnout")
      return 10;

      return 0;


    });



    setChartData(values);


  };









 const generateInsight=(mood)=>{

  if(mood==="Happy")

  setInsight(
    "Great! Keep maintaining your positive mindset 😊"
  );


  else if(mood==="Sad")

  setInsight(
    "Take care of yourself and try relaxation activities 💙"
  );


  else if(mood==="Stressed")

  setInsight(
    "Try breathing exercises and short breaks 🧘"
  );


  else if(mood==="Burnout")

  setInsight(
    "You seem mentally exhausted. Take proper rest and give yourself some recovery time 😴"
  );


  else if(mood==="Neutral")

  setInsight(
    "Maintain balance and keep tracking your emotions 🙂"
  );


};



return (

<div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-slate-900 dark:to-black dark:text-white transition-all duration-500 p-8">

<div className="max-w-7xl mx-auto">


<div className="flex justify-between items-center mb-3">
<h1 className="text-4xl font-bold mb-3">
Welcome to MindMate AI 👋
</h1>
<button

onClick={()=>setDarkMode(!darkMode)}

className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-3 rounded-xl shadow-lg"

>

{darkMode ? "☀️ Light" : "🌙 Dark"}

</button>
<button
onClick={async()=>{

await signOut();

window.location.href="/login";

}}
className="bg-red-500 text-white px-5 py-3 rounded-xl"
>

Logout

</button>

</div>
<p className="text-gray-600dark:text-gray-300 mb-10">
Track your emotions and improve your mental wellness.
</p>






<div className="grid md:grid-cols-4 gap-6">



<div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg">

<Smile size={35}/>

<h3 className="text-xl font-bold mt-5dark:text-white">
Current Mood
</h3>

<p className="text-2xl font-bold text-blue-600 mt-3">
{latestMood}
</p>

</div>





<div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg">

<Brain size={35}/>

<h3 className="text-xl font-bold mt-5 dark:text-white">
AI Insight
</h3>

<p className="mt-3">
{insight}
</p>

</div>





<div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg">

<Activity size={35}/>

<h3 className="text-xl font-bold mt-5 dark:text-white">
Wellness
</h3>

<p className="text-3xl font-bold mt-3 dark:text-white">
{wellness}%
</p>

</div>





<div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg">

<CalendarDays size={35}/>

<h3 className="text-xl font-bold mt-5 dark:text-white">
Streak
</h3>

<p className="text-3xl font-bold mt-3 dark:text-white">
{streak} Days
</p>

</div>



</div>









<div className="mt-10 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg">


<h2 className="text-2xl font-bold mb-5 dark:text-white">
How are you feeling today?
</h2>



<div className="flex gap-4 flex-wrap">


{
["Happy","Neutral","Sad","Stressed","Burnout"]
.map(m=>(

<button

key={m}

onClick={()=>setSelectedMood(m)}

className={`px-6 py-3 rounded-xl ${
selectedMood===m
?
"bg-blue-600 text-white"
:
"bg-gray-100  dark:bg-slate-700 dark:text-white hover:bg-blue-600 hover:text-white"
}`}

>

{m}

</button>


))

}


</div>




<button

onClick={saveMood}

className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-xl"

>

Save Mood

</button>


<p className="mt-3 text-green-600">
{message}
</p>


</div>









<div className="mt-10 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg">


<h2 className="text-2xl font-bold mb-6 dark:text-white">
Weekly Mood Analysis
</h2>


<div className="flex items-end gap-5 h-52">


{

chartData.length===0

?

<p>No mood data yet</p>

:

chartData.map((height,index)=>(


<div

key={index}

className="bg-blue-600 w-full rounded-t-xl"

style={{
height:`${height}%`
}}

>


</div>


))




}
</div>

</div>

<div className="mt-10">
  <ChatBox />
  <Journal />
</div>
<div className="mt-10 grid md:grid-cols-2 gap-6">
  <MoodRecommendation mood={selectedMood} />
</div>
{latestMood === "Stressed" || latestMood === "Burnout" ? (
  <div className="mt-10">
    <EmergencyCard />
  </div>
) : null}
</div>
</div>

);

};


export default Dashboard;