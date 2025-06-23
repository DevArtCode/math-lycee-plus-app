import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  TrendingUp, 
  Shapes, 
  Zap, 
  Brain, 
  BarChart3,
  Users,
  Award,
  BookOpen,
  Target,
  Star,
  FileText,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const domains = [
    {
      title: "Algèbre",
      icon: <Calculator className="w-8 h-8" />,
      description: "Nombres, calculs et structures algébriques",
      color: "from-blue-500 to-blue-600",
      chapters: 4,
      exercises: 58,
      href: "/algebra"
    },
    {
      title: "Analyse",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Fonctions, limites, dérivées et intégrales",
      color: "from-purple-500 to-purple-600",
      chapters: 4,
      exercises: 64,
      href: "/analysis"
    },
    {
      title: "Géométrie",
      icon: <Shapes className="w-8 h-8" />,
      description: "Géométrie plane, dans l'espace et complexe",
      color: "from-green-500 to-green-600",
      chapters: 4,
      exercises: 40,
      href: "/geometry"
    },
    {
      title: "Probabilités",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Probabilités et statistiques",
      color: "from-orange-500 to-orange-600",
      chapters: 5,
      exercises: 65,
      href: "/probability"
    },
    {
      title: "Logique",
      icon: <Brain className="w-8 h-8" />,
      description: "Logique mathématique et raisonnement",
      color: "from-purple-500 to-purple-600",
      chapters: 4,
      exercises: 46,
      href: "/logic"
    },
    {
      title: "Algorithmique",
      icon: <Zap className="w-8 h-8" />,
      description: "Algorithmes et programmation",
      color: "from-blue-500 to-blue-600",
      chapters: 4,
      exercises: 41,
      href: "/algorithm"
    }
  ];

  const totalExercises = domains.reduce((sum, domain) => sum + domain.exercises, 0);
  const totalChapters = domains.reduce((sum, domain) => sum + domain.chapters, 0);

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Cours détaillés",
      description: "Théorie complète avec exemples et démonstrations"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Exercices progressifs",
      description: "Du niveau débutant au niveau avancé"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Solutions détaillées",
      description: "Corrections complètes avec explications"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Examens blancs",
      description: "Sujets réels de Bac et concours"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">MathHub</h1>
            </div>
            <nav className="flex items-center space-x-4">
              <Link to="/bilan">
                <Button variant="outline" size="sm">
                  📊 Bilans
                </Button>
              </Link>
              <Link to="/examens">
                <Button variant="outline" size="sm">
                  📝 Examens
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Maîtrisez les <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">mathématiques</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Plateforme complète d'apprentissage avec cours détaillés, exercices progressifs et examens blancs pour réussir au lycée et en prépa
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-slate-700">{totalChapters} chapitres</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
              <Target className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-slate-700">{totalExercises} exercices</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-slate-700">12,840 étudiants</span>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            🧮 Domaines mathématiques
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain) => (
              <Link key={domain.title} to={domain.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center text-white shadow-lg`}>
                        {domain.icon}
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-1">
                          {domain.chapters} chapitres
                        </Badge>
                        <Badge variant="outline">
                          {domain.exercises} exercices
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-slate-900">{domain.title}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {domain.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className={`w-full bg-gradient-to-r ${domain.color} hover:opacity-90 text-white shadow-md`}>
                      Explorer →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            ⭐ Pourquoi choisir MathHub ?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            🚀 Accès rapide
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/bilan">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">📊 Bilans</h4>
                  <p className="text-slate-600 mb-4">Évaluez vos connaissances avec nos bilans thématiques</p>
                  <Badge className="bg-green-100 text-green-800">3 types disponibles</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link to="/examens">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">📝 Examens</h4>
                  <p className="text-slate-600 mb-4">Préparez-vous avec des sujets réels de Bac et concours</p>
                  <Badge className="bg-red-100 text-red-800">Sujets 2024-2025</Badge>
                </CardContent>
              </Card>
            </Link>

            <Card className="hover:shadow-md transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">⏱️ Planning</h4>
                <p className="text-slate-600 mb-4">Organisez vos révisions avec notre planning adaptatif</p>
                <Badge variant="secondary">Bientôt disponible</Badge>
              </CardContent>
            </Card>
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
              <h3 className="text-2xl font-bold">MathHub</h3>
            </div>
            <p className="text-slate-400 mb-8">Votre plateforme de référence pour exceller en mathématiques</p>
            <div className="flex justify-center space-x-8 text-sm text-slate-400">
              <span>{totalChapters} chapitres</span>
              <span>{totalExercises} exercices</span>
              <span>Solutions détaillées</span>
              <span>Examens blancs</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
