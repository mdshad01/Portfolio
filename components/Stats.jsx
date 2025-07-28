"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    text: "Years of experience",
  },
  {
    num: 16,
    text: "Project Compleated",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 121,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto max-w-7xl my-2 px-5 pt-4 pb-12 lg:pb-0 lg:pt-0 ">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex gap-4 justify-center items-center">
                <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
