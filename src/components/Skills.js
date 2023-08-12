import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import WebDev1 from '../assets/ferenc-almasi-eYpcLDXHVb0-unsplash.jpg';
import VidEdit1 from '../assets/sanjeev-nagaraj-u4bvBOOpZB4-unsplash.jpg';
import Prog2 from '../assets/carlos-gonzalez-MmYtZoZ8ET4-unsplash.jpg';

const Skills = () => {
  return (
    <section className='section' id='skills'>
      <div className='container mx-auto mt-5'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='flex-1 flex flex-col gap-y-32 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight'>My Skills</h2>
              <p className="max-w-sm mb-16">These are some of the skill-sets which I am trying to explore and learn.</p>
              <button className='btn btn-sm'>View All Projects</button>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-lg'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={WebDev1} alt=''/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 trasition-all duration-500 z-50'>
                <span className='text-gradient'>Web Development</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 trasition-all duration-700 z-50'>
                <span className='text-3x1 text-white' >HTML, CSS, JavaScript, ReactJS</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left',0.3)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-lg'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Prog2} alt=''/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 trasition-all duration-500 z-50'>
                <span className='text-gradient'>Programming</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 trasition-all duration-700 z-50'>
                <span className='text-3x1 text-white' >C, C++, Python</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-lg'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={VidEdit1} alt=''/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 trasition-all duration-500 z-50'>
                <span className='text-gradient'>Video Editing</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 trasition-all duration-700 z-50'>
                <span className='text-3x1 text-white' >Adobe Premiere Pro, Adobe After Effects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
