
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const ProbabilityContinuousExercisePage = () => {
  const exercises = [
    {
      id: "pc-1",
      title: "Loi uniforme - Probabilité",
      difficulty: "Débutant" as const,
      points: 10,
      statement: "X suit une loi uniforme sur [0,10]. Calculer P(3 ≤ X ≤ 7).",
      hint: "Pour une loi uniforme, P(a ≤ X ≤ b) = (b-a)/(d-c)",
      solution: "X ~ U[0,10]\nP(3 ≤ X ≤ 7) = (7-3)/(10-0) = 4/10 = 0.4",
      explanation: "P(3 ≤ X ≤ 7) = (7-3)/(10-0) = 4/10 = 0.4",
      category: "Loi uniforme"
    },
    {
      id: "pc-2",
      title: "Loi uniforme - Espérance",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Pour X ~ Uniforme[0,10], calculer E(X).",
      hint: "E(X) = (a+b)/2 pour une loi uniforme sur [a,b]",
      solution: "X ~ U[0,10]\nE(X) = (a+b)/2 = (0+10)/2 = 5",
      explanation: "E(X) = (a+b)/2 = (0+10)/2 = 5",
      category: "Loi uniforme"
    },
    {
      id: "pc-3",
      title: "Loi uniforme - Variance",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Pour X ~ Uniforme[0,10], calculer V(X).",
      hint: "V(X) = (b-a)²/12 pour une loi uniforme sur [a,b]",
      solution: "X ~ U[0,10]\nV(X) = (b-a)²/12 = (10-0)²/12 = 100/12 = 25/3",
      explanation: "V(X) = (b-a)²/12 = (10-0)²/12 = 100/12",
      category: "Loi uniforme"
    },
    {
      id: "pc-4",
      title: "Loi normale centrée réduite",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Si Z ~ N(0,1), exprimer P(-1 ≤ Z ≤ 1) en fonction de Φ.",
      hint: "Utilisez la symétrie de la loi normale",
      solution: "Z ~ N(0,1)\nP(-1 ≤ Z ≤ 1) = Φ(1) - Φ(-1) = Φ(1) - (1 - Φ(1)) = 2Φ(1) - 1",
      explanation: "P(-1 ≤ Z ≤ 1) = Φ(1) - Φ(-1). Par symétrie, Φ(-1) = 1 - Φ(1), donc P = 2Φ(1) - 1",
      category: "Loi normale"
    },
    {
      id: "pc-5",
      title: "Loi normale générale",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Si X ~ N(10, 4), calculer P(8 ≤ X ≤ 12) en fonction de Φ.",
      hint: "Centrez et réduisez : Z = (X - μ)/σ",
      solution: "X ~ N(10, 4), donc μ = 10, σ² = 4, σ = 2\nZ = (X - 10)/2 ~ N(0,1)\nP(8 ≤ X ≤ 12) = P((8-10)/2 ≤ Z ≤ (12-10)/2) = P(-1 ≤ Z ≤ 1) = Φ(1) - Φ(-1)",
      explanation: "On centre et réduit : Z = (X-10)/2. Alors P(8 ≤ X ≤ 12) = P(-1 ≤ Z ≤ 1) = Φ(1) - Φ(-1)",
      category: "Loi normale"
    },
    {
      id: "pc-6",
      title: "Loi exponentielle - Probabilité",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "X suit une loi exponentielle de paramètre λ = 2. Calculer P(X > 1).",
      hint: "P(X > t) = e^(-λt) pour une loi exponentielle",
      solution: "X ~ Exp(2)\nP(X > 1) = e^(-λt) = e^(-2×1) = e^(-2)",
      explanation: "Pour une loi exponentielle Exp(λ), P(X > t) = e^(-λt) = e^(-2×1) = e^(-2)",
      category: "Loi exponentielle"
    },
    {
      id: "pc-7",
      title: "Loi exponentielle - Espérance",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Pour X ~ Exp(λ), exprimer E(X) en fonction de λ.",
      hint: "L'espérance d'une loi exponentielle est l'inverse du paramètre",
      solution: "X ~ Exp(λ)\nE(X) = 1/λ",
      explanation: "Pour une loi exponentielle Exp(λ), E(X) = 1/λ",
      category: "Loi exponentielle"
    },
    {
      id: "pc-8",
      title: "Densité de probabilité",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Soit f(x) = kx² sur [0,2] et 0 ailleurs. Déterminer k pour que f soit une densité.",
      hint: "∫ f(x)dx = 1 sur tout ℝ",
      solution: "∫₀² kx² dx = 1\nk[x³/3]₀² = 1\nk × 8/3 = 1\nk = 3/8",
      explanation: "Pour que f soit une densité : ∫₀² kx² dx = k[x³/3]₀² = k×8/3 = 1, donc k = 3/8",
      category: "Densité"
    },
    {
      id: "pc-9",
      title: "Fonction de répartition",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Pour la densité f(x) = 3x²/8 sur [0,2], calculer la fonction de répartition F(x).",
      hint: "F(x) = ∫₋∞ˣ f(t)dt",
      solution: "Pour x ∈ [0,2] :\nF(x) = ∫₀ˣ (3t²/8) dt = (3/8)[t³/3]₀ˣ = (3/8) × x³/3 = x³/8\n\nDonc :\n- F(x) = 0 si x < 0\n- F(x) = x³/8 si 0 ≤ x ≤ 2\n- F(x) = 1 si x > 2",
      explanation: "F(x) = ∫₀ˣ (3t²/8) dt = x³/8 pour x ∈ [0,2]",
      category: "Fonction de répartition"
    },
    {
      id: "pc-10",
      title: "Propriété sans mémoire",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Démontrer que la loi exponentielle vérifie la propriété sans mémoire : P(X > s+t | X > s) = P(X > t).",
      hint: "Utilisez la définition de la probabilité conditionnelle",
      solution: "P(X > s+t | X > s) = P(X > s+t ∩ X > s) / P(X > s) = P(X > s+t) / P(X > s)\n= e^(-λ(s+t)) / e^(-λs) = e^(-λt) = P(X > t)",
      explanation: "P(X > s+t | X > s) = P(X > s+t)/P(X > s) = e^(-λ(s+t))/e^(-λs) = e^(-λt) = P(X > t)",
      category: "Propriétés"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Lois continues</h1>
              </div>
            </div>
            <Link to="/probability/continuous/course">
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
            Testez vos connaissances avec notre QCM de 10 questions sur les lois continues.
          </p>
          <Link to="/probability/continuous/qcm">
            <Button className="bg-gradient-to-r from-orange-600 to-orange-800">
              Commencer le QCM
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProbabilityContinuousExercisePage;
