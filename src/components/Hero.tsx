import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Full-height gradient background */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-[#000000] via-[#0f261a] to-[#2e533a] opacity-20" />
      
      <div className="text-center max-w-4xl mx-auto relative z-10 animate-fade-in">
        <div className="inline-block mb-4 px-4 py-1.5 bg-[#00FFA3]/10 text-[#00FFA3] rounded-full text-sm font-medium">
          A COUNTDOWN HACKATHON START
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Tech
          <span className="bg-gradient-to-r from-[#00FFA3] to-[#00A3FF] bg-clip-text text-transparent"> Hackathon</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Join the ultimate tech innovation challenge. Transform your ideas into reality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-[#00FFA3] text-black rounded-full hover:bg-[#00FFA3]/90 transition-all duration-300 transform hover:scale-105 font-medium"
          >
            REGISTER NOW
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="mt-16">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
