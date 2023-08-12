import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref,inView]=useInView({
    threshold:0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>
          <div className='flex-1'>
            <h2 className='h2 text-accent'>About Me</h2>
            <h3 className='h3 mb-4'>I am a college student</h3>
            <p className='mb-6'>I am a second year undergraduate student of the department of Civil Engineering at Indian Institute of Technology, Kharagpur. I am a Web Development Enthusiast. I am also very passionate about Video Editing. I always look for new opportunities to expand my knowledge base and skill-set.</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView?<CountUp start={0} end={19} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Age
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView?<CountUp start={0} end={2} duration={3} /> : null}
                  nd
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Year of <br/>
                  College
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView?<CountUp start={0} end={365} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Days of <br/>
                  Learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
