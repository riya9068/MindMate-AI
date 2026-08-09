import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      id="home"
     className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#D1FAFF] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            🧠 AI Powered Mental Health Companion
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight text-gray-900">
            Your AI Companion for
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"> Better Mental Health</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            MindMate AI helps students reduce stress, monitor their mood,
            receive AI-powered emotional support, and build healthier daily
            habits through personalized wellness tracking.
          </p>

           <div className="mt-8 flex gap-4">
            {/* <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-7 py-3 rounded-xl shadow-xl hover:scale-105 transition duration-300">
            Get Started
            </button> */} 
           <Link
        to="/register"
        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full"
        >
        Get Started
        </Link>

            {/* <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-7 py-3 rounded-xl transition duration-300">
              Learn More
            </button> */}
            <a
href="#features"
className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
>
Learn More
</a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-purple-600">24/7</h2>
              <p className="text-gray-600">AI Support</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-600">100%</h2>
              <p className="text-gray-600">Private</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-600">1K+</h2>
              <p className="text-gray-600">Students Helped</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="AI Mental Health"
        //     className="w-[450px] drop-shadow-2xl hover:scale-105 transition duration-500"> </img>
        className="w-[450px] animate-bounce"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;