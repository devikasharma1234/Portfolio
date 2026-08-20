import React from 'react';

const About = () => {
  return (
    <section className="bg-[#070712] py-20 px-4 sm:px-6 lg:px-8 font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#7B61FF] mb-6 tracking-wide">
            About Me
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer with expertise in modern web technologies
            and an urge to create exceptional user experiences.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Frontend Expertise */}
          <div className="bg-[#12131C] border border-gray-800 rounded-2xl p-8 hover:border-pink-500/30 transition-colors duration-300">
            <h3 className="text-[#FF66A1] text-2xl font-semibold mb-6">
              Frontend Expertise
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF66A1] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#FF66A1]"></span>
                <span className="text-gray-300 text-[15px] leading-relaxed">Crafted responsive & dynamic UIs using React, Next.js</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF66A1] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#FF66A1]"></span>
                <span className="text-gray-300 text-[15px] leading-relaxed">Built interactive experiences with Canvas API, Konva</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF66A1] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#FF66A1]"></span>
                <span className="text-gray-300 text-[15px] leading-relaxed">Focused on performance, accessibility, & modular design</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Problem Solving */}
          <div className="bg-[#12131C] border border-gray-800 rounded-2xl p-8 hover:border-indigo-500/30 transition-colors duration-300">
            <h3 className="text-[#7B61FF] text-2xl font-semibold mb-6">
              Problem Solving
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00E676] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#00E676]"></span>
                <span className="text-gray-300 text-[15px] leading-relaxed">Solved 650+ questions across Leetcode & other competitive platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00E676] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#00E676]"></span>
                <span className="text-gray-300 text-[15px] leading-relaxed">Strong foundation in Data Structures and Algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00E676] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#00E676]"></span>
                <span className="text-gray-300 text-[15px] leading-relaxed">1000+ GitHub commits</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Backend Development */}
          <div className="bg-[#12131C] border border-gray-800 rounded-2xl p-8 hover:border-blue-500/30 transition-colors duration-300">
            <h3 className="text-[#00B4D8] text-2xl font-semibold mb-6">
              Backend Development
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00B4D8] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#00B4D8]"></span>
                <span className="text-gray-300 text-[15px] leading-relaxed">Developed scalable APIs and microservices with Node.js</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00B4D8] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#00B4D8]"></span>
                <span className="text-gray-300 text-[15px] leading-relaxed">Implemented real-time systems with WebSockets & Redis Pub/Sub</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00B4D8] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#00B4D8]"></span>
                <span className="text-gray-300 text-[15px] leading-relaxed">Authentication, encryption, file handling, & Docker-based deployments</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Education */}
          <div className="bg-[#12131C] border border-gray-800 rounded-2xl p-8 hover:border-pink-500/30 transition-colors duration-300">
            <h3 className="text-[#FF66A1] text-2xl font-semibold mb-6">
              Education
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FFD166] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#FFD166]"></span>
                <span className="text-gray-300 text-[15px] leading-relaxed">B.Tech. CS @ UIET, Kurukshetra University (2022 - 2026)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FFD166] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#FFD166]"></span>
                <span className="text-gray-300 text-[15px] leading-relaxed">CGPA: 7.0 • JEE 2022: 93.2%ile</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FFD166] mt-2.5 flex-shrink-0 shadow-[0_0_8px_#FFD166]"></span>
                <span className="text-gray-300 text-[15px] leading-relaxed">Core subjects: DSA, OS, OOP, CN, DBMS, Compiler Design</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;