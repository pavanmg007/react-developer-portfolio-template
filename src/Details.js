// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png"; // Make sure to replace 'profile.jpg' with your photo
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import moveit from "./assets/techstack/moveit1.png";
import dagster from "./assets/techstack/dagster.svg";
// Porject Images
import projectImage1 from "./assets/projects/project1.png"; // Replace these images
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.png";
import dumeImage from "./assets/projects/dume.jpg";
import hoppyImage from "./assets/projects/hoppy.gif";
import telloImage from "./assets/projects/tello.png";
import puzzlebotImage from "./assets/projects/puzzlebot.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "José Domínguez",
  tagline: "Robotics Engineer, Motion Planning and Manipulation",
  img: profile,
  about: `I study Robotics and Digital Systems Engineering at Tecnológico de Monterrey and graduate in June 2027. My work is on motion planning and manipulation. In RoBorregos @Home, our RoboCup@Home team, I lead manipulation and co-manage the team, and I integrated the VAMP motion planner into our MoveIt stack. Since September 2026 I am also a research intern at the CNRS-AIST Joint Robotics Laboratory in Tsukuba, Japan, where I work on humanoid teleoperation.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://linkedin.com/in/jose-luis-dominguez-morales/",
  github: "https://github.com/JLDominguezM",
  twitter: "",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Research Intern, Humanoid Teleoperation",
    Company: `CNRS-AIST Joint Robotics Laboratory (JRL)`,
    Location: "Tsukuba, Japan",
    Type: "Research",
    Duration: "September 2026 - Present",
    Description: [
      "Porting the operator interface of the lab's avatar system, which lets a person teleoperate a humanoid robot, from Unity to Unreal Engine. The robot side runs on mc_rtc, a QP-based whole-body controller.",
      "Writing the layer that brings the robot model from mc_rtc into Unreal: kinematic tree, inertia and collision geometry, converted to the engine's coordinate frames.",
    ],
  },
  {
    Position: "Technology Developer, Robotics",
    Company: `Experiencias ZION`,
    Location: "Monterrey, NL, Mexico",
    Type: "Contract",
    Duration: "July 2026 - August 2026",
    Description: [
      "Found why the motion-capture imitation policies for the Unitree G1 EDU humanoid were not ready for the robot: they had never seen sensor delay. Retrained with delayed observations, and falls in simulation dropped from 92% to 2% on a walk with one step of delay.",
      "Trained a walking policy with reinforcement learning (mjlab, MuJoCo Warp), checked it in a second simulator, and ran the first walking tests on the real robot through low-level joint control.",
      "Built person following so the humanoid can walk with guests at client events: moving the detector to the GPU with TensorRT took it from 3.5 to 129 detections per second, and a separate LiDAR check stops it whenever someone is within 1 m. Also built the cloud voice assistant it uses to talk with them.",
    ],
  },
  {
    Position: "Software Engineering Intern, then Research Intern in computer vision",
    Company: `Tecnológico de Monterrey, Smart Cities R&D`,
    Location: "Monterrey, NL, Mexico",
    Type: "Internship",
    Duration: "August 2024 - July 2026",
    Description: [
      "Adapted CountGD, an open-set counting model built on Grounding DINO, to count trash in street camera images, both piled-up and single items, for a waste collection system.",
      "Built camera and sensor systems for the group's smart-city projects: YOLOv8 person tracking with dwell-time analytics on Azure, and a LoRaWAN sensor network at a partner school with STM32 nodes and a Jetson gateway.",
    ],
  },
  {
    Position: "Full-Stack Developer (Social Service)",
    Company: `The Gate Education`,
    Location: "Monterrey, NL, Mexico",
    Type: "Social service",
    Duration: "November 2025 - April 2026",
    Description: [
      "Built the company's production website with one other engineer (Next.js, React, TypeScript, AWS Lambda).",
    ],
  },
  {
    Position: "Software Engineering Intern",
    Company: `Oneila`,
    Location: "Monterrey, NL, Mexico",
    Type: "Internship",
    Duration: "October 2024 - March 2025",
    Description: [
      "Built Dagster pipelines that processed over 1 TB of Mexican government fiscal data, and an internal npm package the team used for its web scrapers.",
    ],
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "B.S. in Robotics and Digital Systems",
    Company: `Tecnológico de Monterrey`,
    Location: "Monterrey, NL, Mexico",
    Type: "Undergraduate",
    Duration: "Expected Graduation: June 2027",
    
  },
  {
    Position: "Software Developer Technician Certificate",
    Company: `School of Mechanical and Electrical Engineering (FIME)`,
    Location: "Monterrey, NL, Mexico",
    Type: "Certificate",
    Duration: "Certified: July 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  cpp: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  ros: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original-wordmark.svg',
  redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
  pytorch: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-plain-wordmark.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
  sql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
  bash: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg',
  csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  matlab: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg',
  r: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg',
  php : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  c : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  node : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
  opencv : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
  azure : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  ubuntu : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original-wordmark.svg',
  // windows : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg',
  streamlit : 'https://streamlit.io/images/brand/streamlit-mark-color.png',
  angular : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
  flutter : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
  unity : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
  postgresql : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
  arduino : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg',
  pupeteer : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/puppeteer/puppeteer-original.svg',
  playwright : 'https://playwright.dev/img/playwright-logo.svg',
  dagster : dagster,
  moveit : moveit,
  vite : 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',

};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "RoBorregos @Home: VAMP planner and Pick and Place (RoboCup@Home)",
    image: projectImage3,
    description: `Integrated VAMP, a motion planner that runs RRT-Connect with vectorized collision checking, into MoveIt for FRIDA, the team's home service robot with an xArm 6. It works as a C++ planner plugin backed by a Python planning server, and every plan is re-checked against the real meshes with FCL, falling back to OMPL when the sphere model misses a collision. I also built the Pick and Place task for RoboCup@Home 2026: a grasp pipeline built on GPD (Grasp Pose Detection) with multi-threaded point-cloud filtering on the robot's Jetson Orin, which completed 16 of 20 end-to-end picks in cluttered scenes. As manipulation leader and co-project manager of a 20+ member team, I helped win 1st place at TMR 2026 and 9th at RoboCup 2026.`,
    techstack: "ROS 2, C++, Python, MoveIt, VAMP, OMPL, GPD",
    previewLink: "https://athome.roborregos.com/Overview/Media/",
    githubLink: "https://github.com/RoBorregos/home2",
  },
  {
    image: dumeImage,
    title: "Dum-E: Vision-Language-Action Manipulation",
    description: `Compared SmolVLA with an ACT baseline on two SO-101 arms that learned to sort objects by color from teleoperated demonstrations. Recorded and published a 232-episode dataset (LeRobot v3, Hugging Face) with two cameras at 30 fps, then redesigned and 3D-printed longer gripper tips and fine-tuned the policy for them.`,
    techstack: "LeRobot, SmolVLA, ACT, Python",
    githubLink: "https://github.com/armandomm09/dume",
  },
  {
    image: hoppyImage,
    title: "HOPPY: One-Legged Hopping Robot, Sim-to-Real",
    description: `Redesigned the leg of the open-source HOPPY kit (UIUC) and modeled it in MuJoCo three times, each closer to the real hardware, with the same 1 kHz flight/stance controller and the motor electromechanics. The model matched the original paper's simulator on 12 of 12 checks. On the real robot: 64 jumps in a row without help, with 0.27 s of flight time against 0.25 s in simulation.`,
    techstack: "MuJoCo, C2000, SolidWorks",
    githubLink: "https://github.com/JLDominguezM/HOPPY-Project",
  },
  {
    image: telloImage,
    title: "Tello Visual Servoing: Drone Control from Camera Images",
    description: `Controlled a DJI Tello over raw UDP, without the SDK, and built an image-based visual servoing mission: HSV detection feeds a PD controller on yaw and throttle, and a state machine runs the phases of the inspection.`,
    techstack: "Python, OpenCV, UDP",
    previewLink: "https://youtu.be/uXXDjiPWrlk",
    githubLink: "https://github.com/JLDominguezM/tello-drone-labs",
  },
  {
    image: puzzlebotImage,
    title: "Puzzlebot: Autonomous Navigation with Traffic Signs",
    description: `A small robot that follows a line and obeys traffic lights. I restructured the code as a ROS 2 workspace, wrote the closed-loop PID waypoint controller and its tuner, calibrated the wheel radius, and made the speed follow the traffic light (stop, slow, go).`,
    techstack: "ROS 2, Python, PID control",
    githubLink: "https://github.com/htovarm7/Puzzlebot-Challenge",
  },
  {
    title: "Emergency Act (1st Place Waymo Challenge)",
    image: projectImage2,
    description: `Developed a real-time fall detection system for public transport with 97% accuracy using YOLOv8 and OpenCV, integrating GPT for emergency response automation.`,
    techstack: "Python, YOLOv8, OpenCV, Streamlit, MongoDB",
    previewLink: "https://devpost.com/software/emergencyact",
    githubLink: "https://github.com/JocelynVelarde/Shell-Hacks-2024",
  },
  {
    title: "RoboCup Rescue Maze Challenge",
    image: projectImage4,
    description: `Developed an autonomous robot to navigate hazardous mazes and identify victims using visual markers. Implemented PID controllers and sensor data filters for precise motion control.`,
    techstack: "C++, PID Control, Sensor Fusion",
    previewLink: "https://docs.rbrgs.com/RescueMaze/2024/Control/",
    githubLink: "https://github.com/RoBorregos/RescueMaze2024",
  },
  {
    title: "BonTable (SaaS Restaurant Platform)",
    image: projectImage1,
    description: `Architected a full-stack SaaS web app to modernize the dining experience, featuring an admin dashboard for CRUD menu management and a public interface for reservations.`,
    techstack: "React, Vite, Tailwind CSS, Firebase",
    githubLink: "https://github.com/JLDominguezM/BonTable",
  },
  {
    title: "Habits365 (Oracle Challenge at HackMty)",
    image: projectImage5,
    description: `Developed a Progressive Web App (PWA) for habit tracking, using Python scripts for personalized location-based reminders and a custom user authentication system.`,
    techstack: "Oracle APEX, SQL, Python, HTML/CSS",
    previewLink: "https://oracleapex.com/ords/r/chartank2_0/habits365/login?session=5967221203109",
    githubLink: "https://github.com/JLDominguezM/Habits365",
  },
];

