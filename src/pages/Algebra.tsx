
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, BookOpen, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Algebra = () => {
  const chapters = [
    {
      id: 1,
      title: 'Nombres & ensembles',
      description: 'ℕ, ℤ, ℚ, ℝ, ℂ - Construction et propriétés des ensembles de nombres',
      exercises: 28,
      difficulty: 'Facile',
      courseUrl: '/algebra/sets/course',
      exerciseUrl: '/algebra/sets/exercise',
      content: [
        'Entiers naturels (ℕ) et relatifs (ℤ)',
        'Nombres rationnels (ℚ) et irrationnels',
        'Nombres réels (ℝ) et propriétés',
        'Introduction aux nombres complexes (ℂ)'
      ]
    },
    {
      id: 2,
      title: 'Calcul algébrique',
      description: 'Identités remarquables, factorisations et polynômes du 2nd degré',
      exercises: 45,
      difficulty: 'Moyen',
      courseUrl: '/algebra/calculus/course',
      exerciseUrl: '/algebra/calculus/exercise',
      content: [
        'Identités remarquables : (a±b)² = a² ± 2ab + b²',
        'Différence de carrés : (a-b)(a+b) = a² - b²',
        'Factorisation de trinômes du second degré',
        'Discriminant Δ et calcul des racines',
        'Forme canonique et résolution graphique'
      ]
    },
    {
      id: 3,
      title: 'Arithmétique',
      description: 'Division euclidienne, Bézout, congruences et théorème de Fermat',
      exercises: 26,
      difficulty: 'Difficile',
      courseUrl: '/algebra/arithmetic/course',
      exerciseUrl: '/algebra/arithmetic/exercise',
      content: [
        'Division euclidienne : a = bq + r',
        'Identité de Bézout : au + bv = gcd(a,b)',
        'Congruences : a ≡ b [n]',
        'Petit théorème de Fermat',
        'Applications en cryptographie'
      ]
    },
    {
      id: 4,
      title: 'Suites numériques',
      description: 'Suites arithmétiques, géométriques et définies par récurrence',
      exercises: 38,
      difficulty: 'Moyen',
      courseUrl: '/algebra/sequences/course',
      exerciseUrl: '/algebra/sequences/exercise',
      content: [
        'Suites arithmétiques : uₙ = u₀ + nr',
        'Suites géométriques : uₙ = u₀ · qⁿ',
        'Calcul de sommes et limites',
        'Suites définies par récurrence',
        'Théorème des gendarmes'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">🔢 Algèbre</h1>
              </div>
            </div>
            <Link to="/algebra/bilan">
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600">
                Bilan Algèbre
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Maîtrisez l'<span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Algèbre</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Des nombres naturels aux complexes, explorez les fondements de l'algèbre moderne
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    chapter.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                    chapter.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {chapter.difficulty}
                  </span>
                </div>
                <CardTitle className="text-xl text-slate-900">{chapter.title}</CardTitle>
                <CardDescription className="text-slate-600">
                  {chapter.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-medium text-slate-800 mb-2">Contenu du chapitre :</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {chapter.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-500">{chapter.exercises} exercices</span>
                </div>
                <div className="flex gap-2">
                  <Link to={chapter.courseUrl} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Cours
                    </Button>
                  </Link>
                  <Link to={chapter.exerciseUrl} className="flex-1">
                    <Button variant="outline" className="w-full">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Exercices
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Formules importantes */}
        <div className="mt-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">📝 Formules essentielles</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="identites" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="identites">Identités</TabsTrigger>
                  <TabsTrigger value="complexes">Complexes</TabsTrigger>
                  <TabsTrigger value="suites">Suites</TabsTrigger>
                  <TabsTrigger value="arithmetique">Arithmétique</TabsTrigger>
                </TabsList>
                <TabsContent value="identites" className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Identités remarquables :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>(a + b)² = a² + 2ab + b²</li>
                      <li>(a - b)² = a² - 2ab + b²</li>
                      <li>(a - b)(a + b) = a² - b²</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="complexes" className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Nombres complexes :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>z = a + ib (forme algébrique)</li>
                      <li>|z| = √(a² + b²) (module)</li>
                      <li>z̄ = a - ib (conjugué)</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="suites" className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Suites :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>Arithmétique : uₙ = u₀ + nr</li>
                      <li>Géométrique : uₙ = u₀ × qⁿ</li>
                      <li>Somme arith. : Sₙ = (n+1)(u₀ + uₙ)/2</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="arithmetique" className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Arithmétique :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>Division : a = bq + r</li>
                      <li>Bézout : au + bv = gcd(a,b)</li>
                      <li>Congruence : a ≡ b [n]</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Algebra;
