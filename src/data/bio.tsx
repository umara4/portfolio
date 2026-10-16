import {
  PiEnvelopeThin,
  PiLinkedinLogoThin,
  PiPhoneThin,
} from "react-icons/pi";

const mcmasterLogo = "/mcmaster.jpg";
const carnegieMellonLogo = "/cmu.png";
const spartanControlsLogo = "/spartans.jpg";

export const contacts = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/aliumar10/",
    text: "linkedin.com/in/aliumar10/",
    icon: PiLinkedinLogoThin,
  },
  {
    title: "Email",
    url: "mailto:aumar@andrew.cmu.edu",
    text: "aumar@andrew.cmu.edu",
    icon: PiEnvelopeThin,
  },
  {
    title: "Phone",
    url: "tel:+14036158780",
    text: "+403 615 8780",
    icon: PiPhoneThin,
  },
];

export type BioCategory = "experience" | "education" | "projects";

export type BioDataType = {
  id: string;
  category: BioCategory;
  img: string;
  imgDark?: string;
  title: string;
  specialty?: string;
  description: string;
  fullInfo: string;
  dates?: string;
  website?: string;
  github?: string;
  imgClass?: string;
  bgColor?: string;
};

export const experienceData: BioDataType[] = [
  {
    id: "mcmaster-research-assistant",
    category: "experience",
    img: mcmasterLogo,
    title: "McMaster University",
    specialty: "Research Assistant",
    description:
      "Undergraduate research focused on integrating biosensors with 3D bioprointed organ-on-a-chip platforms to enable real-time biological monitoering and data-driven analysis. ",
    fullInfo:
      "Developed biomedical sensing systems and analysis tooling.<ol><li>Integrated 16 PCB sensor chips with 64 electrodes and a Raspberry Pi through I2C, implementing signal amplification, filtering, and noise removal for real-time biomarker acquisition.</li><li>Developed a regression-based pipeline for 24-hour continuous aptamer sensing, standardizing feature extraction across partial and full scan intervals.</li><li>Overhauled legacy potentiostat code into a modular architecture, reducing setup time by 20% and supporting future project expansion.</li></ol>",
    dates: "September 2025 - May 2026",
    website: "https://www.mcmaster.ca/",
  },
  {
    id: "mcmaster-ecocar",
    category: "experience",
    img: mcmasterLogo,
    title: "McMaster EcoCAR",
    specialty: "Propulsion Controls and System Safety Team",
    description:
      "Contributed to the development of propulsion control systems and system safety analysis for a hybrid electric vehicle as part of a multidisplinary automotive engineering team.",
    fullInfo:
      "Developed biomedical sensing systems and analysis tooling.<ol><li>Integrated 16 PCB sensor chips with 64 electrodes and a Raspberry Pi through I2C, implementing signal amplification, filtering, and noise removal for real-time biomarker acquisition.</li><li>Developed a regression-based pipeline for 24-hour continuous aptamer sensing, standardizing feature extraction across partial and full scan intervals.</li><li>Overhauled legacy potentiostat code into a modular architecture, reducing setup time by 20% and supporting future project expansion.</li></ol>",
    dates: "October 2022 - May 2026",
    website: "https://www.macecocar.ca/",
  },

  {
    id: "spartan-controls",
    category: "experience",
    img: spartanControlsLogo,
    title: "Spartan Controls",
    specialty: "Automation Specialist Co-op",
    description:
      "Engineering co-op role focused on appluing autoamtion and control systems theory to real-world industrial processes, supporting desing, testing and troubleshooting activites in operational environments.",
    fullInfo:
      "Built and verified control systems for industrial process automation.<ol><li>Built and configured three DeltaV control panels with 12 CHARMs each, integrating 120 I/O points and 150 operator graphics.</li><li>Engineered control logic for a wastewater facility processing 100 million liters per day for 250,000 residents.</li><li>Commissioned a new waste-gas burner across four control loops.</li><li>Authored custom Python verification functions that reduced downstream validation errors and improved tool efficiency by 15%.</li></ol>",
    dates: "May 2024 - August 2025",
    website: "https://www.spartancontrols.com/",
  },
  {
    id: "mcmaster-software-research-assistant",
    category: "experience",
    img: mcmasterLogo,
    title: "McMaster University",
    specialty: "Software Research Assistant",
    description:
      "Benchmarked pattern-matching algorithms and built automated performance-testing tooling.",
    fullInfo:
      "Conducted algorithmic research and developed reproducible benchmarking workflows.<ol><li>Analyzed KMP and Boyer-Moore pattern-matching algorithms in C using power-of-two and prime encoding schemes.</li><li>Architected a Python benchmarking framework for eight custom scripts across 1,000 automated test runs.</li><li>Refactored code and documented the repository to improve readability, then synthesized experimental metrics into technical reports and presentations.</li></ol>",
    dates: "May 2023 - May 2024",
    website: "https://github.com/dehhganii/Practical_KMP_BM_Indet",
  },
];

