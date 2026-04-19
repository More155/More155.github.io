import { PetProjectCard } from "../components/PetProjectsCard"
import FGC from "../assets/img/FGC2.png"
export default function SelectedWork() {
  return (
    <section id="selected-work" className="py-24 px-6 md:px-12 lg:px-20">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Selected Work
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real client work focused on
          <span className="font-semibold text-indigo-600"> conversion</span>,
          <span className="font-semibold text-indigo-600"> brand ecosystems</span>, and
          <span className="font-semibold text-indigo-600"> scalable frontend architecture</span>.
        </p>
      </header>

      <div className="flex flex-col gap-8">

        <PetProjectCard
          title="Feel Good Chaotic — Brand & Community Platform"
          description="Frontend development for a brand ecosystem including a main identity website and a sub-brand community platform, designed for engagement, clarity, and scalability."
          imageSrc={FGC}
          techTags={[
            "React",
            "TypeScript",
            "TailwindCSS",
            "Vite",
            "Responsive Design",
            "SEO"
          ]}
        >
          <h4 className="font-semibold text-gray-800">Platform Structure</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>Main brand website: Feel Good Chaotic (identity + positioning)</li>
            <li>Sub-brand platform: Candide (community-focused experience)</li>
            <li>Consistent design language across both products</li>
          </ul>

          <h4 className="font-semibold text-gray-800">Candide (Community Platform)</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>Conversion-focused landing structure for user acquisition</li>
            <li>Clear messaging and CTA hierarchy</li>
            <li>Optimized layout for readability and engagement</li>
          </ul>

          <h4 className="font-semibold text-gray-800">Feel Good Chaotic (Brand Website)</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>Expressive UI aligned with a bold brand identity</li>
            <li>Balanced creativity with usability and navigation clarity</li>
            <li>Typography and layout used as primary storytelling tools</li>
          </ul>

          <h4 className="font-semibold text-gray-800">Frontend Architecture</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Reusable components shared across both experiences</li>
            <li>Clean and scalable project structure</li>
            <li>Fully responsive design across devices</li>
          </ul>

          <div className="mt-4 text-sm text-gray-500">
            <p>
              Live:
              <a
                href="https://feelgoodchaotic.com"
                target="_blank"
                className="ml-2 text-indigo-600 hover:underline"
              >
                feelgoodchaotic.com
              </a>
              {" "}•{" "}
              <a
                href="https://candide.world"
                target="_blank"
                className="text-indigo-600 hover:underline"
              >
                candide.world
              </a>
            </p>
          </div>
        </PetProjectCard>

      </div>
    </section>
  )
}