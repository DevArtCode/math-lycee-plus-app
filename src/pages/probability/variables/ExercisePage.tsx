
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const ProbabilityVariablesExercisePage = () => {
  const exercises = [
    {
      id: "pv-1",
      title: "Espérance d'une variable discrète",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Soit X une variable aléatoire avec P(X=1)=0.3, P(X=2)=0.5, P(X=3)=0.2. Calculer E(X).",
      hint: "E(X) = Σ xi × P(X = xi)",
      solution: "E(X) = 1×0.3 + 2×0.5 + 3×0.2 = 0.3 + 1.0 + 0.6 = 1.9",
      explanation: "E(X) = 1×0.3 + 2×0.5 + 3×0.2 = 0.3 + 1.0 + 0.6 = 1.9",
      category: "Espérance"
    },
    {
      id: "pv-2",
      title: "Variance d'une variable discrète",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Pour la même variable X (E(X) = 1.9), calculer V(X).",
      hint: "V(X) = E(X²) - [E(X)]²",
      solution: "E(X²) = 1²×0.3 + 2²×0.5 + 3²×0.2 = 0.3 + 2.0 + 1.8 = 4.1\nV(X) = E(X²) - [E(X)]² = 4.1 - 1.9² = 4.1 - 3.61 = 0.49",
      explanation: "E(X²) = 1²×0.3 + 2²×0.5 + 3²×0.2 = 0.3 + 2.0 + 1.8 = 4.1. V(X) = 4.1 - 1.9² = 4.1 - 3.61 = 0.49",
      category: "Variance"
    },
    {
      id: "pv-3",
      title: "Loi binomiale - Espérance",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "X suit une loi binomiale B(20, 0.3). Calculer E(X).",
      hint: "Pour B(n,p), E(X) = np",
      solution: "X ~ B(20, 0.3)\nE(X) = np = 20 × 0.3 = 6",
      explanation: "Pour B(n,p), E(X) = np = 20 × 0.3 = 6",
      category: "Loi binomiale"
    },
    {
      id: "pv-4",
      title: "Loi binomiale - Variance",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Pour X ~ B(20, 0.3), calculer V(X).",
      hint: "Pour B(n,p), V(X) = np(1-p)",
      solution: "X ~ B(20, 0.3)\nV(X) = np(1-p) = 20 × 0.3 × 0.7 = 4.2",
      explanation: "Pour B(n,p), V(X) = np(1-p) = 20 × 0.3 × 0.7 = 4.2",
      category: "Loi binomiale"
    },
    {
      id: "pv-5",
      title: "Probabilité binomiale exacte",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "On lance 100 fois une pièce équilibrée. Exprimer la probabilité d'obtenir exactement 50 faces.",
      hint: "Utilisez la formule binomiale",
      solution: "X ~ B(100, 0.5)\nP(X = 50) = C(100,50) × (0.5)⁵⁰ × (0.5)⁵⁰ = C(100,50) × (0.5)¹⁰⁰ = C(100,50)/2¹⁰⁰",
      explanation: "X ~ B(100, 0.5). P(X=50) = C(100,50) × (0.5)⁵⁰ × (0.5)⁵⁰ = C(100,50)/2¹⁰⁰",
      category: "Loi binomiale"
    },
    {
      id: "pv-6",
      title: "Linéarité de l'espérance",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Si E(X) = 5 et V(X) = 4, calculer E(2X + 3).",
      hint: "E(aX + b) = aE(X) + b",
      solution: "E(2X + 3) = 2E(X) + 3 = 2×5 + 3 = 13",
      explanation: "E(2X + 3) = 2E(X) + 3 = 2×5 + 3 = 13",
      category: "Propriétés"
    },
    {
      id: "pv-7",
      title: "Variance d'une transformation",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Avec les mêmes données (V(X) = 4), calculer V(2X + 3).",
      hint: "V(aX + b) = a²V(X)",
      solution: "V(2X + 3) = 2²V(X) = 4×4 = 16",
      explanation: "V(2X + 3) = 2²V(X) = 4×4 = 16",
      category: "Propriétés"
    },
    {
      id: "pv-8",
      title: "Dé truqué",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Un dé est truqué : P(6) = 0.4, les autres faces ont probabilité égale. Calculer P(1).",
      hint: "La somme des probabilités doit être 1",
      solution: "Soit p = P(1) = P(2) = P(3) = P(4) = P(5)\n5p + 0.4 = 1\n5p = 0.6\np = 0.12",
      explanation: "P(1) + ... + P(5) + P(6) = 1. Soit 5×P(1) + 0.4 = 1, donc P(1) = 0.6/5 = 0.12",
      category: "Loi de probabilité"
    },
    {
      id: "pv-9",
      title: "QCM au hasard",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Dans un QCM de 10 questions à 4 choix, en répondant au hasard, combien de bonnes réponses espère-t-on ?",
      hint: "Chaque question suit une loi de Bernoulli",
      solution: "Chaque question : p = 1/4 de réussir\nX ~ B(10, 1/4)\nE(X) = 10 × 1/4 = 2.5",
      explanation: "X ~ B(10, 0.25). E(X) = 10 × 0.25 = 2.5",
      category: "Applications"
    },
    {
      id: "pv-10",
      title: "Variables indépendantes",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "X et Y sont indépendantes avec E(X) = 3, E(Y) = 4, V(X) = 2, V(Y) = 5. Calculer V(X + Y).",
      hint: "Pour des variables indépendantes, V(X + Y) = V(X) + V(Y)",
      solution: "X et Y indépendantes ⟹ V(X + Y) = V(X) + V(Y) = 2 + 5 = 7",
      explanation: "X et Y indépendantes ⟹ V(X + Y) = V(X) + V(Y) = 2 + 5 = 7",
      category: "Variables multiples"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/probability">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux Probabilités
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-orange-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Variables aléatoires</h1>
              </div>
            </div>
            <Link to="/probability/variables/course">
              <Button variant="outline">
                Revoir le cours
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-orange-600 to-orange-800" />
        
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6 border-2 border-orange-200">
          <h3 className="text-xl font-bold text-orange-900 mb-4">🎯 QCM - Test de connaissances</h3>
          <p className="text-slate-600 mb-4">
            Testez vos connaissances avec notre QCM de 10 questions sur les variables aléatoires.
          </p>
          <Link to="/probability/variables/qcm">
            <Button className="bg-gradient-to-r from-orange-600 to-orange-800">
              Commencer le QCM
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProbabilityVariablesExercisePage;
