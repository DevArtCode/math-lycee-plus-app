import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, Compass, PieChart, Brain, Binary, BarChart3, FileText, ArrowRight, BookOpen, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const subjects = [
    {
      title: 'Algèbre',
      icon: Calculator,
      description: 'Équations, polynômes, nombres complexes et suites',
      chapters: 4,
      exercises: 42,
      color: 'from-blue-500 to-blue-600',
      path: '/algebra',
      gradient: 'from-blue-50 to-blue-100'
    },
    {
      title: 'Analyse',
      icon: TrendingUp,
      description: 'Fonctions, limites, dérivées et intégrales',
      chapters: 4,
      exercises: 40,
      color: 'from-purple-500 to-purple-600',
      path: '/analysis',
      gradient: 'from-purple-50 to-purple-100'
    },
    {
      title: 'Géométrie',
      icon: Compass,
      description: 'Géométrie plane, espace et nombres complexes',
      chapters: 4,
      exercises: 38,
      color: 'from-red-500 to-red-600',
      path: '/geometry',
      gradient: 'from-red-50 to-red-100'
    },
    {
      title: 'Probabilités',
      icon: PieChart,
      description: 'Probabilités, statistiques et variables aléatoires',
      chapters: 5,
      exercises: 35,
      color: 'from-yellow-500 to-yellow-600',
      path: '/probability',
      gradient: 'from-yellow-50 to-yellow-100'
    },
    {
      title: 'Logique',
      icon: Brain,
      description: 'Logique mathématique et raisonnements',
      chapters: 4,
      exercises: 32,
      color: 'from-green-500 to-green-600',
      path: '/logic',
      gradient: 'from-green-50 to-green-100'
    },
    {
      title: 'Algorithmique',
      icon: Binary,
      description: 'Algorithmes et programmation mathématique',
      chapters: 4,
      exercises: 28,
      color: 'from-orange-500 to-orange-600',
      path: '/algorithm',
      gradient: 'from-orange-50 to-orange-100'
    }
  ];

  const totalExercises = subjects.reduce((sum, subject) => sum + subject.exercises, 0);
  const totalChapters = subjects.reduce((sum, subject) => sum + subject.chapters, 0);

  const evaluationTools = [
    {
      title: 'Bilans',
      icon: BarChart3,
      description: 'Évaluez vos connaissances avec des tests personnalisés',
      color: 'from-blue-500 to-blue-600',
      path: '/bilan',
      features: ['Bilan rapide 15min', 'Bilan complet 45min', 'Bilan expert 60min']
    },
    {
      title: 'Examens blancs',
      icon: FileText,
      description: 'Préparez-vous avec des sujets d\'examens réels',
      color: 'from-red-500 to-red-600',
      path: '/examens',
      features: ['Sujets de Bac', 'Concours CPGE', 'Contrôles lycée']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Maîtrisez les <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mathématiques</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Une plateforme interactive pour apprendre et réviser les mathématiques du lycée. 
            Cours détaillés, exercices progressifs et examens blancs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
              Commencer maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Découvrir les cours
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">258</div>
              <div className="text-slate-600">Exercices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">6</div>
              <div className="text-slate-600">Matières</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24</div>
              <div className="text-slate-600">Chapitres</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">15</div>
              <div className="text-slate-600">Examens</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">{totalChapters}</div>
              <div className="text-slate-600">Chapitres</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{totalExercises}</div>
              <div className="text-slate-600">Exercices</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">6</div>
              <div className="text-slate-600">Domaines</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">98%</div>
              <div className="text-slate-600">Taux de réussite</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explorez tous les domaines</h2>
            <p className="text-lg text-slate-600">Choisissez votre domaine d'étude et progressez à votre rythme</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => {
              const IconComponent = subject.icon;
              return (
                <Link key={subject.title} to={subject.path}>
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${subject.color}`}></div>
                    <CardHeader className={`bg-gradient-to-br ${subject.gradient}`}>
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                      </div>
                      <CardTitle className="text-xl text-slate-900">{subject.title}</CardTitle>
                      <CardDescription className="text-slate-600">
                        {subject.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-center text-sm text-slate-500 mb-4">
                        <span>{subject.chapters} chapitres</span>
                        <span>{subject.exercises} exercices</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${subject.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${(subject.exercises / Math.max(...subjects.map(s => s.exercises))) * 100}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Evaluation Tools */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Évaluez vos progrès</h2>
            <p className="text-lg text-slate-300">Testez vos connaissances et préparez vos examens</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {evaluationTools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Link key={tool.title} to={tool.path}>
                  <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-white">{tool.title}</CardTitle>
                          <CardDescription className="text-slate-300">
                            {tool.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {tool.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-slate-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button className={`w-full mt-4 bg-gradient-to-r ${tool.color} hover:opacity-90`}>
                        Accéder
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à exceller en mathématiques ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Rejoignez des milliers d'étudiants qui progressent chaque jour
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/algebra">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Commencer maintenant
              </Button>
            </Link>
            <Link to="/bilan">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Évaluer mon niveau
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
