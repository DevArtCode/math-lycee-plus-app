
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgorithmMathAppsExercisePage = () => {
  const exercises = [
    {
      id: "ama-1",
      title: "Méthode de dichotomie",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Implémenter la méthode de dichotomie pour trouver une racine de f(x) = x² - 2 sur [1,2].",
      hint: "Utilisez le théorème des valeurs intermédiaires",
      solution: "ALGORITHME dichotomie:\na ← 1, b ← 2, précision ← 0.001\nTANT QUE |b-a| > précision FAIRE\n  c ← (a+b)/2\n  SI f(a)*f(c) < 0 ALORS b ← c\n  SINON a ← c\n  FIN SI\nFIN TANT QUE\nAfficher (a+b)/2",
      explanation: "Implémentation de la méthode de dichotomie pour approximer √2",
      category: "Méthodes numériques"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Applications Mathématiques</h1>
              </div>
            </div>
            <Link to="/algorithm/math-apps/course">
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

export default AlgorithmMathAppsExercisePage;
