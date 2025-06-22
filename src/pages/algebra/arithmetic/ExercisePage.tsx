
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgebraArithmeticExercisePage = () => {
  const exercises = [
    {
      id: 1,
      title: "Division euclidienne",
      difficulty: "Facile" as const,
      points: 5,
      statement: "Effectuer les divisions euclidiennes suivantes :",
      questions: [
        "23 divisé par 7",
        "156 divisé par 13",
        "89 divisé par 12"
      ]
    },
    {
      id: 2,
      title: "PGCD par l'algorithme d'Euclide",
      difficulty: "Moyen" as const,
      points: 10,
      statement: "Calculer le PGCD des couples suivants :",
      questions: [
        "pgcd(48, 18)",
        "pgcd(126, 35)",
        "pgcd(91, 65)"
      ]
    },
    {
      id: 3,
      title: "Identité de Bézout",
      difficulty: "Difficile" as const,
      points: 15,
      statement: "Trouver les coefficients de Bézout pour :",
      questions: [
        "15u + 10v = pgcd(15, 10)",
        "21u + 14v = pgcd(21, 14)",
        "Vérifier vos résultats"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
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
                <Hash className="w-6 h-6 text-green-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Arithmétique</h1>
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

export default AlgebraArithmeticExercisePage;
