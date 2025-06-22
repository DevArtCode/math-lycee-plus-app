
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgorithmSimulationExercisePage = () => {
  const exercises = [
    {
      id: "as-1",
      title: "Estimation de π par Monte-Carlo",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Écrire un algorithme qui estime π en générant des points aléatoires dans un carré contenant un cercle.",
      hint: "Comptez les points à l'intérieur du cercle",
      solution: "ALGORITHME estimation_pi:\nn ← 1000000, compteur ← 0\nPOUR i DE 1 À n FAIRE\n  x ← random()*2 - 1\n  y ← random()*2 - 1\n  SI x²+y² ≤ 1 ALORS compteur ← compteur + 1\nFIN POUR\npi_estime ← 4 * compteur / n\nAfficher pi_estime",
      explanation: "Méthode de Monte-Carlo pour estimer π en utilisant la géométrie",
      category: "Simulation Monte-Carlo"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Simulation et Hasard</h1>
              </div>
            </div>
            <Link to="/algorithm/simulation/course">
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

export default AlgorithmSimulationExercisePage;
