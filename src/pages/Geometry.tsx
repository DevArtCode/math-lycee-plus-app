
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Geometry = () => {
  const chapters = [
    {
      id: 1,
      title: 'Géométrie plane',
      description: 'Points, droites, cercles et figures planes',
      exercises: 26,
      difficulty: 'Facile'
    },
    {
      id: 2,
      title: 'Trigonométrie',
      description: 'Fonctions trigonométriques et identités',
      exercises: 35,
      difficulty: 'Moyen'
    },
    {
      id: 3,
      title: 'Géométrie dans l\'espace',
      description: 'Solides, volumes et géométrie 3D',
      exercises: 22,
      difficulty: 'Difficile'
    },
    {
      id: 4,
      title: 'Vecteurs',
      description: 'Opérations vectorielles et applications',
      exercises: 29,
      difficulty: 'Moyen'
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
                <h1 className="text-xl font-bold text-slate-900">Géométrie</h1>
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
            Explorez les formes, les espaces et les relations géométriques.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
      </section>
    </div>
  );
};

export default Geometry;
