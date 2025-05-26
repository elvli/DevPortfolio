import { useState } from "react";

const SectionTitle = ({ title }) => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 1.5;

    // const rotateX = ((y - centerY) / centerY) * maxTilt;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setRotation({ rotateX: -rotateX, rotateY });
  }

  function handleMouseLeave() {
    setRotation({ rotateX: 0, rotateY: 0 });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(600px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
      }}
      className="text-4xl text-indigo-100 text-center font-bold px-[2px] py-[1px] mb-8 rounded-full tracking-wider bg-neutral-600/15 backdrop-blur-lg border-t-2 border-b-2 border-indigo-700/50 border-t-neutral-400/25 hover:bg-neutral-400/15 transition-colors duration-300 ease-in-out max-w-sm md:max-w-lg mx-auto"
    >
      <div className="p-4 rounded-[999px] border-t border-t-indigo-300/50 border-b border-b-gray-200/25 border-l-2 border-l-gray-200/25 border-r-2 border-r-indigo-100/45">
        {title}
      </div>
    </div>
  );
};

export default SectionTitle;
