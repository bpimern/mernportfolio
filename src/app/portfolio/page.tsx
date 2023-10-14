import Container from "@/components/Container";
import Title from "@/components/Title";
import { todoApp } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <Container>
      <Title title="My Portfolio" />
      <p>Here some of my recent project</p>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Link
          href={"https://amiprinatodo.vercel.app/"}
          target="_blank"
          className="border border-zinc-500"
        >
          <Image src={todoApp} alt="todoapp" className="" />
          <p className="bg-zinc-900 text-zinc-200 py-1 text-center">
            Todo Appication
          </p>
        </Link>
        <Link
          href={"https://amiprinatodo.vercel.app/"}
          target="_blank"
          className="border border-zinc-500"
        >
          <Image src={todoApp} alt="todoapp" className="" />
          <p className="bg-zinc-900 text-zinc-200 py-1 text-center">
            Todo Appication
          </p>
        </Link>
        <Link
          href={"https://amiprinatodo.vercel.app/"}
          target="_blank"
          className="border border-zinc-500"
        >
          <Image src={todoApp} alt="todoapp" className="" />
          <p className="bg-zinc-900 text-zinc-200 py-1 text-center">
            Todo Appication
          </p>
        </Link>
      </div>
    </Container>
  );
};

export default PortfolioPage;
