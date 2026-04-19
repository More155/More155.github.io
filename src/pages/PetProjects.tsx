import React from "react";
import { PetProjectCard } from "../components/PetProjectsCard";
import guesstheword from "../assets/img/Guess-The-Word.png";
import solitaire from "../assets/img/Solitaire.png";
import tracker from "../assets/img/Tracker.png";
import hangmanImg from "../assets/img/Hangman.png";

export const PetProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Pet Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of my favorite projects that showcase my skills and creativity.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        <PetProjectCard
          title="Guess The Word"
          description="Word guessing game with hints and limited attempts."
          imageSrc={guesstheword}
          techTags={["JavaScript", "HTML", "CSS"]}
        >
          <h4 className="font-semibold text-gray-800">Gameplay Rules</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>The player must guess a total of 10 words to win the game</li>
            <li>The game allows a maximum of 6 tries before losing</li>
            <li>Each guess can contain up to 3 incorrect letters</li>
            <li>Reaching 3 incorrect letters in a single guess counts as 1 try</li>
            <li>Reaching 6 tries results in a game over</li>
          </ul>

          <h4 className="font-semibold text-gray-800">Controls & Interactions</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>All gameplay can be controlled using the keyboard</li>
            <li>Letters are typed directly using the keyboard</li>
            <li>Press Enter to submit a word</li>
          </ul>

          <h4 className="font-semibold text-gray-800">Game Actions</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Random button to change the current word</li>
            <li>Reset button to restart the entire game</li>
            <li>Clue button with up to 3 available hints per game</li>
          </ul>

          <div className="mt-4 text-sm text-gray-500">
            <p>
              Live:
              <a
                href="https://guessthewordjs.netlify.app/"
                target="_blank"
                className="ml-2 text-indigo-600 hover:underline"
              >
                guessthewordjs.netlify.app
              </a>
            </p>
          </div>
        </PetProjectCard>

        <PetProjectCard
          title="Klondike Solitaire"
          description="Classic solitaire with drag & drop."
          imageSrc={solitaire}
          techTags={["JavaScript", "jQuery", "HTML", "CSS"]}
        >
          <h4 className="font-semibold text-gray-800">Purpose</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>Practice game logic</li>
            <li>Strengthen DOM manipulation skills</li>
            <li>Work with jQuery UI drag & drop</li>
          </ul>

          <h4 className="font-semibold text-gray-800">Current Features</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>Classic Klondike setup (7 columns, stock, waste, foundations)</li>
            <li>Drag & drop cards between columns and foundations</li>
            <li>Automatic win detection</li>
            <li>Timer</li>
            <li>Undo button</li>
            <li>Win alert using SweetAlert with restart option</li>
          </ul>

          <h4 className="font-semibold text-gray-800">Planned Improvements</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Add 3-card draw mode for the stock pile</li>
          </ul>

          <div className="mt-4 text-sm text-gray-500">
            <p>
              Live:
              <a
                href="https://klondikesolitairejquery.netlify.app/"
                target="_blank"
                className="ml-2 text-indigo-600 hover:underline"
              >
                klondikesolitairejquery.netlify.app
              </a>
              {" "}•{" "}
              <a
                href="https://github.com/More155/Solitaire"
                target="_blank"
                className="text-indigo-600 hover:underline"
              >
                github.com/More155/Solitaire
              </a>
            </p>
          </div>
        </PetProjectCard>

        <PetProjectCard
          title="Hangman Game"
          description="Hangman game with a 2 player option built with frontend tools and real-time backend."
          imageSrc={hangmanImg}
          techTags={["React", "TypeScript", "Vite", "Firebase"]}
        >
          <h4 className="font-semibold text-gray-800">Multiplayer Mode</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>Two players join the same room</li>
            <li>Players take turns choosing words and guessing</li>
            <li>Real-time updates using Firebase Firestore</li>
            <li>Keyboard disabled for the player who is not guessing</li>
            <li>End message displaying the correct word when a player loses</li>
            <li>Leave Room button to exit and reset the game</li>
          </ul>

          <h4 className="font-semibold text-gray-800">Solo Mode</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Play alone with a predefined word list</li>
            <li>Same rules and mechanics as multiplayer mode</li>
          </ul>

          <div className="mt-4 text-sm text-gray-500">
            <p>
              Live:
              <a
                href="https://hangman-multiplayer-9219c.web.app/"
                target="_blank"
                className="ml-2 text-indigo-600 hover:underline"
              >
                hangman-multiplayer-9219c.web.app
              </a>
            </p>
          </div>
        </PetProjectCard>

        <PetProjectCard
          title="Income & Expense Tracker"
          subtitle="Personal finance tracker"
          description="A simple, clean, and fully functional personal finance tracker built with vanilla JavaScript."
          imageSrc={tracker}
          techTags={["JavaScript", "Chart.js", "HTML", "CSS"]}
        >
          <h4 className="font-semibold text-gray-800">Initial Version</h4>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>Runs entirely in the browser</li>
            <li>No server or database required</li>
          </ul>

          <h4 className="font-semibold text-gray-800">Features</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Add incomes and expenses with description, amount, and predefined categories</li>
            <li>13 expense categories and 5 income categories</li>
            <li>Real-time calculation of total incomes, expenses, and balance</li>
            <li>Donut chart showing expenses by category</li>
            <li>Soft pastel placeholder state when no expenses are present</li>
            <li>Recent transactions list with delete option</li>
            <li>Data persistence using localStorage</li>
            <li>Clean, responsive, mobile-friendly design with pastel color palette</li>
          </ul>

          <div className="mt-4 text-sm text-gray-500">
            <p>
              Live:
              <a
                href="https://income-expense-tracker-doughnut.netlify.app/"
                target="_blank"
                className="ml-2 text-indigo-600 hover:underline"
              >
                income-expense-tracker-doughnut.netlify.app
              </a>
              {" "}•{" "}
              <a
                href="https://github.com/More155/Income-ExpenseTracker"
                target="_blank"
                className="text-indigo-600 hover:underline"
              >
                github.com/More155/Income-ExpenseTracker
              </a>
            </p>
          </div>
        </PetProjectCard>
      </div>
    </section>
  );
};