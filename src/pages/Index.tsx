import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Target, Trophy, Users, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">Maths</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Apprenez les <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Mathématiques</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explorez les concepts fondamentaux et maîtrisez les techniques essentielles
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link to="/bilan">
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">📊 Bilans</h3>
                <p className="text-sm text-slate-600">Évaluez vos connaissances</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/examens">
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">📝 Examens</h3>
                <p className="text-sm text-slate-600">Préparez vos épreuves</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/algorithm">
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Algorithmes</h3>
                <p className="text-sm text-slate-600">Découvrez les bases de l'algorithmique</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/probability">
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Probabilités</h3>
                <p className="text-sm text-slate-600">Explorez le monde des probabilités</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Main subjects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/algebra">
            <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 h-32 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="text-4xl font-bold text-white z-10">🔢</div>
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Algèbre</h3>
                <p className="text-slate-600 mb-4">Nombres, calcul algébrique, équations et suites numériques</p>
                <div className="flex justify-between items-center text-sm text-slate-500">
                  <span>45 exercices</span>
                  <span>4 chapitres</span>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/analysis">
            <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 h-32 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="text-4xl font-bold text-white z-10">📈</div>
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Analyse</h3>
                <p className="text-slate-600 mb-4">Fonctions, limites, dérivées, intégrales et suites</p>
                <div className="flex justify-between items-center text-sm text-slate-500">
                  <span>40 exercices</span>
                  <span>4 chapitres</span>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/probability">
            <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 h-32 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="text-4xl font-bold text-white z-10">🎲</div>
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Probabilités</h3>
                <p className="text-slate-600 mb-4">Probabilités, variables aléatoires et statistiques</p>
                <div className="flex justify-between items-center text-sm text-slate-500">
                  <span>35 exercices</span>
                  <span>5 chapitres</span>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/logic">
            <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 h-32 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="text-4xl font-bold text-white z-10">🧠</div>
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Logique</h3>
                <p className="text-slate-600 mb-4">Raisonnement, démonstrations et théorie des ensembles</p>
                <div className="flex justify-between items-center text-sm text-slate-500">
                  <span>25 exercices</span>
                  <span>3 chapitres</span>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/algorithm">
            <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-32 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="text-4xl font-bold text-white z-10">💻</div>
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Algorithmique</h3>
                <p className="text-slate-600 mb-4">Algorithmes, programmation et applications mathématiques</p>
                <div className="flex justify-between items-center text-sm text-slate-500">
                  <span>30 exercices</span>
                  <span>4 chapitres</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Stats */}
        <div className="border rounded-lg p-8 bg-white/50 backdrop-blur-sm border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-slate-600">Niveaux</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-slate-600">Chapitres</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-slate-600">Bilans</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">175</div>
            <div className="text-slate-600">Total exercices</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
