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

const defaultStartups: Startup[] = [
  {
    id: "1",
    name: "NeuralSync AI",
  description: "Революционная AI-платформа, которая преобразует анализ данных для предприятий, предоставляя инсайты в реальном времени.",
  fullDescription: "NeuralSync AI разрабатывает новое поколение инструментов искусственного интеллекта, помогающих предприятиям принимать решения на основе данных в режиме реального времени. Наши проприетарные алгоритмы обрабатывают огромные наборы данных в 10 раз быстрее традиционных решений при сохранении точности 99.9%. Мы уже обслуживаем компании из списка Fortune 500 и быстро масштабируемся.",
    category: "Technology",
    fundingGoal: 500000,
    currentFunding: 387500,
    backers: 156,
    image: techImage,
    founder: "Sarah Chen",
  founderTitle: "Генеральный директор и сооснователь",
    timeline: "Запуск во 2 квартале 2024 года",
    highlights: [
      "Обработка данных в 10 раз быстрее конкурентов",
      "Уже обслуживаем 15 компаний из Fortune 500",
      "Точность прогностической аналитики 99.9%",
      "Патенты на основные алгоритмы в процессе"
    ]
  },
  {
    id: "2",
    name: "EcoGrid Solutions",
  description: "Технология умных сетей, делающая возобновляемую энергию доступной и недорогой для сообществ.",
  fullDescription: "EcoGrid Solutions меняет подход к доступу и распределению возобновляемой энергии в сообществах. Наша технология умных сетей оптимизирует распределение энергии, сокращает потери и делает чистую энергию доступной для всех. С установками в более чем 50 сообществах мы доказываем, что устойчивое энергоснабжение может быть прибыльным и экологически ответственным.",
    category: "Green Energy",
    fundingGoal: 750000,
    currentFunding: 562500,
    backers: 203,
    image: greenImage,
    founder: "Marcus Rodriguez",
  founderTitle: "Основатель и технический директор",
    timeline: "Расширение в течение 12 месяцев",
    highlights: [
      "Установлено в более чем 50 сообществах",
      "Снижение затрат на энергию на 40%",
      "Операции с нулевым выбросом углерода",
      "Получены государственные гранты"
    ]
  },
  {
    id: "3",
    name: "MediConnect",
  description: "Платформа телемедицины, связывающая пациентов со специалистами с помощью AI-диагностики.",
  fullDescription: "MediConnect повышает доступность здравоохранения, объединяя телемедицину с передовой AI-диагностикой. Наша платформа позволяет пациентам в регионах с ограниченным доступом связываться с ведущими специалистами по всему миру, а AI помогает в предварительной диагностике и сортировке. Мы делаем качественное здравоохранение доступным для всех.",
    category: "Healthcare",
    fundingGoal: 600000,
    currentFunding: 420000,
    backers: 189,
    image: healthImage,
    founder: "Dr. Emily Watson",
  founderTitle: "Медицинский директор и основатель",
    timeline: "Национальный запуск в 3 квартале 2024 года",
    highlights: [
      "Более 50 000 обслуженных пациентов",
      "Сеть из более 500 специалистов",
      "Сертифицированные диагностические инструменты",
      "Уровень удовлетворенности пациентов 95%"
    ]
  },
  {
    id: "4",
    name: "QuantumLedger",
  description: "Финансовая платформа на блокчейне для безопасных и прозрачных международных транзакций.",
  fullDescription: "QuantumLedger использует квантово-устойчивую блокчейн-технологию, чтобы обеспечить максимально безопасную платформу для международных финансовых транзакций. Наша технология снижает издержки транзакций на 70%, обеспечивая при этом высокий уровень безопасности и соответствие международным регуляциям.",
    category: "Finance",
    fundingGoal: 1000000,
    currentFunding: 650000,
    backers: 98,
    image: techImage,
    founder: "James Liu",
  founderTitle: "Генеральный директор и архитектор блокчейн-решений",
    timeline: "Бета-запуск в 1 квартале 2024 года",
    highlights: [
      "Квантово-устойчивая шифровка",
      "Снижение комиссий на 70%",
      "Соответствует требованиям в более чем 45 странах",
      "Партнёрство с крупными банками"
    ]
  },
  {
    id: "5",
    name: "EduVerse",
  description: "Иммерсивная платформа VR для обучения, делающая образование увлекательным и доступным по всему миру.",
  fullDescription: "EduVerse создаёт иммерсивные образовательные VR-опыты, которые делают обучение увлекательным, запоминающимся и доступным для студентов по всему миру. Наша платформа показала повышение запоминания на 400% по сравнению с традиционными методами обучения.",
    category: "Education",
    fundingGoal: 400000,
    currentFunding: 280000,
    backers: 267,
    image: healthImage,
    founder: "Dr. Aisha Patel",
  founderTitle: "Основатель и специалист по инновациям в образовании",
    timeline: "Партнёрства со школами начиная с 2024 года",
    highlights: [
      "На 400% лучшее усвоение по сравнению с традиционным обучением",
      "Используется в более чем 100 школах по всему миру",
      "Поддержка 12 языков",
      "Признанная награждённая учебная программа"
    ]
  },
  {
    id: "6",
    name: "AgroTech Future",
  description: "Прецизионное сельское хозяйство с использованием IoT и AI для оптимизации урожайности и устойчивости.",
  fullDescription: "AgroTech Future сочетает IoT-датчики, спутниковые снимки и AI, чтобы помогать фермерам оптимизировать урожай и снижать расход воды и экологический след. Наша технология уже помогает фермерам увеличить урожайность на 35% при использовании на 50% меньше воды.",
    category: "Green Energy",
    fundingGoal: 550000,
    currentFunding: 330000,
    backers: 142,
    image: greenImage,
    founder: "Roberto Silva",
  founderTitle: "Инженер по сельскому хозяйству и генеральный директор",
    timeline: "Международное расширение в 2024 году",
    highlights: [
      "Увеличение урожайности на 35%",
      "Сокращение использования воды на 50%",
      "Более 1000 ферм используют нашу технологию",
      "Сертифицированное климатически позитивное воздействие"
    ]
  }
];

// Function to get all startups (default + user-submitted)
export const getAllStartups = (): Startup[] => {
  if (typeof window === "undefined") return defaultStartups;
  
  const userStartups = JSON.parse(localStorage.getItem("userStartups") || "[]");
  return [...userStartups, ...defaultStartups];
};

// Export default startups for backward compatibility
export const startups = defaultStartups;
