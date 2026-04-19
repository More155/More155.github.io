import { PetProjectCard } from "../components/PetProjectsCard";
import msn from "../assets/img/MSN.png";
import FeelApp from "../assets/img/FeelApp.png";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Full-stack projects built with attention to
          <span className="font-semibold text-indigo-600"> real-world architecture</span>,
          <span className="font-semibold text-indigo-600"> live deployment</span>, and
          <span className="font-semibold text-indigo-600"> production-ready features</span>.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        <PetProjectCard
          title="Windows Live Messenger Chatroom"
          description="A full-stack real-time chat app replicating the Windows XP MSN Messenger experience — including draggable windows, nudges, presence system, and group chats."
          imageSrc={msn}
          techTags={[
            "React",
            "TypeScript",
            "Vite",
            "Node.js",
            "Express",
            "Socket.io",
            "MongoDB",
            "Auth0",
          ]}
        >
          <h4 className="font-semibold text-gray-800">Messaging</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>Real-time private and group messaging via Socket.io</li>
            <li>Message persistence in MongoDB with full history on open</li>
            <li>Typing indicator and nudge feature with sound and animation</li>
            <li>Unread message badges per contact and group</li>
          </ul>

          <h4 className="font-semibold text-gray-800">Presence & Auth</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>Auth0 authentication with email/password and Google OAuth</li>
            <li>Online / Offline detection with custom status (Away, Busy, BRB)</li>
            <li>Status synced to DB and broadcast to contacts in real time</li>
            <li>End-to-end encrypted messages (AES-256)</li>
          </ul>

          <h4 className="font-semibold text-gray-800">UI / UX</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Windows XP aesthetic with draggable and resizable windows</li>
            <li>Avatar upload stored in MongoDB, XP startup sound on load</li>
            <li>Contact management — add, remove, search, and group contacts</li>
          </ul>

          <div className="mt-4 text-sm text-gray-500">
            <p>
              Live:
              <a
                href="https://msn-chatroom.vercel.app"
                target="_blank"
                className="ml-2 text-indigo-600 hover:underline"
              >
                msn-chatroom.vercel.app
              </a>
            </p>
          </div>
        </PetProjectCard>

      <PetProjectCard
          title="Feel App — Mental Health & Coaching Plattorm"
          description="A comprehensive multi-role platform for emotional tracking and professional coaching, featuring AI-driven insights and a granular data privacy system."
          imageSrc={FeelApp}
          techTags={[
            "React",
            "Python",
            "Flask",
            "Google Gemini AI",
            "SQLAlchemy",
            "PostgreSQL",
            "JWT",
            "Render",
          ]}
        >
          <h4 className="font-semibold text-gray-800">AI & Emotional Intelligence</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>Integrated Google Gemini API to provide context-aware guidance based on user emotional trends.</li>
            <li>Entry system with emotional tagging and dynamic statistics to monitor progress over time.</li>
            <li>Specialized dashboard for coaches to track client evolution and bookmark key updates.</li>
          </ul>

          <h4 className="font-semibold text-gray-800">Privacy & Connectivity</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>Secure permission protocol where users explicitly grant or revoke data visibility to professionals.</li>
            <li>Private messaging system between clients and coaches with secure session management.</li>
            <li>Forum for peer support and a directory to connect with certified specialists near your area.</li>
          </ul>

          <h4 className="font-semibold text-gray-800">Architecture & DevOps</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Three distinct roles (Client, Coach, Admin) managed via custom JWT authentication.</li>
            <li>Robust PostgreSQL architecture with automated migrations and environment optimization.</li>
            <li>Fully deployed on Render using custom build pipelines for high availability.</li>
          </ul>

          <div className="mt-4 text-sm text-gray-500">
            <p>
              Live:
              <a
                href="https://feelapp.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="ml-2 text-indigo-600 hover:underline"
              >
                feelapp.onrender.com
              </a>
            </p>
          </div>
        </PetProjectCard>
      </div>
    </section>
  );
}