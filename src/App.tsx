import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Download,
  Mail,
  MapPin,
  Code2,
  Briefcase,
  GraduationCap,
  User,
  Menu,
  X,
  ChevronDown,
  Award,
  Calendar,
  Star,
  Zap,
  Database,
  Globe,
  Server,
  Palette,
  Terminal,
  Layers,
  FileCode,
  GitBranch,
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-400 to-cyan-500",
      skills: [
        { name: "HTML/CSS", icon: FileCode },
        { name: "JavaScript", icon: Terminal },
        { name: "TypeScript", icon: Code2 },
        { name: "React", icon: Layers },
        { name: "Next.js", icon: Globe },
        { name: "Tailwind CSS", icon: Palette },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-400 to-teal-500",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Express.js", icon: Code2 },
        { name: "Python", icon: Terminal },
        { name: "REST APIs", icon: Globe },
      ],
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "MongoDB", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "Git", icon: GitBranch },
        { name: "Prisma", icon: Layers },
        { name: "Convex", icon: Zap },
      ],
    },
  ];

  const certificates = [
    {
      title: "100 Days Coding Strike",
      issuer: "Netwave",
      date: "2024",
      type: "Achievement",
      link: "https://drive.google.com/file/d/1LSdO3I0atxIydB4whZFHa9Omtjpd3Jpt/view?usp=sharing",
      description:
        "Completed 100 consecutive days of coding challenge, demonstrating consistency and dedication to continuous learning.",
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Certification Authority",
      date: "2024",
      type: "Certificate",
      link: "https://drive.google.com/file/d/1qb85v1TUMHPvYj_y10uITl7f6LPx5w-Y/view?usp=sharing",
      description:
        "Comprehensive certification covering modern web development technologies including React, Node.js, and database management.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Python Data Structures & Algorithms",
      issuer: "Educational Platform",
      date: "2024",
      type: "Certificate",
      link: "https://drive.google.com/file/d/1OxMUAmRDB_kXx4IS_q7jVaiEjNYOvsPo/view?usp=sharing",
      description:
        "Advanced certification in Python programming with focus on data structures, algorithms, and problem-solving techniques.",
      color: "from-green-400 to-teal-500",
    },
    {
      title: "SunHacks International Hackathon",
      issuer: "SunHacks",
      date: "2024",
      type: "Participation",
      link: "https://drive.google.com/file/d/1dYule1w_hBV1UhRgrOjmEqiCUvgB8CKP/view?usp=sharing",
      description:
        "Participated in international hackathon, collaborating with global developers to build innovative solutions within time constraints.",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const projects = [
    {
      title: "CodeCast – Collaborative Multi-Language Online IDE",
      description:
        "Built an online IDE platform using Next.js 15, Convex, Clerk, and TypeScript, supporting 10+ programming languages with smart output handling, execution history, and a community-driven code-sharing system.",
      liveLink: "https://code-editor-eosin-six.vercel.app/",
      githubLink: "https://github.com/ShivamGupta987/CODE-EDITOR",
      tags: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Clerk",
        "Prisma",
        "Convex",
      ],
      image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    },
    {
      title: "Glimpse - Modern Video Interview Platform",
      description:
        "Built a real-time video calling interview platform using Next.js, TypeScript, Stream, Convex, and Clerk, featuring seamless video calls, screen sharing, and screen recording.",
      liveLink: "https://glimpse-saas.vercel.app/",
      githubLink: "https://github.com/ShivamGupta987/GLIMPSE_SAAS",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Clerk",
        "Convex",
        "Stream",
      ],
      image:
        "https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg",
    },
     {
    title: "MyAttendance - PWA Attendance Tracker",
    description:
      "Built a Progressive Web App for tracking student attendance with dynamic timetables, real-time analytics, offline support, and multi-stream compatibility for different courses.",
    liveLink: "https://myattendance-pwa.vercel.app/",
    githubLink: "https://github.com/ShivamGupta987/My-Attendance",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "Framer Motion",
      "PWA",
    ],
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
  },

    {
      title: "File Fly Away - Link-Based File Delivery",
      description:
        "Built a file-sharing platform enabling fast and secure transfer of files with unique shareable links and expiry controls. Integrated real-time status updates and download tracking.",
      liveLink: "https://file-fly-away.vercel.app/",
      githubLink: "https://github.com/ShivamGupta987/file-fly-away",
      tags: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Supabase",
        "Shadcn UI",
      ],
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
    },
    {
      title: "Foodi - Complete Food Web Application",
      description:
        "Built a full-stack food service platform using React, Tailwind CSS, Node.js, and MongoDB, tailored for food enthusiasts and entrepreneurs with Firebase authentication and Stripe payments.",
      liveLink: "https://complete-food-web.vercel.app/",
      githubLink:
        "https://github.com/ShivamGupta987/full-stack-task-management-app",
      tags: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "Stripe",
      ],
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shivam-gupta-97162b301/",
      icon: Linkedin,
      color: "hover:text-blue-500",
    },
    {
      name: "Github",
      url: "https://github.com/ShivamGupta987",
      icon: Github,
      color: "hover:text-gray-400",
    },
    {
      name: "Twitter",
      url: "https://x.com/ShivamGupta9866",
      icon: Twitter,
      color: "hover:text-blue-400",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-emerald-400 bg-emerald-400/20";
      case "Advanced":
        return "text-blue-400 bg-blue-400/20";
      case "Intermediate":
        return "text-yellow-400 bg-yellow-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 100
            ? "bg-slate-900/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text"
              whileHover={{ scale: 1.05 }}
            >
              SG
            </motion.div>

            <div className="hidden space-x-8 md:flex">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-teal-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 md:hidden hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t md:hidden bg-slate-900/95 backdrop-blur-md border-slate-800"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? "text-teal-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-60"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="mb-6 text-5xl font-extrabold sm:text-7xl lg:text-8xl"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{
                opacity: isLoaded ? 1 : 0,
                filter: isLoaded ? "blur(0px)" : "blur(10px)",
              }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 bg-clip-text">
                Shivam
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
                Gupta
              </span>
            </motion.h1>

            <motion.p
              className="max-w-3xl mx-auto mb-8 text-xl text-gray-300 sm:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Computer Science student and Web Developer passionate about
              building innovative solutions using cutting-edge technologies to
              shape the future.
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="https://drive.google.com/file/d/1qa-WuEyIMlLzCgNJfM5uAD0yqaz7DFlc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 hover:shadow-xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 font-semibold transition-all duration-300 transform border-2 border-purple-500 rounded-full hover:bg-purple-500 hover:shadow-lg hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div
              className="flex justify-center mt-12 space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent size={28} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-teal-400" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-teal-400 to-cyan-500"></div>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-300">
                  I'm a passionate Computer Science student with a deep interest
                  in web development and AI. Currently pursuing my undergraduate
                  degree at Thakur College of Engineering and Technology, I
                  thrive on creating innovative solutions and mastering
                  cutting-edge technologies.
                </p>

                <p className="text-lg leading-relaxed text-gray-300">
                  My journey in web development has equipped me with strong
                  problem-solving abilities and an eye for detail. I enjoy
                  building clean, efficient code that delivers exceptional user
                  experiences.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="p-4 border rounded-lg bg-slate-800/50 backdrop-blur-sm border-slate-700">
                    <h4 className="mb-2 font-semibold text-teal-400">GPA</h4>
                    <p className="text-2xl font-bold">9.21/10</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-slate-800/50 backdrop-blur-sm border-slate-700">
                    <h4 className="mb-2 font-semibold text-teal-400">
                      Projects
                    </h4>
                    <p className="text-2xl font-bold">5+</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-slate-800/50 backdrop-blur-sm border-slate-700">
                    <h4 className="mb-2 font-semibold text-teal-400">
                      Tech Stack
                    </h4>
                    <p className="text-2xl font-bold">15+</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 border bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl border-teal-500/30">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="text-teal-400" size={24} />
                    <span className="text-gray-300">Full Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-teal-400" size={24} />
                    <span className="text-gray-300">
                      Computer Science Student
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-teal-400" size={24} />
                    <span className="text-gray-300">Mumbai, Maharashtra</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code2 className="text-teal-400" size={24} />
                    <span className="text-gray-300">MERN Stack Specialist</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-800/20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-400 to-pink-500"></div>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Bachelor of Engineering in Computer Science",
                institution: "Thakur College of Engineering and Technology",
                location: "Mumbai, Maharashtra",
                period: "Expected May 2026",
                gpa: "9.21/10",
                coursework: [
                  "Data Structures",
                  "Algorithms",
                  "Web Development",
                  "Database Systems",
                  "Operating System",
                  "Computer Network",
                ],
              },
              {
                title: "Higher Secondary School Certificate (H.S.C)",
                institution: "Maharashtra State Board",
                period: "2022",
                gpa: "69.00%",
              },
              {
                title: "Secondary School Certificate (S.S.C)",
                institution: "Maharashtra State Board",
                period: "2020",
                gpa: "86.20%",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 transition-all duration-300 border bg-slate-800/50 backdrop-blur-sm rounded-xl border-slate-700 hover:border-purple-500/50"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col justify-between mb-4 md:flex-row md:items-center">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {edu.title}
                    </h3>
                    <p className="font-semibold text-purple-400">
                      {edu.institution}
                    </p>
                    {edu.location && (
                      <p className="text-sm text-gray-400">{edu.location}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-teal-400">{edu.period}</p>
                    <p className="font-bold text-gray-300">{edu.gpa}</p>
                  </div>
                </div>

                {edu.coursework && (
                  <div className="mt-4">
                    <p className="mb-2 text-gray-400">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm text-purple-300 rounded-full bg-purple-500/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="overflow-hidden transition-all duration-300 border bg-slate-800/50 backdrop-blur-sm rounded-xl border-slate-700 hover:border-cyan-500/50 group"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 font-semibold text-gray-300 transition-all duration-300 border border-gray-600 rounded-lg hover:border-gray-500 hover:text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-800/20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-green-400 to-teal-500"></div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 transition-all duration-300 border bg-slate-800/50 backdrop-blur-sm rounded-xl border-slate-700 hover:border-teal-500/50"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}
                    >
                      <CategoryIcon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center justify-between p-3 transition-colors duration-300 rounded-lg bg-slate-700/30 hover:bg-slate-700/50"
                        >
                          <div className="flex items-center gap-3">
                            <SkillIcon className="text-teal-400" size={20} />
                            <span className="font-medium text-gray-300">
                              {skill.name}
                            </span>
                          </div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(
                              skill.level
                            )}`}
                          >
                            {skill.level}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificates & Achievements Section */}
      <section id="certificates" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                Certificates & Achievements
              </span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Recognitions, certifications, and milestones from my professional
              journey.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 transition-all duration-300 border bg-slate-800/50 backdrop-blur-sm rounded-xl border-slate-700 hover:border-yellow-500/50 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} flex-shrink-0`}
                  >
                    <Award className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${cert.color} text-white`}
                      >
                        {cert.type}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <Calendar size={14} />
                        {cert.date}
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                      {cert.title}
                    </h3>
                    <p className="mb-3 font-semibold text-yellow-400">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="mb-4 leading-relaxed text-gray-300">
                  {cert.description}
                </p>

                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  View Certificate
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-800/20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-pink-400 to-red-500"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="p-6 border bg-slate-800/50 backdrop-blur-sm rounded-xl border-slate-700">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Let's Connect
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-teal-500/20">
                      <Mail className="text-teal-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p className="font-semibold text-white">
                        sg0802599@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-teal-500/20">
                      <MapPin className="text-teal-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="font-semibold text-white">
                        Mumbai, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex mt-8 space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-colors duration-300 ${social.color}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-6 border bg-slate-800/50 backdrop-blur-sm rounded-xl border-slate-700">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Send Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 border rounded-lg bg-slate-700/50 border-slate-600 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 border rounded-lg bg-slate-700/50 border-slate-600 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 border rounded-lg bg-slate-700/50 border-slate-600 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={6}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 border rounded-lg resize-none bg-slate-700/50 border-slate-600 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full px-8 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t bg-slate-900/50 border-slate-800 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-center md:text-left md:mb-0">
              <p className="text-gray-400">
                © 2025 Shivam Gupta. All rights reserved.
              </p>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                    whileHover={{ scale: 1.2, y: -2 }}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
