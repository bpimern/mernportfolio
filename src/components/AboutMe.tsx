"use client";
import Container from "./Container";
import Title from "./Title";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      id="#aboutme"
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Container className="min-h-screen bg-zinc-900 text-zinc-200 flex flex-col justify-evenly">
        <Title title="About Me" className="px-10" />
        <p className="textStyle">
          I am a web developer with 7+ years of experience in React. I have a
          strong foundation in front-end & back-end development and am skilled
          in creating user-friendly and responsive web applications using React
          and its ecosystem. I have experience working on a variety of projects,
          including building and maintaining single page applications,
          integrating with REST APIs, and implementing responsive design
          principles. I am also proficient in using tools such as Webpack, npm,
          and Git for development and deployment. In addition to my technical
          skills, I am a strong communicator and team player. I am able to work
          effectively with cross-functional teams and am comfortable taking on
          new challenges and learning new technologies as needed.
        </p>
        <p className="textStyle">
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
        <p className="textStyle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ex!
        </p>
      </Container>
    </motion.section>
  );
};

export default AboutMe;
