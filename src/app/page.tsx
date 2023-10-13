import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import MyExperience from "@/components/MyExperience";
import MyServices from "@/components/MyServices";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/data");
  if (!res.ok) {
    throw new Error("Data fetched unsucessfull");
  }
  return res.json();
};
export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <main>
      <Banner />
      <AboutMe />
      <MyServices />
      <MyExperience />
    </main>
  );
}
