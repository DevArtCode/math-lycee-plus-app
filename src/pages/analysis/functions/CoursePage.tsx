
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseContent from '@/components/CourseContent';

const AnalysisFunctionsCoursePage = () => {
  const sections = [
    {
      id: "definition",
      title: "Définition et domaine d'une fonction",
      content: [
        "Une fonction f de ℝ vers ℝ est une relation qui associe à chaque élément x d'un ensemble de départ au plus un élément y de l'ensemble d'arrivée.",
        "Le domaine de définition Df est l'ensemble des valeurs pour lesquelles f(x) existe.",
        "L'ensemble image est l'ensemble des valeurs prises par f sur son domaine.",
        "Une fonction peut être définie par une formule, un graphique ou un tableau de valeurs."
      ],
      examples: [
        {
          title: "Domaine d'une fonction rationnelle",
          description: "Déterminer le domaine de f(x) = 1/(x²-4)",
          solution: "f(x) = 1/(x²-4)\nLa fonction n'est pas définie quand x²-4 = 0\nDonc x² = 4, soit x = ±2\nDf = ℝ \\ {-2, 2}",
          domain: "Fonctions rationnelles"
        }
      ],
      keyFormulas: [
        "Df = {x ∈ ℝ | f(x) existe}",
        "Image f = {f(x) | x ∈ Df}"
      ]
    },
    {
      id: "limites",
      title: "Limites de fonctions",
      content: [
        "La limite d'une fonction f en un point a exprime le comportement de f(x) quand x se rapproche de a.",
        "On note lim(x→a) f(x) = L si f(x) se rapproche de L quand x tend vers a.",
        "Les limites peuvent être finies ou infinies, et on peut étudier les limites à droite et à gauche.",
        "Les théorèmes opératoires permettent de calculer les limites de sommes, produits et quotients."
      ],
      examples: [
        {
          title: "Limite par factorisation",
          description: "Calculer lim(x→2) (x²-4)/(x-2)",
          solution: "lim(x→2) (x²-4)/(x-2) = lim(x→2) (x-2)(x+2)/(x-2)\n= lim(x→2) (x+2) = 2+2 = 4",
          domain: "Limites indéterminées"
        }
      ],
      keyFormulas: [
        "lim(x→a) f(x) = L",
        "Forme indéterminée 0/0",
        "lim(x→∞) (ax+b)/(cx+d) = a/c"
      ]
    },
    {
      id: "continuite",
      title: "Continuité",
      content: [
        "Une fonction est continue en a si lim(x→a) f(x) = f(a).",
        "Cela signifie que f est définie en a, admet une limite en a, et cette limite égale f(a).",
        "Le théorème des valeurs intermédiaires : si f continue sur [a,b] et k entre f(a) et f(b), alors ∃c ∈ [a,b] tel que f(c) = k.",
        "Applications : résolution d'équations, existence de solutions."
      ],
      examples: [
        {
          title: "Application TVI - Équation x³+x-1=0",
          description: "Montrer que l'équation x³+x-1=0 admet une solution dans [0,1]",
          solution: "Soit f(x) = x³+x-1\nf(0) = -1 < 0\nf(1) = 1+1-1 = 1 > 0\nf continue sur [0,1] et 0 ∈ [f(0), f(1)]\nPar TVI, ∃c ∈ [0,1] tel que f(c) = 0",
          domain: "Théorème des valeurs intermédiaires"
        }
      ],
      keyFormulas: [
        "Continuité : lim(x→a) f(x) = f(a)",
        "TVI : f continue sur [a,b] ⟹ f([a,b]) = [min, max]"
      ]
    },
    {
      id: "asymptotes",
      title: "Asymptotes",
      content: [
        "Une asymptote verticale x = a existe si lim(x→a) |f(x)| = +∞.",
        "Une asymptote horizontale y = L existe si lim(x→±∞) f(x) = L.",
        "Une asymptote oblique y = ax + b existe si lim(x→±∞) [f(x) - (ax+b)] = 0.",
        "Les asymptotes donnent des informations sur le comportement global de la fonction."
      ],
      examples: [
        {
          title: "Asymptotes de f(x) = (2x²+1)/(x²-1)",
          description: "Déterminer toutes les asymptotes",
          solution: "Asymptotes verticales : x²-1=0 ⟹ x = ±1\nAsymptote horizontale : lim(x→±∞) (2x²+1)/(x²-1) = 2\nDonc y = 2 est asymptote horizontale",
          domain: "Fonctions rationnelles"
        }
      ],
      keyFormulas: [
        "AV : x = a si lim(x→a) |f(x)| = +∞",
        "AH : y = L si lim(x→±∞) f(x) = L",
        "AO : y = ax+b si lim(x→±∞) [f(x)-(ax+b)] = 0"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/analysis">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à l'Analyse
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                <h1 className="text-xl font-bold text-slate-900">Cours - Fonctions et limites</h1>
              </div>
            </div>
            <Link to="/analysis/functions/exercise">
              <Button>
                Faire les exercices
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseContent 
          title="Fonctions et limites"
          sections={sections} 
          color="from-purple-600 to-purple-800" 
        />
      </div>
    </div>
  );
};

export default AnalysisFunctionsCoursePage;
