
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const GeometryTrigonometryExercisePage = () => {
  const exercises = [
    {
      id: "gt-1",
      title: "Calculs trigonométriques",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Calculer sin(60°) + cos(30°)",
      hint: "Utilisez les valeurs remarquables",
      solution: "sin(60°) = √3/2 et cos(30°) = √3/2\nDonc sin(60°) + cos(30°) = √3/2 + √3/2 = √3",
      explanation: "Application des valeurs remarquables des fonctions trigonométriques",
      category: "Valeurs remarquables"
    },
    {
      id: "gt-2",
      title: "Identité fondamentale",
      difficulty: "Débutant" as const,
      points: 10,
      statement: "Sachant que sin(θ) = 3/5 et θ ∈ [0, π/2], calculer cos(θ) et tan(θ).",
      hint: "Utilisez l'identité cos²(θ) + sin²(θ) = 1",
      solution: "cos²(θ) = 1 - sin²(θ) = 1 - (3/5)² = 1 - 9/25 = 16/25\ncomme θ ∈ [0, π/2], cos(θ) > 0, donc cos(θ) = 4/5\ntan(θ) = sin(θ)/cos(θ) = (3/5)/(4/5) = 3/4",
      explanation: "Utilisation de l'identité trigonométrique fondamentale",
      category: "Identités"
    },
    {
      id: "gt-3",
      title: "Équations trigonométriques",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Résoudre sur [0, 2π] : 2sin(x) - 1 = 0",
      hint: "Isolez sin(x) puis utilisez les valeurs remarquables",
      solution: "2sin(x) - 1 = 0 ⟹ sin(x) = 1/2\nsin(x) = 1/2 ⟹ x = π/6 ou x = 5π/6\nSolutions : x ∈ {π/6, 5π/6}",
      explanation: "Résolution d'équation trigonométrique simple",
      category: "Équations"
    },
    {
      id: "gt-4",
      title: "Formules d'addition",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Calculer sin(75°) en utilisant sin(75°) = sin(45° + 30°).",
      hint: "Utilisez la formule sin(a+b) = sin(a)cos(b) + cos(a)sin(b)",
      solution: "sin(75°) = sin(45° + 30°)\n= sin(45°)cos(30°) + cos(45°)sin(30°)\n= (√2/2)(√3/2) + (√2/2)(1/2)\n= √6/4 + √2/4 = (√6 + √2)/4",
      explanation: "Application des formules d'addition trigonométriques",
      category: "Formules d'addition"
    },
    {
      id: "gt-5",
      title: "Transformations d'expressions",
      difficulty: "Intermédiaire" as const,
      points: 16,
      statement: "Simplifier l'expression : cos²(x) - sin²(x)",
      hint: "Utilisez les formules de duplication",
      solution: "cos²(x) - sin²(x) = cos(2x)\nC'est la formule de duplication du cosinus",
      explanation: "Reconnaissance et application des formules de duplication",
      category: "Duplication"
    },
    {
      id: "gt-6",
      title: "Résolution dans un triangle",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Dans un triangle ABC, a = 7, b = 5, et C = 60°. Calculer c et l'aire du triangle.",
      hint: "Utilisez la loi des cosinus puis la formule d'aire",
      solution: "Loi des cosinus : c² = a² + b² - 2ab cos(C)\nc² = 49 + 25 - 2×7×5×cos(60°) = 74 - 70×(1/2) = 39\nc = √39\nAire = (1/2)ab sin(C) = (1/2)×7×5×sin(60°) = (35√3)/4",
      explanation: "Application de la trigonométrie à la géométrie du triangle",
      category: "Triangles"
    },
    {
      id: "gt-7",
      title: "Fonctions trigonométriques inverses",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Calculer arcsin(√3/2) + arccos(1/2)",
      hint: "Trouvez les angles dont les sinus et cosinus valent ces valeurs",
      solution: "arcsin(√3/2) = π/3 (car sin(π/3) = √3/2)\narccos(1/2) = π/3 (car cos(π/3) = 1/2)\nDonc arcsin(√3/2) + arccos(1/2) = π/3 + π/3 = 2π/3",
      explanation: "Calcul avec les fonctions trigonométriques inverses",
      category: "Fonctions inverses"
    },
    {
      id: "gt-8",
      title: "Inéquations trigonométriques",
      difficulty: "Avancé" as const,
      points: 17,
      statement: "Résoudre sur [0, 2π] : cos(x) ≥ √2/2",
      hint: "Utilisez le cercle trigonométrique",
      solution: "cos(x) ≥ √2/2\ncos(x) = √2/2 pour x = π/4 et x = 7π/4\nSur [0, 2π], cos(x) ≥ √2/2 pour x ∈ [0, π/4] ∪ [7π/4, 2π]",
      explanation: "Résolution d'inéquation à l'aide du cercle trigonométrique",
      category: "Inéquations"
    },
    {
      id: "gt-9",
      title: "Somme trigonométrique",
      difficulty: "Avancé" as const,
      points: 19,
      statement: "Transformer en produit : sin(5x) + sin(3x)",
      hint: "Utilisez les formules de transformation somme-produit",
      solution: "sin(p) + sin(q) = 2sin((p+q)/2)cos((p-q)/2)\nsin(5x) + sin(3x) = 2sin((5x+3x)/2)cos((5x-3x)/2)\n= 2sin(4x)cos(x)",
      explanation: "Application des formules de transformation somme-produit",
      category: "Transformations"
    },
    {
      id: "gt-10",
      title: "Équation trigonométrique complexe",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Résoudre sur [0, 2π] : sin(2x) = cos(x)",
      hint: "Utilisez la formule sin(2x) = 2sin(x)cos(x)",
      solution: "sin(2x) = cos(x) ⟹ 2sin(x)cos(x) = cos(x)\n⟹ cos(x)(2sin(x) - 1) = 0\ncos(x) = 0 ⟹ x = π/2 ou x = 3π/2\n2sin(x) - 1 = 0 ⟹ sin(x) = 1/2 ⟹ x = π/6 ou x = 5π/6\nSolutions : x ∈ {π/6, π/2, 5π/6, 3π/2}",
      explanation: "Résolution d'équation trigonométrique par factorisation",
      category: "Équations complexes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/geometry">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la Géométrie
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-green-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Trigonométrie</h1>
              </div>
            </div>
            <Link to="/geometry/trigonometry/course">
              <Button variant="outline">
                Revoir le cours
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-green-600 to-green-800" />
      </div>
    </div>
  );
};

export default GeometryTrigonometryExercisePage;