export const educationData: BioDataType[] = [
  {
    id: "carnegie-mellon-university",
    category: "education",
    img: carnegieMellonLogo,
    title: "Carnegie Mellon University",
    specialty: "Master of Science in AI Engineering - Biomedical Engineering",
    description: " Graduate student focused on artificial intelligence and biomedical engineering.",
    fullInfo:
      "Master of Science in AI Engineering - Biomedical Engineering.<br />Expected December 2027.",
    dates: "Expected December 2027",
    website: "https://www.cmu.edu/",
  },
  {
    id: "mcmaster-university",
    category: "education",
    img: mcmasterLogo,
    title: "McMaster University",
    specialty: "Bachelor of Engineering in Mechatronics and Biomedical Engineering",
    description:
      "Interdisciplinary engineering program combining biomedical systems, robotics and software development with a strong emphasis on applied design, computation and research driven problem solving",
    fullInfo:
      "Bachelor of Engineering in Mechatronics and Biomedical Engineering.<br />Graduated May 2026.",
    dates: "May 2026",
    website: "https://www.mcmaster.ca/",
  },
];

export const projectsData: BioDataType[] = [
  {
    id: "3d-surgical-reconstruction",
    category: "projects",
    img: "/cuff.png",
    title: "3D Surgical Reconstruction from Endoscopic Video",
    specialty: "McMaster Capstone Project",
    description: "A computer-vision and neural-rendering pipeline for reconstructing surgical scenes from endoscopic video.",
    fullInfo:
      "A reconstruction pipeline for endoscopic video using COLMAP and Neural Radiance Fields.<ol><li>Improved surgical margin accuracy to 90% while minimizing resection risk.</li><li>Calibrated an IMU against checkerboard-based visual measurements for multisensory navigation within an 8 mm endoscope constraint.</li><li>Characterized accuracy with 3D-printed surgical cavity models, achieving less than 3 mm reconstruction error and within 1 mm reproducibility.</li></ol>",
    dates: "September 2025 - May 2026",
    github: "https://github.com/umara4/LeEndoscope",
  },
  {
    id: "nhl-stats",
    category: "projects",
    img: "/NHL-Logo.png",
    title: "NHL Player Stats and Projection App",
    specialty: "Personal Project",
    description:
      "A Python application that combines NHL data, interactive dashboards, and contextual performance projections.",
    fullInfo:
      "Built a Python data and analytics application for NHL player performance.<ol><li>Integrated the NHL API into a data pipeline that populates a structured SQL database with player and team metrics.</li><li>Developed an interactive GUI with real-time data visualizations and performance dashboards.</li><li>Implemented dynamic queries and a predictive model to analyze player interactions and project performance using contextual factors such as linemate quality, time on ice (TOI), and power-play time.</li></ol>",
    dates: "August 2025 - February 2026",
    github: "https://github.com/umara4/NHL-stats",
  },
  {
    id: "rotator-cuff-rehab-system",
    category: "projects",
    img: "/Endoscopy.png",
    title: "Rotator Cuff Rehab System",
    specialty: "McMaster Course Project",
    description: "A Bluetooth wearable and real-time 3D interface for objective shoulder rehabilitation tracking.",
    fullInfo:
      "A Bluetooth wearable and 3D visualization system for shoulder rehabilitation.<ol><li>Constructed an ESP32 and BNO055 wearable in a custom 3D-printed enclosure.</li><li>Filtered IMU noise to capture objective joint kinematics.</li><li>Built a real-time 3D interface comparing ideal and actual movement across joint angle, velocity, and acceleration, achieving 85% accuracy.</li><li>Stored session data for clinician review.</li></ol>",
    dates: "January 2024 - May 2024",
    github: "https://github.com/farita1699/CuffCare"
  },
  
  {
    id: "arduino-car",
    category: "projects",
    img: mcmasterLogo,
    title: "Autonomous Robotic Car",
    specialty: "Personal Project",
    description:
      "Designed and programmed an Arduino-powered robotic car to navigate autonomously using onboard sensors and embedded control logic.",
    fullInfo:
      "Designed and programmed an Arduino-powered robotic car for autonomous navigation.<ol><li>Integrated onboard sensors with embedded control logic to guide the car's movement.</li><li>Implemented basic autonomous behaviour, enabling the vehicle to respond to its surroundings without continuous manual control.</li></ol>",
    dates: "December 2023 - January 2024",
  },
];
