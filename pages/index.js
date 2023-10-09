import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/*Home*/}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 ">
        <div className="text-center flex flex-col xl:text-left  justify-center h-full container mx-auto ">
          <h1 className="h1">
            Transforming Ideas <br/> Into {' '}
            <span className="text-accent">Digital Reality</span>
          </h1>
          <p className="max-w-sm xl:max-w-xl xl:mx-0 mb-10 mx-auto">
            First of all thanks for the tutorial! Having some issues though in
            which I spent way too much time on lol, specifically, I've been
            facing one where my header 
          </p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn></ProjectsBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
