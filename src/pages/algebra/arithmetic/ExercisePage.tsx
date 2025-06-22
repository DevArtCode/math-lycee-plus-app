
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgebraArithmeticExercisePage = () => {
  const exercises = [
    {
      id: "1",
      title: "Division euclidienne - Niveau débutant",
      difficulty: "Débutant" as const,
      points: 5,
      statement: "Effectuer les divisions euclidiennes suivantes et donner le quotient et le reste :",
      hint: "Rappelez-vous que a = bq + r avec 0 ≤ r < b",
      solution: "23 ÷ 7 = 3 reste 2 (car 23 = 7×3 + 2)\n156 ÷ 13 = 12 reste 0 (car 156 = 13×12 + 0)\n89 ÷ 12 = 7 reste 5 (car 89 = 12×7 + 5)",
      explanation: "Pour chaque division, on cherche le plus grand multiple du diviseur qui ne dépasse pas le dividende. Le reste est ce qui manque pour atteindre le dividende.",
      category: "Division euclidienne"
    },
    {
      id: "2",
      title: "PGCD par l'algorithme d'Euclide",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Calculer le PGCD des couples suivants en utilisant l'algorithme d'Euclide :",
      hint: "L'algorithme d'Euclide : pgcd(a,b) = pgcd(b, a mod b)",
      solution: "pgcd(48, 18) :\n48 = 18×2 + 12\n18 = 12×1 + 6\n12 = 6×2 + 0\nDonc pgcd(48, 18) = 6\n\npgcd(126, 35) :\n126 = 35×3 + 21\n35 = 21×1 + 14\n21 = 14×1 + 7\n14 = 7×2 + 0\nDonc pgcd(126, 35) = 7",
      explanation: "L'algorithme d'Euclide est basé sur le fait que pgcd(a,b) = pgcd(b, r) où r est le reste de la division de a par b. On continue jusqu'à obtenir un reste nul.",
      category: "PGCD"
    },
    {
      id: "3",
      title: "Identité de Bézout",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Trouver les coefficients de Bézout pour les couples suivants :",
      hint: "Utilisez l'algorithme d'Euclide étendu en remontant les calculs",
      solution: "Pour pgcd(15, 10) = 5 :\n15 = 10×1 + 5\n10 = 5×2 + 0\nEn remontant : 5 = 15 - 10×1\nDonc 15×1 + 10×(-1) = 5\nCoefficients : u = 1, v = -1",
      explanation: "L'identité de Bézout garantit l'existence de coefficients u et v tels que au + bv = pgcd(a,b). On les trouve en remontant l'algorithme d'Euclide.",
      category: "Identité de Bézout"
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
        <ExerciseList exercises={exercises} color="from-green-600 to-emerald-600" />
      </div>
    </div>
  );
};

export default AlgebraArithmeticExercisePage;
