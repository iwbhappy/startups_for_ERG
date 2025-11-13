import techImage from "@/assets/startup-tech.jpg";
import greenImage from "@/assets/startup-green.jpg";
import healthImage from "@/assets/startup-health.jpg";

export interface Startup {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  category: string;
  fundingGoal: number;
  currentFunding: number;
  backers: number;
  image: string;
  founder: string;
  founderTitle: string;
  timeline: string;
  highlights: string[];
}

export const startups: Startup[] = [
  {
    id: "1",
    name: "NeuralSync AI",
    description: "Revolutionary AI platform that transforms data analysis for enterprises with real-time insights.",
    fullDescription: "NeuralSync AI is building the next generation of artificial intelligence tools that help enterprises make data-driven decisions in real-time. Our proprietary algorithms process massive datasets 10x faster than traditional solutions while maintaining 99.9% accuracy. We're already serving Fortune 500 companies and are scaling rapidly.",
    category: "Technology",
    fundingGoal: 500000,
    currentFunding: 387500,
    backers: 156,
    image: techImage,
    founder: "Sarah Chen",
    founderTitle: "CEO & Co-founder",
    timeline: "Launch in Q2 2024",
    highlights: [
      "10x faster data processing than competitors",
      "Already serving 15 Fortune 500 companies",
      "99.9% accuracy in predictive analytics",
      "Patents pending on core algorithms"
    ]
  },
  {
    id: "2",
    name: "EcoGrid Solutions",
    description: "Smart grid technology making renewable energy accessible and affordable for communities.",
    fullDescription: "EcoGrid Solutions is revolutionizing how communities access and distribute renewable energy. Our smart grid technology optimizes energy distribution, reduces waste, and makes clean energy affordable for everyone. With installations in 50+ communities, we're proving that sustainable energy can be both profitable and environmentally responsible.",
    category: "Green Energy",
    fundingGoal: 750000,
    currentFunding: 562500,
    backers: 203,
    image: greenImage,
    founder: "Marcus Rodriguez",
    founderTitle: "Founder & CTO",
    timeline: "Expansion in 12 months",
    highlights: [
      "50+ communities already installed",
      "40% reduction in energy costs",
      "Carbon-neutral operations",
      "Government grants secured"
    ]
  },
  {
    id: "3",
    name: "MediConnect",
    description: "Telemedicine platform connecting patients with specialists through AI-powered diagnostics.",
    fullDescription: "MediConnect is transforming healthcare accessibility by combining telemedicine with cutting-edge AI diagnostics. Our platform enables patients in underserved areas to connect with top specialists worldwide, while our AI assists in preliminary diagnosis and triage. We're making quality healthcare accessible to everyone, everywhere.",
    category: "Healthcare",
    fundingGoal: 600000,
    currentFunding: 420000,
    backers: 189,
    image: healthImage,
    founder: "Dr. Emily Watson",
    founderTitle: "Medical Director & Founder",
    timeline: "National rollout Q3 2024",
    highlights: [
      "50,000+ patients served",
      "Network of 500+ specialists",
      "FDA-approved diagnostic tools",
      "95% patient satisfaction rate"
    ]
  },
  {
    id: "4",
    name: "QuantumLedger",
    description: "Blockchain-based financial platform for secure, transparent international transactions.",
    fullDescription: "QuantumLedger leverages quantum-resistant blockchain technology to provide the most secure financial transaction platform for international business. Our technology reduces transaction costs by 70% while ensuring maximum security and compliance with global regulations.",
    category: "Finance",
    fundingGoal: 1000000,
    currentFunding: 650000,
    backers: 98,
    image: techImage,
    founder: "James Liu",
    founderTitle: "CEO & Blockchain Architect",
    timeline: "Beta launch Q1 2024",
    highlights: [
      "Quantum-resistant encryption",
      "70% lower transaction fees",
      "Compliant in 45+ countries",
      "Partnership with major banks"
    ]
  },
  {
    id: "5",
    name: "EduVerse",
    description: "Immersive VR learning platform making education engaging and accessible worldwide.",
    fullDescription: "EduVerse creates immersive virtual reality educational experiences that make learning engaging, memorable, and accessible to students worldwide. Our platform has been proven to increase retention rates by 400% compared to traditional learning methods.",
    category: "Education",
    fundingGoal: 400000,
    currentFunding: 280000,
    backers: 267,
    image: healthImage,
    founder: "Dr. Aisha Patel",
    founderTitle: "Founder & Education Innovator",
    timeline: "School partnerships starting 2024",
    highlights: [
      "400% better retention vs traditional",
      "Used in 100+ schools globally",
      "12 languages supported",
      "Award-winning curriculum"
    ]
  },
  {
    id: "6",
    name: "AgroTech Future",
    description: "Precision agriculture using IoT and AI to optimize crop yields and sustainability.",
    fullDescription: "AgroTech Future combines IoT sensors, satellite imagery, and AI to help farmers optimize crop yields while reducing water usage and environmental impact. Our technology is already helping farmers increase yields by 35% while using 50% less water.",
    category: "Green Energy",
    fundingGoal: 550000,
    currentFunding: 330000,
    backers: 142,
    image: greenImage,
    founder: "Roberto Silva",
    founderTitle: "Agricultural Engineer & CEO",
    timeline: "International expansion 2024",
    highlights: [
      "35% increase in crop yields",
      "50% reduction in water usage",
      "1000+ farms using our tech",
      "Climate-positive impact certified"
    ]
  }
];
