
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Target, Trophy, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Bilan = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const subjects = [
    {
      id: 'algebra',
      name: 'Algèbre',
      icon: '🔢',
      color: 'from-green-500 to-emerald-600',
      exercises: 45,
      chapters: 4
    },
    {
      id: 'analysis',
      name: 'Analyse',
      icon: '📈',
      color: 'from-purple-500 to-purple-600',
      exercises: 40,
      chapters: 4
    },
    {
      id: 'probability',
      name: 'Probabilités',
      icon: '🎲',
      color: 'from-orange-500 to-orange-600',
      exercises: 35,
      chapters: 5
    },
    {
      id: 'logic',
      name: 'Logique',
      icon: '🧠',
      color: 'from-purple-500 to-indigo-600',
      exercises: 25,
      chapters: 3
    },
    {
      id: 'algorithm',
      name: 'Algorithmique',
      icon: '💻',
      color: 'from-blue-500 to-blue-600',
      exercises: 30,
      chapters: 4
    }
  ];

  const bilanTypes = [
    {
      id: 'quick',
      title: 'Bilan Express',
      description: 'Évaluation rapide de 15 minutes',
      duration: '15 min',
      questions: 10,
      difficulty: 'Mixte',
      icon: <Clock className="w-6 h-6" />
    },
    {
      id: 'standard',
      title: 'Bilan Standard',
      description: 'Évaluation complète de 45 minutes',
      duration: '45 min',
      questions: 25,
      difficulty: 'Progressif',
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 'mega',
      title: 'Méga Bilan',
      description: 'Évaluation approfondie de 90 minutes',
      duration: '90 min',
      questions: 50,
      difficulty: 'Complet',
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">📊 Bilans d'évaluation</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Évaluez vos <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">connaissances</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choisissez un type de bilan pour tester vos compétences dans une ou plusieurs matières
          </p>
        </div>

        {/* Types de bilans */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {bilanTypes.map((bilan) => (
            <Card key={bilan.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    {bilan.icon}
                  </div>
                  <Badge variant="outline">{bilan.duration}</Badge>
                </div>
                <CardTitle className="text-xl text-slate-900">{bilan.title}</CardTitle>
                <CardDescription>{bilan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Questions :</span>
                    <span className="font-medium">{bilan.questions}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Difficulté :</span>
                    <span className="font-medium">{bilan.difficulty}</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                  Commencer le bilan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sélection par matière */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">Bilan par matière</CardTitle>
            <CardDescription>
              Sélectionnez une matière spécifique pour un bilan ciblé
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map((subject) => (
                <Card key={subject.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center text-white text-lg`}>
                        {subject.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{subject.name}</h3>
                        <p className="text-sm text-slate-600">{subject.chapters} chapitres</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">{subject.exercises} exercices</span>
                      <Button size="sm" variant="outline">
                        Évaluer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Historique des bilans */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">Historique des évaluations</CardTitle>
            <CardDescription>
              Consultez vos précédents résultats et suivez vos progrès
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-600 mb-4">Aucun bilan effectué pour le moment</p>
              <Button variant="outline">
                Commencer votre première évaluation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bilan;
