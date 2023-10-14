"use client";
import Image from "next/image";
import BannerImg from "../assets/banner.png";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const typing = [
    "Mern Stack Developer",
    "Web Developer",
    "Web Designer",
    "Content Writer",
  ];
  return (
    <section id="#banner">
      <Container className="min-h-screen">
        <div className="flex items-center flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Your name</h2>
            {/* Typewriter start here */}

            <div className="flex items-center gap-1 text-lg font-semibold">
              <p>I am a</p>
              <p className="text-blue-600">
                <Typewriter
                  words={typing}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  cursorColor="red"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={2000}
                  cursorBlinking
                />
              </p>
            </div>
            {/* Typewriter end here */}
            <p className="text-base tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, ex nobis impedit quibusdam similique est beatae
              nostrum, totam esse libero ea, obcaecati inventore molestias
              repellat reiciendis tempora facilis unde veniam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, hic
              tempora deserunt neque eveniet aperiam eos omnis nulla, nihil sint
              quod earum, facere cumque veritatis voluptatibus quasi
              consectetur! Repellat, esse!
            </p>
            <a href="/resume.pdf" target="_blank">
              <button className="w-32 h-10 bg-zinc-800 text-zinc-200 hover:bg-black rounded-md hover:text-white cursor-pointer duration-200">
                Hire Me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <Image
              src={BannerImg}
              alt="Banner image"
              className="h-[450px] w-[450px] object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Banner;
