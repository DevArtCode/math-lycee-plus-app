
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, Clock, Star, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ExerciseList from '@/components/ExerciseList';

const AlgebraBilanPage = () => {
  const [selectedBilan, setSelectedBilan] = useState<string | null>(null);

  const bilanSets = [
    {
      id: 'bilan-1',
      title: 'Bilan 1 - Nombres et Calcul',
      description: 'Ensembles de nombres et calcul algébrique',
      chapters: ['Nombres & ensembles', 'Calcul algébrique'],
      difficulty: 'Moyen',
      duration: '45 min',
      exercises: [
        {
          id: "b1-1",
          title: "Nombres complexes et ensembles",
          difficulty: "Intermédiaire" as const,
          points: 15,
          statement: "Soit z₁ = 2 + 3i et z₂ = 1 - i.\n1. Calculer z₁ × z₂ et |z₁ + z₂|\n2. Résoudre l'équation z² - 4z + 5 = 0 dans ℂ\n3. Déterminer si √3 + 1 est rationnel ou irrationnel",
          hint: "Utilisez les propriétés des nombres complexes et la forme algébrique",
          solution: "1. z₁ × z₂ = (2+3i)(1-i) = 2-2i+3i-3i² = 2+i+3 = 5+i\n   |z₁ + z₂| = |3 + 2i| = √(9+4) = √13\n\n2. Δ = 16-20 = -4 < 0\n   z = (4 ± 2i)/2 = 2 ± i\n\n3. √3 est irrationnel, donc √3 + 1 est irrationnel",
          explanation: "Combinaison des propriétés des complexes et classification des nombres réels",
          category: "Nombres complexes"
        },
        {
          id: "b1-2",
          title: "Factorisation et équations",
          difficulty: "Intermédiaire" as const,
          points: 12,
          statement: "1. Factoriser : 4x² - 12x + 9\n2. Résoudre : x² - 5x + 6 = 0\n3. Développer : (2x - 3)³",
          hint: "Reconnaissez les identités remarquables",
          solution: "1. 4x² - 12x + 9 = (2x)² - 2(2x)(3) + 3² = (2x - 3)²\n\n2. x² - 5x + 6 = 0\n   Δ = 25 - 24 = 1\n   x = (5 ± 1)/2, donc x = 3 ou x = 2\n\n3. (2x - 3)³ = (2x)³ - 3(2x)²(3) + 3(2x)(3)² - 3³\n   = 8x³ - 36x² + 54x - 27",
          explanation: "Application des identités remarquables et résolution d'équations du second degré",
          category: "Calcul algébrique"
        }
      ]
    },
    {
      id: 'bilan-2',
      title: 'Bilan 2 - Arithmétique et Suites',
      description: 'Division euclidienne, PGCD et suites numériques',
      chapters: ['Arithmétique', 'Suites numériques'],
      difficulty: 'Avancé',
      duration: '60 min',
      exercises: [
        {
          id: "b2-1",
          title: "PGCD et identité de Bézout",
          difficulty: "Avancé" as const,
          points: 18,
          statement: "1. Calculer pgcd(126, 35) par l'algorithme d'Euclide\n2. Trouver les coefficients u et v tels que 126u + 35v = pgcd(126, 35)\n3. Résoudre la congruence : 7x ≡ 3 [11]",
          hint: "Utilisez l'algorithme d'Euclide étendu",
          solution: "1. 126 = 35×3 + 21\n   35 = 21×1 + 14\n   21 = 14×1 + 7\n   14 = 7×2 + 0\n   Donc pgcd(126, 35) = 7\n\n2. En remontant :\n   7 = 21 - 14×1 = 21 - (35-21×1)×1 = 21×2 - 35\n   = (126-35×3)×2 - 35 = 126×2 - 35×7\n   Donc u = 2, v = -7\n\n3. 7x ≡ 3 [11], comme pgcd(7,11) = 1\n   7×8 = 56 ≡ 1 [11]\n   Donc x ≡ 3×8 ≡ 24 ≡ 2 [11]",
          explanation: "Application de l'algorithme d'Euclide et résolution de congruences",
          category: "Arithmétique"
        },
        {
          id: "b2-2",
          title: "Suites et convergence",
          difficulty: "Avancé" as const,
          points: 16,
          statement: "Soit (uₙ) définie par u₀ = 1 et uₙ₊₁ = (2uₙ + 3)/(uₙ + 2)\n1. Calculer u₁, u₂, u₃\n2. Montrer que uₙ > 0 pour tout n\n3. Étudier la monotonie de (uₙ)",
          hint: "Étudiez le signe de uₙ₊₁ - uₙ",
          solution: "1. u₁ = (2×1+3)/(1+2) = 5/3\n   u₂ = (2×5/3+3)/(5/3+2) = (10/3+9/3)/(11/3) = 19/11\n   u₃ = (2×19/11+3)/(19/11+2) = (38/11+33/11)/(41/11) = 71/41\n\n2. Par récurrence : u₀ = 1 > 0\n   Si uₙ > 0, alors uₙ₊₁ = (2uₙ+3)/(uₙ+2) > 0\n\n3. uₙ₊₁ - uₙ = (2uₙ+3)/(uₙ+2) - uₙ = (2uₙ+3-uₙ²-2uₙ)/(uₙ+2) = (3-uₙ²)/(uₙ+2)\n   Si uₙ < √3, alors uₙ₊₁ > uₙ\n   La suite converge vers √3",
          explanation: "Étude d'une suite définie par récurrence avec analyse de convergence",
          category: "Suites"
        }
      ]
    },
    {
      id: 'bilan-complet',
      title: 'Bilan Complet - Toute l\'Algèbre',
      description: 'Synthèse de tous les chapitres d\'algèbre',
      chapters: ['Tous les chapitres'],
      difficulty: 'Expert',
      duration: '90 min',
      exercises: [
        {
          id: "bc-1",
          title: "Problème de synthèse",
          difficulty: "Avancé" as const,
          points: 25,
          statement: "On considère la suite (uₙ) définie par u₀ = 2 et uₙ₊₁ = uₙ² - 2uₙ + 2\n1. Exprimer uₙ en fonction de n\n2. Calculer la somme S = u₀ + u₁ + ... + u₁₀\n3. Résoudre dans ℂ : z³ - 3z² + 4z - 2 = 0",
          hint: "Cherchez une relation avec les nombres complexes",
          solution: "1. Posons vₙ = uₙ - 1\n   vₙ₊₁ = uₙ₊₁ - 1 = uₙ² - 2uₙ + 2 - 1 = (uₙ-1)² = vₙ²\n   Donc vₙ = v₀^(2ⁿ) = 1^(2ⁿ) = 1\n   Ainsi uₙ = 1 + 1 = 2 pour tout n\n\n2. S = 11 × 2 = 22\n\n3. On teste z = 1 : 1 - 3 + 4 - 2 = 0\n   Donc (z-1) est facteur\n   z³ - 3z² + 4z - 2 = (z-1)(z²-2z+2)\n   z²-2z+2 = 0 ⟹ z = 1±i\n   Solutions : z = 1, z = 1+i, z = 1-i",
          explanation: "Problème de synthèse combinant suites, sommes et équations complexes",
          category: "Synthèse"
        }
      ]
    }
  ];

  const handleBilanSelect = (bilanId: string) => {
    setSelectedBilan(selectedBilan === bilanId ? null : bilanId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
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
                <Trophy className="w-6 h-6 text-purple-600" />
                <h1 className="text-xl font-bold text-slate-900">Bilans Algèbre</h1>
              </div>
            </div>
            <Link to="/mega-bilan">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                Méga Bilan
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4">
            Bilans d'Évaluation - Algèbre
          </h2>
          <p className="text-slate-600">Testez vos connaissances avec des exercices de synthèse</p>
        </div>

        <div className="grid gap-6 mb-8">
          {bilanSets.map((bilan) => (
            <Card key={bilan.id} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-purple-800">{bilan.title}</CardTitle>
                    <CardDescription className="mt-1">{bilan.description}</CardDescription>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge className={
                        bilan.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-800' :
                        bilan.difficulty === 'Avancé' ? 'bg-red-100 text-red-800' :
                        'bg-purple-100 text-purple-800'
                      }>
                        {bilan.difficulty}
                      </Badge>
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {bilan.duration}
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="w-4 h-4 mr-1" />
                        {bilan.exercises.length} exercices
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleBilanSelect(bilan.id)}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    {selectedBilan === bilan.id ? 'Masquer' : 'Commencer'}
                  </Button>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-slate-600">
                    <strong>Chapitres couverts :</strong> {bilan.chapters.join(', ')}
                  </p>
                </div>
              </CardHeader>

              {selectedBilan === bilan.id && (
                <CardContent>
                  <ExerciseList exercises={bilan.exercises} color="from-purple-600 to-pink-600" />
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlgebraBilanPage;
