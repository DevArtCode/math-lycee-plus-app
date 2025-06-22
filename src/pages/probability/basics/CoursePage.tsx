
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProbabilityBasicsCoursePage = () => {
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
              <h1 className="text-xl font-bold text-slate-900">📊 Bases de probabilité</h1>
            </div>
            <Link to="/probability/basics/exercise">
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
            <CardTitle className="text-2xl text-orange-600">I. Univers et événements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Univers Ω (Oméga)</h3>
              <p className="text-slate-700 mb-4">
                L'univers Ω est l'ensemble de tous les résultats possibles d'une expérience aléatoire.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  <strong>Exemple :</strong> Lancer d'un dé à 6 faces<br/>
                  Ω = {'{1, 2, 3, 4, 5, 6}'}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Événements</h3>
              <p className="text-slate-700 mb-4">
                Un événement est un sous-ensemble de l'univers Ω.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Événement élémentaire :</strong> contient un seul résultat</li>
                <li><strong>Événement certain :</strong> Ω (se produit toujours)</li>
                <li><strong>Événement impossible :</strong> ∅ (ne se produit jamais)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">II. Définition de la probabilité</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Propriétés fondamentales</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-mono text-sm space-y-2">
                  <span className="block">• P(A) ∈ [0,1] pour tout événement A</span>
                  <span className="block">• P(Ω) = 1</span>
                  <span className="block">• P(∅) = 0</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Équiprobabilité</h3>
              <p className="text-slate-700 mb-4">
                Lorsque tous les résultats élémentaires ont la même probabilité :
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  P(A) = Nombre de cas favorables / Nombre de cas possibles
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">III. Opérations sur les événements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Union d'événements</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
                </p>
              </div>
              <p className="text-slate-700 mt-2">
                La probabilité que A ou B se produise.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Événements contraires</h3>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  P(A̅) = 1 - P(A)
                </p>
              </div>
              <p className="text-slate-700 mt-2">
                A̅ est l'événement contraire de A.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Événements incompatibles</h3>
              <p className="text-slate-700 mb-2">
                Si A ∩ B = ∅, alors P(A ∪ B) = P(A) + P(B)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">IV. Exemples pratiques</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Exemple 1 : Lancer de dé</h3>
              <p className="text-slate-700 mb-2">
                Soit A = "obtenir un nombre pair" = {'{2, 4, 6}'}
              </p>
              <p className="font-mono text-sm bg-gray-50 p-2 rounded">
                P(A) = 3/6 = 1/2
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Exemple 2 : Tirage de cartes</h3>
              <p className="text-slate-700 mb-2">
                Dans un jeu de 32 cartes, probabilité de tirer un roi :
              </p>
              <p className="font-mono text-sm bg-gray-50 p-2 rounded">
                P(Roi) = 4/32 = 1/8
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProbabilityBasicsCoursePage;
