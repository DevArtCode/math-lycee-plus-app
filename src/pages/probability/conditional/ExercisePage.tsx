
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const ProbabilityConditionalExercisePage = () => {
  const exercises = [
    {
      id: "pc-1",
      title: "Probabilité conditionnelle simple",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Dans une classe, 60% des élèves sont des filles. Parmi les filles, 80% portent des lunettes. Calculer la probabilité qu'un élève choisi au hasard soit une fille portant des lunettes.",
      hint: "Utilisez la formule P(A ∩ B) = P(A) × P(B|A)",
      solution: "P(Fille) = 0,60\nP(Lunettes|Fille) = 0,80\nP(Fille ∩ Lunettes) = P(Fille) × P(Lunettes|Fille) = 0,60 × 0,80 = 0,48",
      explanation: "P(Fille ∩ Lunettes) = P(Fille) × P(Lunettes|Fille) = 0.60 × 0.80 = 0.48",
      category: "Probabilité conditionnelle"
    },
    {
      id: "pc-2",
      title: "Probabilité conditionnelle avec dés",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "On lance deux dés. Sachant que la somme est supérieure à 8, calculer la probabilité que le premier dé montre 6.",
      hint: "Calculez d'abord P(somme > 8) puis P(premier dé = 6 ET somme > 8)",
      solution: "Cas où somme > 8 : (3,6), (4,5), (4,6), (5,4), (5,5), (5,6), (6,3), (6,4), (6,5), (6,6) → 10 cas\nCas où premier dé = 6 ET somme > 8 : (6,3), (6,4), (6,5), (6,6) → 4 cas\nP(premier = 6 | somme > 8) = 4/10 = 2/5",
      explanation: "Cas où somme > 8 : 10 cas. Cas où premier dé = 6 ET somme > 8 : 4 cas. P = 4/10",
      category: "Probabilité conditionnelle"
    },
    {
      id: "pc-3",
      title: "Test d'indépendance",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Soit P(A) = 0,4, P(B) = 0,6 et P(A ∩ B) = 0,3. Les événements A et B sont-ils indépendants ?",
      hint: "Vérifiez si P(A ∩ B) = P(A) × P(B)",
      solution: "Pour l'indépendance : P(A ∩ B) = P(A) × P(B)\nP(A) × P(B) = 0,4 × 0,6 = 0,24\nOr P(A ∩ B) = 0,3 ≠ 0,24\nDonc A et B ne sont pas indépendants",
      explanation: "Si indépendants : P(A ∩ B) = P(A) × P(B) = 0.4 × 0.6 = 0.24 ≠ 0.3. Donc non indépendants.",
      category: "Indépendance"
    },
    {
      id: "pc-4",
      title: "Tirage avec remise",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Dans une urne, 30% des boules sont rouges. On tire 2 boules avec remise. Calculer la probabilité que les deux soient rouges.",
      hint: "Avec remise, les tirages sont indépendants",
      solution: "Avec remise, les tirages sont indépendants\nP(1ère rouge) = 0,30\nP(2ème rouge) = 0,30\nP(deux rouges) = 0,30 × 0,30 = 0,09",
      explanation: "Avec remise, les tirages sont indépendants. P = 0.30 × 0.30 = 0.09",
      category: "Indépendance"
    },
    {
      id: "pc-5",
      title: "Application médicale",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Un test médical détecte une maladie dans 95% des cas si elle est présente. Si P(malade) = 0,01, calculer P(test positif et malade).",
      hint: "Utilisez P(A ∩ B) = P(A) × P(B|A)",
      solution: "P(malade) = 0,01\nP(test positif | malade) = 0,95\nP(test positif ∩ malade) = P(malade) × P(test positif | malade) = 0,01 × 0,95 = 0,0095",
      explanation: "P(test+ ∩ malade) = P(malade) × P(test+|malade) = 0.01 × 0.95 = 0.0095",
      category: "Applications"
    },
    {
      id: "pc-6",
      title: "Calcul d'intersection",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Si P(A|B) = 0,8 et P(B) = 0,3, calculer P(A ∩ B).",
      hint: "Utilisez la définition de la probabilité conditionnelle",
      solution: "P(A|B) = P(A ∩ B) / P(B)\nDonc P(A ∩ B) = P(A|B) × P(B) = 0,8 × 0,3 = 0,24",
      explanation: "P(A ∩ B) = P(A|B) × P(B) = 0.8 × 0.3 = 0.24",
      category: "Probabilité conditionnelle"
    },
    {
      id: "pc-7",
      title: "Événements indépendants",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Deux événements A et B vérifient P(A) = P(B) = 0,5 et sont indépendants. Calculer P(A ∪ B).",
      hint: "Si indépendants, P(A ∩ B) = P(A) × P(B)",
      solution: "A et B indépendants ⟹ P(A ∩ B) = P(A) × P(B) = 0,5 × 0,5 = 0,25\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0,5 + 0,5 - 0,25 = 0,75",
      explanation: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.5 + 0.5 - (0.5 × 0.5) = 0.75",
      category: "Indépendance"
    },
    {
      id: "pc-8",
      title: "Loi binomiale",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Dans un sac, 40% des billes sont bleues, 60% rouges. On en tire 3 avec remise. Calculer la probabilité d'avoir exactement 2 bleues.",
      hint: "Utilisez la formule binomiale",
      solution: "X ~ B(3, 0,4)\nP(X = 2) = C(3,2) × (0,4)² × (0,6)¹ = 3 × 0,16 × 0,6 = 0,288",
      explanation: "C(3,2) × (0.4)² × (0.6)¹ = 3 × 0.16 × 0.6 = 0.288",
      category: "Loi binomiale"
    },
    {
      id: "pc-9",
      title: "Caractérisation de l'indépendance",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Montrer que si P(A|B) = P(A), alors A et B sont indépendants.",
      hint: "Utilisez la définition de la probabilité conditionnelle",
      solution: "P(A|B) = P(A ∩ B) / P(B)\nSi P(A|B) = P(A), alors :\nP(A ∩ B) / P(B) = P(A)\nDonc P(A ∩ B) = P(A) × P(B)\nCeci est la définition de l'indépendance",
      explanation: "P(A|B) = P(A) signifie que B n'influence pas A, donc A et B sont indépendants.",
      category: "Indépendance"
    },
    {
      id: "pc-10",
      title: "Probabilité de plusieurs événements",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Une machine produit 2% de pièces défectueuses. On teste 100 pièces. Calculer la probabilité qu'aucune ne soit défectueuse.",
      hint: "Les contrôles sont indépendants",
      solution: "Chaque pièce a une probabilité 0,98 d'être bonne\nLes contrôles sont indépendants\nP(aucune défectueuse) = (0,98)¹⁰⁰",
      explanation: "Chaque pièce a 0.98 de probabilité d'être bonne. Pour 100 pièces indépendantes : (0.98)¹⁰⁰",
      category: "Indépendance"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Probabilités conditionnelles</h1>
              </div>
            </div>
            <Link to="/probability/conditional/course">
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
            Testez vos connaissances avec notre QCM de 10 questions sur les probabilités conditionnelles.
          </p>
          <Link to="/probability/conditional/qcm">
            <Button className="bg-gradient-to-r from-orange-600 to-orange-800">
              Commencer le QCM
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProbabilityConditionalExercisePage;
