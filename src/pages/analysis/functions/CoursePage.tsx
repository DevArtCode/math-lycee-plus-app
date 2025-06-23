
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
        "Une fonction peut être définie par une formule, un graphique ou un tableau de valeurs.",
        "Pour les fonctions rationnelles, on exclut les valeurs qui annulent le dénominateur.",
        "Pour les fonctions avec racines carrées, l'expression sous la racine doit être positive ou nulle.",
        "Pour les fonctions logarithmes, l'argument doit être strictement positif."
      ],
      examples: [
        {
          title: "Domaine d'une fonction rationnelle",
          description: "Déterminer le domaine de f(x) = 1/(x²-4)",
          solution: "f(x) = 1/(x²-4)\nLa fonction n'est pas définie quand x²-4 = 0\nDonc x² = 4, soit x = ±2\nDf = ℝ \\ {-2, 2}",
          domain: "Fonctions rationnelles"
        },
        {
          title: "Domaine avec racine carrée",
          description: "Déterminer le domaine de g(x) = √(3x-6)",
          solution: "Pour que √(3x-6) existe, il faut 3x-6 ≥ 0\n3x ≥ 6, donc x ≥ 2\nDg = [2, +∞[",
          domain: "Fonctions avec radicaux"
        }
      ],
      keyFormulas: [
        "Df = {x ∈ ℝ | f(x) existe}",
        "Image f = {f(x) | x ∈ Df}",
        "Fonction injective : f(a) = f(b) ⟹ a = b",
        "Fonction surjective : ∀y ∈ ℝ, ∃x tel que f(x) = y"
      ]
    },
    {
      id: "limites",
      title: "Limites de fonctions",
      content: [
        "La limite d'une fonction f en un point a exprime le comportement de f(x) quand x se rapproche de a.",
        "On note lim(x→a) f(x) = L si f(x) se rapproche de L quand x tend vers a.",
        "Les limites peuvent être finies ou infinies, et on peut étudier les limites à droite et à gauche.",
        "Les théorèmes opératoires permettent de calculer les limites de sommes, produits et quotients.",
        "Forme indéterminée 0/0 : factorisation, expression conjuguée, règle de L'Hôpital.",
        "Forme indéterminée ∞/∞ : diviser par le terme de plus haut degré.",
        "Limites de référence : lim(x→0) sin(x)/x = 1, lim(x→∞) (1+1/x)^x = e."
      ],
      examples: [
        {
          title: "Limite par factorisation",
          description: "Calculer lim(x→2) (x²-4)/(x-2)",
          solution: "lim(x→2) (x²-4)/(x-2) = lim(x→2) (x-2)(x+2)/(x-2)\n= lim(x→2) (x+2) = 2+2 = 4",
          domain: "Limites indéterminées"
        },
        {
          title: "Limite à l'infini",
          description: "Calculer lim(x→+∞) (2x³-x+1)/(3x³+2x²-5)",
          solution: "On divise par x³ :\nlim(x→+∞) (2-1/x²+1/x³)/(3+2/x-5/x³) = 2/3",
          domain: "Limites à l'infini"
        },
        {
          title: "Expression conjuguée",
          description: "Calculer lim(x→+∞) (√(x²+x) - x)",
          solution: "Multiplier par l'expression conjuguée :\n(√(x²+x) - x)(√(x²+x) + x)/(√(x²+x) + x)\n= x/(√(x²+x) + x) → 1/2",
          domain: "Formes indéterminées"
        }
      ],
      keyFormulas: [
        "lim(x→a) f(x) = L",
        "Limite à droite : lim(x→a⁺) f(x)",
        "Limite à gauche : lim(x→a⁻) f(x)",
        "Théorèmes : lim(f+g) = lim f + lim g",
        "lim(fg) = lim f × lim g",
        "lim(f/g) = lim f / lim g (si lim g ≠ 0)"
      ]
    },
    {
      id: "continuite",
      title: "Continuité",
      content: [
        "Une fonction est continue en a si lim(x→a) f(x) = f(a).",
        "Cela signifie que f est définie en a, admet une limite en a, et cette limite égale f(a).",
        "Le théorème des valeurs intermédiaires : si f continue sur [a,b] et k entre f(a) et f(b), alors ∃c ∈ [a,b] tel que f(c) = k.",
        "Applications : résolution d'équations, existence de solutions.",
        "Continuité sur un intervalle : f continue en tout point de l'intervalle.",
        "Les fonctions usuelles (polynômes, exponentielles, trigonométriques) sont continues sur leur domaine.",
        "La somme, le produit, la composée de fonctions continues sont continues."
      ],
      examples: [
        {
          title: "Application TVI - Équation x³+x-1=0",
          description: "Montrer que l'équation x³+x-1=0 admet une solution dans [0,1]",
          solution: "Soit f(x) = x³+x-1\nf(0) = -1 < 0\nf(1) = 1+1-1 = 1 > 0\nf continue sur [0,1] et 0 ∈ [f(0), f(1)]\nPar TVI, ∃c ∈ [0,1] tel que f(c) = 0",
          domain: "Théorème des valeurs intermédiaires"
        },
        {
          title: "Continuité d'une fonction définie par morceaux",
          description: "Étudier la continuité de f(x) = {x² si x ≤ 1; 2x-1 si x > 1} en x = 1",
          solution: "f(1) = 1² = 1\nlim(x→1⁻) f(x) = lim(x→1⁻) x² = 1\nlim(x→1⁺) f(x) = lim(x→1⁺) (2x-1) = 1\nDonc f est continue en x = 1",
          domain: "Fonctions par morceaux"
        }
      ],
      keyFormulas: [
        "Continuité : lim(x→a) f(x) = f(a)",
        "TVI : f continue sur [a,b] ⟹ f([a,b]) = [min, max]",
        "Théorème de Bolzano-Weierstrass",
        "Image d'un intervalle par une fonction continue"
      ]
    },
    {
      id: "asymptotes",
      title: "Asymptotes",
      content: [
        "Une asymptote verticale x = a existe si lim(x→a) |f(x)| = +∞.",
        "Une asymptote horizontale y = L existe si lim(x→±∞) f(x) = L.",
        "Une asymptote oblique y = ax + b existe si lim(x→±∞) [f(x) - (ax+b)] = 0.",
        "Les asymptotes donnent des informations sur le comportement global de la fonction.",
        "Pour trouver une asymptote oblique : calculer a = lim(x→∞) f(x)/x puis b = lim(x→∞) [f(x)-ax].",
        "Les branches paraboliques : si lim(x→∞) f(x)/x = ∞, alors branche parabolique.",
        "Position relative de la courbe par rapport à ses asymptotes."
      ],
      examples: [
        {
          title: "Asymptotes de f(x) = (2x²+1)/(x²-1)",
          description: "Déterminer toutes les asymptotes",
          solution: "Asymptotes verticales : x²-1=0 ⟹ x = ±1\nAsymptote horizontale : lim(x→±∞) (2x²+1)/(x²-1) = 2\nDonc y = 2 est asymptote horizontale",
          domain: "Fonctions rationnelles"
        },
        {
          title: "Asymptote oblique",
          description: "Étudier les asymptotes de g(x) = (x²+x+1)/x",
          solution: "g(x) = x + 1 + 1/x\nlim(x→∞) g(x)/x = 1, donc a = 1\nlim(x→∞) [g(x)-x] = 1, donc b = 1\nAsymptote oblique : y = x + 1",
          domain: "Asymptotes obliques"
        }
      ],
      keyFormulas: [
        "AV : x = a si lim(x→a) |f(x)| = +∞",
        "AH : y = L si lim(x→±∞) f(x) = L",
        "AO : y = ax+b si lim(x→±∞) [f(x)-(ax+b)] = 0",
        "a = lim(x→∞) f(x)/x, b = lim(x→∞) [f(x)-ax]"
      ]
    },
    {
      id: "fonctions-usuelles",
      title: "Fonctions usuelles",
      content: [
        "Fonction polynôme : f(x) = anx^n + ... + a1x + a0, domaine ℝ, continue.",
        "Fonction rationnelle : f(x) = P(x)/Q(x), domaine ℝ \\ {zéros de Q}.",
        "Fonction exponentielle : f(x) = e^x, domaine ℝ, strictement croissante.",
        "Fonction logarithme : f(x) = ln(x), domaine ]0,+∞[, strictement croissante.",
        "Fonctions trigonométriques : sin(x), cos(x), tan(x) avec leurs domaines spécifiques.",
        "Fonction valeur absolue : |x|, non dérivable en 0.",
        "Fonction partie entière : E(x), discontinue aux entiers."
      ],
      examples: [
        {
          title: "Propriétés de l'exponentielle",
          description: "Résoudre e^(2x-1) = 5",
          solution: "e^(2x-1) = 5\n2x-1 = ln(5)\n2x = 1 + ln(5)\nx = (1 + ln(5))/2",
          domain: "Fonction exponentielle"
        },
        {
          title: "Équation logarithmique",
          description: "Résoudre ln(x+1) - ln(x-1) = ln(2)",
          solution: "ln((x+1)/(x-1)) = ln(2)\n(x+1)/(x-1) = 2\nx+1 = 2(x-1)\nx+1 = 2x-2\nx = 3",
          domain: "Fonction logarithme"
        }
      ],
      keyFormulas: [
        "e^(a+b) = e^a × e^b",
        "ln(ab) = ln(a) + ln(b)",
        "ln(a/b) = ln(a) - ln(b)",
        "ln(e^x) = x, e^(ln(x)) = x"
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
