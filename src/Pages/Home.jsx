import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [particles, setParticles] = useState([]);
  const [stars, setStars] = useState([]);
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const dots = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 5,
    }));
    setParticles(dots);

    const starSet = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 8,
    }));
    setStars(starSet);

    const sparkSet = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 5 + 2,
      delay: Math.random() * 6,
    }));
    setSparks(sparkSet);
  }, []);

  return (
    <>
      {/* Desktop / Tablet */}
      <section className="hidden md:flex fixed inset-0 items-center justify-center bg-gradient-to-br from-[#012d36] via-[#02343f] to-[#034652] text-[#F0EDCC] px-8 overflow-hidden">
        {/* Floating Particles */}
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-[#F0EDCC]/30 animate-bounce"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${3 + p.delay}s`,
            }}
          />
        ))}

        {/* Twinkling Stars */}
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-white/40 animate-ping"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${4 + s.delay}s`,
            }}
          />
        ))}

        {/* Sparks */}
        {sparks.map((sp) => (
          <span
            key={sp.id}
            className="absolute rounded-full bg-yellow-300/40 animate-pulse"
            style={{
              top: sp.top,
              left: sp.left,
              width: `${sp.size}px`,
              height: `${sp.size}px`,
              animationDuration: `${2 + sp.delay}s`,
            }}
          />
        ))}

        {/* Main Content */}
        <div className="text-center max-w-4xl relative z-10">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            Welcome to <span className="text-white">ReaperX</span>
          </h1>
          <p className="text-xl lg:text-2xl text-[#e5e3c2] mb-10">
            Dive into poems, reflections, and thoughts that linger.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/poems"
              className="px-6 py-3 bg-[#F0EDCC] text-[#02343f] font-semibold rounded-xl shadow-md hover:scale-105 hover:bg-[#E4E1B5] transition"
            >
              Explore Poems
            </Link>
            <Link
              to="/about"
              className="px-10 py-3 border border-[#F0EDCC] text-[#F0EDCC] font-semibold rounded-xl hover:bg-[#F0EDCC]/10 hover:border-[#E4E1B5]  transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="md:hidden fixed inset-0 flex items-center bg-gradient-to-br from-[#012d36] via-[#02343f] to-[#034652] text-[#F0EDCC] overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-[#F0EDCC]/30 animate-bounce"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${3 + p.delay}s`,
            }}
          />
        ))}
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-white/40 animate-ping"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${4 + s.delay}s`,
            }}
          />
        ))}
        {sparks.map((sp) => (
          <span
            key={sp.id}
            className="absolute rounded-full bg-yellow-300/40 animate-pulse"
            style={{
              top: sp.top,
              left: sp.left,
              width: `${sp.size}px`,
              height: `${sp.size}px`,
              animationDuration: `${2 + sp.delay}s`,
            }}
          />
        ))}

        <div className="w-full px-6 py-16 text-center relative z-10">
          <h1 className="text-4xl font-extrabold mb-4">
            Welcome to <span className="text-white">ReaperX</span>
          </h1>
          <p className="text-base text-[#e5e3c2] mb-8">
            Poems and reflections to carry with you.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/poems"
              className="w-full px-5 py-3 bg-[#F0EDCC] text-[#02343f] font-semibold rounded-xl shadow-md hover:scale-105 transition text-center"
            >
              Explore Poems
            </Link>
            <Link
              to="/about"
              className="w-full px-5 py-3 border border-[#F0EDCC] text-[#F0EDCC] font-semibold rounded-xl hover:bg-[#F0EDCC]/10 transition text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
