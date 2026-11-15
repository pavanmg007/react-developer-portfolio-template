import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html, css, js, react, tailwind, bootstrap, sass,
    vscode, git, github, npm, postman, figma, python,
    cpp, docker, mongodb, ros, pytorch, java, sql, bash, csharp, matlab, r, php, c,
    node, opencv, azure, ubuntu, streamlit, angular, vite, flutter,
    unity, dagster, postgresql, arduino, pupeteer, playwright, moveit
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      
      {/* 1. SECCIÓN DE LENGUAJES DE PROGRAMACIÓN */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Programming Languages
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          My core programming skills.
        </p>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img src={python} title="Python" alt="Python" />
          <img src={cpp} title="C++" alt="C++" />
          <img src={js} title="JavaScript" alt="JavaScript" />
          <img src={java} title="Java" alt="Java" />
          <img src={bash} title="Shell" alt="bash" />
          <img src={csharp} title="C#" alt="C#" />
          <img src={matlab} title="MATLAB" alt="MATLAB" />
          <img src={r} title="R" alt="R" />
          <img src={php} title="PHP" alt="PHP" />
          <img src={c} title="C" alt="C" />
        </div>
      </section>

      {/* ROBOTICS */}
      <section className="pt-10">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Robotics
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Planning, control, learning and the hardware I have used them on.
        </p>
        <div className="flex flex-wrap gap-3 pt-6">
          {[
            "ROS 2", "MoveIt", "VAMP", "OMPL", "GPD", "mc_rtc", "MuJoCo", "MuJoCo Warp", "mjlab",
            "Unreal Engine", "LeRobot", "SmolVLA", "TensorRT", "Isaac Sim", "Gazebo",
            "Unitree G1", "Unitree Go2", "xArm 6", "SO-101", "Jetson", "STM32", "C2000", "Raspberry Pi",
          ].map((name) => (
            <span
              key={name}
              className="text-content font-light border border-slate-300 dark:border-slate-600 rounded-full px-4 py-1"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* 2. SECCIÓN DE TECNOLOGÍAS */}
      <section className="pt-10">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Technologies
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Frameworks, libraries, and platforms I work with.
        </p>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img src={react} title="React" alt="React" />
          <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
          <img src={ros} title="ROS" alt="ROS" />
          <img src={pytorch} title="PyTorch" alt="PyTorch" />
          <img src={docker} title="Docker" alt="Docker" />
          <img src={sql} title="SQL" alt="SQL" />
          <img src={mongodb} title="MongoDB" alt="MongoDB" />
          <img src={html} title="HTML" alt="HTML" />
          <img src={css} title="CSS" alt="CSS" />
          <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
          <img src={sass} title="Sass" alt="Sass" />
          <img src={node} title="Node.js" alt="Node.js" />
          <img src={opencv} title="OpenCV" alt="OpenCV" />
          <img src={azure} title="Azure" alt="Azure" />
          <img src={angular} title="Angular" alt="Angular" />
          <img src={streamlit} title="Streamlit" alt="Streamlit" />
          <img src={postgresql} title="PostgreSQL" alt="PostgreSQL" />
          <img src={arduino} title="Arduino" alt="Arduino" />
          <img src={pupeteer} title="Pupeteer" alt="Pupeteer" />
          <img src={playwright} title="Playwright" alt="Playwright" />
          <img src={unity} title="Unity" alt="Unity" />
          <img src={dagster} title="Dagster" alt="Dagster" />
          <img src={moveit} title="MoveIt" alt="MoveIt" />
          <img src={flutter} title="Flutter" alt="Flutter" />
        </div>
      </section>

      {/* 3. SECCIÓN DE HERRAMIENTAS */}
      <section className="pt-10">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          My day-to-day development toolkit.
        </p>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" />
          <img src={git} title="Git" alt="Git" />
          <img src={github} title="Github" alt="Github" />
          <img src={postman} title="Postman" alt="Postman" />
          <img src={npm} title="NPM" alt="NPM" />
          <img src={figma} title="Figma" alt="Figma" />
          <img src={ubuntu} title="Ubuntu" alt="Ubuntu" />
          {/* <img src={windows} title="Windows" alt="Windows" /> */}
          <img src={vite} title="Vite" alt="Vite" />

        </div>
      </section>

    </main>
  );
}

export default Technologies;