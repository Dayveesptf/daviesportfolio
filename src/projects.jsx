import { useRef, useEffect } from 'react'
import blogWebsite from './assets/blog.png'
import healthAI from './assets/health-ai.png'
import contractly from './assets/contractly.png'
import retailRadar from './assets/retail.png'
import landingPage from './assets/landing-page.png'
import multiStepForm from './assets/multi-step.png'
import ticTacToe from './assets/tic-tac-toe.png'
import weatherApp from './assets/weather-app.png'
import stopwatch from './assets/stopwatch.png'
import todoList from './assets/list.png'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { FaGamepad, FaHtml5, FaReact, } from 'react-icons/fa6'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { CgVercel } from 'react-icons/cg'
import { AiFillApi } from 'react-icons/ai'
import { BiData, BiTimer } from 'react-icons/bi'
import { GrFormCheckmark } from 'react-icons/gr'
import { TbApi } from 'react-icons/tb'

const Projects = () => {
  const sectionsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Blog Website",
      description: "Explore this blog website created with React, using local data to display information with modern design patterns.",
      image: blogWebsite,
      link: "https://blog-website-dd.vercel.app/",
      tech: ["React", "Tailwind", "HTML", "Vercel"],
    },
    {
      id: 2,
      title: "Titan Health AI",
      description: "AI-powered medical chatbot that provides concise, health-focused answers and doctor referral support.",
      image: healthAI,
      link: "https://titan-9njp4xlfy-davies-projects-f9479dfc.vercel.app/",
      tech: ["React", "AI", "HTML", "Vercel"],
    },
    {
      id: 3,
      title: "Contractly",
      description: "Upload your contract documents and get instant AI-powered analysis for key terms, risks, and insights.",
      image: contractly,
      link: "https://contractly-kappa.vercel.app/",
      tech: ["React", "Tailwind", "AI", "Vercel"],
    },
    {
      id: 4,
      title: "Retail-Radar",
      description: "This project identifies retail store clusters and areas of high store density within a city, providing valuable insights for entrepreneurs.",
      image: retailRadar,
      link: "https://retail-radar-dd.vercel.app/",
      tech: ["React", "Data", "HTML", "Vercel"],
    },
    {
      id: 5,
      title: "Landing Page",
      description: "Explore this modern landing page created with Next.js about Krea AI, featuring mordern styles and responsive design.",
      image: landingPage,
      link: "https://krea-ai-landing-page.vercel.app/",
      tech: ["Typescript", "Tailwind", "HTML", "Vercel"],
      featured: false,
      premium: false
    },
    {
      id: 6,
      title: "Multi Step Form",
      description: "Advanced form handling with React, managing complex states and user inputs across multiple steps.",
      image: multiStepForm,
      link: "https://multi-step-form-nu-green.vercel.app/",
      tech: ["React", "Forms", "HTML", "Vercel"],
    },
    {
      id: 7,
      title: "Tic-Tac-Toe",
      description: "Interactive game of X and O created with React, playable between two users or against computer AI.",
      image: ticTacToe,
      link: "https://prodigy-wd-03-tictactoe-one.vercel.app/",
      tech: ["React", "Game", "HTML", "Vercel"],
    },
    {
      id: 8,
      title: "Weather App",
      description: "Real-time weather application managing states and user inputs to display weather details for cities worldwide.",
      image: weatherApp,
      link: "https://getweathernow-nine.vercel.app/",
      tech: ["React", "API", "Tailwind", "Vercel"],
    },
    {
      id: 9,
      title: "Stopwatch",
      description: "Professional stopwatch with start, pause, reset, stop and lap functionality. Perfect for workouts and sports.",
      image: stopwatch,
      link: "https://prodigy-wd-02-stopwatch-mocha.vercel.app/",
      tech: ["React", "Timer", "Tailwind", "Vercel"],
      featured: false,
      premium: false
    },
    {
      id: 10,
      title: "To-Do List",
      description: "Powerful task management application with priority ordering, completion tracking, and organized workflow.",
      image: todoList,
      link: "/",
      tech: ["React", "State", "HTML", "Vercel"],
      featured: false,
      premium: false
    }
  ];

  const TechIcon = ({ tech }) => {
    const iconMap = {
      React: <FaReact />,
      Tailwind: <SiTailwindcss />,
      HTML: <FaHtml5 />,
      Vercel: <CgVercel />,
      AI: <AiFillApi />,
      Data: <BiData />,
      Forms: <GrFormCheckmark />,
      Game: <FaGamepad />,
      API: <TbApi />,
      Timer: <BiTimer />,
      Typescript: <SiTypescript />
    };

    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm tech-icon">
        <span className="text-lg">{iconMap[tech] || "💼"}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-36 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 animate-fade-in-up">
            My Projects
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Explore a collection of innovative web applications and digital experiences
          </p>
          <div className="mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white/90 font-medium">
              {projects.length} Projects & Counting
            </div>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up"
            ref={addToRefs}
          >
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group relative project-card p-8 overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
                
                {/* Project Image */}
                <div className="relative mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <TechIcon key={techIndex} tech={tech} />
                    ))}
                  </div>

                  {/* Project Link */}
                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link inline-block pg-primary/10 text-primary hover:bg-primary hover:text-white border border-current"
                    >
                      <span>View Project</span>
                    </a>
                  </div>      
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <section className="py-20 mb-[-9%] md:mb-[-5%] lg:mb-[-3%] px-4 hero-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-6xl font-heading font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-base md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life with cutting-edge technology and beautiful design.
          </p>
          <a
            href="mailto:dtechservices2@gmail.com"
            className="inline-block px-8 py-4 bg-white text-primary font-medium rounded-xl hover:bg-white/90 transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Projects