export const communityDetails = [
  {
    role: "Game Developer",
    organization: "Gametime CVA",
    duration: "January - June 2025",
    description: "Developed a game to teach programming logic and problem-solving skills.",
  },
  {
    role: "Student Mentor",
    organization: "Tecnológico de Monterrey",
    duration: "2024 – 2025",
    description: "Supporting first-year college students to adapt to their new life as college students.",
  },
  {
    role: "Instructor",
    organization: "RoboCamp",
    duration: "Summer 2024",
    description: "Taught middle and primary school children about electronics, mechanics, and programming.",
  },
  {
    role: "Web Developer",
    organization: "Proyecto 99",
    duration: "Summer 2024",
    description: "Developed the organization's website using Node.js, React, and MongoDB.",
  },
];

export const awardDetails = [
  { place: "1st Place", event: "National @Home, Mexican Robotics Tournament (TMR) 2026" },
  { place: "9th Place", event: "International @Home, RoboCup (South Korea) 2026" },
  { place: "2nd Place", event: "National @Home, Mexican Robotics Tournament (TMR) 2025" },
  { place: "6th Place", event: "International @Home, RoboCup (Brazil) 2025" },
  { place: "2nd Place", event: "Banorte Challenge, HackMTY (1000+ participants) 2025" },
  { place: "1st Place", event: "Waymo Challenge, ShellHacks (Florida, USA) 2024" },
  { place: "2nd Place", event: "National Rescue Maze Jr, Mexican Robotics Tournament (TMR) 2024" },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "joseldominguezmorales@gmail.com",
  phone: "+528128620427",
};