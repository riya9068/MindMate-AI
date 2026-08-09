import {
  ClipboardList,
  Brain,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Daily Mood Check-in",
    desc: "Share your feelings, mood, and daily activities to help AI understand your mental state.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI Emotion Analysis",
    desc: "Our AI analyzes your emotions and provides personalized insights and suggestions.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Track Your Growth",
    desc: "Monitor your wellness journey with smart reports and progress tracking.",
    color: "from-green-500 to-emerald-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            How 
            <span className="text-blue-600"> MindMate AI </span>
            Works
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            A simple three-step process to understand your emotions and improve
            your mental wellness.
          </p>
        </div>


        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-white to-blue-50 rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >

              {/* Number */}
              <span className="absolute top-6 right-8 text-5xl font-bold text-gray-200">
                {step.number}
              </span>


              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6`}
              >
                <step.icon size={35} />
              </div>


              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;