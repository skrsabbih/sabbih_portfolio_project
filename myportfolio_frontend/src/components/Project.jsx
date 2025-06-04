import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then((res) => setProjects(res.data.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="py-16 bg-gray-100" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
              {project.image && (
                <img
                  src={`http://localhost:8000/storage/${project.image}`}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm text-justify">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-indigo-600 hover:underline"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
