
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const GeometrySpaceExercisePage = () => {
  const exercises = [
    {
      id: "gs-1",
      title: "Distance dans l'espace",
      difficulty: "Débutant" as const,
      points: 10,
      statement: "Calculer la distance entre les points A(1, 2, 3) et B(4, 6, 2).",
      hint: "Utilisez la formule de la distance dans l'espace",
      solution: "AB = √[(4-1)² + (6-2)² + (2-3)²] = √[9 + 16 + 1] = √26",
      explanation: "Application directe de la formule de distance dans l'espace",
      category: "Coordonnées 3D"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Géométrie dans l'Espace</h1>
              </div>
            </div>
            <Link to="/geometry/space/course">
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

export default GeometrySpaceExercisePage;
