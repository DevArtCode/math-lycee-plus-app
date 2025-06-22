
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgebraSequencesExercisePage = () => {
  const exercises = [
    {
      id: 1,
      title: "Reconnaissance de suites",
      difficulty: "Facile" as const,
      points: 5,
      statement: "Déterminer si les suites suivantes sont arithmétiques, géométriques ou ni l'une ni l'autre :",
      questions: [
        "1, 4, 7, 10, 13, ...",
        "2, 6, 18, 54, 162, ...",
        "1, 4, 9, 16, 25, ..."
      ]
    },
    {
      id: 2,
      title: "Calcul de termes",
      difficulty: "Moyen" as const,
      points: 10,
      statement: "Pour les suites définies ci-dessous, calculer les termes demandés :",
      questions: [
        "u_n = 3 + 2n, calculer u_10",
        "v_n = 5 × 3^n, calculer v_4",
        "w_n = 2n² - 1, calculer w_5"
      ]
    },
    {
      id: 3,
      title: "Sommes de suites",
      difficulty: "Difficile" as const,
      points: 15,
      statement: "Calculer les sommes suivantes :",
      questions: [
        "S = 2 + 5 + 8 + ... + 32 (suite arithmétique)",
        "T = 1 + 3 + 9 + 27 + ... + 243 (suite géométrique)",
        "Application : Un placement rapporte 1000€ la première année, puis 5% de plus chaque année. Quel est le gain total sur 10 ans ?"
      ]
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
        <ExerciseList exercises={exercises} />
      </div>
    </div>
  );
};

export default AlgebraSequencesExercisePage;
