import { Brain, Smile, TrendingUp } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Your Mental Wellness
            <span className="text-blue-600"> Dashboard</span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            Get AI-powered insights, track your mood patterns, and improve your
            daily mental wellness journey.
          </p>
        </div>


        {/* Dashboard Box */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <div className="grid lg:grid-cols-3 gap-8">


            {/* Mood Score */}
            <div className="rounded-3xl p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">

              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">
                  Mood Score
                </h3>

                <Smile size={35}/>
              </div>


              <h1 className="text-5xl font-bold mt-8">
                85%
              </h1>

              <p className="mt-3 opacity-90">
                Your mood is improving this week 🚀
              </p>

            </div>



            {/* AI Insight */}
            <div className="rounded-3xl p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">

              <div className="flex items-center gap-3">
                <Brain size={35}/>
                <h3 className="text-xl font-semibold">
                  AI Insight
                </h3>
              </div>


              <p className="mt-8 leading-relaxed">
                "You seem more positive compared to last week. Keep maintaining
                your healthy routine and good sleep schedule."
              </p>

            </div>




            {/* Progress */}
            <div className="rounded-3xl p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white">

              <div className="flex items-center gap-3">
                <TrendingUp size={35}/>
                <h3 className="text-xl font-semibold">
                  Weekly Progress
                </h3>
              </div>


              <div className="mt-8">

                <div className="flex justify-between mb-2">
                  <span>Wellness</span>
                  <span>78%</span>
                </div>


                <div className="w-full bg-white/30 rounded-full h-3">
                  <div
                    className="bg-white h-3 rounded-full"
                    style={{width:"78%"}}
                  ></div>
                </div>

              </div>

            </div>


          </div>


          {/* Fake Chart Area */}
          <div className="mt-10 rounded-3xl bg-gray-50 p-8">

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Weekly Mood Analytics
            </h3>


            <div className="flex items-end justify-between h-48 gap-4">

              {[40,70,55,90,65,85,75].map((height,index)=>(
                <div
                  key={index}
                  className="bg-blue-500 rounded-t-xl w-full"
                  style={{height:`${height}%`}}
                ></div>
              ))}

            </div>

          </div>


        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;
