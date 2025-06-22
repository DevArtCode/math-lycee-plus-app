
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Target, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AlgebraBilanPage = () => {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState<string | null>(null);

  const bilanExercises = [
    {
      id: 'bilan1',
      title: 'Synthèse Nombres & Calcul',
      chapters: ['Nombres & ensembles', 'Calcul algébrique'],
      difficulty: 'Intermédiaire' as const,
      points: 15,
      statement: `Soit P(x) = 2x³ - 5x² + 3x - 1
1. Factoriser P(x) sachant que 1 est racine
2. Résoudre dans ℂ l'équation P(x) = 0
3. Calculer |z₁ + z₂| où z₁ et z₂ sont les racines complexes`,
      solution: `1. P(1) = 0, donc P(x) = (x-1)(2x²-3x+1) = (x-1)(2x-1)(x-1) = (x-1)²(2x-1)

2. Racines : x = 1 (double) et x = 1/2

3. Les racines complexes sont en fait réelles, donc |z₁ + z₂| = |1 + 1/2| = 3/2`,
      explanation: 'Exercice combinant factorisation, résolution et nombres complexes.'
    },
    {
      id: 'bilan2', 
      title: 'Arithmétique et Suites',
      chapters: ['Arithmétique', 'Suites numériques'],
      difficulty: 'Avancé' as const,
      points: 20,
      statement: `1. Montrer que pour tout n ∈ ℕ*, n³ - n est divisible par 6
2. Soit (uₙ) définie par u₀ = 1 et uₙ₊₁ = 2uₙ + 3
   Exprimer uₙ en fonction de n et calculer lim(uₙ/2ⁿ)
3. Application : Combien de grains de blé sur un échiquier selon la légende ?`,
      solution: `1. n³-n = n(n²-1) = n(n-1)(n+1)
   Produit de 3 entiers consécutifs, donc divisible par 2 et 3, donc par 6.

2. uₙ₊₁ + 3 = 2(uₙ + 3), donc vₙ = uₙ + 3 est géométrique de raison 2
   v₀ = 4, donc vₙ = 4×2ⁿ, d'où uₙ = 4×2ⁿ - 3
   lim(uₙ/2ⁿ) = lim(4 - 3/2ⁿ) = 4

3. 1 + 2 + 4 + ... + 2⁶³ = 2⁶⁴ - 1 ≈ 1,8×10¹⁹ grains`,
      explanation: 'Synthèse arithmétique modulaire et suites géométriques.'
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
                <h1 className="text-xl font-bold text-slate-900">📊 Bilan Algèbre</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Bilan d'Algèbre
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Exercices de synthèse combinant plusieurs chapitres d'algèbre
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <Badge className="bg-blue-100 text-blue-800">Synthèse</Badge>
            <Badge className="bg-green-100 text-green-800">Multi-chapitres</Badge>
          </div>
        </div>

        {/* Exercises */}
        <div className="space-y-8">
          {bilanExercises.map((exercise) => (
            <Card key={exercise.id} className="border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-blue-800 mb-2">{exercise.title}</CardTitle>
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge className={getDifficultyColor(exercise.difficulty)}>
                        {exercise.difficulty}
                      </Badge>
                      <Badge variant="outline">{exercise.points} points</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exercise.chapters.map((chapter, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {chapter}
                        </Badge>
                      ))}
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
                <CardContent className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-3">📋 Énoncé</h4>
                    <p className="text-slate-700 whitespace-pre-line leading-relaxed">{exercise.statement}</p>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      onClick={() => toggleSolution(exercise.id)}
                    >
                      {showSolution === exercise.id ? '❌ Masquer la solution' : '✅ Voir la solution'}
                    </Button>
                  </div>

                  {showSolution === exercise.id && (
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-3">✅ Solution</h4>
                        <pre className="text-green-700 font-mono text-sm whitespace-pre-wrap leading-relaxed">
                          {exercise.solution}
                        </pre>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">📝 Commentaires</h4>
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
          <Link to="/algebra">
            <Button variant="outline">
              <BookOpen className="w-4 h-4 mr-2" />
              Retour aux chapitres
            </Button>
          </Link>
          <Link to="/mega-bilan">
            <Button className="bg-gradient-to-r from-purple-500 to-purple-600">
              Méga Bilan interdisciplinaire
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AlgebraBilanPage;
