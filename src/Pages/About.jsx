import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function About() {
  const [particles, setParticles] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const dots = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 4,
      animation: i % 2 === 0 ? "animate-bounce" : "animate-ping",
    }));
    setParticles(dots);
  }, []);

  const titles = ["Poet", "Dreamer", "Creator"];
  const descriptions = [
    "Crafting verses that reflect the soul and capture fleeting emotions and a shackled heart.",
    "Exploring endless possibilities and chasing the resplendence in imagination and maybe nature.",
    "Building spaces, stories, and moments that invite others to feel and maybe connect.",
  ];

  return (
    <>
      {/* Desktop / Tablet */}
<section className="hidden md:flex relative w-full h-[85vh] bg-gradient-to-br from-[#012d36] mt-6 via-[#02343f] to-[#034652] text-[#F0EDCC] overflow-hidden">
  {particles.map((p) => (
    <span
      key={p.id}
      className={`absolute rounded-full bg-[#F0EDCC]/20 ${p.animation}`}
      style={{
        top: p.top,
        left: p.left,
        width: `${p.size}px`,
        height: `${p.size}px`,
      }}
    />
  ))}

  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
    <h2 className="text-4xl font-bold mb-6">About Me</h2>
    <p className="text-lg text-[#e5e3c2] max-w-3xl mb-12">
      I’m ReaperX — a creator of poems, reflections, and words that linger. 
      This is a space where thoughts unfold and emotions breathe life into art.
    </p>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mb-10">
      {titles.map((title, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className="opacity-100 translate-y-0 hover:scale-105 transition-all duration-700 ease-out bg-white/10 backdrop-blur-md border border-[#F0EDCC]/20 p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
          <p className="text-[#e5e3c2]">{descriptions[i]}</p>
        </div>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex gap-6">
      <Link
        to="/poems"
        className="px-6 py-3 bg-[#F0EDCC] hover:bg-[#E4E1B5]  text-[#02343f] font-semibold rounded-xl shadow-md hover:scale-105 transition"
      >
        Explore Poems
      </Link>
      <Link
        to="/contact"
        className="px-6 py-3 border border-[#F0EDCC] hover:border-[#E4E1B5]  text-[#F0EDCC] font-semibold rounded-xl hover:bg-[#F0EDCC]/10 transition"
      >
        Contact Me
      </Link>
    </div>
  </div>
</section>


      {/* Mobile / Small */}
      <section className="md:hidden fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#012d36] via-[#02343f] to-[#034652] text-[#F0EDCC] pt-30 py-10 overflow-x-hidden overflow-y-auto">
        {particles.map((p) => (
          <span
            key={p.id}
            className={`absolute rounded-full bg-[#F0EDCC]/20 ${p.animation}`}
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}

        <div className="relative z-10 w-full px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-base text-[#e5e3c2] mb-8">
            I’m ReaperX — a creator of poems, reflections, and words that linger. 
            This is a space where thoughts unfold and emotions breathe life into art.
          </p>

          <div className="flex flex-col gap-4 w-full mb-6">
            {titles.map((title, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="opacity-100 translate-y-0 transition-all duration-700 ease-out bg-white/10 backdrop-blur-md border border-[#F0EDCC]/20 p-4 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-[#e5e3c2] text-sm">{descriptions[i]}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full">
            <Link
              to="/poems"
              className="w-full px-5 py-3 bg-[#F0EDCC] text-[#02343f] font-semibold rounded-xl shadow-md hover:scale-105 transition text-center"
            >
              Explore Poems
            </Link>
            <Link
              to="/contact"
              className="w-full px-5 py-3 border border-[#F0EDCC] text-[#F0EDCC] font-semibold rounded-xl hover:bg-[#F0EDCC]/10 transition text-center"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
