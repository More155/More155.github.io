import { PetProjectCard } from "../components/PetProjectsCard"
import msn from "../assets/img/MSN.png"

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
          techTags={["React", "TypeScript", "Vite", "Node.js", "Express", "Socket.io", "MongoDB", "Auth0"]}
          projectLink="https://msn-chatroom.vercel.app"
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
        </PetProjectCard>
      </div>
    </section>
  )
}