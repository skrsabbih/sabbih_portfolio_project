import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/abouts")
      .then((res) => setAbout(res.data.data[0]))
      .catch((err) => console.error(err));
  }, []);

  if (!about) return <p className="text-center py-10">Loading...</p>;

  return (
    <>
      <section className="py-16 bg-white" id="about">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side: Text */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {about.title}
              </h2>
              <p className="text-gray-600 text-lg mb-4 text-justify">
                {about.description}
              </p>

              {/* CV Download Button */}
              {about.cv && (
                <a
                  href={`http://localhost:8000/images/${about.cv}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              )}
            </div>

            {/* Right Side: Image */}
            {about.image && (
              <div>
                <img
                  src={`http://localhost:8000/images/${about.image}`}
                  alt="About"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
