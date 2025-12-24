import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main Container for Text */}
      <div className="flex flex-col items-center w-max">
        {/* LYANNE'S - Tracking adjusted to match width of HOME */}
        <div className="w-full flex justify-between text-2xl font-light text-black mb-[-5px] pl-1 pr-1">
          {'LYANNE\'S'.split('').map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>

        {/* HOME - Main anchor, bold */}
        <div className="text-7xl font-bold text-black leading-none tracking-widest">
          HOME
        </div>

        {/* AND BODY CARE - Tracking adjusted to match width */}
        <div className="w-full flex justify-between text-[0.65rem] font-medium text-black mt-2 pl-1 pr-1">
          {'AND BODY CARE'.split('').map((char, i) => (
            <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </div>
      </div>

      {/* Decorative Frame */}
      {/* 
          Top starts at first 'N' of LYANNE'S. 
          LYANNE'S has 8 chars. N is 4th. Approx 40-45% left.
          
          Bottom starts at 'O' of HOME.
          HOME has 4 chars. O is 2nd. Approx 30-35% left.
          
          "Expands a bit as it goes out" -> Right side extends beyond text.
      */}
      <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none">
        {/* Top Border - Starts at N */}
        <div className="absolute top-[5px] left-[42%] right-[-20px] h-[3px] bg-black"></div>

        {/* Right Border */}
        <div className="absolute top-[5px] bottom-[-5px] right-[-20px] w-[3px] bg-black"></div>

        {/* Bottom Border - Starts at O */}
        <div className="absolute bottom-[-5px] left-[32%] right-[-20px] h-[3px] bg-black"></div>
      </div>
    </div>
  );
};

export default Logo;
