const MoodRecommendation = ({ mood }) => {
  const recommendations = {
    Happy: {
      emoji: "😊",
      title: "Happy Mood",
      message: "You are feeling positive. Keep maintaining this energy!",
      foods: ["🍎 Apple", "🍌 Banana", "🥜 Nuts"],
      tips: [
        "Continue your healthy routine",
        "Share positivity with others ❤️",
        "Stay physically active 🚶"
      ]
    },
    Stressed: {
      emoji: "😟",
      title: "Stress Detected",
      message: "Your mind needs relaxation and a small break.",
      foods: ["🍌 Banana", "🍵 Green Tea", "🥜 Almonds"],
      tips: [
        "Practice deep breathing 🧘",
        "Take a short walk 🚶",
        "Listen to calming music 🎧"
      ]
    },
    Burnout: {
      emoji: "😴",
      title: "Burnout Recovery",
      message: "You seem mentally exhausted. Give yourself some recovery time.",
      foods: ["🍊 Orange", "🥜 Almonds", "🥗 Healthy Food"],
      tips: [
        "Take proper sleep 😴",
        "Reduce screen time 📱",
        "Try meditation for 5 minutes 🧘"
      ]
    },
    Neutral: {
      emoji: "😐",
      title: "Neutral Mood",
      message:
        "You're feeling balanced today. It's a great time to maintain healthy habits and keep your mind refreshed.",
      foods: [
        "🍎 Apple",
        "🥗 Mixed Salad",
        "🥜 Almonds",
        "🥛 Yogurt",
        "💧 Stay Hydrated"
      ],
      tips: [
        "🚶 Take a 15-minute walk",
        "🧘 Practice 5 minutes of mindfulness",
        "📖 Read something inspiring",
        "😴 Get 7–8 hours of sleep",
        "🎵 Listen to relaxing music"
      ]
    },
    Sad: {
      emoji: "😔",
      title: "Feeling Low",
      message: "Small self-care steps can help improve your mood.",
      foods: ["🍓 Fruits", "🥛 Milk", "🌰 Nuts"],
      tips: [
        "Talk with someone you trust ❤️",
        "Go outside for fresh air 🌿",
        "Write your thoughts ✍️"
      ]
    }
  };

  const data = recommendations[mood];
  if(!data) {
 
  return (
    <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-3">
        🧠 AI Wellness Suggestion
      </h2>
      <p className="text-gray-600 mt-2">
        Select your mood to get personalized wellness tips 🌱
      </p>
    </div>
  );
}


return (
  <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-slate-800 dark:to-slate-900 dark:text-white rounded-3xl p-6 shadow-lg">
    <h2 className="text-xl font-bold mb-3">
      🧠 AI Wellness Suggestion
    </h2>

    <div className="text-4xl dark:text-white">
      {data.emoji}
    </div>

    <h3 className="text-lg dark:text-white font-semibold mt-2">
      {data.title}
    </h3>

    <p className="text-gray-600 mt-2 dark:text-gray-300">
      {data.message}
    </p>


    <div className="mt-4 dark:text-white">

      <h4 className="font-semibold">
        🥗 Recommended Food
      </h4>

      <ul className="mt-2 dark:text-gray-300">
        {
          data.foods.map((food,index)=>(
            <li key={index}>
              {food}
            </li>
          ))
        }
      </ul>

    </div>


    <div className="mt-4">

      <h4 className="font-semibold dark:text-white">
        ✨ Wellness Tips
      </h4>

      <ul className="mt-2">
        {
          data.tips.map((tip,index)=>(
            <li key={index}>
              {tip}
            </li>
          ))
        }
      </ul>

    </div>


  </div>
);
}
export default MoodRecommendation;
    