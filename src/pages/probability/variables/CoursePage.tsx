
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProbabilityVariablesCoursePage = () => {
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
              <h1 className="text-xl font-bold text-slate-900">🎲 Variables aléatoires discrètes</h1>
            </div>
            <Link to="/probability/variables/exercise">
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
            <CardTitle className="text-2xl text-orange-600">I. Définition d'une variable aléatoire</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Variable aléatoire discrète</h3>
              <p className="text-slate-700 mb-4">
                Une variable aléatoire discrète X est une fonction qui associe à chaque résultat 
                d'une expérience aléatoire un nombre réel.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  X : Ω → ℝ<br/>
                  X prend les valeurs x₁, x₂, ..., xₙ avec les probabilités p₁, p₂, ..., pₙ
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Loi de probabilité</h3>
              <p className="text-slate-700 mb-2">
                La loi de X est donnée par le tableau :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <table className="w-full text-sm">
                  <tr className="border-b">
                    <td className="font-semibold p-2">X = xᵢ</td>
                    <td className="p-2">x₁</td>
                    <td className="p-2">x₂</td>
                    <td className="p-2">...</td>
                    <td className="p-2">xₙ</td>
                  </tr>
                  <tr>
                    <td className="font-semibold p-2">P(X = xᵢ)</td>
                    <td className="p-2">p₁</td>
                    <td className="p-2">p₂</td>
                    <td className="p-2">...</td>
                    <td className="p-2">pₙ</td>
                  </tr>
                </table>
              </div>
              <p className="text-slate-700 mt-2">
                Avec Σ pᵢ = 1 et pᵢ ≥ 0 pour tout i.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">II. Espérance mathématique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Définition</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-mono text-lg text-center">
                  E(X) = Σ xᵢ × P(X = xᵢ)
                </p>
              </div>
              <p className="text-slate-700 mt-4">
                L'espérance représente la "valeur moyenne" de la variable aléatoire.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Propriétés de l'espérance</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>E(aX + b) = aE(X) + b</li>
                <li>E(X + Y) = E(X) + E(Y)</li>
                <li>Si X et Y sont indépendantes : E(XY) = E(X)E(Y)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">III. Variance et écart-type</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Définition de la variance</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-mono text-lg text-center">
                  V(X) = E[(X - E(X))²] = E(X²) - [E(X)]²
                </p>
              </div>
              <p className="text-slate-700 mt-4">
                La variance mesure la dispersion des valeurs autour de l'espérance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Écart-type</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-mono text-lg text-center">
                  σ(X) = √V(X)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Propriétés de la variance</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>V(X) ≥ 0</li>
                <li>V(aX + b) = a²V(X)</li>
                <li>Si X et Y sont indépendantes : V(X + Y) = V(X) + V(Y)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">IV. Loi binomiale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Définition</h3>
              <p className="text-slate-700 mb-4">
                X suit une loi binomiale B(n,p) si X compte le nombre de succès 
                dans n épreuves indépendantes, chacune ayant une probabilité p de succès.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-mono text-lg text-center">
                  P(X = k) = C(n,k) × p^k × (1-p)^(n-k)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Paramètres de B(n,p)</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-mono text-sm space-y-2">
                  <span className="block">• E(X) = np</span>
                  <span className="block">• V(X) = np(1-p)</span>
                  <span className="block">• σ(X) = √[np(1-p)]</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Exemple</h3>
              <p className="text-slate-700">
                On lance 10 fois une pièce équilibrée. Le nombre de "faces" suit B(10, 0.5).
                E(X) = 5, V(X) = 2.5, σ(X) ≈ 1.58
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProbabilityVariablesCoursePage;
