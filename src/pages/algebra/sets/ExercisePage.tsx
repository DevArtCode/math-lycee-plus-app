import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Target, CheckCircle, XCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AlgebraSetsExercisePage = () => {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState<string | null>(null);

  const exercises = [
    {
      id: 'ex1',
      title: 'Classification des nombres',
      difficulty: 'Débutant' as const,
      points: 5,
      statement: 'Classer les nombres suivants dans les ensembles ℕ, ℤ, ℚ, ℝ :\n-7, 0, √25, 3.14, -2/3, π, √2',
      solution: '• -7 ∈ ℤ (entier négatif)\n• 0 ∈ ℕ\n• √25 = 5 ∈ ℕ\n• 3.14 ∈ ℚ (décimal fini)\n• -2/3 ∈ ℚ (fraction)\n• π ∈ ℝ (irrationnel)\n• √2 ∈ ℝ (irrationnel)',
      explanation: 'On choisit toujours le plus petit ensemble. π et √2 sont irrationnels donc dans ℝ\\ℚ.'
    },
    {
      id: 'ex2',
      title: 'Opérations sur les entiers relatifs',
      difficulty: 'Débutant' as const,
      points: 8,
      statement: 'Calculer :\na) (-5) + (+8) - (-3)\nb) (-4) × (-6) × (+2)\nc) |-7 + 3|',
      solution: 'a) (-5) + (+8) - (-3) = -5 + 8 + 3 = 6\n\nb) (-4) × (-6) × (+2) = 24 × 2 = 48\n\nc) |-7 + 3| = |-4| = 4',
      explanation: 'Attention aux règles des signes et à l\'ordre des opérations.'
    },
    {
      id: 'ex3',
      title: 'Fractions et nombres rationnels',
      difficulty: 'Intermédiaire' as const,
      points: 10,
      statement: 'Effectuer les calculs suivants et donner le résultat sous forme irréductible :\na) 2/3 + 5/6\nb) (3/4) × (8/9)\nc) (2/5) ÷ (3/7)',
      solution: 'a) 2/3 + 5/6 = 4/6 + 5/6 = 9/6 = 3/2\n\nb) (3/4) × (8/9) = 24/36 = 2/3\n\nc) (2/5) ÷ (3/7) = (2/5) × (7/3) = 14/15',
      explanation: 'Pour additionner : même dénominateur. Pour diviser : multiplier par l\'inverse.'
    },
    {
      id: 'ex4',
      title: 'Développement décimal',
      difficulty: 'Intermédiaire' as const,
      points: 12,
      statement: 'Déterminer si les nombres suivants sont rationnels ou irrationnels :\na) 0,123123123...\nb) 0,101001000100001...\nc) 22/7',
      solution: 'a) 0,123123123... = 0,123̄ est périodique donc rationnel (= 123/999 = 41/333)\n\nb) 0,101001000100001... n\'est pas périodique donc irrationnel\n\nc) 22/7 est une fraction donc rationnel (≈ 3,142857142857...)',
      explanation: 'Un nombre est rationnel si et seulement si son développement décimal est fini ou périodique.'
    },
    {
      id: 'ex5',
      title: 'Nombres complexes - Base',
      difficulty: 'Intermédiaire' as const,
      points: 15,
      statement: 'Soit z₁ = 3 + 2i et z₂ = 1 - 4i.\nCalculer :\na) z₁ + z₂\nb) z₁ × z₂\nc) |z₁| et |z₂|',
      solution: 'a) z₁ + z₂ = (3 + 2i) + (1 - 4i) = 4 - 2i\n\nb) z₁ × z₂ = (3 + 2i)(1 - 4i) = 3 - 12i + 2i - 8i² = 3 - 10i + 8 = 11 - 10i\n\nc) |z₁| = √(3² + 2²) = √13\n|z₂| = √(1² + (-4)²) = √17',
      explanation: 'Pour multiplier : utiliser la distributivité et i² = -1. Le module est la distance à l\'origine.'
    },
    {
      id: 'ex6',
      title: 'Application : Population et croissance',
      difficulty: 'Avancé' as const,
      points: 18,
      statement: 'Une ville compte 50 000 habitants. Sa population croît de 2% par an.\na) Exprimer la population après n années\nb) Après combien d\'années la population aura-t-elle doublé ?\n(Utiliser ln(2) ≈ 0,693 et ln(1,02) ≈ 0,0198)',
      solution: 'a) Population après n années : P(n) = 50 000 × (1,02)ⁿ\n\nb) On cherche n tel que P(n) = 100 000\n50 000 × (1,02)ⁿ = 100 000\n(1,02)ⁿ = 2\nn × ln(1,02) = ln(2)\nn = ln(2)/ln(1,02) ≈ 0,693/0,0198 ≈ 35 années',
      explanation: 'Croissance exponentielle. La règle des 72 donne une approximation : 72/2 = 36 ans.'
    },
    {
      id: 'ex7',
      title: 'Intervalles et inégalités',
      difficulty: 'Débutant' as const,
      points: 6,
      statement: 'Écrire sous forme d\'intervalles :\na) x ≤ 5\nb) -2 < x < 7\nc) x ≥ 3 ou x < -1',
      solution: 'a) x ≤ 5 ⟺ x ∈ ]-∞, 5]\n\nb) -2 < x < 7 ⟺ x ∈ ]-2, 7[\n\nc) x ≥ 3 ou x < -1 ⟺ x ∈ ]-∞, -1[ ∪ [3, +∞[',
      explanation: 'Attention aux crochets : [ ] pour inclus, ] [ pour exclus.'
    },
    {
      id: 'ex8',
      title: 'Opérations sur les ensembles',
      difficulty: 'Intermédiaire' as const,
      points: 10,
      statement: 'Soit A = {1, 2, 3, 4} et B = {3, 4, 5, 6}.\nCalculer :\na) A ∪ B\nb) A ∩ B\nc) A \\ B\nd) A̅ (dans U = {1, 2, 3, 4, 5, 6, 7})',
      solution: 'a) A ∪ B = {1, 2, 3, 4, 5, 6}\n\nb) A ∩ B = {3, 4}\n\nc) A \\ B = {1, 2}\n\nd) A̅ = U \\ A = {5, 6, 7}',
      explanation: 'Union = tous les éléments, intersection = éléments communs, différence = dans A mais pas dans B.'
    },
    {
      id: 'ex9',
      title: 'Nombres premiers et divisibilité',
      difficulty: 'Intermédiaire' as const,
      points: 12,
      statement: 'a) Décomposer 420 en produit de facteurs premiers\nb) Calculer PGCD(420, 315)\nc) En déduire PPCM(420, 315)',
      solution: 'a) 420 = 4 × 105 = 4 × 3 × 35 = 4 × 3 × 5 × 7 = 2² × 3 × 5 × 7\n315 = 5 × 63 = 5 × 9 × 7 = 3² × 5 × 7\n\nb) PGCD(420, 315) = 3 × 5 × 7 = 105\n\nc) PPCM(420, 315) = (420 × 315)/PGCD = (420 × 315)/105 = 1260',
      explanation: 'PGCD = produit des facteurs communs avec le plus petit exposant. PPCM × PGCD = produit des nombres.'
    },
    {
      id: 'ex10',
      title: 'Valeur absolue et distance',
      difficulty: 'Avancé' as const,
      points: 15,
      statement: 'Résoudre les équations et inéquations :\na) |x - 3| = 5\nb) |2x + 1| ≤ 7\nc) |x - 1| + |x + 2| = 5',
      solution: 'a) |x - 3| = 5 ⟺ x - 3 = 5 ou x - 3 = -5\n⟺ x = 8 ou x = -2\n\nb) |2x + 1| ≤ 7 ⟺ -7 ≤ 2x + 1 ≤ 7\n⟺ -8 ≤ 2x ≤ 6 ⟺ -4 ≤ x ≤ 3\n\nc) Étude de signes :\n• Si x ≤ -2 : -(x-1) - (x+2) = -2x - 1 = 5 ⟹ x = -3 ✓\n• Si -2 < x < 1 : -(x-1) + (x+2) = 3 = 5 impossible\n• Si x ≥ 1 : (x-1) + (x+2) = 2x + 1 = 5 ⟹ x = 2 ✓\nSolutions : x = -3 ou x = 2',
      explanation: 'Pour |u| = a : u = a ou u = -a. Pour |u| ≤ a : -a ≤ u ≤ a. Pour les sommes, étudier les signes.'
    }
  ];

  const toggleExercise = (exerciseId: string) => {
    setExpandedExercise(expandedExercise === exerciseId ? null : exerciseId);
    setShowSolution(null);
  };

  const toggleSolution = (exerciseId: string) => {
    setShowSolution(showSolution === exerciseId ? null : exerciseId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
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
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">🔢 Exercices - Nombres & Ensembles</h1>
              </div>
            </div>
            <Link to="/algebra/sets/course">
              <Button variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                Revoir le cours
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Exercices : Nombres & Ensembles
          </h2>
          <p className="text-slate-600">{exercises.length} exercices progressifs</p>
        </div>

        {/* Exercises */}
        <div className="space-y-6">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{exercise.title}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={getDifficultyColor(exercise.difficulty)}>
                        {exercise.difficulty}
                      </Badge>
                      <span className="text-sm text-slate-500">{exercise.points} points</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExercise(exercise.id)}
                  >
                    {expandedExercise === exercise.id ? '▼' : '▶'}
                  </Button>
                </div>
              </CardHeader>

              {expandedExercise === exercise.id && (
                <CardContent className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">📋 Énoncé</h4>
                    <p className="text-slate-700 whitespace-pre-line">{exercise.statement}</p>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleSolution(exercise.id)}
                  >
                    {showSolution === exercise.id ? '❌ Masquer la solution' : '✅ Voir la solution'}
                  </Button>

                  {showSolution === exercise.id && (
                    <div className="space-y-3">
                      <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">✅ Solution</h4>
                        <p className="text-green-700 font-mono whitespace-pre-line">{exercise.solution}</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">📝 Explication</h4>
                        <p className="text-blue-700">{exercise.explanation}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link to="/algebra/sets/course">
            <Button variant="outline">
              <BookOpen className="w-4 h-4 mr-2" />
              Retour au cours
            </Button>
          </Link>
          <Link to="/algebra/calculus/course">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600">
              Chapitre suivant : Calcul algébrique
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AlgebraSetsExercisePage;
