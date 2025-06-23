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
    },
    {
      id: "5",
      title: "Développement de polynômes complexes",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Développer et réduire :\na) (2x - 3)(x² + x - 1)\nb) (x + 1)³\nc) (x - 2y + 3z)²",
      hint: "Utilisez la distributivité et les identités remarquables",
      solution: "a) (2x - 3)(x² + x - 1) = 2x³ + 2x² - 2x - 3x² - 3x + 3 = 2x³ - x² - 5x + 3\n\nb) (x + 1)³ = x³ + 3x² + 3x + 1\n\nc) (x - 2y + 3z)² = x² + 4y² + 9z² - 4xy + 6xz - 12yz",
      explanation: "Pour a), distribuez chaque terme. Pour b), utilisez (a+b)³ = a³ + 3a²b + 3ab² + b³. Pour c), développez terme à terme.",
      category: "Développement"
    },
    {
      id: "6",
      title: "Factorisation avancée",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Factoriser complètement :\na) x⁴ - 1\nb) x³ - 8\nc) 2x³ + 16",
      hint: "Utilisez les formules a³ ± b³ et les différences de carrés",
      solution: "a) x⁴ - 1 = (x²)² - 1² = (x² - 1)(x² + 1) = (x - 1)(x + 1)(x² + 1)\n\nb) x³ - 8 = x³ - 2³ = (x - 2)(x² + 2x + 4)\n\nc) 2x³ + 16 = 2(x³ + 8) = 2(x³ + 2³) = 2(x + 2)(x² - 2x + 4)",
      explanation: "Reconnaître les structures : différence de puissances paires, somme/différence de cubes.",
      category: "Factorisation avancée"
    },
    {
      id: "7",
      title: "Équations du second degré par factorisation",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Résoudre par factorisation :\na) 2x² - 5x - 3 = 0\nb) x² - 6x + 9 = 0\nc) -x² + 4x - 4 = 0",
      hint: "Cherchez les facteurs du produit ac qui s'additionnent pour donner b",
      solution: "a) 2x² - 5x - 3 = (2x + 1)(x - 3) = 0\nDonc x = -1/2 ou x = 3\n\nb) x² - 6x + 9 = (x - 3)² = 0\nDonc x = 3 (racine double)\n\nc) -x² + 4x - 4 = -(x² - 4x + 4) = -(x - 2)² = 0\nDonc x = 2 (racine double)",
      explanation: "Pour a), on cherche deux nombres qui multipliés donnent -6 et additionnés donnent -5.",
      category: "Équations quadratiques"
    },
    {
      id: "8",
      title: "Fractions rationnelles",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Simplifier :\na) (x² - 4)/(x² + 4x + 4)\nb) (x³ - 1)/(x² - 1)\nc) (2x² + x - 3)/(x² - x - 2)",
      hint: "Factorisez numérateur et dénominateur",
      solution: "a) (x² - 4)/(x² + 4x + 4) = (x - 2)(x + 2)/(x + 2)² = (x - 2)/(x + 2) pour x ≠ -2\n\nb) (x³ - 1)/(x² - 1) = (x - 1)(x² + x + 1)/(x - 1)(x + 1) = (x² + x + 1)/(x + 1) pour x ≠ 1\n\nc) (2x² + x - 3)/(x² - x - 2) = (2x + 3)(x - 1)/(x - 2)(x + 1) pour x ≠ 2, -1",
      explanation: "Toujours factoriser avant de simplifier. Attention aux valeurs interdites.",
      category: "Fractions rationnelles"
    },
    {
      id: "9",
      title: "Systèmes d'équations par substitution",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Résoudre les systèmes :\na) {x + 2y = 7, 3x - y = 1}\nb) {x² + y = 5, x - y = 1}",
      hint: "Isolez une variable dans une équation puis substituez dans l'autre",
      solution: "a) De la première : x = 7 - 2y\nSubstitution : 3(7 - 2y) - y = 1\n21 - 6y - y = 1 ⟹ 7y = 20 ⟹ y = 20/7\nDonc x = 7 - 2(20/7) = 9/7\nSolution : (9/7, 20/7)\n\nb) De la seconde : y = x - 1\nSubstitution : x² + (x - 1) = 5\nx² + x - 6 = 0 ⟹ (x + 3)(x - 2) = 0\nDonc x = -3 ou x = 2\nSolutions : (-3, -4) et (2, 1)",
      explanation: "Méthode de substitution : isoler une variable simple puis remplacer.",
      category: "Systèmes d'équations"
    },
    {
      id: "10",
      title: "Inéquations et tableaux de signes",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Résoudre :\na) (x - 1)(x + 3) > 0\nb) (2x - 1)/(x + 2) ≤ 0\nc) x² - 4x + 3 < 0",
      hint: "Utilisez un tableau de signes pour étudier le signe du produit/quotient",
      solution: "a) Racines : x = 1 et x = -3\nTableau de signes : + sur ]-∞, -3[ ∪ ]1, +∞[\n\nb) Racines/interdites : x = 1/2 et x = -2\nTableau : ≤ 0 sur ]-2, 1/2]\n\nc) x² - 4x + 3 = (x - 1)(x - 3)\nTableau : < 0 sur ]1, 3[",
      explanation: "Tableau de signes : étudier le signe de chaque facteur puis faire le produit.",
      category: "Inéquations"
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
