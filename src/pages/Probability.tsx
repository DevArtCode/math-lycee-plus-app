
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowLeft, BookOpen, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Probability = () => {
  const chapters = [
    {
      id: 1,
      title: 'Bases de probabilité',
      description: 'Univers Ω, événements et calculs de probabilités',
      exercises: 65,
      difficulty: 'Facile',
      content: [
        'Univers Ω et événements',
        'Probabilité : P(A) ∈ [0,1], P(Ω) = 1',
        'Union : P(A∪B) = P(A) + P(B) - P(A∩B)',
        'Événements contraires et incompatibles',
        'Dénombrement et equiprobabilité'
      ],
      coursePath: '/probability/basics/course',
      exercisePath: '/probability/basics/exercise'
    },
    {
      id: 2,
      title: 'Probabilités conditionnelles',
      description: 'P(B|A), indépendance et formule de Bayes',
      exercises: 78,
      difficulty: 'Moyen',
      content: [
        'P(B|A) = P(A∩B)/P(A)',
        'Indépendance : P(A∩B) = P(A)P(B)',
        'Formule des probabilités totales',
        'Formule de Bayes',
        'Arbres de probabilité'
      ],
      coursePath: '/probability/conditional/course',
      exercisePath: '/probability/conditional/exercise'
    },
    {
      id: 3,
      title: 'Variables aléatoires discrètes',
      description: 'Lois discrètes, espérance et variance',
      exercises: 92,
      difficulty: 'Moyen',
      content: [
        'Variable aléatoire X : valeurs et probabilités',
        'Espérance : E(X) = Σ xᵢP(X = xᵢ)',
        'Variance : V(X) = E(X²) - E(X)²',
        'Loi binomiale : P(X=k) = C(n,k)p^k(1-p)^(n-k)',
        'Loi géométrique et de Poisson'
      ],
      coursePath: '/probability/variables/course',
      exercisePath: '/probability/variables/exercise'
    },
    {
      id: 4,
      title: 'Lois continues',
      description: 'Densité, loi uniforme et introduction à la loi normale',
      exercises: 54,
      difficulty: 'Difficile',
      content: [
        'Densité f(x), P(a≤X≤b) = ∫f(x)dx',
        'Loi uniforme continue',
        'Introduction à la loi normale',
        'Théorème central limite (L1)',
        'Applications statistiques'
      ],
      coursePath: '/probability/continuous/course',
      exercisePath: '/probability/continuous/exercise'
    },
    {
      id: 5,
      title: 'Statistiques descriptives',
      description: 'Moyennes, médianes et représentations graphiques',
      exercises: 47,
      difficulty: 'Facile',
      content: [
        'Moyenne, médiane, mode',
        'Quartiles et écart interquartile',
        'Variance et écart-type',
        'Diagrammes en boîte',
        'Corrélation et régression linéaire'
      ],
      coursePath: '/probability/statistics/course',
      exercisePath: '/probability/statistics/exercise'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
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
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">📊 Probabilités</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Maîtrisez les <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Probabilités</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Du hasard aux lois statistiques, comprenez l'incertitude mathématique
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                        <span className="text-orange-500 mr-2">•</span>
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
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
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
              <Tabs defaultValue="bases" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="bases">Bases</TabsTrigger>
                  <TabsTrigger value="conditionnelles">Conditionnelles</TabsTrigger>
                  <TabsTrigger value="variables">Variables</TabsTrigger>
                  <TabsTrigger value="lois">Lois</TabsTrigger>
                </TabsList>
                <TabsContent value="bases" className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Probabilités de base :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>P(A) ∈ [0,1], P(Ω) = 1</li>
                      <li>P(A∪B) = P(A) + P(B) - P(A∩B)</li>
                      <li>P(A̅) = 1 - P(A)</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="conditionnelles" className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Probabilités conditionnelles :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>P(B|A) = P(A∩B)/P(A)</li>
                      <li>Indépendance : P(A∩B) = P(A)P(B)</li>
                      <li>Formule de Bayes</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="variables" className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Variables aléatoires :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>E(X) = Σ xᵢP(X = xᵢ)</li>
                      <li>V(X) = E(X²) - E(X)²</li>
                      <li>σ(X) = √V(X)</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="lois" className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Lois importantes :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>Binomiale : P(X=k) = C(n,k)p^k(1-p)^(n-k)</li>
                      <li>Uniforme : f(x) = 1/(b-a)</li>
                      <li>Normale : densité en cloche</li>
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

export default Probability;
