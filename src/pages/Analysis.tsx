
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
      title: 'Fonctions et graphiques',
      description: 'Domaines, variations et fonctions usuelles',
      exercises: 36,
      difficulty: 'Facile',
      content: [
        'Domaine de définition',
        'Croissance/décroissance',
        'Parité : fonctions paire/impaire',
        'Fonction composée',
        'Fonctions usuelles : x^n, √x, 1/x, e^x, ln(x), sin(x), cos(x)'
      ]
    },
    {
      id: 2,
      title: 'Limites et continuité',
      description: 'Calcul de limites et théorèmes fondamentaux',
      exercises: 32,
      difficulty: 'Moyen',
      content: [
        'lim(x→a) f(x) = ℓ',
        'Limites à l\'infini',
        'Formes indéterminées',
        'Théorème des valeurs intermédiaires',
        'Asymptotes horizontales et obliques'
      ]
    },
    {
      id: 3,
      title: 'Dérivation',
      description: 'Calcul différentiel et applications géométriques',
      exercises: 45,
      difficulty: 'Moyen',
      content: [
        'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h',
        'Dérivées usuelles : (x^n)\' = nx^(n-1)',
        '(e^x)\' = e^x, (ln x)\' = 1/x',
        '(sin x)\' = cos x, (cos x)\' = -sin x',
        'Équation de tangente : y = f\'(a)(x-a) + f(a)'
      ]
    },
    {
      id: 4,
      title: 'Convexité',
      description: 'Étude de la courbure et points d\'inflexion',
      exercises: 24,
      difficulty: 'Difficile',
      content: [
        'f\'\' > 0 ⇒ f convexe',
        'f\'\' < 0 ⇒ f concave',
        'Point d\'inflexion : changement de signe de f\'\'',
        'Inégalité de convexité',
        'Applications à l\'optimisation'
      ]
    },
    {
      id: 5,
      title: 'Intégration',
      description: 'Primitives, intégrales définies et calcul d\'aires',
      exercises: 38,
      difficulty: 'Difficile',
      content: [
        'Primitive : F\'(x) = f(x)',
        'Intégrale définie : ∫[a,b] f(x)dx = F(b) - F(a)',
        'Aire entre deux courbes',
        'Intégration par parties : ∫uv\' = uv - ∫u\'v',
        'Valeur moyenne d\'une fonction'
      ]
    },
    {
      id: 6,
      title: 'Équations différentielles',
      description: 'y\' = ay + b et applications',
      exercises: 22,
      difficulty: 'Difficile',
      content: [
        'y\' = ay + b',
        'Solution : y(x) = Ce^(ax) - b/a',
        'y\' = f(x) ⇒ y = ∫f(x)dx',
        'Conditions initiales',
        'Applications physiques (croissance, décroissance)'
      ]
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
            Explorez l'<span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Analyse</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Des fonctions aux équations différentielles, plongez dans l'univers du calcul infinitésimal
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
                  <Button className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Commencer
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Voir le cours
                  </Button>
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
              <Tabs defaultValue="derivees" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="derivees">Dérivées</TabsTrigger>
                  <TabsTrigger value="limites">Limites</TabsTrigger>
                  <TabsTrigger value="integrales">Intégrales</TabsTrigger>
                  <TabsTrigger value="eq-diff">Éq. diff.</TabsTrigger>
                </TabsList>
                <TabsContent value="derivees" className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Dérivées usuelles :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>(x^n)' = nx^(n-1)</li>
                      <li>(e^x)' = e^x</li>
                      <li>(ln x)' = 1/x</li>
                      <li>(sin x)' = cos x, (cos x)' = -sin x</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="limites" className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Limites importantes :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>lim(x→0) sin(x)/x = 1</li>
                      <li>lim(x→∞) (1 + 1/x)^x = e</li>
                      <li>lim(x→0) (e^x - 1)/x = 1</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="integrales" className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Intégration :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>∫ x^n dx = x^(n+1)/(n+1) + C</li>
                      <li>∫ e^x dx = e^x + C</li>
                      <li>∫ 1/x dx = ln|x| + C</li>
                      <li>∫[a,b] f(x)dx = F(b) - F(a)</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="eq-diff" className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Équations différentielles :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>y' = ay + b</li>
                      <li>Solution : y = Ce^(ax) - b/a</li>
                      <li>y' = f(x) ⇒ y = ∫f(x)dx</li>
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
