
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GeometryComplexCoursePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/geometry">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la Géométrie
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">🔢 Nombres complexes</h1>
            </div>
            <Link to="/geometry/complex/exercise">
              <Button className="bg-gradient-to-r from-green-500 to-green-600">
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
            <CardTitle className="text-2xl text-green-600">I. Introduction aux nombres complexes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Forme algébrique</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  z = a + bi où a, b ∈ ℝ et i² = -1
                </p>
              </div>
              <p className="text-slate-700 mt-2">
                a est la partie réelle, b est la partie imaginaire.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Opérations</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-mono text-sm space-y-1">
                  <span className="block">Addition : (a+bi) + (c+di) = (a+c) + (b+d)i</span>
                  <span className="block">Multiplication : (a+bi)(c+di) = (ac-bd) + (ad+bc)i</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-600">II. Forme trigonométrique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Module et argument</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-mono text-sm space-y-1">
                  <span className="block">|z| = √(a² + b²)</span>
                  <span className="block">z = |z|(cos θ + i sin θ)</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GeometryComplexCoursePage;
