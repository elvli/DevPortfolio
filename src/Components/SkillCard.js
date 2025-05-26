import { useState } from "react";

function SkillCard({ skill }) {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation degrees, max 10 degrees tilt
    const rotateX = ((y - centerY) / centerY) * 10; // invert for natural movement
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ rotateX: -rotateX, rotateY }); // negative rotateX to tilt forward on top
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
      className="flex flex-col items-center rounded-xl shadow-md max-w-52 ml-3 lg:ml-0 transition-transform duration-300 ease-out bg-neutral-600/15 backdrop-blur-lg border-t-2 border-b-2 border-indigo-700/50 border-t-neutral-400/25 hover:bg-neutral-400/15 h-full"
    >
      <div className="pt-8 flex flex-col rounded-xl w-full h-full border-t border-t-indigo-300/50 border-b border-b-gray-200/25 border-l-2 border-l-gray-200/25 border-r-2 border-r-indigo-100/45">
        <img
          src={skill.img}
          alt={`${skill.title} logo`}
          className="w-16 h-16 object-contain mx-auto pb-4"
          draggable={false}
        />

        <h3 className="text-lg font-semibold mb-4 text-center">
          {skill.title}
        </h3>
      </div>
    </div>
  );
}

export default SkillCard;
