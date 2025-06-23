
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AnalysisIntegralsExercisePage = () => {
  const exercises = [
    {
      id: "ai-1",
      title: "Primitives usuelles",
      difficulty: "Débutant" as const,
      points: 6,
      statement: "Calculer une primitive de f(x) = 3x² - 2x + 5",
      hint: "Utilisez les primitives usuelles",
      solution: "∫(3x² - 2x + 5)dx = ∫3x²dx - ∫2xdx + ∫5dx\n= x³ - x² + 5x + C",
      explanation: "On intègre terme à terme en utilisant la formule ∫x^n dx = x^(n+1)/(n+1) + C",
      category: "Primitives usuelles"
    },
    {
      id: "ai-2",
      title: "Primitive avec logarithme",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Calculer une primitive de g(x) = 1/x + 2/x²",
      hint: "Attention au signe pour 1/x²",
      solution: "∫(1/x + 2/x²)dx = ∫(1/x)dx + ∫(2x⁻²)dx\n= ln|x| + 2×(-x⁻¹) + C = ln|x| - 2/x + C",
      explanation: "La primitive de 1/x est ln|x| et celle de x^n est x^(n+1)/(n+1)",
      category: "Primitives usuelles"
    },
    {
      id: "ai-3",
      title: "Intégrale définie simple",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Calculer ∫[0→2] (x² + 1) dx",
      hint: "Utilisez la définition de l'intégrale définie",
      solution: "∫[0→2] (x² + 1) dx = [x³/3 + x][0→2]\n= (8/3 + 2) - (0 + 0) = 8/3 + 2 = 14/3",
      explanation: "On calcule d'abord une primitive puis on applique la formule fondamentale",
      category: "Intégrales définies"
    },
    {
      id: "ai-4",
      title: "Intégration par parties",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Calculer ∫ x·ln(x) dx",
      hint: "Posez u = ln(x) et v' = x",
      solution: "u = ln(x), u' = 1/x\nv' = x, v = x²/2\n∫ x·ln(x) dx = (x²/2)·ln(x) - ∫(x²/2)·(1/x) dx\n= (x²/2)ln(x) - ∫x/2 dx = (x²/2)ln(x) - x²/4 + C",
      explanation: "Formule d'intégration par parties : ∫u'v = uv - ∫uv'",
      category: "Intégration par parties"
    },
    {
      id: "ai-5",
      title: "Changement de variable",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Calculer ∫ (2x+1)⁵ dx",
      hint: "Posez u = 2x+1",
      solution: "Posons u = 2x+1, alors du = 2dx, donc dx = du/2\n∫(2x+1)⁵ dx = ∫u⁵ · (du/2) = (1/2)∫u⁵ du\n= (1/2) · u⁶/6 + C = u⁶/12 + C = (2x+1)⁶/12 + C",
      explanation: "Le changement de variable simplifie l'intégrande",
      category: "Changement de variable"
    },
    {
      id: "ai-6",
      title: "Aire sous une courbe",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Calculer l'aire délimitée par y = x², l'axe des x et les droites x = 1 et x = 3",
      hint: "L'aire est donnée par une intégrale définie",
      solution: "Aire = ∫[1→3] x² dx = [x³/3][1→3]\n= 27/3 - 1/3 = 9 - 1/3 = 26/3",
      explanation: "L'aire sous une courbe positive est l'intégrale de la fonction",
      category: "Applications géométriques"
    },
    {
      id: "ai-7",
      title: "Aire entre deux courbes",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Calculer l'aire entre y = x² et y = 4 - x² pour x ∈ [-2,2]",
      hint: "Déterminez d'abord quelle courbe est au-dessus",
      solution: "Les courbes se coupent quand x² = 4 - x²\n2x² = 4 ⟹ x = ±2\nPour x ∈ [-2,2] : 4 - x² ≥ x²\nAire = ∫[-2→2] (4 - x² - x²) dx = ∫[-2→2] (4 - 2x²) dx\n= [4x - 2x³/3][-2→2] = (8 - 16/3) - (-8 + 16/3) = 16 - 32/3 = 16/3",
      explanation: "L'aire entre deux courbes est l'intégrale de leur différence",
      category: "Applications géométriques"
    },
    {
      id: "ai-8",
      title: "Valeur moyenne",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Calculer la valeur moyenne de f(x) = sin(x) sur [0,π]",
      hint: "Valeur moyenne = (1/(b-a)) ∫[a→b] f(x) dx",
      solution: "Valeur moyenne = (1/(π-0)) ∫[0→π] sin(x) dx\n= (1/π) [-cos(x)][0→π] = (1/π) (-cos(π) + cos(0))\n= (1/π) (-(-1) + 1) = 2/π",
      explanation: "La valeur moyenne d'une fonction sur un intervalle",
      category: "Applications"
    },
    {
      id: "ai-9",
      title: "Volume de révolution",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Calculer le volume du solide engendré par y = 1/x autour de l'axe Ox sur [1,2]",
      hint: "Volume = π ∫[a→b] [f(x)]² dx",
      solution: "V = π ∫[1→2] (1/x)² dx = π ∫[1→2] 1/x² dx\n= π [-1/x][1→2] = π (-1/2 - (-1)) = π (1 - 1/2) = π/2",
      explanation: "Volume de révolution autour de l'axe des abscisses",
      category: "Applications géométriques"
    },
    {
      id: "ai-10",
      title: "Équation différentielle",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Résoudre l'équation y' = e^x + 2x avec y(0) = 3",
      hint: "Intégrez les deux membres",
      solution: "y = ∫(e^x + 2x) dx = e^x + x² + C\nCondition initiale : y(0) = 3\ne^0 + 0² + C = 3 ⟹ 1 + C = 3 ⟹ C = 2\nDonc y = e^x + x² + 2",
      explanation: "Une équation différentielle y' = f(x) se résout par intégration",
      category: "Équations différentielles"
    },
    {
      id: "ai-qcm",
      title: "QCM - Primitives et intégrales",
      difficulty: "Intermédiaire" as const,
      points: 20,
      statement: "Questions à choix multiples sur les primitives et intégrales",
      hint: "Réfléchissez bien à chaque question",
      solution: "1. C) x³/3 - 2x²\n2. B) ln|x| - 1/x + C\n3. A) 9\n4. C) (x²/2)ln(x) - x²/4 + C\n5. B) π/2",
      explanation: "QCM de révision générale sur le chapitre",
      category: "QCM",
      isQCM: true,
      questions: [
        {
          question: "Une primitive de f(x) = x² - 4x est :",
          options: ["x³ - 4x²", "x³/3 - 4x²", "x³/3 - 2x²", "2x - 4"],
          correct: 2
        },
        {
          question: "Une primitive de g(x) = 1/x + 1/x² est :",
          options: ["ln|x| + 1/x + C", "ln|x| - 1/x + C", "-1/x - 1/x² + C", "ln|x| + x + C"],
          correct: 1
        },
        {
          question: "∫[0→3] x² dx = ?",
          options: ["9", "27", "9", "3"],
          correct: 0
        },
        {
          question: "∫ x·ln(x) dx = ?",
          options: ["x·ln(x) - x + C", "x²·ln(x) + C", "(x²/2)ln(x) - x²/4 + C", "ln(x²) + C"],
          correct: 2
        },
        {
          question: "Le volume engendré par y = 1/x autour de Ox sur [1,2] est :",
          options: ["π", "π/2", "2π", "π/3"],
          correct: 1
        }
      ]
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Primitives et intégrales</h1>
              </div>
            </div>
            <Link to="/analysis/integrals/course">
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

export default AnalysisIntegralsExercisePage;
