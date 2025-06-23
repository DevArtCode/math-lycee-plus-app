
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, Clock, Star, Trophy, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Bilan = () => {
  const [selectedBilan, setSelectedBilan] = useState<string | null>(null);

  const bilanTypes = [
    {
      id: 'rapide',
      title: 'Bilan Rapide',
      description: 'Évaluation express en 15 minutes',
      duration: '15 min',
      questions: 10,
      color: 'from-green-500 to-green-600',
      icon: <Target className="w-6 h-6" />,
      difficulty: 'Mixte'
    },
    {
      id: 'complet',
      title: 'Bilan Complet',
      description: 'Évaluation approfondie de vos connaissances',
      duration: '45 min',
      questions: 25,
      color: 'from-blue-500 to-blue-600',
      icon: <BarChart3 className="w-6 h-6" />,
      difficulty: 'Progressif'
    },
    {
      id: 'expert',
      title: 'Bilan Expert',
      description: 'Défi pour les meilleurs élèves',
      duration: '60 min',
      questions: 20,
      color: 'from-purple-500 to-purple-600',
      icon: <Trophy className="w-6 h-6" />,
      difficulty: 'Difficile'
    }
  ];

  const bilansBySubject = [
    {
      subject: 'Algèbre',
      path: '/algebra/bilan',
      description: 'Équations, polynômes et suites',
      color: 'bg-blue-100 text-blue-800',
      stats: { completed: 324, average: 76 }
    },
    {
      subject: 'Analyse',
      path: '/analysis/bilan',
      description: 'Fonctions, dérivées et limites',
      color: 'bg-purple-100 text-purple-800',
      stats: { completed: 298, average: 72 }
    },
    {
      subject: 'Géométrie',
      path: '/geometry/bilan',
      description: 'Géométrie plane et dans l\'espace',
      color: 'bg-red-100 text-red-800',
      stats: { completed: 267, average: 68 }
    },
    {
      subject: 'Probabilités',
      path: '/probability/bilan',
      description: 'Probabilités et statistiques',
      color: 'bg-yellow-100 text-yellow-800',
      stats: { completed: 245, average: 74 }
    },
    {
      subject: 'Logique',
      path: '/logic/bilan',
      description: 'Raisonnement et démonstrations',
      color: 'bg-green-100 text-green-800',
      stats: { completed: 189, average: 79 }
    },
    {
      subject: 'Algorithm',
      path: '/algorithm/bilan',
      description: 'Programmation et algorithmes',
      color: 'bg-orange-100 text-orange-800',
      stats: { completed: 156, average: 71 }
    }
  ];

  const sampleQuestions = {
    'rapide': [
      {
        id: 1,
        question: "Résoudre l'équation 2x + 5 = 13",
        options: ["x = 3", "x = 4", "x = 5", "x = 6"],
        correct: 1,
        subject: "Algèbre"
      },
      {
        id: 2,
        question: "Calculer lim(x→∞) (3x+1)/(x-2)",
        options: ["0", "1", "3", "∞"],
        correct: 2,
        subject: "Analyse"
      },
      {
        id: 3,
        question: "Dans un triangle rectangle, si un angle mesure 30°, l'autre mesure :",
        options: ["30°", "45°", "60°", "90°"],
        correct: 2,
        subject: "Géométrie"
      }
    ],
    'complet': [
      {
        id: 1,
        question: "Développer et simplifier (2x-1)²(x+3)",
        options: ["4x³+10x²-4x-3", "4x³+10x²+4x-3", "4x³-10x²-4x+3", "2x³+5x²-2x-3"],
        correct: 0,
        subject: "Algèbre"
      },
      {
        id: 2,
        question: "Déterminer le domaine de définition de f(x) = √(x-1)/(x²-4)",
        options: ["[1,+∞[ \\ {2}", "[1,+∞[ \\ {-2,2}", "]1,+∞[ \\ {2}", "[1,+∞["],
        correct: 1,
        subject: "Analyse"
      },
      {
        id: 3,
        question: "Dans un repère orthonormé, la distance entre A(1,2) et B(4,6) est :",
        options: ["3", "4", "5", "7"],
        correct: 2,
        subject: "Géométrie"
      }
    ],
    'expert': [
      {
        id: 1,
        question: "Résoudre dans ℂ : z² + z + 1 = 0",
        options: ["z = (-1±i√3)/2", "z = (-1±√3)/2", "z = (1±i√3)/2", "Pas de solution"],
        correct: 0,
        subject: "Algèbre"
      },
      {
        id: 2,
        question: "Calculer ∫₀¹ x²e^x dx",
        options: ["e-2", "2e-2", "e-1", "2e-5"],
        correct: 1,
        subject: "Analyse"
      },
      {
        id: 3,
        question: "Soit un tétraèdre régulier d'arête a. Son volume est :",
        options: ["a³√2/12", "a³√2/6", "a³√3/12", "a³√3/6"],
        correct: 0,
        subject: "Géométrie"
      }
    ]
  };

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
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">📊 Bilans</h1>
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
            Testez votre niveau et identifiez vos points forts et axes d'amélioration
          </p>
        </div>

        {/* Types de bilans */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {bilanTypes.map((bilan) => (
            <Card 
              key={bilan.id} 
              className={`hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg ${selectedBilan === bilan.id ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedBilan(selectedBilan === bilan.id ? null : bilan.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${bilan.color} flex items-center justify-center text-white`}>
                    {bilan.icon}
                  </div>
                  <Badge variant="outline">{bilan.difficulty}</Badge>
                </div>
                <CardTitle className="text-xl text-slate-900">{bilan.title}</CardTitle>
                <CardDescription>{bilan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Durée :</span>
                    <span className="font-medium">{bilan.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Questions :</span>
                    <span className="font-medium">{bilan.questions}</span>
                  </div>
                </div>
                <Button className={`w-full bg-gradient-to-r ${bilan.color} hover:opacity-90`}>
                  {selectedBilan === bilan.id ? 'Voir l\'aperçu' : 'Sélectionner'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Aperçu des questions */}
        {selectedBilan && (
          <Card className="mb-8 border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Aperçu - {bilanTypes.find(b => b.id === selectedBilan)?.title}</CardTitle>
              <CardDescription>Voici quelques exemples de questions que vous pourriez rencontrer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {sampleQuestions[selectedBilan as keyof typeof sampleQuestions]?.map((q, index) => (
                  <div key={q.id} className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium text-slate-900">Question {index + 1}</h4>
                      <Badge variant="secondary" className="text-xs">{q.subject}</Badge>
                    </div>
                    <p className="text-slate-700 mb-3">{q.question}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {q.options.map((option, idx) => (
                        <div 
                          key={idx} 
                          className={`p-2 rounded border text-sm ${idx === q.correct ? 'bg-green-50 border-green-200 text-green-800' : 'bg-white border-slate-200'}`}
                        >
                          {String.fromCharCode(65 + idx)}. {option}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <Button size="lg" className="w-full bg-gradient-to-r from-blue-500 to-blue-600">
                  <Clock className="w-5 h-5 mr-2" />
                  Commencer le bilan {bilanTypes.find(b => b.id === selectedBilan)?.title}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Bilans par matière */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">Bilans par matière</CardTitle>
            <CardDescription>
              Évaluez vos connaissances dans chaque domaine spécifique
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bilansBySubject.map((subject) => (
                <Link key={subject.subject} to={subject.path}>
                  <Card className="hover:shadow-md transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-900">{subject.subject}</h3>
                        <Badge className={subject.color}>{subject.subject}</Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{subject.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>{subject.stats.completed} participants</span>
                          <span>Moyenne: {subject.stats.average}%</span>
                        </div>
                        <Progress value={subject.stats.average} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Méga Bilan */}
        <div className="mt-8">
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <Star className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-2xl font-bold mb-2">Méga Bilan Interdisciplinaire</h3>
              <p className="text-purple-100 mb-6">
                Le défi ultime : une évaluation complète couvrant tous les domaines mathématiques
              </p>
              <div className="flex justify-center gap-4 text-sm mb-6">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  90 minutes
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-1" />
                  50 questions
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-1" />
                  Certificat
                </div>
              </div>
              <Link to="/mega-bilan">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                  <Star className="w-5 h-5 mr-2" />
                  Accepter le défi
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Bilan;
