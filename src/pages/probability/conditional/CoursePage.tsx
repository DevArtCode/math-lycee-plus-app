
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProbabilityConditionalCoursePage = () => {
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
              <h1 className="text-xl font-bold text-slate-900">🎯 Probabilités conditionnelles</h1>
            </div>
            <Link to="/probability/conditional/exercise">
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
            <CardTitle className="text-2xl text-orange-600">I. Définition de la probabilité conditionnelle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Formule fondamentale</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-mono text-lg text-center">
                  P(B|A) = P(A ∩ B) / P(A)
                </p>
                <p className="text-sm text-slate-600 text-center mt-2">
                  (avec P(A) {'>'} 0)
                </p>
              </div>
              <p className="text-slate-700 mt-4">
                P(B|A) se lit "probabilité de B sachant A" ou "probabilité de B conditionnellement à A".
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Interprétation</h3>
              <p className="text-slate-700">
                P(B|A) représente la probabilité que l'événement B se réalise, 
                en sachant que l'événement A s'est déjà réalisé.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">II. Propriétés importantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Formule de multiplication</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-mono text-lg">
                  P(A ∩ B) = P(A) × P(B|A) = P(B) × P(A|B)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Propriétés de base</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>0 ≤ P(B|A) ≤ 1</li>
                <li>P(Ω|A) = 1</li>
                <li>P(∅|A) = 0</li>
                <li>Si B et C sont incompatibles : P(B ∪ C|A) = P(B|A) + P(C|A)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">III. Indépendance d'événements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Définition</h3>
              <p className="text-slate-700 mb-4">
                Deux événements A et B sont indépendants si et seulement si :
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-mono text-lg text-center">
                  P(A ∩ B) = P(A) × P(B)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Équivalences</h3>
              <p className="text-slate-700 mb-2">Si A et B sont indépendants, alors :</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>P(B|A) = P(B)</li>
                <li>P(A|B) = P(A)</li>
                <li>A et B̅ sont indépendants</li>
                <li>A̅ et B sont indépendants</li>
                <li>A̅ et B̅ sont indépendants</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">IV. Formule des probabilités totales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Système complet d'événements</h3>
              <p className="text-slate-700 mb-4">
                A₁, A₂, ..., Aₙ forment un système complet si :
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Aᵢ ∩ Aⱼ = ∅ pour i ≠ j (événements incompatibles)</li>
                <li>A₁ ∪ A₂ ∪ ... ∪ Aₙ = Ω</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Formule</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-mono text-lg text-center">
                  P(B) = Σ P(B|Aᵢ) × P(Aᵢ)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">V. Formule de Bayes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Énoncé</h3>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-mono text-lg text-center">
                  P(Aᵢ|B) = [P(B|Aᵢ) × P(Aᵢ)] / P(B)
                </p>
              </div>
              <p className="text-slate-700 mt-4">
                Cette formule permet de "retourner" les probabilités conditionnelles.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Application</h3>
              <p className="text-slate-700">
                La formule de Bayes est fondamentale dans les tests de diagnostic, 
                l'intelligence artificielle, et de nombreux domaines d'application.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProbabilityConditionalCoursePage;
