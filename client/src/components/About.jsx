const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50"
    >

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          About 
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
            {" "}MindMate AI
          </span>
        </h2>


        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
          MindMate AI is an AI-powered mental wellness companion designed
          to help students manage stress, understand their emotions, track
          mood patterns, and build healthier daily habits with personalized
          AI-driven support.
        </p>



        <div className="grid md:grid-cols-3 gap-8 mt-12">


          {/* AI Support */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">

            <div className="text-4xl">
              🤖
            </div>

            <h3 className="text-xl font-bold mt-4 text-blue-600">
              AI Support
            </h3>

            <p className="text-gray-600 mt-3">
              Get emotional support and guidance through an intelligent
              AI companion available anytime.
            </p>

          </div>




          {/* Privacy */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">

            <div className="text-4xl">
              🔒
            </div>

            <h3 className="text-xl font-bold mt-4 text-purple-600">
              Privacy First
            </h3>

            <p className="text-gray-600 mt-3">
              Your personal mood data and journals are securely managed
              with privacy-focused technology.
            </p>

          </div>




          {/* Personalized Care */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">

            <div className="text-4xl">
              💙
            </div>

            <h3 className="text-xl font-bold mt-4 text-cyan-600">
              Personalized Care
            </h3>

            <p className="text-gray-600 mt-3">
              Receive personalized wellness suggestions based on your
              mood and daily activities.
            </p>

          </div>


        </div>


      </div>

    </section>
  );
};


export default About;