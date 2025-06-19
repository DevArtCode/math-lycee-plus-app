
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, BookOpen, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Algebra = () => {
  const chapters = [
    {
      id: 1,
      title: 'Équations du premier degré',
      description: 'Résolution d\'équations simples et complexes',
      exercises: 23,
      difficulty: 'Facile'
    },
    {
      id: 2,
      title: 'Systèmes d\'équations',
      description: 'Méthodes de résolution par substitution et élimination',
      exercises: 18,
      difficulty: 'Moyen'
    },
    {
      id: 3,
      title: 'Polynômes',
      description: 'Opérations sur les polynômes et factorisation',
      exercises: 31,
      difficulty: 'Difficile'
    },
    {
      id: 4,
      title: 'Équations du second degré',
      description: 'Discriminant, racines et forme canonique',
      exercises: 27,
      difficulty: 'Moyen'
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
                <h1 className="text-xl font-bold text-slate-900">Algèbre</h1>
              </div>
            </div>
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
            Explorez les concepts fondamentaux de l'algèbre, des équations simples aux polynômes complexes.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-500">{chapter.exercises} exercices</span>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
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

export default Algebra;
