"use client";

import CountUp from "react-countup";

const stats = [
  { number: 2, text: "Years of Experience" },
  { number: 20, text: "Projects Completed" },
  { number: 10, text: "Happy Clients" },
  { number: 10, text: "Happy Clients" },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[88vw] mx-auto xl:max-w-none">
          {stats?.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={stat.number}
                  duration={5}
                  delay={1}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
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
