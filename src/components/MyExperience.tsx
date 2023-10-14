import React from "react";
import Container from "./Container";
import Title from "./Title";
import { experiences } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const MyExperience = () => {
  return (
    <section id="myexperience">
      <Container className="border border-zinc-200 rounded-md mt-10 bg-zinc-900 text-zinc-200">
        <Title title="My Experience" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {experiences.map((item) => (
            <div
              key={item?.title}
              className="border border-zinc-200 p-5 rounded-md shadow-xl shadow-zinc-700 hover:shadow-none"
            >
              <div>
                <p className="text-xl font-bold">{item?.title}</p>
                <p>{item.position}</p>
                <div className="flex items-center justify-between">
                  <p>{item.company}</p>
                  <Link href={item.href} target="_blank">
                    <Image
                      src={item.logo}
                      alt="company logo"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </Link>
                </div>
                <p>Duration: {item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MyExperience;
