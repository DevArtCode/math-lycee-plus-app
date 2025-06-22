
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft, BookOpen, Target, FileText, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Logic = () => {
  const chapters = [
    {
      id: 'logic-basics',
      title: '🤔 Logique de base',
      description: 'Implication, réciproque, contraposée',
      level: 'Terminale → L1',
      exercises: 24,
      courseUrl: '/logic/basics/course',
      exerciseUrl: '/logic/basics/exercise'
    },
    {
      id: 'quantifiers',
      title: '∀∃ Quantificateurs',
      description: 'Pour tout, il existe',
      level: 'L1',
      exercises: 18,
      courseUrl: '/logic/quantifiers/course',
      exerciseUrl: '/logic/quantifiers/exercise'
    },
    {
      id: 'sets',
      title: '📊 Théorie des ensembles',
      description: 'Union, intersection, complémentaire',
      level: 'Terminale → L1',
      exercises: 32,
      courseUrl: '/logic/sets/course',
      exerciseUrl: '/logic/sets/exercise'
    },
    {
      id: 'induction',
      title: '🔄 Récurrence',
      description: 'Raisonnement par récurrence',
      level: 'Terminale → L1',
      exercises: 28,
      courseUrl: '/logic/induction/course',
      exerciseUrl: '/logic/induction/exercise'
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
                  Accueil
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">🧠 Logique & Ensembles</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4">
            Logique & Ensembles
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Maîtrisez les fondements de la logique mathématique et de la théorie des ensembles
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600" />
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 flex items-center">
                  {chapter.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {chapter.description}
                </CardDescription>
                <div className="flex justify-between items-center text-sm text-slate-500 mt-2">
                  <span>{chapter.level}</span>
                  <span>{chapter.exercises} exercices</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Link to={chapter.courseUrl} className="flex-1">
                    <Button variant="outline" className="w-full">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Cours
                    </Button>
                  </Link>
                  <Link to={chapter.exerciseUrl} className="flex-1">
                    <Button variant="outline" className="w-full">
                      <Target className="w-4 h-4 mr-2" />
                      Exercices
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/logic/bilan">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardHeader className="text-center">
                <FileText className="w-12 h-12 mx-auto text-purple-600 mb-2" />
                <CardTitle>Bilan Logique</CardTitle>
                <CardDescription>Exercices de synthèse</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link to="/mega-bilan">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardHeader className="text-center">
                <Brain className="w-12 h-12 mx-auto text-purple-600 mb-2" />
                <CardTitle>Méga Bilan</CardTitle>
                <CardDescription>Synthèse générale</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link to="/exam/logic">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 mx-auto text-purple-600 mb-2" />
                <CardTitle>Examens</CardTitle>
                <CardDescription>Tests chronométrés</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Logic;
