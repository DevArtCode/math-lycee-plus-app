
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const GeometryTrigonometryExercisePage = () => {
  const exercises = [
    {
      id: "gt-1",
      title: "Calculs trigonométriques",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Calculer sin(60°) + cos(30°)",
      hint: "Utilisez les valeurs remarquables",
      solution: "sin(60°) = √3/2 et cos(30°) = √3/2\nDonc sin(60°) + cos(30°) = √3/2 + √3/2 = √3",
      explanation: "Application des valeurs remarquables des fonctions trigonométriques",
      category: "Valeurs remarquables"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/geometry">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la Géométrie
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-green-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Trigonométrie</h1>
              </div>
            </div>
            <Link to="/geometry/trigonometry/course">
              <Button variant="outline">
                Revoir le cours
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-green-600 to-green-800" />
      </div>
    </div>
  );
};

export default GeometryTrigonometryExercisePage;
