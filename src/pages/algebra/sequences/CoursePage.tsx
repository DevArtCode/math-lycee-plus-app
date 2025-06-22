
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseContent from '@/components/CourseContent';

const AlgebraSequencesCoursePage = () => {
  const courseData = {
    title: "Suites numériques",
    sections: [
      {
        id: "arithmetiques",
        title: "Suites arithmétiques",
        content: [
          "Une suite arithmétique est une suite où la différence entre deux termes consécutifs est constante.",
          "Terme général : u_n = u_0 + n × r où r est la raison",
          "Somme des n premiers termes : S_n = (n + 1) × (u_0 + u_n) / 2",
          "Application démographique : Si une ville gagne 500 habitants par an, sa population suit une suite arithmétique."
        ],
        examples: [
          {
            title: "Croissance démographique linéaire",
            description: "Une ville de 10 000 habitants gagne 500 habitants par an",
            solution: "Population après n années : P_n = 10000 + 500n\nAprès 10 ans : P_10 = 10000 + 500×10 = 15000 habitants\nPopulation totale sur 10 ans : S = 10×(10000 + 15000)/2 = 125000 habitants-années",
            domain: "démographie"
          }
        ],
        keyFormulas: [
          "u_n = u_0 + nr",
          "S_n = (n+1)(u_0 + u_n)/2"
        ]
      },
      {
        id: "geometriques",
        title: "Suites géométriques", 
        content: [
          "Une suite géométrique est une suite où le rapport entre deux termes consécutifs est constant.",
          "Terme général : u_n = u_0 × q^n où q est la raison",
          "Somme (si q ≠ 1) : S_n = u_0 × (1 - q^(n+1)) / (1 - q)",
          "Application financière : Les intérêts composés suivent une suite géométrique."
        ],
        examples: [
          {
            title: "Placement financier avec intérêts composés",
            description: "Un capital de 1000€ placé à 5% d'intérêts composés annuels",
            solution: "Capital après n années : C_n = 1000 × (1.05)^n\nAprès 10 ans : C_10 = 1000 × (1.05)^10 ≈ 1628.89€\nGain total : 628.89€",
            domain: "finance"
          }
        ],
        keyFormulas: [
          "u_n = u_0 × q^n",
          "S_n = u_0 × (1-q^(n+1))/(1-q) si q≠1"
        ]
      }
    ],
    color: "from-purple-600 to-pink-600"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
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
                <TrendingUp className="w-6 h-6 text-purple-600" />
                <h1 className="text-xl font-bold text-slate-900">Suites numériques</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseContent {...courseData} />
        
        <div className="mt-8 flex justify-center">
          <Link to="/algebra/sequences/exercise">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Passer aux exercices
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlgebraSequencesCoursePage;
