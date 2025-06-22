
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LogicQuantifiersCoursePage = () => {
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
              <h1 className="text-xl font-bold text-slate-900">🔢 Quantificateurs</h1>
            </div>
            <Link to="/logic/quantifiers/exercise">
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
            <CardTitle className="text-2xl text-purple-600">I. Quantificateur universel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Notation ∀ (pour tout)</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  ∀x ∈ E, P(x) : "Pour tout x de E, P(x) est vraie"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-purple-600">II. Quantificateur existentiel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Notation ∃ (il existe)</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  ∃x ∈ E, P(x) : "Il existe au moins un x de E tel que P(x) soit vraie"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogicQuantifiersCoursePage;
