
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseContent from '@/components/CourseContent';

const AlgebraCalculusCoursePage = () => {
  const courseData = {
    title: "Calcul algébrique",
    sections: [
      {
        id: "identites",
        title: "Identités remarquables",
        content: [
          "Les identités remarquables sont des formules fondamentales du calcul algébrique.",
          "Carré d'une somme : (a + b)² = a² + 2ab + b²",
          "Carré d'une différence : (a - b)² = a² - 2ab + b²",
          "Différence de carrés : (a - b)(a + b) = a² - b²",
          "Ces formules sont utilisées en physique pour simplifier les calculs d'énergie."
        ],
        examples: [
          {
            title: "Énergie cinétique d'un système",
            description: "En physique, pour calculer l'énergie cinétique d'un système à deux particules",
            solution: "E = ½m(v₁ + v₂)²\nEn développant : E = ½m(v₁² + 2v₁v₂ + v₂²)\nCela permet de séparer les énergies individuelles et l'énergie d'interaction",
            domain: "physique"
          }
        ],
        keyFormulas: [
          "(a + b)² = a² + 2ab + b²",
          "(a - b)² = a² - 2ab + b²",
          "(a - b)(a + b) = a² - b²"
        ]
      },
      {
        id: "factorisation",
        title: "Factorisation",
        content: [
          "La factorisation consiste à écrire une expression sous forme de produit.",
          "Méthodes principales : mise en évidence du facteur commun, utilisation des identités remarquables",
          "Factorisation des trinômes du second degré : ax² + bx + c",
          "Application économique : optimisation des coûts de production"
        ],
        examples: [
          {
            title: "Optimisation des coûts",
            description: "Une entreprise a des coûts de production qui suivent une fonction quadratique",
            solution: "C(x) = 2x² + 8x + 8\nFactorisation : C(x) = 2(x² + 4x + 4) = 2(x + 2)²\nLe coût minimum est atteint pour x = -2 (non physique), le minimum réel dépend des contraintes",
            domain: "économie"
          }
        ],
        keyFormulas: [
          "Facteur commun : ab + ac = a(b + c)",
          "Trinôme : ax² + bx + c = a(x - x₁)(x - x₂)"
        ]
      }
    ],
    color: "from-blue-600 to-cyan-600"
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
