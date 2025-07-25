import { FiDownload } from "react-icons/fi";

// Components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* text */}
          <div className="text-center lg:text-left">
            <span>Full Stack Developer</span>
            <h1 className="h1 mt-6">
              Hello I'm <br /> <span className="text-accent">MD Shad Alam</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/90">
              I excel at crafting elegant digital experiences and I am proficient in various programming language and
              technologies.
            </p>
            {/* Btn and Socials */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
