
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseContent from '@/components/CourseContent';

const AlgorithmBasicsCoursePage = () => {
  const courseData = {
    title: "Algorithmes de Base",
    description: "Structures fondamentales de la programmation",
    sections: [
      {
        title: "Variables et Types",
        content: [
          {
            type: "text" as const,
            content: "En Python, les variables permettent de stocker des données de différents types."
          },
          {
            type: "example" as const,
            content: "# Types de base\nnombre = 42\ntexte = \"Hello\"\nboolean = True\nliste = [1, 2, 3]"
          },
          {
            type: "text" as const,
            content: "Python détermine automatiquement le type d'une variable (typage dynamique)."
          }
        ]
      },
      {
        title: "Structures Conditionnelles",
        content: [
          {
            type: "text" as const,
            content: "Les structures conditionnelles permettent d'exécuter du code selon certaines conditions."
          },
          {
            type: "example" as const,
            content: "age = 18\nif age >= 18:\n    print(\"Majeur\")\nelse:\n    print(\"Mineur\")"
          },
          {
            type: "formula" as const,
            content: "Structure : if condition: ... elif autre_condition: ... else: ..."
          }
        ]
      },
      {
        title: "Boucles",
        content: [
          {
            type: "text" as const,
            content: "Les boucles permettent de répéter des instructions."
          },
          {
            type: "example" as const,
            content: "# Boucle for\nfor i in range(5):\n    print(i)\n\n# Boucle while\ncompteur = 0\nwhile compteur < 5:\n    print(compteur)\n    compteur += 1"
          },
          {
            type: "text" as const,
            content: "La boucle for est utilisée quand on connaît le nombre d'itérations, while quand on ne le connaît pas."
          }
        ]
      },
      {
        title: "Listes et Dictionnaires",
        content: [
          {
            type: "text" as const,
            content: "Les structures de données permettent d'organiser l'information."
          },
          {
            type: "example" as const,
            content: "# Liste\nfruits = [\"pomme\", \"banane\", \"orange\"]\nprint(fruits[0])  # pomme\n\n# Dictionnaire\npersonne = {\"nom\": \"Alice\", \"age\": 25}\nprint(personne[\"nom\"])  # Alice"
          },
          {
            type: "formula" as const,
            content: "Liste : accès par index [0, 1, 2...]\nDictionnaire : accès par clé {\"clé\": \"valeur\"}"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/algorithm">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux Algorithmes
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-bold text-slate-900">Cours - Algorithmes de Base</h1>
              </div>
            </div>
            <Link to="/algorithm/basics/exercise">
              <Button>
                Faire les exercices
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseContent data={courseData} color="from-blue-600 to-blue-800" />
      </div>
    </div>
  );
};

export default AlgorithmBasicsCoursePage;
