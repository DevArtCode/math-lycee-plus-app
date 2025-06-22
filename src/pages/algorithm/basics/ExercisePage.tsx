
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgorithmBasicsExercisePage = () => {
  const exercises = [
    {
      id: "ab-1",
      title: "Structure conditionnelle",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Écrire un algorithme qui détermine si un nombre est positif, négatif ou nul.",
      hint: "Utilisez des structures if/else",
      solution: "ALGORITHME:\nSaisir n\nSI n > 0 ALORS\n  Afficher 'positif'\nSINON SI n < 0 ALORS\n  Afficher 'négatif'\nSINON\n  Afficher 'nul'\nFIN SI",
      explanation: "Utilisation des structures conditionnelles pour classifier un nombre",
      category: "Structures conditionnelles"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Algorithmes de Base</h1>
              </div>
            </div>
            <Link to="/algorithm/basics/course">
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

export default AlgorithmBasicsExercisePage;
