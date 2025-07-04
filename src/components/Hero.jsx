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
    <section className={`text-center py-20 transition-colors duration-300 ${isDark == 'dark' ? ' dark' : ''}`}  id='hero'>
      <div className='flex justify-center'> 
        <img
          src='/my_img.jpg'
          className='h-30 rounded-full hover:shadow-2xl hover:shadow-amber-200 dark:hover:shadow-lime-400 cursor-pointer transition-shadow duration-300 bg-white dark:bg-zinc-900'
          alt='Profile'
        />
      </div>
      
      <h1 className="!text-[4rem] mt-2 max-sm:!text-[1.6rem] whitespace-nowrap font-bold tracking-tight text-center text-black dark:text-white transition-colors duration-300">
        {text}
      </h1>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300 font-medium transition-colors duration-300">I follow one concept only</p>
      <p className="text-zinc-700 dark:text-zinc-300 font-medium transition-colors duration-300">Learn Fast , Implement Fast , Fail Fast</p>
      <p className="text-zinc-700 dark:text-zinc-300 font-medium transition-colors duration-300">I love doing hard things first, so if you're looking or working on something great.</p>
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <a
          href="#contact"
          className="px-4 py-2 bg-lime-400 font-medium text-black rounded hover:brightness-110 cursor-pointer dark:bg-lime-500 dark:text-zinc-900 transition-colors duration-200"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
