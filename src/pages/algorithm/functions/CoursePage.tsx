
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseContent from '@/components/CourseContent';

const AlgorithmFunctionsCoursePage = () => {
  const sections = [
    {
      id: "functions-intro",
      title: "Introduction aux Fonctions",
      content: [
        "Une fonction est un bloc de code réutilisable qui effectue une tâche spécifique.",
        "Les fonctions permettent de structurer le code et d'éviter les répétitions.",
        "En Python, on définit une fonction avec le mot-clé 'def'.",
        "Une fonction peut prendre des paramètres et retourner une valeur."
      ],
      examples: [
        {
          title: "Fonction simple",
          description: "Définir une fonction qui calcule le carré d'un nombre",
          solution: "def carre(x):\n    \"\"\"Calcule le carré d'un nombre\"\"\"\n    return x * x\n\n# Utilisation\nresultat = carre(5)\nprint(f\"Le carré de 5 est {resultat}\")",
          domain: "Fonctions de base"
        }
      ],
      keyFormulas: [
        "def nom_fonction(parametres):",
        "    # corps de la fonction",
        "    return valeur"
      ]
    },
    {
      id: "parameters",
      title: "Paramètres et Arguments",
      content: [
        "Les paramètres sont les variables définies dans la fonction.",
        "Les arguments sont les valeurs passées à la fonction lors de l'appel.",
        "Python supporte les paramètres par défaut et les arguments nommés.",
        "On peut passer un nombre variable d'arguments avec *args et **kwargs."
      ],
      examples: [
        {
          title: "Paramètres par défaut",
          description: "Fonction avec paramètres obligatoires et optionnels",
          solution: "def saluer(nom, titre=\"M.\"):\n    return f\"Bonjour {titre} {nom}\"\n\n# Utilisations\nprint(saluer(\"Dupont\"))\nprint(saluer(\"Martin\", \"Dr.\"))",
          domain: "Paramètres de fonctions"
        }
      ],
      keyFormulas: [
        "def fonction(param1, param2=valeur_defaut):",
        "*args  # arguments positionnels variables",
        "**kwargs  # arguments nommés variables"
      ]
    },
    {
      id: "recursion",
      title: "Récursivité",
      content: [
        "Une fonction récursive est une fonction qui s'appelle elle-même.",
        "Toute fonction récursive doit avoir un cas de base (condition d'arrêt).",
        "La récursivité est utile pour résoudre des problèmes décomposables.",
        "Attention aux récursions infinies et à la pile d'appels."
      ],
      examples: [
        {
          title: "Factorielle récursive",
          description: "Calcul de n! de manière récursive",
          solution: "def factorielle(n):\n    \"\"\"Calcule n! de manière récursive\"\"\"\n    if n <= 1:  # Cas de base\n        return 1\n    else:\n        return n * factorielle(n - 1)\n\nprint(f\"5! = {factorielle(5)}\")",
          domain: "Algorithmes récursifs"
        }
      ],
      keyFormulas: [
        "Cas de base : condition d'arrêt",
        "Cas récursif : appel à soi-même",
        "Relation de récurrence"
      ]
    },
    {
      id: "scope",
      title: "Portée des Variables",
      content: [
        "La portée (scope) détermine où une variable est accessible.",
        "Variables locales : définies dans une fonction, accessibles uniquement dans cette fonction.",
        "Variables globales : définies au niveau module, accessibles partout.",
        "Le mot-clé 'global' permet de modifier une variable globale dans une fonction."
      ],
      examples: [
        {
          title: "Portée locale et globale",
          description: "Exemple illustrant la portée des variables",
          solution: "compteur = 0  # Variable globale\n\ndef incrementer():\n    global compteur\n    compteur += 1\n    local_var = \"locale\"  # Variable locale\n    print(f\"Compteur: {compteur}\")\n\nincrémenter()",
          domain: "Gestion des variables"
        }
      ],
      keyFormulas: [
        "global nom_variable",
        "Variables locales vs globales",
        "Règle LEGB (Local, Enclosing, Global, Built-in)"
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
                <h1 className="text-xl font-bold text-slate-900">Cours - Fonctions et Procédures</h1>
              </div>
            </div>
            <Link to="/algorithm/functions/exercise">
              <Button>
                Faire les exercices
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseContent 
          title="Fonctions et Procédures"
          sections={sections} 
          color="from-blue-600 to-blue-800" 
        />
      </div>
    </div>
  );
};

export default AlgorithmFunctionsCoursePage;
