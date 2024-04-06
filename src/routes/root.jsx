import { motion } from "framer-motion";
import About from "../components/about";
import Image from "../components/image";
import Service from "../components/service";
import Store from "../components/store";
import Team from "../components/team";

export default function Root() {

  const imageLinks = ["./assets/Hero_1-1.jpg", "./assets/Hero_2.jpg"];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      {/* Main Image Slider Section */}
      {/* <MainImageSlider imageLinks={imageLinks} /> */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="./assets/Hero_1-1.jpg"
          alt="placeholder"
          customClass="w-full lg:max-h-[calc(100vh-20vh)] object-cover h-[70vh] sm:h-auto"
          loading="eager"
        ></Image>
      </motion.div>

      {/* Service Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Service />
      </motion.div>

      {/* Second Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Image
          src="./assets/Hero_2.jpg"
          alt="placeholder"
          customClass="w-full max-h-96 object-cover"
          loading="lazy"
        ></Image>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <About />
      </motion.div>

      {/* Store Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <Store />
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Team />
      </motion.div>
    </motion.div>
  );
}
