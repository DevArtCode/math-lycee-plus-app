
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseContent from '@/components/CourseContent';

const AlgorithmBasicsCoursePage = () => {
  const sections = [
    {
      id: "variables",
      title: "Variables et Types",
      content: [
        "En Python, les variables permettent de stocker des données de différents types.",
        "Python détermine automatiquement le type d'une variable (typage dynamique).",
        "Les types de base incluent : int, str, bool, list, dict"
      ],
      examples: [
        {
          title: "Types de base en Python",
          description: "Déclaration et utilisation des différents types",
          solution: "# Types de base\nnombre = 42\ntexte = \"Hello\"\nboolean = True\nliste = [1, 2, 3]\ndictionnaire = {\"nom\": \"Alice\", \"age\": 25}",
          domain: "Programmation"
        }
      ],
      keyFormulas: [
        "type(variable) # Affiche le type d'une variable",
        "isinstance(variable, type) # Vérifie le type"
      ]
    },
    {
      id: "conditionals",
      title: "Structures Conditionnelles",
      content: [
        "Les structures conditionnelles permettent d'exécuter du code selon certaines conditions.",
        "Python utilise if, elif, else pour les conditions.",
        "L'indentation est cruciale en Python pour délimiter les blocs."
      ],
      examples: [
        {
          title: "Test de majorité",
          description: "Déterminer si une personne est majeure ou mineure",
          solution: "age = 18\nif age >= 18:\n    print(\"Majeur\")\nelse:\n    print(\"Mineur\")",
          domain: "Logique conditionnelle"
        }
      ],
      keyFormulas: [
        "if condition:",
        "elif autre_condition:",
        "else:"
      ]
    },
    {
      id: "loops",
      title: "Boucles", 
      content: [
        "Les boucles permettent de répéter des instructions.",
        "La boucle for est utilisée quand on connaît le nombre d'itérations.",
        "La boucle while est utilisée quand on ne connaît pas le nombre d'itérations."
      ],
      examples: [
        {
          title: "Boucles for et while",
          description: "Exemples d'utilisation des deux types de boucles",
          solution: "# Boucle for\nfor i in range(5):\n    print(i)\n\n# Boucle while\ncompteur = 0\nwhile compteur < 5:\n    print(compteur)\n    compteur += 1",
          domain: "Itération"
        }
      ],
      keyFormulas: [
        "for element in sequence:",
        "while condition:",
        "range(start, stop, step)"
      ]
    },
    {
      id: "data-structures",
      title: "Listes et Dictionnaires",
      content: [
        "Les structures de données permettent d'organiser l'information.",
        "Les listes sont ordonnées et modifiables.",
        "Les dictionnaires associent des clés à des valeurs."
      ],
      examples: [
        {
          title: "Manipulation de listes et dictionnaires",
          description: "Accès et modification des données",
          solution: "# Liste\nfruits = [\"pomme\", \"banane\", \"orange\"]\nprint(fruits[0])  # pomme\nfruits.append(\"kiwi\")\n\n# Dictionnaire\npersonne = {\"nom\": \"Alice\", \"age\": 25}\nprint(personne[\"nom\"])  # Alice\npersonne[\"ville\"] = \"Paris\"",
          domain: "Structures de données"
        }
      ],
      keyFormulas: [
        "liste[index] # Accès par index",
        "dictionnaire[\"clé\"] # Accès par clé",
        "liste.append(element) # Ajouter à la liste"
      ]
    }
  ];

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
        <CourseContent 
          title="Algorithmes de Base"
          sections={sections} 
          color="from-blue-600 to-blue-800" 
        />
      </div>
    </div>
  );
};

export default AlgorithmBasicsCoursePage;
