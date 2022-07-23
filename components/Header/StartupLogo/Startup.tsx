import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
const Startup = () => {
  let WidthBy2=0;
  let HeightBy2=0;
    if(typeof window !== 'undefined') {
      if(window.innerWidth>768){
        WidthBy2=window.innerWidth/2-48-20;
      HeightBy2=window.innerHeight/2;
      }
      
      console.log("width by 2: ", WidthBy2);
    }
  
  return (
    <div className="absolute h-full w-full flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0 ,x:0,y:0,scale:"100%"}}
        animate={{ opacity: [1,0,1],x:-WidthBy2,scale:"60%"}}
        transition={{ opacity: { delay:3,duration: 1.5 },x: { duration: 0.5 ,delay:4.5},
        scale: { duration: 0.5 ,delay:4.5} }}
        className="relative  h-24 w-24 flex justify-center items-center">
        <motion.div 
        initial={{scale:0,x:0}}
        animate={{scale:1,rotate:90,x:34}}
        transition={{scale:{duration:1.5},rotate:{delay:0.5,duration:0.5},x:{delay:0.8,duration:1}}}
        className="absolute h-2 w-12 bg-AAsecondary rounded "></motion.div>
        <motion.div 
        initial={{scale:0,x:0}}
        animate={{scale:1,rotate:90,x:-34}}
        transition={{scale:{duration:1.5},rotate:{delay:0.5,duration:0.5},x:{delay:0.8,duration:1}}}
        className="absolute h-2 w-12 bg-AAsecondary rounded "></motion.div>
        <motion.div 
        initial={{opacity:0,scale:0,x:0,y:0}}
        animate={{opacity:1,scale:1,rotate:35,x:16,y:-34}}
        transition={{opacity:{delay:2,duration:0},scale:{duration:2.5},rotate:{delay:0.5,duration:0.5},y:{delay:1.2,duration:2},
        x:{delay:1.5,duration:0.5}}}
        className="absolute h-2 w-12 bg-AAsecondary rounded "></motion.div>
        <motion.div 
        initial={{opacity:0,scale:0,x:0,y:0}}
        animate={{opacity:1,scale:1,rotate:-35,x:-16,y:-34}}
        transition={{opacity:{delay:2,duration:0},scale:{duration:2.5},rotate:{delay:0.5,duration:0.5},y:{delay:1.2,duration:2},
        x:{delay:1.5,duration:0.5}}}
        className="absolute h-2 w-12 bg-AAsecondary rounded "></motion.div>
        <motion.div 
        initial={{opacity:0,scale:0,x:0,y:0}}
        animate={{opacity:1,scale:1,rotate:-35,x:16,y:34}}
        transition={{opacity:{delay:2,duration:0},scale:{duration:2.5},rotate:{delay:0.5,duration:0.5},y:{delay:1.2,duration:2},
        x:{delay:1.5,duration:0.5}}}
        className="absolute h-2 w-12 bg-AAsecondary rounded "></motion.div>
        <motion.div 
        initial={{opacity:0,scale:0,x:0,y:0}}
        animate={{opacity:1,scale:1,rotate:35,x:-16,y:34}}
        transition={{opacity:{delay:2,duration:0},scale:{duration:2.5},rotate:{delay:0.5,duration:0.5},y:{delay:1.2,duration:2},
        x:{delay:1.5,duration:0.5}}}
        className="absolute h-2 w-12 bg-AAsecondary rounded "></motion.div>
        <motion.span 
        initial={{scale:0,y:-4}}
        animate={{scale:1}}
        transition={{scale:{delay:1.5,duration:1.5}}}
        className="text-AAsecondary font-Text2 text-4xl">A</motion.span>
      </motion.div>
    </div>
  );
};
export default Startup;
