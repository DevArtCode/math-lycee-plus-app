
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Geometry = () => {
  const chapters = [
    {
      id: 1,
      title: 'Géométrie plane',
      description: 'Vecteurs, produit scalaire et théorème d\'Al-Kashi',
      exercises: 34,
      difficulty: 'Moyen',
      content: [
        'Vecteurs : AB⃗ = AC⃗ + CB⃗',
        'Produit scalaire : u⃗·v⃗ = ||u||||v||cos(θ)',
        'Orthogonalité : u⃗·v⃗ = 0',
        'Théorème d\'Al-Kashi',
        'Applications aux triangles'
      ]
    },
    {
      id: 2,
      title: 'Géométrie dans l\'espace',
      description: 'Repères orthonormés, plans et droites dans ℝ³',
      exercises: 28,
      difficulty: 'Difficile',
      content: [
        'Repère orthonormé dans ℝ³',
        'Plans et droites, positions relatives',
        'Produit scalaire dans l\'espace',
        'Projection orthogonale',
        'Équation cartésienne : ax + by + cz + d = 0'
      ]
    },
    {
      id: 3,
      title: 'Trigonométrie',
      description: 'Fonctions trigonométriques, cercle unité et identités',
      exercises: 42,
      difficulty: 'Moyen',
      content: [
        'Cercle trigonométrique',
        'Fonctions sin, cos, tan',
        'Identités fondamentales',
        'Équations trigonométriques',
        'Formules d\'addition'
      ]
    },
    {
      id: 4,
      title: 'Géométrie complexe',
      description: 'Représentation complexe, rotations et transformations',
      exercises: 25,
      difficulty: 'Difficile',
      content: [
        'Vecteurs → complexes : z = x + iy',
        'Rotation d\'angle θ : z ↦ e^(iθ) · z',
        'Alignement et cercles',
        'Distance via les complexes',
        'Transformations du plan'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
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
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">📐 Géométrie</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Découvrez la <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Géométrie</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            De la géométrie plane aux espaces complexes, explorez les formes et les transformations
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                        <span className="text-green-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-500">{chapter.exercises} exercices</span>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
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
              <Tabs defaultValue="vecteurs" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="vecteurs">Vecteurs</TabsTrigger>
                  <TabsTrigger value="trigo">Trigonométrie</TabsTrigger>
                  <TabsTrigger value="espace">Espace</TabsTrigger>
                  <TabsTrigger value="complexe">Complexe</TabsTrigger>
                </TabsList>
                <TabsContent value="vecteurs" className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Vecteurs et produit scalaire :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>AB⃗ = AC⃗ + CB⃗</li>
                      <li>u⃗·v⃗ = ||u||||v||cos(θ)</li>
                      <li>Orthogonalité : u⃗·v⃗ = 0</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="trigo" className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Trigonométrie :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>sin²(x) + cos²(x) = 1</li>
                      <li>tan(x) = sin(x)/cos(x)</li>
                      <li>cos(a+b) = cos(a)cos(b) - sin(a)sin(b)</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="espace" className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Géométrie dans l'espace :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>Plan : ax + by + cz + d = 0</li>
                      <li>Distance point-plan</li>
                      <li>Projection orthogonale</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="complexe" className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Géométrie complexe :</h4>
                    <ul className="space-y-2 font-mono text-sm">
                      <li>z = x + iy (affixe)</li>
                      <li>Rotation : z ↦ e^(iθ) · z</li>
                      <li>|z₁ - z₂| = distance</li>
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

export default Geometry;
