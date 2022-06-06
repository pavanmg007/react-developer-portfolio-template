import React from "react";
import Work from "../Components/Work";
import { workDetails, eduDetails } from "../Experince";

function About() {
  return (
    <main className="container mx-auto max-width pt-14 py-20 bg-white dark:bg-dark-mode">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">
          The Generator App is an online tool that helps you to export ready-made templates ready to
          work as your future website. It helps you to combine slides, panels and other components
          and export it as a set of static files: HTML/CSS/JS.
        </p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {workDetails.map((work, i) => (
          <Work
            position={work.Position}
            company={work.Company}
            location={work.Location}
            type={work.Type}
            duration={work.Duration}
            key={i}
          />
        ))}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {eduDetails.map((work, i) => (
          <Work
            position={work.Position}
            company={work.Company}
            location={work.Location}
            type={work.Type}
            duration={work.Duration}
            key={i}
          />
        ))}
      </section>
    </main>
  );
}

export default About;
