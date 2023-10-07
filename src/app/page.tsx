import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Container from "@/components/Container";
import MyServices from "@/components/MyServices";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutMe />
      <MyServices />
    </main>
  );
}
