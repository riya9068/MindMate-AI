import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">

      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
            <Sparkles size={35} />
          </div>
        </div>


        {/* Heading */}
        <h2 className="text-5xl font-bold leading-tight">
          Start Your Mental Wellness
          <br />
          Journey Today
        </h2>


        {/* Description */}
        <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
          Connect with MindMate AI, track your emotions, and build healthier
          habits with personalized AI guidance.
        </p>


        {/* Button */}
        <button
          className="mt-10 bg-white text-blue-600 px-8 py-4 rounded-full 
          font-semibold flex items-center gap-3 mx-auto 
          hover:scale-105 transition duration-300 shadow-lg"
        >
          Get Started

          <ArrowRight size={22} />
        </button>


      </div>

    </section>
  );
};

export default CTA;