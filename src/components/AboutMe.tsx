import Container from "./Container";
import Title from "./Title";

const AboutMe = () => {
  return (
    <section id="#aboutme">
      <Container className="bg-zinc-700 text-zinc-200">
        <Title title="About Me" />
        <p className="text-base tracking-wide mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          aliquid odio sequi soluta? Laboriosam ducimus quidem aut eius saepe.
          Eaque earum impedit ullam quibusdam reiciendis itaque minima ipsum.
          Animi vitae quae.
        </p>
        <p className="mt-2">
          minima odit aperiam ratione magni dicta praesentium accusantium
          sapiente ipsam dolorum vel deleniti corporis voluptate quidem eum, sed
          consequuntur expedita, beatae reprehenderit, dolorem molestiae sint!
          Aliquam ipsam maxime inventore nostrum numquam natus non distinctio ut
          minus in illo, autem accusantium, quae facilis hic odit minima
          exercitationem placeat recusandae omnis.
        </p>
      </Container>
    </section>
  );
};

export default AboutMe;
