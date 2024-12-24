import React from "react";
import ResumeSec from "../components/ResumeSec";

const Resume = () => {
  return (
    <div>
      {/* heading  */}
      <div className="w-full md:w-[80%] lg:w-[58%] mx-auto px-4 md:px-6 mt-12">
        <h1 className="text-3xl md:text-[54px] font-medium md:leading-[58px] mb-6 text-primary">
          Graduation Complete. Code Journey Begins.
        </h1>
        <p className="text-lg md:text-xl mb-10">
          With a passion for frontend development and a drive to build
          meaningful digital experiences, I’m ready to bring ideas to life
          through clean code and creative design. Excited to grow, learn, and
          contribute to projects that make a difference.
        </p>
        <a
          href=""
          className="bg-primary hover:bg-primary/80 transition-all duration-300 ease-in-out px-5 py-2.5 rounded-lg text-secondary "
          target="_blank"
        >
          Download Resume
        </a>
      </div>

      {/* resume  */}
      <div className="bg-accent mt-20">
        <ResumeSec />
      </div>
    </div>
  );
};

export default Resume;
