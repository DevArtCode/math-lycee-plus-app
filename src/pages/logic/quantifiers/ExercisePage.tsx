
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const LogicQuantifiersExercisePage = () => {
  const exercises = [
    {
      id: "lq-1",
      title: "Négation de quantificateurs",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Écrire la négation de : ∀x ∈ ℝ, x² ≥ 0",
      hint: "La négation de ∀ est ∃ avec négation du prédicat",
      solution: "¬(∀x ∈ ℝ, x² ≥ 0) = ∃x ∈ ℝ, ¬(x² ≥ 0) = ∃x ∈ ℝ, x² < 0",
      explanation: "Règle de négation des quantificateurs universels",
      category: "Négation"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Quantificateurs</h1>
              </div>
            </div>
            <Link to="/logic/quantifiers/course">
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

export default LogicQuantifiersExercisePage;
