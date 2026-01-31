import {
  time_tracking_app,
  ricing,
  eduplore,
  mbn,
  fractals
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Distributed Systems Laboratory Assistant",
    company_name: "Laboratorium Sistem Terdistribusi STEI ITB",
    date: "Jul 2025 - Present",
    details: [
      "Managed and evaluated <span style='color: white;'>weekly laboratory practicums and large-scale projects</span> for <span style='color: white;'>100+ students</span> in operating systems, computer networking, low-level programming, and distributed systems.",
      "Performed <span style='color: white;'>solo and team-based grading</span>, reviewing system-level code and architectural decisions for correctness, performance, and concurrency issues.",
      "Assisted students in debugging <span style='color: white;'>race conditions, deadlocks, and networking failures</span>, translating theoretical concepts into practical system behavior.",
      "Acted as a technical mentor during lab sessions, helping students build <span style='color: white;'>reliable and scalable distributed solutions</span>.",
    ],
  },
    {
    title: "Member",
    company_name: "Himpunan Mahasiswa Informatika (HMIF) ITB",
    date: "2024 - Present",
    details: [
      "Active member of the Informatics student association at ITB, contributing to academic and community activities.",
      "Served as an <span style='color: white;'>emcee for a reunion event</span>, supporting event coordination and audience engagement.",
    ],
  },
  {
    title: "Informatics (Computer Science)",
    company_name: "Institut Teknologi Bandung (ITB)",
    date: "2023 - Present",
    details: [
      "Built a <span style='color: white;'>strong computer science foundation</span> through coursework in theory, computer architecture, software engineering, and systems programming.",
      "Developed practical understanding of <span style='color: white;'>operating systems, networking, and distributed computing</span> through hands-on projects and laboratory work.",
    ],
  },
];

const skills = [
  {
    title: "Systems & Networking",
    company_name: "Core Focus",
    date: "Skills",
    details: [
      "Distributed Systems",
      "Operating Systems",
      "Computer Networking",
      "DNS & DHCP",
      "Concurrency & Synchronization",
      "Election Algorithms",
      "32-bit System Architecture",
    ],
  },
  {
    title: "Programming & Technical",
    company_name: "Core Focus",
    date: "Skills",
    details: [
      "Low-Level Programming",
      "System-Level Debugging",
      "Algorithmic Problem Solving",
    ],
  },
  {
    title: "Teaching & Mentorship",
    company_name: "Core Focus",
    date: "Skills",
    details: [
      "Technical Tutoring",
      "Code Review & Grading",
      "Explaining Complex Systems Concepts",
    ],
  },
  {
    title: "Communication & Creative",
    company_name: "Core Focus",
    date: "Skills",
    details: [
      "Technical Communication",
      "Creative Writing",
      "Video Editing",
      "Social Media Communications",
      "3D Modeling",
      "Photoshop",
      "Clip Studio Paint",
    ],
  },
];

const skillIcons = [
  {
    href: "https://www.blender.org/",
    src: "https://download.blender.org/branding/community/blender_community_badge_white.svg",
    alt: "blender",
  },
  {
    href: "https://www.cprogramming.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    alt: "c",
  },
  {
    href: "https://www.cockroachlabs.com/product/cockroachdb/",
    src: "https://cdn.worldvectorlogo.com/logos/cockroachdb.svg",
    alt: "cockroachdb",
  },
  {
    href: "https://www.w3schools.com/cpp/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    alt: "cplusplus",
  },
  {
    href: "https://www.w3schools.com/css/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    alt: "css3",
  },
  {
    href: "https://www.docker.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    alt: "docker",
  },
  {
    href: "https://git-scm.com/",
    src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    alt: "git",
  },
  {
    href: "https://graphql.org",
    src: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    alt: "graphql",
  },
  {
    href: "https://www.w3.org/html/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    alt: "html5",
  },
  {
    href: "https://www.java.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    alt: "java",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "javascript",
  },
  {
    href: "https://kubernetes.io",
    src: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
    alt: "kubernetes",
  },
  {
    href: "https://www.linux.org/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    alt: "linux",
  },
  {
    href: "https://www.nginx.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
    alt: "nginx",
  },
  {
    href: "https://nodejs.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "nodejs",
  },
  {
    href: "https://www.php.net",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    alt: "php",
  },
  {
    href: "https://www.postgresql.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    alt: "postgresql",
  },
  {
    href: "https://www.python.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    alt: "python",
  },
  {
    href: "https://www.rabbitmq.com",
    src: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
    alt: "rabbitMQ",
  },
  {
    href: "https://reactjs.org/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    alt: "react",
  },
  {
    href: "https://reactnative.dev/",
    src: "https://reactnative.dev/img/header_logo.svg",
    alt: "reactnative",
  },
  {
    href: "https://redis.io",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
    alt: "redis",
  },
  {
    href: "https://svelte.dev",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
    alt: "svelte",
  },
  {
    href: "https://tailwindcss.com/",
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    alt: "tailwind",
  },
  {
    href: "https://www.typescriptlang.org/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    alt: "typescript",
  },
  {
    href: "https://kafka.apache.org/",
    src: "src/assets/apache-kafka.png",
    alt: "kafka",
  },
  {
    href: "https://laravel.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
    alt: "laravel",
  },
  {
    href: "https://www.adobe.com/products/photoshop.html",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-original.svg",
    alt: "photoshop",
  },
  {
    href: "https://www.gnu.org/software/bash/",
    src: "https://img.icons8.com/doodle/48/bash.png",
    alt: "bash",
  },
  {
    href: "https://unity.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg",
    alt: "unity",
  },
  {
    href: "https://www.clipstudio.net/",
    src: "https://upload.wikimedia.org/wikipedia/en/6/66/Clip_Studio_Paint_app_logo.png",
    alt: "clip studio paint",
  },
];

const portfolio = [
  {
    name: "Time Tracking App",
    description:
      "An offline Toggl-inspired time tracking app built with Svelte and Python FastAPI, designed to help users monitor and manage their productivity effectively.",
    image: time_tracking_app,
    href: "https://github.com/Cola1000/time_tracking_app",
  },
  {
    name: "Eduplore",
    description:
      "A platform to ease the transfer of informaion, mainly scholarship, among students ranging from Middle School all the way to Postgraduate in Indonesia.",
    image: eduplore,
    href: "https://github.com/L4mbads/8_Eduplore"
  },
    {
    name: "Mini Bitcoin Network Simulator",
    description:
      "A mini bitcoin network using Python. Implements basic bitcoin functionalities including transaction creation, block mining, proof-of-work with configurable difficulty, and peer-to-peer networking.",
    image: mbn
  },
  {
    name: "Mandelbrot and Julia Set maker",
    description:
      "A basic C++ program that uses SDL and parallelism to create Mandelbrot fractals and Julia sets.",
    image: fractals,
    href: "https://github.com/Cola1000/SeleksiSister23Cola/tree/main/Mandelbrotttt",
  },
  {
    name: "Arch Linux Ricing",
    description:
      "A showcase and download script of my custom Arch Linux desktop environment configuration.",
    image: ricing,
    href: "https://github.com/Cola1000/Ricing"
  },
  
];

export { experiences, portfolio, skills, skillIcons };

