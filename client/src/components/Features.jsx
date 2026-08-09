import {
  Brain,
  MessageCircle,
  Activity,
  ShieldAlert,
} from "lucide-react";

const features = [
  {
    icon: Brain ,
    title: "AI Mood Analysis",
    desc: "Analyze emotions and understand your mental state using AI-powered mood detection.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageCircle ,
    title: "AI Chat Support",
    desc: "Talk with your personal AI companion anytime and receive supportive guidance.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Activity,
    title: "Daily Wellness Tracker",
    desc: "Track sleep, water intake, exercise, and daily wellness progress effortlessly.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: ShieldAlert ,
    title: "Emergency Alert",
    desc: "Instantly notify your trusted contact when high-risk emotions are detected.",
    color: "from-red-500 to-orange-500",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-gray-900">
            Powerful
            <span className="text-blue-600"> Features</span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            Everything you need to improve your mental well-being with AI.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6`}
              >
                <feature.icon size={40} />
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;