
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AlgorithmSimulationCoursePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/algorithm">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux Algorithmes
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">🎲 Simulation et hasard</h1>
            </div>
            <Link to="/algorithm/simulation/exercise">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600">
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
            <CardTitle className="text-2xl text-blue-600">I. Génération de nombres aléatoires</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Fonction random()</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  random() // retourne un nombre entre 0 et 1<br/>
                  random(n) // retourne un entier entre 0 et n-1
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">II. Méthode de Monte-Carlo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Estimation de π</h3>
              <p className="text-slate-700">
                Utilisation de points aléatoires pour estimer la valeur de π.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlgorithmSimulationCoursePage;
