
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgebraCalculusExercisePage = () => {
  const exercises = [
    {
      id: "1",
      title: "Identités remarquables - Niveau 1",
      difficulty: "Débutant" as const,
      points: 5,
      statement: "Développer les expressions suivantes en utilisant les identités remarquables :",
      hint: "Utilisez (a±b)² = a² ± 2ab + b² et (a-b)(a+b) = a² - b²",
      solution: "(x + 3)² = x² + 6x + 9\n(2a - 1)² = 4a² - 4a + 1\n(x - 4)(x + 4) = x² - 16",
      explanation: "Pour le carré d'une somme/différence, on applique la formule directement. Pour le dernier, c'est une différence de carrés.",
      category: "Identités remarquables"
    },
    {
      id: "2",
      title: "Factorisation simple",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Factoriser les expressions suivantes :",
      hint: "Cherchez d'abord les facteurs communs, puis les identités remarquables",
      solution: "x² - 16 = (x - 4)(x + 4)\n4x² + 12x = 4x(x + 3)\nx² + 6x + 9 = (x + 3)²",
      explanation: "La première est une différence de carrés, la deuxième a un facteur commun 4x, la troisième est un carré parfait.",
      category: "Factorisation"
    },
    {
      id: "3",
      title: "Applications aux équations",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Résoudre les équations en utilisant la factorisation :",
      hint: "Factorisez d'abord, puis utilisez la règle du produit nul",
      solution: "x² - 5x = 0\nx(x - 5) = 0\nDonc x = 0 ou x = 5\n\nx² - 9 = 0\n(x - 3)(x + 3) = 0\nDonc x = 3 ou x = -3\n\nx² + 4x + 4 = 0\n(x + 2)² = 0\nDonc x = -2 (racine double)",
      explanation: "Après factorisation, on utilise la propriété : si ab = 0, alors a = 0 ou b = 0.",
      category: "Équations"
    },
    {
      id: "4",
      title: "Problème d'optimisation",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Une entreprise a des coûts de production C(x) = x² + 10x + 25 euros pour x unités. Factoriser cette expression et déterminer le coût minimum.",
      hint: "Reconnaissez la forme d'un carré parfait",
      solution: "C(x) = x² + 10x + 25 = (x + 5)²\nLe coût minimum est 0 pour x = -5\nMais x ≥ 0 en pratique, donc le minimum sur [0, +∞[ est C(0) = 25 euros",
      explanation: "La factorisation révèle que la fonction a un minimum en x = -5, mais dans le contexte économique, x doit être positif.",
      category: "Applications"
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
        <ExerciseList exercises={exercises} color="from-blue-600 to-cyan-600" />
      </div>
    </div>
  );
};

export default AlgebraCalculusExercisePage;
