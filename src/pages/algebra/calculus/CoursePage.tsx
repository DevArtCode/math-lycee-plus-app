
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CourseContent from '@/components/CourseContent';

const AlgebraCalculusCoursePage = () => {
  const courseData = {
    title: "Calcul algébrique",
    sections: [
      {
        title: "Identités remarquables",
        content: `
          Les identités remarquables sont des formules fondamentales du calcul algébrique :
          
          **1. Carré d'une somme :**
          (a + b)² = a² + 2ab + b²
          
          **2. Carré d'une différence :**
          (a - b)² = a² - 2ab + b²
          
          **3. Différence de carrés :**
          (a - b)(a + b) = a² - b²
          
          **Exemple concret :** En physique, pour calculer l'énergie cinétique d'un système à deux particules :
          E = ½m(v₁ + v₂)² = ½m(v₁² + 2v₁v₂ + v₂²)
        `,
        examples: [
          "Développer (2x + 3)² = 4x² + 12x + 9",
          "Factoriser x² - 9 = (x - 3)(x + 3)"
        ]
      },
      {
        title: "Factorisation",
        content: `
          La factorisation consiste à écrire une expression sous forme de produit.
          
          **Méthodes principales :**
          - Mise en évidence du facteur commun
          - Utilisation des identités remarquables
          - Factorisation des trinômes du second degré
          
          **Application économique :** Pour optimiser les coûts de production :
          C(x) = 2x² + 8x + 8 = 2(x² + 4x + 4) = 2(x + 2)²
        `,
        examples: [
          "3x² + 6x = 3x(x + 2)",
          "x² + 5x + 6 = (x + 2)(x + 3)"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/algebra">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à l'Algèbre
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-bold text-slate-900">Calcul algébrique</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseContent {...courseData} />
        
        <div className="mt-8 flex justify-center">
          <Link to="/algebra/calculus/exercise">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Passer aux exercices
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlgebraCalculusCoursePage;
