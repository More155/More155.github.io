import type { JSX } from "react"

type SkillItem = {
  name: string
  iconClass?: string
  color?: string
  customIcon?: JSX.Element
  colSpan?: string
}

type SkillCategory = {
  title: string
  items: SkillItem[]
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages 👩🏻‍💻",
    items: [
      {
        name: "JavaScript (ES6+)",
        iconClass: "devicon-javascript-plain",
        color: "#f7df1e",
      },
      {
        name: "Python",
        iconClass: "devicon-python-plain",
        color: "#3776ab",
      },
    ],
  },
  {
    title: "Frontend Technologies 🌐 🎨",
    items: [
      { name: "HTML5", iconClass: "devicon-html5-plain", color: "#e34f26" },
      { name: "CSS3", iconClass: "devicon-css3-plain", color: "#1572b6" },
      { name: "SASS", iconClass: "devicon-sass-original", color: "#cc6699" },
      { name: "React", iconClass: "devicon-react-original", color: "#61dafb" },
      {
        name: "TypeScript",
        iconClass: "devicon-typescript-plain",
        color: "#3178C6",
        colSpan: "col-span-2 md:col-span-1",
      },
    ],
  },
  {
    title: "Backend Technologies ⛃ 🔚",
    items: [
      { name: "MongoDB Atlas", iconClass: "devicon-mongodb-plain", color: "#47a248" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain", color: "#339933" },
      { name: "Express", iconClass: "devicon-express-original" },
      { name: "Firebase", iconClass: "devicon-firebase-plain", color: "#ffca28" },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain", color: "#4169e1" },
    ],
  },
  {
    title: "Frameworks & Libraries 📚",
    items: [
      { name: "Bootstrap", iconClass: "devicon-bootstrap-plain", color: "#7952b3" },
      { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original", color: "#38bdf8" },
      { name: "jQuery", iconClass: "devicon-jquery-plain", color: "#0769ad" },
      { name: "Jest", iconClass: "devicon-jest-plain", color: "#c21325" },
      { name: "Flask", iconClass: "devicon-flask-original", color: "#000000" },
    ],
  },
  {
    title: "Tools & Platforms 🛠️",
    items: [
      { name: "Git", iconClass: "devicon-git-plain", color: "#f05032" },
      { name: "GitHub", iconClass: "devicon-github-original", color: "#000000" },
      { name: "Linux", iconClass: "devicon-linux-plain", color: "#fcc624" },
      { name: "Postman", iconClass: "devicon-postman-plain", color: "#ff6c37" },
      {
        name: "Cisco Packet Tracer",
        customIcon: (
          <svg
            className="w-16 h-16 mb-4 text-[#0055A4]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        ),
        colSpan: "col-span-2 md:col-span-1",
      },
    ],
  },
  {
    title: "Cybersecurity 🔐",
    items: [
      {
        name: "CyberSec FND",
        iconClass: "fa-solid fa-shield-halved",
        color: "#4f46e5",
      },
      {
        name: "Ethical Hacking Basics",
        iconClass: "fa-solid fa-user-secret",
        color: "#111827",
      },
    ],
  },
]

export default function Skills(): JSX.Element {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          My Skills
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Technologies, tools, and fundamentals I use and continue learning as a developer.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr">
        {skillsData.map((category) => (
          <div
            key={category.title}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
          >
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-base md:text-lg font-normal text-gray-600 mb-14 text-center uppercase tracking-wider">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-6 flex-1 items-start justify-items-center">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className={`flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 ${item.colSpan || ""
                      }`}
                  >
                    {item.customIcon ? (
                      item.customIcon
                    ) : (
                      <i
                        className={`${item.iconClass} text-6xl mb-4`}
                        style={item.color ? { color: item.color } : undefined}
                      ></i>
                    )}

                    <span className="text-sm font-medium text-gray-700">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
