import { FiDownload } from "react-icons/fi";

// Components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        {/* Add max-width constraint */}
        <div className="md:max-w-5xl lg:max-w-6xl  mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-12 lg:pt-6 lg:pb-14">
            {/* text */}
            <div className="text-center lg:text-left order-2 lg:order-none flex-1">
              <span className="text-xl">Full Stack Developer</span>
              <h1 className="h1 ">
                Hello I'm <br />
                <span className="text-accent">MD Shad Alam</span>
              </h1>
              <p className="max-w-[500px] mb-9 mt-2 text-white/80">
                I excel at crafting elegant digital experiences and I am proficient in various programming language and
                technologies.
              </p>
              {/* Btn and Socials */}
              <div className="flex flex-col items-center lg:flex-row  gap-8">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 lg:mb-0">
                  <Social
                    containerStyles="flex gap-6 "
                    iconStyles="w-8 h-8 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Photo */}
            <div className="order-1 lg:order-none mb-8 lg:mb-0 flex-shrink-0">
              <Photo />
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
