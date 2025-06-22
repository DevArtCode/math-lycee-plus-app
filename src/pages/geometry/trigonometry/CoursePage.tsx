
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GeometryTrigonometryCoursePage = () => {
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
              <h1 className="text-xl font-bold text-slate-900">📐 Trigonométrie</h1>
            </div>
            <Link to="/geometry/trigonometry/exercise">
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
            <CardTitle className="text-2xl text-green-600">I. Fonctions trigonométriques</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Définitions</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-mono text-sm space-y-1">
                  <span className="block">cos(θ) = adjacent / hypoténuse</span>
                  <span className="block">sin(θ) = opposé / hypoténuse</span>
                  <span className="block">tan(θ) = sin(θ) / cos(θ)</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Valeurs remarquables</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <table className="text-sm font-mono">
                  <tr><td>θ</td><td>0°</td><td>30°</td><td>45°</td><td>60°</td><td>90°</td></tr>
                  <tr><td>cos</td><td>1</td><td>√3/2</td><td>√2/2</td><td>1/2</td><td>0</td></tr>
                  <tr><td>sin</td><td>0</td><td>1/2</td><td>√2/2</td><td>√3/2</td><td>1</td></tr>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-600">II. Formules trigonométriques</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Identités fondamentales</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-mono text-sm space-y-1">
                  <span className="block">cos²(θ) + sin²(θ) = 1</span>
                  <span className="block">1 + tan²(θ) = 1/cos²(θ)</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GeometryTrigonometryCoursePage;
