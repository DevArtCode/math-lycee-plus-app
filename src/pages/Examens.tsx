
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Clock, Users, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Examens = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  const examTypes = [
    {
      id: 'bac',
      title: 'Baccalauréat',
      description: 'Sujets type Bac avec barème officiel',
      duration: '4h',
      coefficient: 'Coef 7-9',
      color: 'from-red-500 to-red-600',
      icon: <Award className="w-6 h-6" />,
      subjects: ['Mathématiques', 'Sciences', 'Économie']
    },
    {
      id: 'concours',
      title: 'Concours',
      description: 'Préparation aux concours d\'entrée',
      duration: '3h',
      coefficient: 'Éliminatoire',
      color: 'from-blue-500 to-blue-600',
      icon: <Star className="w-6 h-6" />,
      subjects: ['Grandes Écoles', 'CPGE', 'Université']
    },
    {
      id: 'controle',
      title: 'Contrôles',
      description: 'Devoirs surveillés type lycée',
      duration: '2h',
      coefficient: 'Coef 2-4',
      color: 'from-green-500 to-green-600',
      icon: <FileText className="w-6 h-6" />,
      subjects: ['1ère', 'Terminale', 'Sup/Spé']
    }
  ];

  const availableExams = [
    {
      id: 'bac-2024-s',
      title: 'Bac S - Métropole 2024',
      type: 'Baccalauréat',
      duration: '4h',
      difficulty: 'Standard',
      topics: ['Analyse', 'Probabilités', 'Géométrie'],
      status: 'Disponible',
      participants: 1247
    },
    {
      id: 'bac-2024-es',
      title: 'Bac ES - Métropole 2024',
      type: 'Baccalauréat',
      duration: '3h',
      difficulty: 'Standard',
      topics: ['Statistiques', 'Suites', 'Fonctions'],
      status: 'Disponible',
      participants: 892
    },
    {
      id: 'concours-x-2024',
      title: 'Concours X - Filière MP',
      type: 'Concours',
      duration: '4h',
      difficulty: 'Très difficile',
      topics: ['Algèbre', 'Analyse', 'Géométrie'],
      status: 'Disponible',
      participants: 234
    },
    {
      id: 'centrale-2024',
      title: 'Centrale-Supélec - PSI',
      type: 'Concours',
      duration: '4h',
      difficulty: 'Difficile',
      topics: ['Probabilités', 'Analyse', 'Algèbre'],
      status: 'Disponible',
      participants: 456
    },
    {
      id: 'ds-terminale-1',
      title: 'DS Terminale - Dérivation',
      type: 'Contrôle',
      duration: '2h',
      difficulty: 'Moyen',
      topics: ['Dérivées', 'Étude de fonctions'],
      status: 'Disponible',
      participants: 2341
    },
    {
      id: 'ds-premiere-1',
      title: 'DS Première - Suites',
      type: 'Contrôle',
      duration: '1h30',
      difficulty: 'Facile',
      topics: ['Suites arithmétiques', 'Suites géométriques'],
      status: 'Disponible',
      participants: 1876
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-800';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800';
      case 'Difficile': return 'bg-orange-100 text-orange-800';
      case 'Très difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponible': return 'bg-green-100 text-green-800';
      case 'Bientôt': return 'bg-yellow-100 text-yellow-800';
      case 'Complet': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
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
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">📝 Examens blancs</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Préparez vos <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">examens</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Entraînez-vous avec des sujets d'examens réels dans les conditions officielles
          </p>
        </div>

        {/* Types d'examens */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {examTypes.map((exam) => (
            <Card key={exam.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exam.color} flex items-center justify-center text-white`}>
                    {exam.icon}
                  </div>
                  <Badge variant="outline">{exam.coefficient}</Badge>
                </div>
                <CardTitle className="text-xl text-slate-900">{exam.title}</CardTitle>
                <CardDescription>{exam.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Durée :</span>
                    <span className="font-medium">{exam.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Niveaux :</span>
                    <span className="font-medium text-xs">{exam.subjects.join(', ')}</span>
                  </div>
                </div>
                <Button className={`w-full bg-gradient-to-r ${exam.color} hover:opacity-90`}>
                  Voir les sujets
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Liste des examens disponibles */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">Sujets d'examens disponibles</CardTitle>
            <CardDescription>
              Choisissez un sujet et passez l'examen dans les conditions réelles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="bac">Baccalauréat</TabsTrigger>
                <TabsTrigger value="concours">Concours</TabsTrigger>
                <TabsTrigger value="controle">Contrôles</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4 mt-6">
                {availableExams.map((exam) => (
                  <Card key={exam.id} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-slate-900">{exam.title}</h3>
                            <Badge variant="outline">{exam.type}</Badge>
                            <Badge className={getDifficultyColor(exam.difficulty)}>
                              {exam.difficulty}
                            </Badge>
                            <Badge className={getStatusColor(exam.status)}>
                              {exam.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{exam.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{exam.participants} participants</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exam.topics.map((topic) => (
                              <Badge key={topic} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Aperçu
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-red-500 to-red-600">
                            Commencer
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="bac" className="space-y-4 mt-6">
                {availableExams.filter(exam => exam.type === 'Baccalauréat').map((exam) => (
                  <Card key={exam.id} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-slate-900">{exam.title}</h3>
                            <Badge className={getDifficultyColor(exam.difficulty)}>
                              {exam.difficulty}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{exam.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{exam.participants} participants</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exam.topics.map((topic) => (
                              <Badge key={topic} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-red-500 to-red-600">
                          Commencer
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="concours" className="space-y-4 mt-6">
                {availableExams.filter(exam => exam.type === 'Concours').map((exam) => (
                  <Card key={exam.id} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-slate-900">{exam.title}</h3>
                            <Badge className={getDifficultyColor(exam.difficulty)}>
                              {exam.difficulty}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{exam.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{exam.participants} participants</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exam.topics.map((topic) => (
                              <Badge key={topic} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600">
                          Commencer
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="controle" className="space-y-4 mt-6">
                {availableExams.filter(exam => exam.type === 'Contrôle').map((exam) => (
                  <Card key={exam.id} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-slate-900">{exam.title}</h3>
                            <Badge className={getDifficultyColor(exam.difficulty)}>
                              {exam.difficulty}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{exam.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{exam.participants} participants</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exam.topics.map((topic) => (
                              <Badge key={topic} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-green-500 to-green-600">
                          Commencer
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Examens;
