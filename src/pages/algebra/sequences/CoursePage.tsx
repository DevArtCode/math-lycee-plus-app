
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
        title: "Suites arithmétiques",
        content: `
          Une suite arithmétique est une suite où la différence entre deux termes consécutifs est constante.
          
          **Terme général :** u_n = u_0 + n × r
          - u_0 : premier terme
          - r : raison (différence commune)
          
          **Somme des n premiers termes :**
          S_n = (n + 1) × (u_0 + u_n) / 2
          
          **Exemple démographique :** Si une ville gagne 500 habitants par an, sa population suit une suite arithmétique.
        `,
        examples: [
          "Suite 2, 5, 8, 11, ... (u_0 = 2, r = 3)",
          "u_n = 2 + 3n"
        ]
      },
      {
        title: "Suites géométriques", 
        content: `
          Une suite géométrique est une suite où le rapport entre deux termes consécutifs est constant.
          
          **Terme général :** u_n = u_0 × q^n
          - u_0 : premier terme
          - q : raison (rapport commun)
          
          **Somme (si q ≠ 1) :**
          S_n = u_0 × (1 - q^(n+1)) / (1 - q)
          
          **Application financière :** Les intérêts composés suivent une suite géométrique.
        `,
        examples: [
          "Suite 3, 6, 12, 24, ... (u_0 = 3, q = 2)",
          "Capital avec intérêts : C_n = C_0 × (1 + r)^n"
        ]
      }
    ]
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
