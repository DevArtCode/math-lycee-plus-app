
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgorithmFunctionsExercisePage = () => {
  const exercises = [
    {
      id: "af-1",
      title: "Fonction factorielle",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Écrire une fonction qui calcule la factorielle d'un nombre n.",
      hint: "Utilisez une boucle ou la récursivité",
      solution: "FONCTION factorielle(n : entier) : entier\n  SI n ≤ 1 ALORS\n    RETOURNER 1\n  SINON\n    RETOURNER n * factorielle(n-1)\n  FIN SI\nFIN FONCTION",
      explanation: "Implémentation récursive de la fonction factorielle",
      category: "Fonctions récursives"
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
                <Target className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Fonctions et Procédures</h1>
              </div>
            </div>
            <Link to="/algorithm/functions/course">
              <Button variant="outline">
                Revoir le cours
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-blue-600 to-blue-800" />
      </div>
    </div>
  );
};

export default AlgorithmFunctionsExercisePage;
