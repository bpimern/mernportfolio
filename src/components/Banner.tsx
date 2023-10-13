import Image from "next/image";
import BannerImg from "../assets/banner.png";
import Container from "./Container";

const Banner = () => {
  return (
    <section id="#banner">
      <Container>
        <div className="flex items-center flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">BPI Mern</h2>
            <p className="text-lg font-medium">MERN Stack Developer</p>
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
