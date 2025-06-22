
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LogicInductionCoursePage = () => {
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
              <h1 className="text-xl font-bold text-slate-900">🔄 Raisonnement par récurrence</h1>
            </div>
            <Link to="/logic/induction/exercise">
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
            <CardTitle className="text-2xl text-purple-600">I. Principe de récurrence</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Méthode</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm space-y-2">
                  <span className="block"><strong>1. Initialisation :</strong> Vérifier P(0) ou P(1)</span>
                  <span className="block"><strong>2. Hérédité :</strong> Montrer que P(n) ⟹ P(n+1)</span>
                  <span className="block"><strong>3. Conclusion :</strong> P(n) vraie pour tout n ≥ n₀</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-purple-600">II. Exemple classique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Somme des premiers entiers</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  1 + 2 + ... + n = n(n+1)/2
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogicInductionCoursePage;
