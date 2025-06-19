
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, BookOpen, TrendingUp, Users, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const mathTopics = [
    {
      id: 'algebra',
      title: 'Algèbre',
      description: 'Équations, polynômes, systèmes linéaires',
      icon: Calculator,
      color: 'from-blue-500 to-blue-600',
      level: 'Seconde → Terminale',
      exercises: 156
    },
    {
      id: 'analysis',
      title: 'Analyse',
      description: 'Fonctions, dérivées, intégrales, limites',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      level: 'Première → L1',
      exercises: 203
    },
    {
      id: 'geometry',
      title: 'Géométrie',
      description: 'Géométrie plane, espace, trigonométrie',
      icon: BookOpen,
      color: 'from-green-500 to-green-600',
      level: 'Seconde → Terminale',
      exercises: 127
    },
    {
      id: 'probability',
      title: 'Probabilités',
      description: 'Statistiques, probabilités, lois de probabilité',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      level: 'Première → L1',
      exercises: 89
    }
  ];

  const features = [
    {
      title: 'Exercices Interactifs',
      description: 'Plus de 500 exercices avec correction automatique et explications détaillées',
      icon: Calculator
    },
    {
      title: 'Progression Adaptative',
      description: 'Le niveau s\'adapte à votre rythme pour un apprentissage optimal',
      icon: TrendingUp
    },
    {
      title: 'Théorie Complète',
      description: 'Cours détaillés avec exemples et démonstrations interactives',
      icon: BookOpen
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
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Commencer
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Maîtrisez les 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> mathématiques</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            De la seconde à la L1, progressez à votre rythme avec nos exercices interactifs 
            et nos cours adaptés au programme français.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-3">
              Commencer gratuitement
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-slate-300">
              Voir les cours
            </Button>
          </div>
        </div>
      </section>

      {/* Math Topics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Explorez les domaines</h3>
          <p className="text-lg text-slate-600">Choisissez votre domaine d'étude et progressez étape par étape</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mathTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Card key={topic.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg overflow-hidden">
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
                    Commencer
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi choisir MathLearn ?</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Exercices</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15</div>
              <div className="text-blue-100">Chapitres</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100">Taux de réussite</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Disponible</div>
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
              Votre plateforme d'apprentissage des mathématiques du lycée à l'université
            </p>
            <div className="flex justify-center space-x-6 text-sm text-slate-400">
              <Link to="#" className="hover:text-white transition-colors">À propos</Link>
              <Link to="#" className="hover:text-white transition-colors">Contact</Link>
              <Link to="#" className="hover:text-white transition-colors">Mentions légales</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
