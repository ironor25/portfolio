import { ArrowRight, Mail, FileText, Sparkles } from 'lucide-react';

const CtaBandYellow = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-bleed Electric Yellow CTA Card */}
        <div className="bg-[#faff69] text-[#0a0a0a] rounded-xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle grid background for engineering feel */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000d_1px,transparent_1px),linear-gradient(to_bottom,#0000000d_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0a] text-[#faff69] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                READY FOR IMPACT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-4 leading-tight">
              Ready to engineer high-throughput systems together?
            </h2>

            <p className="text-base sm:text-lg font-medium text-[#0a0a0a]/80 mb-8 max-w-2xl leading-relaxed">
              Whether you are scaling distributed microservices, building generative AI tooling, or designing Web3 architectures — let's connect and build something exceptional.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {/* High-contrast pure black button on yellow */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0a0a0a] text-[#faff69] font-bold text-sm hover:bg-[#1a1a1a] transition-all duration-200 shadow-md cursor-pointer"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://drive.google.com/file/d/1PdEDnMr1l8_MOVYtBoliBtkidJ3bgzAT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border-2 border-[#0a0a0a] text-[#0a0a0a] font-bold text-sm hover:bg-[#0a0a0a]/10 transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBandYellow;
