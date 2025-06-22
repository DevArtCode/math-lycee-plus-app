
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgebraSequencesExercisePage = () => {
  const exercises = [
    {
      id: "1",
      title: "Reconnaissance de suites",
      difficulty: "Débutant" as const,
      points: 5,
      statement: "Déterminer si les suites suivantes sont arithmétiques, géométriques ou ni l'une ni l'autre :",
      hint: "Vérifiez si la différence (arithmétique) ou le rapport (géométrique) est constant",
      solution: "1, 4, 7, 10, 13, ... → Arithmétique (raison r = 3)\n2, 6, 18, 54, 162, ... → Géométrique (raison q = 3)\n1, 4, 9, 16, 25, ... → Ni l'une ni l'autre (carrés parfaits)",
      explanation: "Pour identifier le type de suite, on calcule les différences ou les rapports entre termes consécutifs.",
      category: "Types de suites"
    },
    {
      id: "2",
      title: "Calcul de termes",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Pour les suites définies ci-dessous, calculer les termes demandés :",
      hint: "Utilisez les formules : u_n = u_0 + nr (arithmétique) et u_n = u_0 × q^n (géométrique)",
      solution: "u_n = 3 + 2n, calculer u_10 :\nu_10 = 3 + 2×10 = 23\n\nv_n = 5 × 3^n, calculer v_4 :\nv_4 = 5 × 3^4 = 5 × 81 = 405\n\nw_n = 2n² - 1, calculer w_5 :\nw_5 = 2×5² - 1 = 2×25 - 1 = 49",
      explanation: "On applique directement les formules en substituant la valeur de n.",
      category: "Calcul de termes"
    },
    {
      id: "3",
      title: "Sommes de suites",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Calculer les sommes suivantes et résoudre le problème d'application :",
      hint: "Utilisez les formules de somme pour les suites arithmétiques et géométriques",
      solution: "S = 2 + 5 + 8 + ... + 32 (arithmétique, r=3)\nPremier terme: 2, dernier: 32\n32 = 2 + 3n → n = 10, donc 11 termes\nS = 11×(2+32)/2 = 11×17 = 187\n\nT = 1 + 3 + 9 + 27 + ... + 243 (géométrique, q=3)\n243 = 3^5, donc 6 termes (de 3^0 à 3^5)\nT = (1-3^6)/(1-3) = (1-729)/(-2) = 364\n\nPlacement: 1000€ première année, +5% chaque année\nC_n = 1000×(1.05)^n\nGain total sur 10 ans = Σ C_n = 1000×Σ(1.05)^n\n= 1000×(1.05)×(1.05^10-1)/(1.05-1) ≈ 13,207€",
      explanation: "Pour les suites arithmétiques, on utilise S_n = n(premier+dernier)/2. Pour les géométriques, S_n = premier×(1-q^n)/(1-q).",
      category: "Sommes et applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/algebra">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à l'Algèbre
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Suites numériques</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-purple-600 to-pink-600" />
      </div>
    </div>
  );
};

export default AlgebraSequencesExercisePage;
