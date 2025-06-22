
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LogicSetsCoursePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/logic">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la Logique
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">🔗 Théorie des ensembles</h1>
            </div>
            <Link to="/logic/sets/exercise">
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600">
                <Target className="w-4 h-4 mr-2" />
                Exercices
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-600">I. Définitions de base</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Ensemble et élément</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  x ∈ A : "x appartient à A"<br/>
                  x ∉ A : "x n'appartient pas à A"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-purple-600">II. Opérations sur les ensembles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Union et intersection</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-mono text-sm space-y-1">
                  <span className="block">A ∪ B : union de A et B</span>
                  <span className="block">A ∩ B : intersection de A et B</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogicSetsCoursePage;
