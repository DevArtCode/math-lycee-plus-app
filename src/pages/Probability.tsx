
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowLeft, BookOpen, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Probability = () => {
  const chapters = [
    {
      id: 1,
      title: 'Statistiques descriptives',
      description: 'Moyennes, médianes et représentations graphiques',
      exercises: 19,
      difficulty: 'Facile'
    },
    {
      id: 2,
      title: 'Probabilités discrètes',
      description: 'Événements, probabilités et dénombrement',
      exercises: 24,
      difficulty: 'Moyen'
    },
    {
      id: 3,
      title: 'Variables aléatoires',
      description: 'Lois de probabilité et espérance mathématique',
      exercises: 18,
      difficulty: 'Difficile'
    },
    {
      id: 4,
      title: 'Lois continues',
      description: 'Loi normale, exponentielle et applications',
      exercises: 21,
      difficulty: 'Difficile'
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
                <h1 className="text-xl font-bold text-slate-900">Probabilités</h1>
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
            Explorez le monde des statistiques et des probabilités.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-500">{chapter.exercises} exercices</span>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
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

export default Probability;
