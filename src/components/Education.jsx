import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 border-b border-[#2a2a2a]/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#faff69]"></span>
            <span className="caption-uppercase text-[#faff69]">ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="display-lg">Education</h2>
          <p className="body-md text-[#cccccc] mt-3">
            Formal background in computer science fundamentals, artificial intelligence, algorithms, and distributed systems.
          </p>
        </div>

        {/* Education Card */}
        <div className="surface-card-base p-6 sm:p-8 hover:border-[#faff69]/40 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-[#121212] border border-[#2a2a2a] p-2 flex items-center justify-center shrink-0">
                <img
                  src="/lu_logo.png"
                  alt="University of Lucknow"
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="title-lg tracking-tight">
                    Bachelor of Technology — Computer Science & Artificial Intelligence
                  </h3>
                </div>
                <p className="text-sm font-mono text-[#ffffff] mt-1">
                  University of Lucknow
                </p>
                <p className="text-xs font-mono text-[#888888] mt-0.5">
                  Lucknow, Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 self-start">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#888888] bg-[#121212] px-3 py-1.5 rounded-lg border border-[#2a2a2a]">
                <Calendar className="w-3.5 h-3.5 text-[#faff69]" />
                <span>2022 – 2026</span>
              </div>
              <span className="text-[11px] font-mono text-[#22c55e]">
                Expected Graduation: June 2026
              </span>
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="mt-6 pt-6 border-t border-[#2a2a2a] grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#121212] p-4 rounded-lg border border-[#2a2a2a]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#888888] font-semibold mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#faff69]" />
                <span>Key Coursework</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Data Structures & Algorithms',
                  'Database Management Systems',
                  'Operating Systems & Kernel',
                  'Computer Networks',
                  'Artificial Intelligence & ML',
                  'Distributed Systems',
                  'Theory of Computation',
                  'Software Engineering'
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2 py-0.5 rounded bg-[#1a1a1a] text-[#cccccc] border border-[#2a2a2a] text-[11px] font-mono"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#121212] p-4 rounded-lg border border-[#2a2a2a]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#888888] font-semibold mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#faff69]" />
                <span>Academic Focus</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#cccccc]">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#faff69] font-mono">›</span>
                  <span>Specialization in Artificial Intelligence algorithms and automated reasoning.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#faff69] font-mono">›</span>
                  <span>Active technical community participant, peer mentor, and hackathon builder.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;