
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Clock, Star, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ExerciseList from '@/components/ExerciseList';

const MegaBilanPage = () => {
  const [selectedMegaBilan, setSelectedMegaBilan] = useState<string | null>(null);

  const megaBilans = [
    {
      id: 'mega-1',
      title: 'Méga Bilan 1 - Algèbre & Géométrie',
      description: 'Combinaison de l\'algèbre et de la géométrie',
      domains: ['Algèbre', 'Géométrie'],
      difficulty: 'Expert',
      duration: '120 min',
      exercises: [
        {
          id: "m1-1",
          title: "Nombres complexes et géométrie",
          difficulty: "Avancé" as const,
          points: 25,
          statement: "Dans le plan complexe, on considère les points A(1+i), B(2-i) et C(-1+2i).\n1. Calculer les affixes des vecteurs AB⃗ et AC⃗\n2. Déterminer l'affixe du point D tel que ABCD soit un parallélogramme\n3. Calculer l'aire du triangle ABC\n4. Trouver l'équation du cercle circonscrit au triangle ABC",
          hint: "Utilisez les propriétés géométriques des nombres complexes",
          solution: "1. AB⃗ : z_B - z_A = (2-i) - (1+i) = 1-2i\n   AC⃗ : z_C - z_A = (-1+2i) - (1+i) = -2+i\n\n2. ABCD parallélogramme ⟹ AD⃗ = BC⃗\n   BC⃗ = z_C - z_B = (-1+2i) - (2-i) = -3+3i\n   z_D = z_A + BC⃗ = (1+i) + (-3+3i) = -2+4i\n\n3. Aire = (1/2)|Im(AB⃗ × AC̄⃗)|\n   AC̄⃗ = -2-i, AB⃗ × AC̄⃗ = (1-2i)(-2-i) = -2-i+4i+2i² = -4+3i\n   Aire = (1/2)|Im(-4+3i)| = 3/2\n\n4. Centre O : (A+B+C)/3, puis |z-O| = R",
          explanation: "Synthèse complexes-géométrie avec parallélogramme et cercle circonscrit",
          category: "Algèbre-Géométrie"
        },
        {
          id: "m1-2",
          title: "Équations et lieux géométriques",
          difficulty: "Avancé" as const,
          points: 20,
          statement: "Soit l'équation (E) : z³ - (2+i)z² + (1+2i)z - i = 0\n1. Vérifier que z₁ = i est solution\n2. Factoriser le polynôme et trouver toutes les solutions\n3. Représenter les solutions dans le plan complexe\n4. Quel est le lieu géométrique des points d'affixes z tels que |z-i| = |z-1| ?",
          hint: "Factorisation après avoir trouvé une racine évidente",
          solution: "1. i³ - (2+i)i² + (1+2i)i - i = -i + (2+i) + (i-2) - i = 0 ✓\n\n2. Division par (z-i) :\n   z³ - (2+i)z² + (1+2i)z - i = (z-i)(z²-2z+1) = (z-i)(z-1)²\n   Solutions : z₁ = i, z₂ = z₃ = 1 (racine double)\n\n3. Points : (0,1) et (1,0) dans le plan\n\n4. |z-i| = |z-1| ⟹ distance égale aux points (0,1) et (1,0)\n   C'est la médiatrice du segment [i,1] : droite y = x",
          explanation: "Résolution d'équations cubiques et interprétation géométrique",
          category: "Équations-Géométrie"
        }
      ]
    },
    {
      id: 'mega-2', 
      title: 'Méga Bilan 2 - Algèbre & Analyse',
      description: 'Fonctions, suites et calcul algébrique',
      domains: ['Algèbre', 'Analyse'],
      difficulty: 'Expert',
      duration: '90 min',
      exercises: [
        {
          id: "m2-1",
          title: "Suite et fonction exponentielle",
          difficulty: "Avancé" as const,
          points: 22,
          statement: "Soit f(x) = xe^(-x) et la suite (uₙ) définie par u₀ = 1 et uₙ₊₁ = f(uₙ)\n1. Étudier les variations de f sur [0,+∞[\n2. Montrer que la suite (uₙ) est bien définie et positive\n3. Étudier la monotonie de (uₙ)\n4. Déterminer la limite de (uₙ)",
          hint: "Étudiez d'abord la fonction f, puis utilisez ses propriétés pour la suite",
          solution: "1. f'(x) = e^(-x) - xe^(-x) = e^(-x)(1-x)\n   f'(x) > 0 si x < 1, f'(x) < 0 si x > 1\n   f croissante sur [0,1], décroissante sur [1,+∞[\n   Maximum en x = 1 : f(1) = 1/e\n\n2. u₀ = 1 > 0, si uₙ > 0 alors uₙ₊₁ = uₙe^(-uₙ) > 0\n\n3. uₙ₊₁ - uₙ = uₙe^(-uₙ) - uₙ = uₙ(e^(-uₙ) - 1)\n   Si uₙ > 0, alors e^(-uₙ) < 1, donc uₙ₊₁ < uₙ\n   La suite est décroissante\n\n4. (uₙ) décroissante minorée par 0, donc converge\n   Si l = lim uₙ, alors l = le^(-l)\n   Si l ≠ 0, alors 1 = e^(-l), impossible\n   Donc l = 0",
          explanation: "Étude combinée fonction-suite avec convergence",
          category: "Suite-Fonction"
        }
      ]
    },
    {
      id: 'mega-3',
      title: 'Méga Bilan 3 - Interdisciplinaire Complet',
      description: 'Algèbre, Géométrie, Analyse et Probabilités',
      domains: ['Algèbre', 'Géométrie', 'Analyse', 'Probabilités'],
      difficulty: 'Maître',
      duration: '150 min',
      exercises: [
        {
          id: "m3-1",
          title: "Problème de synthèse complète",
          difficulty: "Avancé" as const,
          points: 30,
          statement: "On lance n fois une pièce équilibrée. Soit X le nombre de 'Pile'.\n1. Quelle est la loi de X ?\n2. Calculer P(X = k) et E(X)\n3. Pour n = 100, utiliser l'approximation normale pour calculer P(45 ≤ X ≤ 55)\n4. Modéliser ce problème avec une suite géométrique de raison 1/2",
          hint: "Combinez loi binomiale, approximation normale et suites",
          solution: "1. X suit une loi binomiale B(n, 1/2)\n\n2. P(X = k) = C(n,k) × (1/2)ⁿ\n   E(X) = n/2\n\n3. X ~ B(100, 1/2) ≈ N(50, 25)\n   P(45 ≤ X ≤ 55) = P(-1 ≤ Z ≤ 1) ≈ 0.68\n\n4. Probabilité d'obtenir exactement k piles :\n   Suite géométrique de premier terme 1/2 et raison 1/2",
          explanation: "Synthèse probabilités-analyse avec approximations",
          category: "Interdisciplinaire"
        }
      ]
    }
  ];

  const handleMegaBilanSelect = (bilanId: string) => {
    setSelectedMegaBilan(selectedMegaBilan === bilanId ? null : bilanId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à l'accueil
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Brain className="w-6 h-6 text-indigo-600" />
                <h1 className="text-xl font-bold text-slate-900">Méga Bilans Interdisciplinaires</h1>
              </div>
            </div>
            <div className="flex gap-2">
              <Link to="/algebra/bilan">
                <Button variant="outline">Bilans Algèbre</Button>
              </Link>
              <Link to="/exam/general">
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-500">
                  <Zap className="w-4 h-4 mr-2" />
                  Examens
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Méga Bilans Interdisciplinaires
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Défiez-vous avec des exercices complexes combinant plusieurs domaines mathématiques. 
            Testez votre capacité à faire des liens entre les différents chapitres.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="py-6 text-center">
              <Trophy className="w-12 h-12 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-800">3</div>
              <div className="text-blue-600">Méga Bilans</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50">
            <CardContent className="py-6 text-center">
              <Brain className="w-12 h-12 mx-auto text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-purple-800">6</div>
              <div className="text-purple-600">Domaines Combinés</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="py-6 text-center">
              <Star className="w-12 h-12 mx-auto text-green-600 mb-2" />
              <div className="text-2xl font-bold text-green-800">Expert</div>
              <div className="text-green-600">Niveau Requis</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6">
          {megaBilans.map((megaBilan) => (
            <Card key={megaBilan.id} className="border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-indigo-800 mb-2">{megaBilan.title}</CardTitle>
                    <CardDescription className="text-lg mb-3">{megaBilan.description}</CardDescription>
                    <div className="flex items-center gap-6">
                      <Badge className={
                        megaBilan.difficulty === 'Expert' ? 'bg-red-100 text-red-800' :
                        'bg-purple-100 text-purple-800'
                      }>
                        <Star className="w-3 h-3 mr-1" />
                        {megaBilan.difficulty}
                      </Badge>
                      <div className="flex items-center text-sm text-slate-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {megaBilan.duration}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Trophy className="w-4 h-4 mr-1" />
                        {megaBilan.exercises.length} exercices
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm text-slate-600">
                        <strong>Domaines :</strong> {megaBilan.domains.join(' + ')}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleMegaBilanSelect(megaBilan.id)}
                    size="lg"
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                  >
                    {selectedMegaBilan === megaBilan.id ? 'Masquer' : 'Relever le Défi'}
                  </Button>
                </div>
              </CardHeader>

              {selectedMegaBilan === megaBilan.id && (
                <CardContent>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-indigo-800 mb-2">⚡ Conseils pour réussir :</h4>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      <li>• Prenez le temps de bien lire chaque énoncé</li>
                      <li>• Identifiez les domaines mathématiques impliqués</li>
                      <li>• Faites des liens entre les différentes parties</li>
                      <li>• N'hésitez pas à faire des schémas ou graphiques</li>
                    </ul>
                  </div>
                  <ExerciseList exercises={megaBilan.exercises} color="from-indigo-600 to-purple-600" />
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardContent className="py-8">
              <Brain className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Prêt pour un défi ultime ?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Les méga bilans sont conçus pour tester votre maîtrise globale des mathématiques. 
                Ils combinent plusieurs domaines et nécessitent une approche transversale.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/exam/mega">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-500">
                    <Zap className="w-5 h-5 mr-2" />
                    Examen Méga Bilan
                  </Button>
                </Link>
                <Link to="/algebra">
                  <Button variant="outline" size="lg">
                    Retour aux Chapitres
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MegaBilanPage;
