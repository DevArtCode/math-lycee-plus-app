
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseContent from '@/components/CourseContent';

const AlgebraArithmeticCoursePage = () => {
  const courseData = {
    title: "Arithmétique",
    sections: [
      {
        id: "division",
        title: "Division euclidienne",
        content: [
          "La division euclidienne est fondamentale en arithmétique.",
          "Pour tous entiers a et b (b > 0), il existe un unique couple (q, r) tel que : a = bq + r avec 0 ≤ r < b",
          "q est le quotient et r est le reste",
          "Application en informatique : Les codes de contrôle utilisent le reste de divisions pour détecter les erreurs de transmission."
        ],
        examples: [
          {
            title: "Calcul de reste pour code-barres",
            description: "Un code-barres utilise la division euclidienne pour calculer sa clé de contrôle",
            solution: "Pour le code 123456789, on calcule : 123456789 ÷ 7 = 17636684 reste 1\nLa clé de contrôle est donc 1",
            domain: "informatique"
          }
        ],
        keyFormulas: [
          "a = bq + r avec 0 ≤ r < b",
          "Exemple : 17 = 5 × 3 + 2"
        ]
      },
      {
        id: "bezout",
        title: "PGCD et identité de Bézout",
        content: [
          "Le PGCD (Plus Grand Commun Diviseur) de deux entiers est le plus grand entier qui divise les deux nombres.",
          "L'identité de Bézout : Si d = pgcd(a,b), alors il existe des entiers u et v tels que : au + bv = d",
          "Cette identité est utilisée dans l'algorithme RSA pour le chiffrement sécurisé des données.",
          "L'algorithme d'Euclide permet de calculer efficacement le PGCD."
        ],
        examples: [
          {
            title: "Chiffrement RSA simplifié",
            description: "En cryptographie, l'identité de Bézout permet de calculer l'inverse modulaire nécessaire au déchiffrement",
            solution: "Pour pgcd(15, 8) = 1 :\n15 × (-1) + 8 × 2 = 1\nDonc l'inverse de 15 modulo 8 est -1 ≡ 7 [8]",
            domain: "cryptographie"
          }
        ],
        keyFormulas: [
          "pgcd(a, b) avec algorithme d'Euclide",
          "au + bv = pgcd(a, b)"
        ]
      }
    ],
    color: "from-green-600 to-emerald-600"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
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
                <Hash className="w-6 h-6 text-green-600" />
                <h1 className="text-xl font-bold text-slate-900">Arithmétique</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseContent {...courseData} />
        
        <div className="mt-8 flex justify-center">
          <Link to="/algebra/arithmetic/exercise">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Passer aux exercices
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlgebraArithmeticCoursePage;
