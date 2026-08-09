import { Bot, Send } from "lucide-react";

const AIChatPreview = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-gray-900">
            Talk With Your
            <span className="text-blue-600"> AI Companion</span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            Get emotional support, personalized guidance, and AI-powered
            conversations anytime you need.
          </p>

        </div>


        {/* Chat Box */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-blue-50 to-white rounded-3xl shadow-2xl p-8">


          {/* Header */}
          <div className="flex items-center gap-4 border-b pb-5">

            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <Bot size={32}/>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">
                MindMate AI
              </h3>

              <p className="text-green-500 text-sm">
                ● Online Assistant
              </p>
            </div>

          </div>



          {/* Messages */}
          <div className="space-y-5 my-8">


            {/* AI Message */}
            <div className="flex">

              <div className="bg-white shadow-md rounded-2xl rounded-tl-none p-4 max-w-md">

                <p className="text-gray-700">
                  Hi 👋 How are you feeling today? I'm here to listen and support you.
                </p>

              </div>

            </div>



            {/* User Message */}
            <div className="flex justify-end">

              <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-4 max-w-md">

                <p>
                  I am feeling a little stressed because of my work.
                </p>

              </div>

            </div>



            {/* AI Reply */}
            <div className="flex">

              <div className="bg-white shadow-md rounded-2xl rounded-tl-none p-4 max-w-md">

                <p className="text-gray-700">
                  I understand. Try taking a short break and focus on one task
                  at a time. You are doing great 💙
                </p>

              </div>

            </div>


          </div>



          {/* Input */}
          <div className="flex items-center gap-3 bg-white rounded-2xl shadow p-3">

            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 outline-none px-3 text-gray-600"
            />

            <button className="bg-blue-600 text-white p-3 rounded-xl hover:scale-105 transition">

              <Send size={22}/>

            </button>

          </div>


        </div>


      </div>

    </section>
  );
};


export default AIChatPreview;