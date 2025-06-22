
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgebraCalculusExercisePage = () => {
  const exercises = [
    {
      id: 1,
      title: "Identités remarquables - Niveau 1",
      difficulty: "Facile" as const,
      points: 5,
      statement: "Développer les expressions suivantes :",
      questions: [
        "(x + 3)²",
        "(2a - 1)²", 
        "(x - 4)(x + 4)"
      ]
    },
    {
      id: 2,
      title: "Factorisation simple",
      difficulty: "Facile" as const,
      points: 8,
      statement: "Factoriser les expressions suivantes :",
      questions: [
        "x² - 16",
        "4x² + 12x",
        "x² + 6x + 9"
      ]
    },
    {
      id: 3,
      title: "Applications aux équations",
      difficulty: "Moyen" as const,
      points: 12,
      statement: "Résoudre les équations en utilisant la factorisation :",
      questions: [
        "x² - 5x = 0",
        "x² - 9 = 0",
        "x² + 4x + 4 = 0"
      ]
    },
    {
      id: 4,
      title: "Problème d'optimisation",
      difficulty: "Difficile" as const,
      points: 15,
      statement: "Une entreprise a des coûts de production C(x) = x² + 10x + 25 euros pour x unités. Factoriser cette expression et déterminer le coût minimum.",
      questions: [
        "Factoriser C(x)",
        "Déterminer la valeur de x qui minimise le coût",
        "Calculer le coût minimum"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
                <Calculator className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Calcul algébrique</h1>
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

export default AlgebraCalculusExercisePage;
