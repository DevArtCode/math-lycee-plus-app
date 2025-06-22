import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, BookOpen, TrendingUp, Users, ChevronRight, Brain, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const mathTopics = [
    {
      id: 'algebra',
      title: 'Algèbre',
      description: 'Nombres, calcul, arithmétique, suites',
      icon: Calculator,
      color: 'from-blue-500 to-blue-600',
      level: 'Seconde → L1',
      exercises: 198,
      path: '/algebra'
    },
    {
      id: 'analysis',
      title: 'Analyse',
      description: 'Fonctions, dérivées, intégrales, limites',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      level: 'Première → L1',
      exercises: 176,
      path: '/analysis'
    },
    {
      id: 'geometry',
      title: 'Géométrie',
      description: 'Géométrie plane, espace, complexe',
      icon: BookOpen,
      color: 'from-green-500 to-green-600',
      level: 'Seconde → L1',
      exercises: 142,
      path: '/geometry'
    },
    {
      id: 'probability',
      title: 'Probabilités',
      description: 'Statistiques, lois, variables aléatoires',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      level: 'Première → L1',
      exercises: 336,
      path: '/probability'
    },
    {
      id: 'logic',
      title: 'Logique',
      description: 'Logique, ensembles, récurrence',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      level: 'Terminale → L1',
      exercises: 124,
      path: '/logic'
    },
    {
      id: 'algorithm',
      title: 'Algorithmique',
      description: 'Python, programmation mathématique',
      icon: Code,
      color: 'from-orange-500 to-orange-600',
      level: 'Seconde → L1',
      exercises: 165,
      path: '/algorithm'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MathLearn
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Apprentissage des 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> mathématiques</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Ressources pédagogiques pour l'apprentissage des mathématiques 
            du lycée jusqu'au niveau L1. Explorez les concepts à votre rythme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-3">
              Explorer les domaines
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Math Topics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Domaines d'étude</h3>
          <p className="text-lg text-slate-600">Choisissez votre domaine d'étude et explorez les concepts mathématiques</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mathTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Link key={topic.id} to={topic.path}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg overflow-hidden h-full">
                  <div className={`h-2 bg-gradient-to-r ${topic.color}`} />
                  <CardHeader className="pb-2">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{topic.title}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {topic.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm text-slate-500 mb-3">
                      <span>{topic.level}</span>
                      <span>{topic.exercises} exercices</span>
                    </div>
                    <Button variant="ghost" className="w-full justify-between group-hover:bg-slate-50">
                      Découvrir
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Mega Bilan CTA */}
        <div className="mt-12 text-center">
          <Link to="/mega-bilan">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-50 to-blue-50 hover:shadow-2xl transition-all duration-300 cursor-pointer max-w-2xl mx-auto">
              <CardContent className="py-8">
                <Brain className="w-16 h-16 mx-auto text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Méga Bilan Interdisciplinaire</h3>
                <p className="text-slate-600 mb-4">
                  Exercices complexes combinant plusieurs domaines mathématiques
                </p>
                <Badge className="bg-purple-100 text-purple-800">Niveau Expert</Badge>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Educational Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Ressources pédagogiques</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Exercices Pratiques</h4>
              <p className="text-slate-600">Collection d'exercices avec corrections détaillées pour approfondir votre compréhension</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Progression Structurée</h4>
              <p className="text-slate-600">Parcours d'apprentissage organisé selon les programmes scolaires</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Cours Théoriques</h4>
              <p className="text-slate-600">Concepts mathématiques expliqués avec des exemples concrets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">1,141</div>
              <div className="text-blue-100">Exercices</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24</div>
              <div className="text-blue-100">Chapitres</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">6</div>
              <div className="text-blue-100">Domaines</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Libre</div>
              <div className="text-blue-100">Accès</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold">MathLearn</h1>
            </div>
            <p className="text-slate-400 mb-4">
              Ressources pédagogiques pour l'apprentissage des mathématiques
            </p>
            <div className="flex justify-center space-x-6 text-sm text-slate-400">
              <Link to="#" className="hover:text-white transition-colors">À propos</Link>
              <Link to="#" className="hover:text-white transition-colors">Ressources</Link>
              <Link to="#" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
