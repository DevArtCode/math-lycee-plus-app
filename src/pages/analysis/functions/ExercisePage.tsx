
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AnalysisFunctionsExercisePage = () => {
  const exercises = [
    {
      id: "af-1",
      title: "Domaine de définition - Fonctions rationnelles",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Déterminer le domaine de définition de f(x) = 1/(x²-9)",
      hint: "La fonction n'est pas définie quand le dénominateur s'annule",
      solution: "x²-9 = 0 ⟹ x² = 9 ⟹ x = ±3\nDf = ℝ \\ {-3, 3}",
      explanation: "On exclut les valeurs qui annulent le dénominateur",
      category: "Domaine de définition"
    },
    {
      id: "af-2",
      title: "Domaine de définition - Fonctions avec racines",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Déterminer le domaine de définition de g(x) = √(x-2)",
      hint: "L'expression sous la racine doit être positive",
      solution: "x-2 ≥ 0 ⟹ x ≥ 2\nDg = [2, +∞[",
      explanation: "Pour une racine carrée, l'expression doit être positive ou nulle",
      category: "Domaine de définition"
    },
    {
      id: "af-3",
      title: "Limite finie en un point",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Calculer lim(x→3) (x²-6x+9)/(x-3)",
      hint: "Factorisez le numérateur",
      solution: "x²-6x+9 = (x-3)²\nlim(x→3) (x-3)²/(x-3) = lim(x→3) (x-3) = 0",
      explanation: "Factorisation pour lever l'indétermination 0/0",
      category: "Limites"
    },
    {
      id: "af-4",
      title: "Limite à l'infini",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Calculer lim(x→+∞) (3x²+2x-1)/(2x²-x+3)",
      hint: "Divisez par le terme de plus haut degré",
      solution: "lim(x→+∞) (3x²+2x-1)/(2x²-x+3) = lim(x→+∞) (3+2/x-1/x²)/(2-1/x+3/x²) = 3/2",
      explanation: "Pour les fractions rationnelles, on regarde le rapport des coefficients dominants",
      category: "Limites"
    },
    {
      id: "af-5",
      title: "Continuité en un point",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Étudier la continuité de f(x) = {x² si x ≤ 1; 2x si x > 1} en x = 1",
      hint: "Vérifiez que lim(x→1⁻) f(x) = lim(x→1⁺) f(x) = f(1)",
      solution: "f(1) = 1² = 1\nlim(x→1⁻) f(x) = lim(x→1⁻) x² = 1\nlim(x→1⁺) f(x) = lim(x→1⁺) 2x = 2\nComme 1 ≠ 2, f n'est pas continue en x = 1",
      explanation: "Pour la continuité, il faut égalité des limites à droite et à gauche avec la valeur de la fonction",
      category: "Continuité"
    },
    {
      id: "af-6",
      title: "Théorème des valeurs intermédiaires",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Montrer que l'équation x³-2x+1=0 admet au moins une solution dans [-2,0]",
      hint: "Utilisez le TVI avec f(x) = x³-2x+1",
      solution: "Soit f(x) = x³-2x+1\nf(-2) = -8+4+1 = -3 < 0\nf(0) = 1 > 0\nf continue sur [-2,0] et 0 ∈ [f(-2), f(0)]\nPar TVI, ∃c ∈ [-2,0] tel que f(c) = 0",
      explanation: "Le TVI garantit l'existence d'un zéro quand la fonction change de signe",
      category: "TVI"
    },
    {
      id: "af-7",
      title: "Asymptotes verticales",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Déterminer les asymptotes verticales de h(x) = 1/(x²-4x+3)",
      hint: "Trouvez les zéros du dénominateur",
      solution: "x²-4x+3 = 0 ⟹ (x-1)(x-3) = 0 ⟹ x = 1 ou x = 3\nAsymptotes verticales : x = 1 et x = 3",
      explanation: "Les asymptotes verticales correspondent aux zéros du dénominateur",
      category: "Asymptotes"
    },
    {
      id: "af-8",
      title: "Asymptotes horizontales",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Déterminer l'asymptote horizontale de k(x) = (5x+2)/(x-1)",
      hint: "Calculez la limite à l'infini",
      solution: "lim(x→±∞) (5x+2)/(x-1) = lim(x→±∞) (5+2/x)/(1-1/x) = 5/1 = 5\nAsymptote horizontale : y = 5",
      explanation: "L'asymptote horizontale est la limite de la fonction à l'infini",
      category: "Asymptotes"
    },
    {
      id: "af-9",
      title: "Limite avec forme indéterminée ∞/∞",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Calculer lim(x→+∞) (√(x²+x) - x)",
      hint: "Multipliez par l'expression conjuguée",
      solution: "lim(x→+∞) (√(x²+x) - x) = lim(x→+∞) (√(x²+x) - x)(√(x²+x) + x)/(√(x²+x) + x)\n= lim(x→+∞) (x²+x-x²)/(√(x²+x) + x) = lim(x→+∞) x/(√(x²+x) + x)\n= lim(x→+∞) 1/(√(1+1/x) + 1) = 1/2",
      explanation: "Expression conjuguée pour lever l'indétermination ∞-∞",
      category: "Limites"
    },
    {
      id: "af-10",
      title: "Fonction définie par morceaux",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Soit f(x) = {x²-1 si x < 0; ax+b si 0 ≤ x ≤ 2; x+3 si x > 2}. Déterminer a et b pour que f soit continue",
      hint: "Assurez la continuité en x = 0 et x = 2",
      solution: "Continuité en x = 0 :\nlim(x→0⁻) f(x) = 0²-1 = -1\nf(0) = a(0)+b = b\nDonc b = -1\n\nContinuité en x = 2 :\nf(2) = 2a+b = 2a-1\nlim(x→2⁺) f(x) = 2+3 = 5\nDonc 2a-1 = 5 ⟹ a = 3\n\nSolution : a = 3, b = -1",
      explanation: "Pour la continuité aux points de raccord, on égalise les limites",
      category: "Continuité"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/analysis">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à l'Analyse
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-purple-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Fonctions et limites</h1>
              </div>
            </div>
            <Link to="/analysis/functions/course">
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

export default AnalysisFunctionsExercisePage;
