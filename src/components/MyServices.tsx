import { servicesDetails } from "@/constants/data";
import Container from "./Container";
import Title from "./Title";

const MyServices = () => {
  return (
    <Container className="border border-zinc-200 rounded-md mt-10">
      <Title title="My Services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {servicesDetails.map((item) => (
          <div
            key={item?.title}
            className="border border-black p-5 rounded-md shadow-xl hover:shadow-none"
          >
            <div className="flex items-center gap-2 mb-4">
              <p className="text-xl font-bold">{item?.title}</p>
              {
                <span className="text-designColor animate-bounce">
                  {<item.icon />}
                </span>
              }
            </div>
            <p>{item?.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MyServices;
