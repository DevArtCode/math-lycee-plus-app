
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProbabilityStatisticsCoursePage = () => {
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
              <h1 className="text-xl font-bold text-slate-900">📊 Statistiques descriptives</h1>
            </div>
            <Link to="/probability/statistics/exercise">
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
            <CardTitle className="text-2xl text-orange-600">I. Mesures de tendance centrale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Moyenne arithmétique</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-mono text-lg text-center">
                  x̄ = (x₁ + x₂ + ... + xₙ) / n
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Médiane</h3>
              <p className="text-slate-700 mb-2">
                Valeur qui partage la série en deux parties égales (après tri).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Mode</h3>
              <p className="text-slate-700">
                Valeur la plus fréquente dans la série.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">II. Mesures de dispersion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Variance et écart-type</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-mono text-sm space-y-2">
                  <span className="block">• s² = Σ(xᵢ - x̄)² / (n-1)</span>
                  <span className="block">• s = √s²</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Quartiles</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Q1 : 25% des valeurs lui sont inférieures</li>
                <li>Q2 : médiane (50%)</li>
                <li>Q3 : 75% des valeurs lui sont inférieures</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProbabilityStatisticsCoursePage;
