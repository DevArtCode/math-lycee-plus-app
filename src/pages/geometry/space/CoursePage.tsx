
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GeometrySpaceCoursePage = () => {
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
              <h1 className="text-xl font-bold text-slate-900">🔳 Géométrie dans l'espace</h1>
            </div>
            <Link to="/geometry/space/exercise">
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
            <CardTitle className="text-2xl text-green-600">I. Repérage dans l'espace</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Coordonnées cartésiennes</h3>
              <p className="text-slate-700 mb-4">
                Un point M de l'espace est repéré par ses coordonnées (x, y, z).
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  M(x, y, z) dans le repère (O; i⃗, j⃗, k⃗)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Distance entre deux points</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  AB = √[(xB - xA)² + (yB - yA)² + (zB - zA)²]
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-green-600">II. Plans dans l'espace</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Équation cartésienne d'un plan</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  ax + by + cz + d = 0
                </p>
              </div>
              <p className="text-slate-700 mt-2">
                Le vecteur n⃗(a, b, c) est normal au plan.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Positions relatives de deux plans</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Parallèles : vecteurs normaux colinéaires</li>
                <li>Sécants : intersection en une droite</li>
                <li>Confondus : même équation</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-600">III. Droites dans l'espace</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Représentation paramétrique</h3>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  x = x₀ + at<br/>
                  y = y₀ + bt<br/>
                  z = z₀ + ct
                </p>
              </div>
              <p className="text-slate-700 mt-2">
                u⃗(a, b, c) est un vecteur directeur de la droite.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GeometrySpaceCoursePage;
