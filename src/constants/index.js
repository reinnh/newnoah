import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";
import image from '../assets/projects/image.png'
import reinhard from '../assets/projects/reinlaptop.png'
import photo from '../assets/projects/photography.jpg'
import watch from '../assets/pics/watch.jpg'
import watch2 from '../assets/pics/watch1.jpg'
import hackerr from '../assets/pics/hacker.jpg'
import cyberassist from '../assets/pics/cyberassist.jpg'
import blochain from '../assets/pics/blocksafe.jpg'
import blocksafe from '../assets/pics/blocksafe2.jpg'
import btc from '../assets/logos/image.png'
import etc from '../assets/logos/etherium.png'
import binance from '../assets/logos/binance.png'
import dollar from '../assets/logos/dolla.jpeg'
import thompson from '../assets/profiles/IMG-20250324-WA0005.jpg'
import michael from '../assets/profiles/IMG-20250324-WA0003.jpg'
import sarah from '../assets/profiles/IMG-20250324-WA0004.jpg'



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: " Expertise in Blockchain Asset Recovery",
    company_name: "",
    icon: btc,
    iconBg: "#161329",
    date: "",
    points: [
      "Successfully navigated complex blochain tranactions to trace and recover lost digital assets. Through meticulus forensic analysis and strategic recovery techniques ",
      "Ensured that affected user had a clear understanding of the process.",
      "provided continuous updates ensuring trasparency and eliminating uncertainity, even in high stake scenarios"
    ],
  },
  {
    title: " Implementation fo Secure Watch-Only Asset Monitoring",
    company_name: "",
    icon: etc,
    iconBg: "#161329",
    date: "",
    points: [
      "Introduced a watch only wallet solutions, enabling users to monitor their assets in real time without exposing private keys This innovative approach provides peace of mind, allowing users to track tranactions with confidance while maintaining the highest levels of secucrity.",
      "Effectively acted as a digital safeguard in the volatile world of cryptocurrency.",
    ],
  },
  {
    title: "Empowering Users Through Knowledge and Security Awareness",
    company_name: "",
    icon: binance,
    iconBg: "#161329",
    date: "",
    points: [
      "Played pivotal  role in educating users on intricacies of blockchain security ",
      "\Developed and provided  accesssible educational resources, equiping individuals with the tools to safeguard their digital assets  this approach transform victims of financial fraud into proactive and security-conscoius participants iin the digital economy.",
    ],
  },
  {
    title: "Building  Trust Through Personalize Support and Integrity",
    company_name: "",
    icon: dollar,
    iconBg: "#161329",
    date: "",
    points: [
      "Restore trust in digital finance by prioritizing not just techical expertise but also genus empathy .",
      "Understood the emotional and financial toll of digital asset loss and provided individualized support tailored to each users situation",
      "Foster a sense of community, ensuring that clients felt heard , supported and empowered throughou their recovery journey"
    ],
  },
];

export const projects = [
  {
    name: "Secure Watch-Only Wallet  Solutions",
    description:
      "Our platform provides watch-only wallet solutions allowing users to monitor their cryptocurrency assets without exposing their private keys ensuring enhanced security",
    tags: [
      { name: "need a whatch-wallet ?", color: "blue-text-gradient" },
  
    ],
    image: watch,
    source_code_link: "",
  },
  {
    name: "Digital Asset Recovery Support",
    description:
      "We offer tailored recovery solutions, combining investigative techniques and blockchain expertise to help individuals reclaim lost or stolen digital assets",
    tags: [
      { name: "lost your digital assets?", color: "blue-text-gradient" }
    ],
    image: blochain,
    source_code_link: "",
  },
  {
    name: "Investment Scam Recovery Assistance",
    description:
      "We help clients who have been victims of investment scams by leaveraging blockchain expertisse to trace and recover missappropriate funds.",
    tags: [
      { name: "a victim of scam investment?", color: "blue-text-gradient" }
    ],
    image:hackerr,
    source_code_link:
      "",
  },
  {
    name: "Tailored  Funds Recovery",
    description:
      "Our team traces and, when possible recovers missappropriated funds using advanced technical tools and investigative methodes",
    tags: [
      { name: "lost funds?", color: "blue-text-gradient" }
    ],
    image: blocksafe,
    source_code_link:
      "",
  },
]
export const testimonials = [
  {
    name: "Michael Chen",
    title: "Tech Entrepreneur",
    image: michael, // Replace with actual image URL
    review:
      "Lost access to my hardware wallet containing significant crypto assets. Noah Recovery's blockchain analysis helped recover everything within 48 hours. Their professionalism and security measures are outstanding.",
    recovered: "$175,000",
  },
  {
    name: "Sarah Martinez",
    title: "Investment Advisor",
    image: sarah, // Replace with actual image URL
    review:
      "After a system crash, I thought I'd lost my entire portfolio. Their device storage scan found my wallet files and their team guided me through the entire recovery process. Couldn't be more grateful!",
    recovered: "$92,000",
  },
  {
    name: "David Thompson",
    title: "DeFi Developer",
    image: thompson, // Replace with actual image URL
    review:
      "As someone in the crypto space, I was skeptical of recovery services.Noah recovery changed my mind with their transparent process and technical expertise. They recovered my locked  ETH without compromising security",
    recovered: "$283,000",
  },
];