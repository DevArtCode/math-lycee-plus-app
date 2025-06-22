
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProbabilityContinuousCoursePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/probability">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux Probabilités
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">📈 Lois continues</h1>
            </div>
            <Link to="/probability/continuous/exercise">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600">
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
            <CardTitle className="text-2xl text-orange-600">I. Variables aléatoires continues</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Fonction de densité</h3>
              <p className="text-slate-700 mb-4">
                Une variable aléatoire continue X admet une densité de probabilité f(x) si :
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-mono text-sm space-y-2">
                  <span className="block">• f(x) ≥ 0 pour tout x</span>
                  <span className="block">• ∫₋∞^∞ f(x)dx = 1</span>
                  <span className="block">• P(a ≤ X ≤ b) = ∫ₐ^b f(x)dx</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Propriétés importantes</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>P(X = a) = 0 pour toute valeur a</li>
                <li>P(a ≤ X ≤ b) = P(a < X < b) = P(a < X ≤ b) = P(a ≤ X < b)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">II. Loi uniforme continue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Définition</h3>
              <p className="text-slate-700 mb-4">
                X suit une loi uniforme sur [a,b] si sa densité est constante sur cet intervalle :
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  f(x) = 1/(b-a) si x ∈ [a,b], 0 sinon
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Paramètres</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-mono text-sm space-y-2">
                  <span className="block">• E(X) = (a+b)/2</span>
                  <span className="block">• V(X) = (b-a)²/12</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">III. Introduction à la loi normale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Loi normale N(μ,σ²)</h3>
              <p className="text-slate-700 mb-4">
                La loi normale est la plus importante des lois continues :
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  f(x) = (1/σ√(2π)) × exp(-(x-μ)²/(2σ²))
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Propriétés</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Courbe en forme de cloche, symétrique par rapport à μ</li>
                <li>E(X) = μ, V(X) = σ²</li>
                <li>68% des valeurs dans [μ-σ, μ+σ]</li>
                <li>95% des valeurs dans [μ-2σ, μ+2σ]</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProbabilityContinuousCoursePage;
