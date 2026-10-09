import { useState } from 'react';
import axios from 'axios';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Github,
  Twitter,
  Linkedin,
  Clock,
  Terminal,
  Copy,
  Check
} from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'deepakyadav4567890@gmail.com';

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!email || !message) return;

    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      await axios.post('https://portfolio-p3wg.onrender.com/send', {
        email,
        message
      });
      setStatus({
        type: 'success',
        text: 'Message dispatched successfully! I will respond promptly.'
      });
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        text: 'Unable to dispatch message via automated gateway. Please email directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#2a2a2a]/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols) - Contact Info & Direct Channels */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#faff69]"></span>
              <span className="caption-uppercase text-[#faff69]">COMMUNICATION CHANNELS</span>
            </div>
            <h2 className="display-lg">Get in Touch</h2>
            <p className="body-md text-[#cccccc] mt-3 mb-8">
              Looking to collaborate on a challenging project, discuss fullstack/AI roles, or explore open-source synergies? Drop a message below or connect directly.
            </p>

            {/* Direct Email Card */}
            <div className="surface-card-base p-5 mb-6 hover:border-[#faff69]/40 transition-colors">
              <div className="text-xs font-mono uppercase tracking-wider text-[#888888] mb-2 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#faff69]" />
                <span>DIRECT INBOX</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${directEmail}`}
                  className="font-mono text-sm text-[#ffffff] hover:text-[#faff69] transition-colors truncate"
                >
                  {directEmail}
                </a>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-1.5 rounded bg-[#121212] border border-[#2a2a2a] text-[#888888] hover:text-[#ffffff] transition-colors shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#22c55e]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/ironor25"
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card-base p-4 flex flex-col items-center justify-center gap-2 hover:border-[#faff69]/40 hover:bg-[#1f1f1f] transition-all group"
              >
                <Github className="w-5 h-5 text-[#888888] group-hover:text-[#ffffff] transition-colors" />
                <span className="text-xs font-mono font-medium text-[#e6e6e6]">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/deepak-yadav-781088260/"
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card-base p-4 flex flex-col items-center justify-center gap-2 hover:border-[#faff69]/40 hover:bg-[#1f1f1f] transition-all group"
              >
                <Linkedin className="w-5 h-5 text-[#888888] group-hover:text-[#3b82f6] transition-colors" />
                <span className="text-xs font-mono font-medium text-[#e6e6e6]">LinkedIn</span>
              </a>

              <a
                href="https://x.com/ironor25"
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card-base p-4 flex flex-col items-center justify-center gap-2 hover:border-[#faff69]/40 hover:bg-[#1f1f1f] transition-all group"
              >
                <Twitter className="w-5 h-5 text-[#888888] group-hover:text-[#faff69] transition-colors" />
                <span className="text-xs font-mono font-medium text-[#e6e6e6]">Twitter / X</span>
              </a>
            </div>

            {/* Response Time SLA */}
            <div className="flex items-center gap-2 mt-6 text-xs font-mono text-[#888888]">
              <Clock className="w-3.5 h-3.5 text-[#22c55e]" />
              <span>Typical latency: &lt; 24h response window</span>
            </div>
          </div>

          {/* Right Column (7 cols) - High-Contrast Message Terminal */}
          <div className="lg:col-span-7">
            <div className="surface-card-base p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2a2a2a]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#faff69]" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#e6e6e6]">
                    TRANSMIT_MESSAGE.POST
                  </span>
                </div>
                <span className="text-xs font-mono text-[#5a5a5a]">HTTPS / TLS 1.3</span>
              </div>

              <form onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#888888] mb-2">
                    YOUR_EMAIL_ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full text-input-field h-11"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#888888] mb-2">
                    MESSAGE_PAYLOAD *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, role, or discussion topic..."
                    className="w-full text-input-field resize-y"
                  />
                </div>

                {status.text && (
                  <div
                    className={`p-3.5 rounded-lg text-xs font-mono flex items-start gap-2.5 ${
                      status.type === 'success'
                        ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30'
                        : 'bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/30'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    )}
                    <span>{status.text}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full h-11 font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2"
                >
                  <Send className={`w-4 h-4 ${loading ? 'animate-pulse' : ''}`} />
                  <span>{loading ? 'DISPATCHING PAYLOAD...' : 'TRANSMIT MESSAGE'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
