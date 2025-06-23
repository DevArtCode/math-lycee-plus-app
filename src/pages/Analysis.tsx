
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowLeft, BookOpen, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Analysis = () => {
  const chapters = [
    {
      id: 1,
      title: 'Fonctions et limites',
      description: 'Étude des fonctions, continuité et calcul de limites',
      exercises: 11,
      difficulty: 'Moyen',
      content: [
        'Domaine de définition et ensemble image',
        'Limites finies et infinies',
        'Continuité en un point et sur un intervalle',
        'Théorème des valeurs intermédiaires',
        'Asymptotes verticales et horizontales'
      ],
      coursePath: '/analysis/functions/course',
      exercisePath: '/analysis/functions/exercise'
    },
    {
      id: 2,
      title: 'Dérivation',
      description: 'Calcul différentiel et applications géométriques',
      exercises: 10,
      difficulty: 'Moyen',
      content: [
        'Nombre dérivé et fonction dérivée',
        'Règles de dérivation (somme, produit, quotient)',
        'Dérivée des fonctions composées',
        'Tangente à une courbe',
        'Variations et extremums'
      ],
      coursePath: '/analysis/derivatives/course',
      exercisePath: '/analysis/derivatives/exercise'
    },
    {
      id: 3,
      title: 'Primitives et intégrales',
      description: 'Calcul intégral et applications',
      exercises: 11,
      difficulty: 'Difficile',
      content: [
        'Primitives usuelles',
        'Intégrale définie (Riemann)',
        'Théorème fondamental de l\'analyse',
        'Calcul d\'aires sous une courbe',
        'Intégration par parties et substitution'
      ],
      coursePath: '/analysis/integrals/course',
      exercisePath: '/analysis/integrals/exercise'
    },
    {
      id: 4,
      title: 'Suites numériques',
      description: 'Convergence et comportement asymptotique',
      exercises: 11,
      difficulty: 'Difficile',
      content: [
        'Suites arithmétiques et géométriques',
        'Limite d\'une suite',
        'Théorèmes de convergence',
        'Suites monotones et majorées',
        'Suites récurrentes et applications'
      ],
      coursePath: '/analysis/sequences/course',
      exercisePath: '/analysis/sequences/exercise'
    }
  ];

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
                  Retour
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">📈 Analyse</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Maîtrisez l'<span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Analyse</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Fonctions, dérivées, intégrales et suites : explorez les fondements du calcul différentiel et intégral
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                        <span className="text-purple-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-500">{chapter.exercises} exercices</span>
                </div>
                <div className="flex gap-2">
                  <Link to={chapter.exercisePath} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Commencer
                    </Button>
                  </Link>
                  <Link to={chapter.coursePath} className="flex-1">
                    <Button variant="outline" className="w-full">
                      Voir le cours
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
              <Tabs defaultValue="limites" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="limites">Limites</TabsTrigger>
                  <TabsTrigger value="derivees">Dérivées</TabsTrigger>
                  <TabsTrigger value="integrales">Intégrales</TabsTrigger>
                  <TabsTrigger value="suites">Suites</TabsTrigger>
                </TabsList>
                <TabsContent value="limites" className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Limites usuelles :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>lim(x→∞) 1/x = 0</li>
                      <li>lim(x→0) sin(x)/x = 1</li>
                      <li>lim(x→0) (1+x)^(1/x) = e</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="derivees" className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Dérivées usuelles :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>(x^n)' = n·x^(n-1)</li>
                      <li>(e^x)' = e^x</li>
                      <li>(ln(x))' = 1/x</li>
                      <li>(sin(x))' = cos(x)</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="integrales" className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Primitives usuelles :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>∫ x^n dx = x^(n+1)/(n+1) + C</li>
                      <li>∫ e^x dx = e^x + C</li>
                      <li>∫ 1/x dx = ln|x| + C</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="suites" className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Suites classiques :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>Arithmétique : u_n = u_0 + n·r</li>
                      <li>Géométrique : u_n = u_0 · q^n</li>
                      <li>S_n = n(u_1 + u_n)/2 (arith.)</li>
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

export default Analysis;
