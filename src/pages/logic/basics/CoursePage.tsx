
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LogicBasicsCoursePage = () => {
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
              <h1 className="text-xl font-bold text-slate-900">🤔 Logique de base</h1>
            </div>
            <Link to="/logic/basics/exercise">
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
            <CardTitle className="text-2xl text-purple-600">I. Propositions et connecteurs logiques</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Propositions</h3>
              <p className="text-slate-700 mb-4">
                Une proposition est un énoncé qui peut être soit vrai (V) soit faux (F).
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Exemples :</strong><br/>
                  • "2 est un nombre pair" (Vrai)<br/>
                  • "π > 4" (Faux)<br/>
                  • "Quelle heure est-il ?" (N'est pas une proposition)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Connecteurs logiques</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-mono text-sm">
                    <strong>Négation :</strong> ¬P (non P)<br/>
                    <strong>Conjonction :</strong> P ∧ Q (P et Q)<br/>
                    <strong>Disjonction :</strong> P ∨ Q (P ou Q)<br/>
                    <strong>Implication :</strong> P ⟹ Q (P implique Q)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-600">II. Implication et équivalence</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Implication P ⟹ Q</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm">
                  "Si P alors Q" est faux seulement quand P est vrai et Q est faux.
                </p>
                <table className="mt-2 text-sm">
                  <tr><td>P</td><td>Q</td><td>P ⟹ Q</td></tr>
                  <tr><td>V</td><td>V</td><td>V</td></tr>
                  <tr><td>V</td><td>F</td><td>F</td></tr>
                  <tr><td>F</td><td>V</td><td>V</td></tr>
                  <tr><td>F</td><td>F</td><td>V</td></tr>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Réciproque, contraposée</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-mono text-sm space-y-1">
                  <span className="block"><strong>Directe :</strong> P ⟹ Q</span>
                  <span className="block"><strong>Réciproque :</strong> Q ⟹ P</span>
                  <span className="block"><strong>Contraposée :</strong> ¬Q ⟹ ¬P</span>
                </p>
              </div>
              <p className="text-slate-700 mt-2">
                Une implication et sa contraposée sont toujours équivalentes.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-purple-600">III. Méthodes de démonstration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Démonstration directe</h3>
              <p className="text-slate-700">
                Pour montrer P ⟹ Q, on suppose P vrai et on démontre que Q est vrai.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Démonstration par contraposée</h3>
              <p className="text-slate-700">
                Pour montrer P ⟹ Q, on montre ¬Q ⟹ ¬P.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Démonstration par l'absurde</h3>
              <p className="text-slate-700">
                Pour montrer P, on suppose ¬P et on arrive à une contradiction.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogicBasicsCoursePage;
