import { useEffect, useState } from 'react';

const Hero = (props) => {
  const {isDark} = props
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Deepak Yadav.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i++));
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`text-center py-12 sm:py-20 transition-colors duration-300 ${isDark == 'dark' ? ' dark' : ''}`}  id='hero'>
      <div className='flex justify-center'> 
        <img
          src='/my_img.jpg'
          className='h-24 w-24 sm:h-32 sm:w-32 rounded-full hover:shadow-2xl hover:shadow-amber-200 dark:hover:shadow-lime-400 cursor-pointer transition-shadow duration-300 bg-white dark:bg-zinc-900 object-cover'
          alt='Profile'
        />
      </div>
      <h1 className="text-2xl sm:text-5xl mt-2 font-bold tracking-tight text-center text-black dark:text-white transition-colors duration-300">
        {text}
      </h1>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300 font-medium transition-colors duration-300 text-sm sm:text-base">I follow one concept only</p>
      <p className="text-zinc-700 dark:text-zinc-300 font-medium transition-colors duration-300 text-sm sm:text-base">Learn Fast , Implement Fast , Fail Fast</p>
      <p className="text-zinc-700 dark:text-zinc-300 font-medium transition-colors duration-300 text-sm sm:text-base">I love doing hard things first, so if you're looking or working on something great.</p>
      <div className="mt-6 flex justify-center gap-2 sm:gap-4 flex-wrap">
        <a
          href="#contact"
          className="px-3 py-2 sm:px-4 sm:py-2 bg-lime-400 font-medium text-black rounded hover:brightness-110 cursor-pointer dark:bg-lime-500 dark:text-zinc-900 transition-colors duration-200 text-sm sm:text-base"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
