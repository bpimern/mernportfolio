import React from "react";
import Container from "./Container";
import Title from "./Title";
import { experiences } from "@/constants/data";
import Image from "next/image";

const MyExperience = () => {
  return (
    <section id="myexperience">
      <Container className="border border-zinc-200 rounded-md mt-10">
        <Title title="My Experience" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {experiences.map((item) => (
            <div
              key={item?.title}
              className="border border-black p-5 rounded-md shadow-xl hover:shadow-none"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <p className="text-xl font-bold">{item?.title}</p>
                <Image
                  src={item.img}
                  alt="use image"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MyExperience;
