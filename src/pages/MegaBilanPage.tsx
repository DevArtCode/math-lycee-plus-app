
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft, Calculator, BookOpen, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MegaBilanPage = () => {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState<string | null>(null);

  const megaExercises = [
    {
      id: 'mega1',
      title: 'Modélisation d\'une épidémie',
      domains: ['Analyse', 'Probabilités', 'Algorithmique'],
      difficulty: 'Avancé' as const,
      points: 25,
      duration: '45 min',
      statement: `Une épidémie se propage selon le modèle logistique :
N(t) = L / (1 + Ae^(-kt))

où N(t) est le nombre de personnes infectées au temps t (en jours), L = 10000 est la population maximale pouvant être infectée, A et k sont des constantes à déterminer.

Données initiales :
- N(0) = 100 (100 personnes infectées au jour 0)
- N(7) = 500 (500 personnes infectées au jour 7)

1. [Algèbre] Déterminer les constantes A et k
2. [Analyse] Étudier la fonction N(t) : limites, dérivée, croissance
3. [Probabilités] Si on teste aléatoirement 50 personnes au jour 14, quelle est la probabilité d'en trouver exactement 3 infectées ?
4. [Algorithmique] Écrire un algorithme Python pour tracer l'évolution de N(t)`,
      solution: `1. Détermination des constantes :
N(0) = 100 = L/(1+A) = 10000/(1+A) ⟹ A = 99
N(7) = 500 = 10000/(1+99e^(-7k))
1+99e^(-7k) = 20 ⟹ e^(-7k) = 19/99 ⟹ k ≈ 0,23

2. Étude de la fonction :
- lim(t→+∞) N(t) = L = 10000
- N'(t) = LkAe^(-kt)/(1+Ae^(-kt))² > 0 ⟹ croissante
- Point d'inflexion en t = ln(A)/k

3. Probabilité :
N(14) ≈ 1847, donc p = 1847/10000 = 0,1847
X ~ B(50; 0,1847), P(X=3) = C(50,3) × 0,1847³ × 0,8153⁴⁷

4. Code Python :
import numpy as np
import matplotlib.pyplot as plt

def N(t):
    return 10000 / (1 + 99 * np.exp(-0.23 * t))

t = np.linspace(0, 50, 100)
plt.plot(t, N(t))`,
      explanation: 'Exercice interdisciplinaire combinant modélisation mathématique, analyse de fonction et programmation.'
    },
    {
      id: 'mega2',
      title: 'Optimisation d\'un packaging',
      domains: ['Géométrie', 'Analyse', 'Algèbre'],
      difficulty: 'Avancé' as const,
      points: 20,
      duration: '35 min',
      statement: `Une entreprise veut fabriquer des boîtes cylindriques de volume V = 1000 cm³.
Le coût du matériau est de 2€/dm² pour la base et le couvercle, et 1€/dm² pour la surface latérale.

1. [Algèbre] Exprimer la hauteur h en fonction du rayon r
2. [Géométrie] Calculer l'aire totale de la boîte en fonction de r
3. [Analyse] Déterminer les dimensions qui minimisent le coût
4. [Géométrie complexe] Représenter la section de la boîte dans le plan complexe`,
      solution: `1. V = πr²h = 1000 ⟹ h = 1000/(πr²)

2. Aire totale = 2πr² + 2πrh = 2πr² + 2000/r

3. Coût C(r) = 2×2πr² + 1×2000/r = 4πr² + 2000/r
   C'(r) = 8πr - 2000/r² = 0
   ⟹ r³ = 250/π ⟹ r ≈ 4,3 cm, h ≈ 17,2 cm

4. Section : cercle de rayon r dans le plan complexe
   |z| = r avec z = x + iy`,
      explanation: 'Problème d\'optimisation classique combinant géométrie dans l\'espace et calcul différentiel.'
    },
    {
      id: 'mega3',
      title: 'Cryptographie RSA simplifiée',
      domains: ['Arithmétique', 'Algorithmique', 'Logique'],
      difficulty: 'Expert' as const,
      points: 30,
      duration: '50 min',
      statement: `Implémentation simplifiée du cryptosystème RSA :

1. [Arithmétique] Choisir p = 7, q = 11. Calculer n et φ(n)
2. [Arithmétique] Choisir e tel que gcd(e, φ(n)) = 1. Calculer d tel que ed ≡ 1 [φ(n)]
3. [Logique] Démontrer que (m^e)^d ≡ m [n] pour tout m
4. [Algorithmique] Coder un message "MATH" (M=13, A=1, T=20, H=8)
5. [Algorithmique] Écrire l'algorithme de décodage`,
      solution: `1. n = p×q = 77, φ(n) = (p-1)(q-1) = 60

2. e = 7 (car gcd(7,60) = 1)
   Bézout : 7d ≡ 1 [60] ⟹ d = 43

3. Par le théorème de Fermat-Euler :
   Si gcd(m,n) = 1, alors m^φ(n)≡1[n]
   ed = 1 + kφ(n), donc m^ed = m × (m^φ(n))^k ≡ m [n]

4. Codage :
   M: 13^7 ≡ 62 [77]
   A: 1^7 ≡ 1 [77]  
   T: 20^7 ≡ 62 [77]
   H: 8^7 ≡ 57 [77]

5. Décodage : c^43 mod 77 pour chaque caractère`,
      explanation: 'Application de l\'arithmétique modulaire à la cryptographie moderne.'
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
      case 'Avancé': return 'bg-red-100 text-red-800';
      case 'Expert': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'Algèbre': return Calculator;
      case 'Analyse': return TrendingUp;
      case 'Géométrie': return BookOpen;
      case 'Probabilités': return Users;
      case 'Arithmétique': return Calculator;
      case 'Algorithmique': return Brain;
      case 'Logique': return Brain;
      default: return Target;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Accueil
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">🧠 Méga Bilan Interdisciplinaire</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4">
            Méga Bilan Interdisciplinaire
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Exercices complexes combinant plusieurs domaines mathématiques
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <Badge className="bg-purple-100 text-purple-800">Niveau Expert</Badge>
            <Badge className="bg-blue-100 text-blue-800">Pluridisciplinaire</Badge>
            <Badge className="bg-green-100 text-green-800">Applications réelles</Badge>
          </div>
        </div>

        {/* Exercises */}
        <div className="space-y-8">
          {megaExercises.map((exercise) => (
            <Card key={exercise.id} className="border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-purple-800 mb-2">{exercise.title}</CardTitle>
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge className={getDifficultyColor(exercise.difficulty)}>
                        {exercise.difficulty}
                      </Badge>
                      <Badge variant="outline">{exercise.points} points</Badge>
                      <Badge variant="outline">⏱️ {exercise.duration}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exercise.domains.map((domain, index) => {
                        const Icon = getDomainIcon(domain);
                        return (
                          <div key={index} className="flex items-center space-x-1 bg-slate-100 px-2 py-1 rounded-md">
                            <Icon className="w-3 h-3 text-slate-600" />
                            <span className="text-xs text-slate-600">{domain}</span>
                          </div>
                        );
                      })}
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
                  {/* Statement */}
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-3">📋 Énoncé</h4>
                    <p className="text-slate-700 whitespace-pre-line leading-relaxed">{exercise.statement}</p>
                  </div>

                  {/* Solution toggle */}
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      onClick={() => toggleSolution(exercise.id)}
                      className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200"
                    >
                      {showSolution === exercise.id ? '❌ Masquer la solution' : '✅ Voir la solution complète'}
                    </Button>
                  </div>

                  {/* Solution */}
                  {showSolution === exercise.id && (
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-3">✅ Solution détaillée</h4>
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

        {/* Call to action */}
        <div className="text-center mt-12">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-blue-50">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Prêt pour un défi plus grand ?</h3>
              <p className="text-slate-600 mb-6">
                Testez vos connaissances avec nos examens chronométrés interdisciplinaires
              </p>
              <Link to="/exam/mega">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600">
                  <Brain className="w-5 h-5 mr-2" />
                  Examen Méga Bilan
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MegaBilanPage;
