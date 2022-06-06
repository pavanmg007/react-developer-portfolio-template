import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-14 py-20 bg-white dark:bg-dark-mode">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {workDetails.map(({ Position, Company, Location, Type, Duration }, i) => (
          <Work
            position={Position}
            company={Company}
            location={Location}
            type={Type}
            duration={Duration}
            key={i}
          />
        ))}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {eduDetails.map(({ Position, Company, Location, Type, Duration }, i) => (
          <Work
            position={Position}
            company={Company}
            location={Location}
            type={Type}
            duration={Duration}
            key={i}
          />
        ))}
      </section>
    </main>
  );
}

export default About;
