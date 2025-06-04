import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Hero = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/heroes")
      .then((res) => setHero(res.data.data[0]))
      .catch((err) => console.error(err));
  }, []);
  if (!hero) return <p className="text-center py-10">Loading...</p>;
  return (
    <section id="home" className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <img
          src={`http://localhost:8000/images/${hero.image}`}
          alt={hero.name}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold">{hero.name}</h2>
        <h3 className="text-xl text-indigo-600">{hero.title}</h3>
        <p className="mt-2 text-gray-700">{hero.subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
