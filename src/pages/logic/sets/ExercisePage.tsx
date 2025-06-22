
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const LogicSetsExercisePage = () => {
  const exercises = [
    {
      id: "ls-1",
      title: "Opérations sur les ensembles",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Soit A = {1, 2, 3} et B = {2, 3, 4}. Calculer A ∪ B et A ∩ B.",
      hint: "L'union contient tous les éléments, l'intersection les éléments communs",
      solution: "A ∪ B = {1, 2, 3, 4}\nA ∩ B = {2, 3}",
      explanation: "Application directe des définitions d'union et d'intersection",
      category: "Opérations ensemblistes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/logic">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la Logique
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-purple-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Théorie des Ensembles</h1>
              </div>
            </div>
            <Link to="/logic/sets/course">
              <Button variant="outline">
                Revoir le cours
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-purple-600 to-purple-800" />
      </div>
    </div>
  );
};

export default LogicSetsExercisePage;
