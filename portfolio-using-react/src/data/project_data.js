// src/data/project-data.js

export const projects = [
  {
    id: 1,
    title: "Zynora: Redefining E-commerce Experiences",
    description: "Developed using JavaScript and Tailwind CSS with lazy loading for enhanced user experience. Implemented cart and wishlist functionality using local storage, ensuring a responsive design across all devices.",
    image: "/img/ecommerce.jpg",
    liveLink: "https://zynora-ecommerce-git-main-astik-shahs-projects.vercel.app/",
    repoLink: "https://github.com/Astik83/Zynora-Ecommerce",
    tech: ["html", "css", "javascript", "tailwind"]
  },
  {
    id: 2,
    title: "Laptop Price Predictor",
    description: "Developed ML app with Python and Scikit-learn for price prediction. Scraped 1900+ Flipkart listings and deployed via Streamlit.",
    image: "/img/laptop.png",
    liveLink: "https://laptop-price-predictor-a.streamlit.app/",
    repoLink: "https://github.com/Astik83/Laptop-price-predictor-ML",
   tech: [
  "Python",
  "scikit-learn",
  "pandas",
  "NumPy",
  "Jupyter Notebook",
  "Streamlit",           
  "HTML",
  "CSS",
  "JavaScript"
]

  },{
    id: 3,
    title: "Jarvis:Personal AI Assistant",
    description: "Description: Jarvis is an AI-powered personal assistant that simplifies daily tasks through voice commands. It can open applications, browse the web, manage messages, and provide weather updates. By integrating with various APIs, Orion delivers a seamless and responsive user experience.",
    image: "/img/jarvis1.png",
    liveLink: "https://github.com/Astik83/JarvisProject",
    repoLink: "https://github.com/Astik83/JarvisProject",
   tech: [
  "Python",
  "SpeechRecognition",
  "pyttsx3",
  "OpenAI API",
  "Tkinter",        // if GUI is added
  "Flask",          // if it's served via a web interface
  "pyaudio",
  "NLTK",           // or spaCy
  "wolframalpha"
]



  }
];


