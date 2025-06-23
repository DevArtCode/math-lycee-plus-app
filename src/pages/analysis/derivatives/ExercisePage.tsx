
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AnalysisDerivativesExercisePage = () => {
  const exercises = [
    {
      id: "ad-1",
      title: "Dérivée par définition",
      difficulty: "Débutant" as const,
      points: 10,
      statement: "Calculer f'(x) par définition pour f(x) = 3x + 1",
      hint: "Utilisez f'(x) = lim(h→0) [f(x+h)-f(x)]/h",
      solution: "f'(x) = lim(h→0) [3(x+h)+1-(3x+1)]/h\n= lim(h→0) [3x+3h+1-3x-1]/h\n= lim(h→0) 3h/h = 3",
      explanation: "La dérivée d'une fonction affine est sa pente",
      category: "Définition"
    },
    {
      id: "ad-2",
      title: "Dérivées usuelles - Polynômes",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Calculer la dérivée de g(x) = 2x³ - 5x² + 3x - 7",
      hint: "Utilisez (xⁿ)' = nxⁿ⁻¹",
      solution: "g'(x) = 2×3x² - 5×2x + 3×1 - 0 = 6x² - 10x + 3",
      explanation: "On dérive terme par terme en appliquant la règle des puissances",
      category: "Polynômes"
    },
    {
      id: "ad-3",
      title: "Dérivée d'un produit",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Calculer la dérivée de h(x) = (2x+1)(x²-3)",
      hint: "Utilisez (uv)' = u'v + uv'",
      solution: "u = 2x+1, u' = 2\nv = x²-3, v' = 2x\nh'(x) = 2(x²-3) + (2x+1)(2x)\n= 2x²-6 + 4x²+2x = 6x²+2x-6",
      explanation: "Application de la règle de dérivation d'un produit",
      category: "Règles de dérivation"
    },
    {
      id: "ad-4",
      title: "Dérivée d'un quotient",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Calculer la dérivée de k(x) = (x+1)/(x-2)",
      hint: "Utilisez (u/v)' = (u'v-uv')/v²",
      solution: "u = x+1, u' = 1\nv = x-2, v' = 1\nk'(x) = [1×(x-2) - (x+1)×1]/(x-2)²\n= (x-2-x-1)/(x-2)² = -3/(x-2)²",
      explanation: "Application de la règle de dérivation d'un quotient",
      category: "Règles de dérivation"
    },
    {
      id: "ad-5",
      title: "Dérivée composée",
      difficulty: "Intermédiaire" as const,
      points: 15,
      statement: "Calculer la dérivée de f(x) = (2x+3)⁵",
      hint: "Utilisez (f∘g)' = f'(g) × g'",
      solution: "f(x) = u⁵ avec u = 2x+3\nf'(x) = 5u⁴ × u' = 5(2x+3)⁴ × 2 = 10(2x+3)⁴",
      explanation: "Dérivation d'une fonction composée",
      category: "Fonctions composées"
    },
    {
      id: "ad-6",
      title: "Dérivée avec exponentielle",
      difficulty: "Intermédiaire" as const,
      points: 15,
      statement: "Calculer la dérivée de g(x) = xe^x",
      hint: "Utilisez la règle du produit avec (e^x)' = e^x",
      solution: "u = x, u' = 1\nv = e^x, v' = e^x\ng'(x) = 1×e^x + x×e^x = e^x(1+x)",
      explanation: "Produit impliquant une exponentielle",
      category: "Fonctions exponentielles"
    },
    {
      id: "ad-7",
      title: "Dérivée avec logarithme",
      difficulty: "Intermédiaire" as const,
      points: 15,
      statement: "Calculer la dérivée de h(x) = ln(x²+1)",
      hint: "Utilisez (ln(u))' = u'/u",
      solution: "h(x) = ln(u) avec u = x²+1\nu' = 2x\nh'(x) = u'/u = 2x/(x²+1)",
      explanation: "Dérivée d'un logarithme composé",
      category: "Fonctions logarithmes"
    },
    {
      id: "ad-8",
      title: "Tangente en un point",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Déterminer l'équation de la tangente à f(x) = x³-2x+1 au point d'abscisse x = 1",
      hint: "Équation : y = f'(a)(x-a) + f(a)",
      solution: "f(1) = 1-2+1 = 0\nf'(x) = 3x²-2\nf'(1) = 3-2 = 1\nÉquation de la tangente : y = 1×(x-1) + 0 = x-1",
      explanation: "L'équation de la tangente utilise la dérivée comme coefficient directeur",
      category: "Applications géométriques"
    },
    {
      id: "ad-9",
      title: "Étude de variations",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Étudier les variations de f(x) = x³-3x²+2",
      hint: "Calculez f'(x) et étudiez son signe",
      solution: "f'(x) = 3x²-6x = 3x(x-2)\nf'(x) = 0 ⟺ x = 0 ou x = 2\nSigne de f'(x) :\n- Si x < 0 : f'(x) > 0 (croissante)\n- Si 0 < x < 2 : f'(x) < 0 (décroissante)\n- Si x > 2 : f'(x) > 0 (croissante)\nMaximum local en x = 0 : f(0) = 2\nMinimum local en x = 2 : f(2) = 8-12+2 = -2",
      explanation: "On étudie le signe de la dérivée pour déterminer les variations",
      category: "Étude de fonctions"
    },
    {
      id: "ad-10",
      title: "Problème d'optimisation",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Un fermier veut construire un enclos rectangulaire contre un mur. Il dispose de 100m de clôture pour les 3 côtés libres. Quelles dimensions maximisent l'aire ?",
      hint: "Exprimez l'aire en fonction d'une variable et dérivez",
      solution: "Soit x la largeur et y la longueur parallèle au mur\nContrainte : 2x + y = 100 ⟹ y = 100-2x\nAire A(x) = xy = x(100-2x) = 100x-2x²\nA'(x) = 100-4x\nA'(x) = 0 ⟹ x = 25\nA''(x) = -4 < 0 ⟹ maximum\nDimensions optimales : largeur = 25m, longueur = 50m\nAire maximale = 1250 m²",
      explanation: "Problème d'optimisation avec contrainte, on dérive pour trouver l'extremum",
      category: "Optimisation"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Dérivation</h1>
              </div>
            </div>
            <Link to="/analysis/derivatives/course">
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

export default AnalysisDerivativesExercisePage;
