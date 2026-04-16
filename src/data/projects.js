import img1 from "../assets/video.webp";
import img2 from "../assets/chat.webp";
import img3 from "../assets/dashboard.webp";
import img4 from "../assets/mcq.webp";

export const projects = [
  {
    id: "learning-platform",
    title: "Learning Platform",
    category: "EdTech",
    image: img1,
    tagline: "Focused learning flows with clean, distraction-free UX.",
    description:
      "An end-to-end web platform where students can browse lessons, track progress, and revisit key modules with a smooth responsive experience.",
    challenge:
      "The product needed to stay simple for first-time users while still supporting long-form learning journeys.",
    solution:
      "I designed lightweight page structure, reusable content blocks, and fast-loading layouts so learners can stay focused even on slower devices.",
    outcome:
      "Reduced bounce on mobile learning pages and improved session completion through clearer navigation and stronger visual hierarchy.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    year: "2025",
    duration: "6 weeks",
  },
  {
    id: "realtime-chat",
    title: "Realtime Chat App",
    category: "Communication",
    image: img2,
    tagline: "Fast conversations with reliable realtime messaging.",
    description:
      "A realtime chat product with responsive message threads, contact lists, and activity states built for one-to-one and group communication.",
    challenge:
      "Users expected instant updates across devices without lag or confusing message order.",
    solution:
      "I implemented event-driven updates, message grouping, and state synchronization patterns to keep interactions quick and stable.",
    outcome:
      "Delivered a smooth chat experience with clear message flow and improved user retention during long sessions.",
    tech: ["React", "Socket.IO", "Express", "Node.js", "JWT"],
    year: "2025",
    duration: "5 weeks",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    category: "Business",
    image: img3,
    tagline: "Actionable insights with visual clarity first.",
    description:
      "A performance dashboard showing KPIs, trends, and business metrics in a compact interface optimized for daily decision workflows.",
    challenge:
      "Raw data was difficult to scan quickly, especially for non-technical stakeholders.",
    solution:
      "I created dashboard sections with progressive disclosure, chart-level summaries, and responsive widget patterns for quick interpretation.",
    outcome:
      "Teams could identify trends faster and use dashboard views in routine planning meetings.",
    tech: ["React", "REST API", "Chart.js", "Tailwind CSS", "Node.js"],
    year: "2024",
    duration: "7 weeks",
  },
  {
    id: "quiz-assessment-suite",
    title: "Quiz Assessment Suite",
    category: "Productivity",
    image: img4,
    tagline: "Structured assessments with fast result feedback.",
    description:
      "An assessment system for timed quizzes, scoring analytics, and reusable question banks designed for educators and training teams.",
    challenge:
      "The app needed to support both quick quiz attempts and deeper performance review without clutter.",
    solution:
      "I split the experience into focused attempt screens and streamlined result views with clear score insights and next-step actions.",
    outcome:
      "Improved completion rate and made performance tracking simpler for both admins and participants.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    year: "2024",
    duration: "4 weeks",
  },
];

export const getProjectById = (id) => projects.find((project) => project.id === id);
