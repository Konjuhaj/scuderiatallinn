import About from "../components/about";
import Events from "../components/events";
import Image from "../components/image";
import Service from "../components/service";
import Store from "../components/store";
import Team from "../components/team";
export default function Root() {
  return (
    <>
      <Image
        src="./assets/Hero_1-1.jpg"
        alt="placeholder"
        customClass=" w-full lg:max-h-[calc(100vh-20vh)] object-cover  h-[70vh] sm:h-auto"
        loading="eager"
      ></Image>
      <Service></Service>
      <Image
        src="./assets/Hero_2.jpg"
        alt="placeholder"
        customClass="w-full max-h-96 object-cover"
        loading="lazy"
      ></Image>
      <Events></Events>
      <About></About>
      <Store></Store>
      <Team></Team>
    </>
  );
}
