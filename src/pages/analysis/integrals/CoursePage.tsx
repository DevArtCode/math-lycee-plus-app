
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseContent from '@/components/CourseContent';

const AnalysisIntegralsCoursePage = () => {
  const sections = [
    {
      id: "primitives",
      title: "Primitives et calcul intégral",
      content: [
        "Une primitive d'une fonction f sur un intervalle I est une fonction F dérivable sur I telle que F'(x) = f(x).",
        "Si F est une primitive de f, alors toutes les primitives de f sont de la forme F(x) + C où C est une constante.",
        "Théorème fondamental : Si f est continue sur [a,b], alors F(x) = ∫[a→x] f(t) dt est une primitive de f.",
        "L'intégrale définie ∫[a→b] f(x) dx représente l'aire algébrique entre la courbe et l'axe des abscisses.",
        "Propriétés de linéarité : ∫(αf + βg) = α∫f + β∫g avec α,β constantes.",
        "Relation de Chasles : ∫[a→c] f = ∫[a→b] f + ∫[b→c] f pour tout ordre de a,b,c.",
        "Inégalité de la moyenne : si m ≤ f(x) ≤ M sur [a,b], alors m(b-a) ≤ ∫[a→b] f(x) dx ≤ M(b-a)."
      ],
      examples: [
        {
          title: "Calcul de primitive par décomposition",
          description: "Calculer une primitive de f(x) = (2x³ - 3x² + x - 1)/x²",
          solution: "f(x) = (2x³ - 3x² + x - 1)/x² = 2x - 3 + 1/x - 1/x²\n∫f(x)dx = ∫(2x - 3 + 1/x - 1/x²)dx\n= x² - 3x + ln|x| + 1/x + C",
          domain: "Fonctions rationnelles"
        },
        {
          title: "Intégrale définie par changement de variable",
          description: "Calculer ∫[0→π/2] sin²(x) dx",
          solution: "sin²(x) = (1 - cos(2x))/2\n∫[0→π/2] sin²(x) dx = ∫[0→π/2] (1 - cos(2x))/2 dx\n= [x/2 - sin(2x)/4][0→π/2]\n= π/4 - 0 - (0 - 0) = π/4",
          domain: "Fonctions trigonométriques"
        },
        {
          title: "Aire entre deux courbes",
          description: "Calculer l'aire entre y = x² et y = 2x sur [0,2]",
          solution: "Les courbes se coupent en (0,0) et (2,4)\nPour x ∈ [0,2] : 2x ≥ x² car 2x - x² = x(2-x) ≥ 0\nAire = ∫[0→2] (2x - x²) dx = [x² - x³/3][0→2]\n= 4 - 8/3 = 4/3",
          domain: "Applications géométriques"
        }
      ],
      keyFormulas: [
        "∫ x^n dx = x^(n+1)/(n+1) + C (n ≠ -1)",
        "∫ 1/x dx = ln|x| + C",
        "∫ e^x dx = e^x + C",
        "∫ sin(x) dx = -cos(x) + C",
        "∫ cos(x) dx = sin(x) + C",
        "∫[a→b] f'(x) dx = f(b) - f(a)"
      ]
    },
    {
      id: "techniques",
      title: "Techniques d'intégration",
      content: [
        "Intégration par parties : ∫ u'v = uv - ∫ uv' (formule fondamentale).",
        "Choix judicieux de u et v' : u se dérive facilement, v' s'intègre facilement.",
        "Intégration par substitution : si u = g(x), alors ∫ f(g(x))g'(x) dx = ∫ f(u) du.",
        "Primitives des fonctions composées : ∫ f'(ax+b) dx = F(ax+b)/a + C.",
        "Décomposition en éléments simples pour les fractions rationnelles.",
        "Utilisation des symétries pour simplifier les calculs d'intégrales.",
        "Méthodes d'approximation : méthode des rectangles, des trapèzes."
      ],
      examples: [
        {
          title: "Intégration par parties",
          description: "Calculer ∫ x·e^x dx",
          solution: "Posons u = x et v' = e^x\nAlors u' = 1 et v = e^x\n∫ x·e^x dx = x·e^x - ∫ e^x dx = x·e^x - e^x + C = e^x(x-1) + C",
          domain: "Intégration par parties"
        },
        {
          title: "Substitution trigonométrique",
          description: "Calculer ∫ 2x√(1-x²) dx",
          solution: "Posons u = 1-x², alors du = -2x dx\n∫ 2x√(1-x²) dx = -∫ √u du = -∫ u^(1/2) du\n= -2u^(3/2)/3 + C = -2(1-x²)^(3/2)/3 + C",
          domain: "Changement de variable"
        },
        {
          title: "Décomposition en éléments simples",
          description: "Calculer ∫ 1/(x²-1) dx",
          solution: "1/(x²-1) = 1/((x-1)(x+1)) = A/(x-1) + B/(x+1)\n1 = A(x+1) + B(x-1)\nx=1: 1 = 2A ⟹ A = 1/2\nx=-1: 1 = -2B ⟹ B = -1/2\n∫ 1/(x²-1) dx = (1/2)ln|x-1| - (1/2)ln|x+1| + C",
          domain: "Fractions rationnelles"
        }
      ],
      keyFormulas: [
        "∫ u'v = uv - ∫ uv' (intégration par parties)",
        "∫ f(ax+b) dx = F(ax+b)/a + C",
        "∫ f'(x)/f(x) dx = ln|f(x)| + C",
        "∫ 1/(x²+a²) dx = (1/a)arctan(x/a) + C",
        "∫ 1/√(a²-x²) dx = arcsin(x/a) + C"
      ]
    },
    {
      id: "applications",
      title: "Applications des intégrales",
      content: [
        "Calcul d'aires : aire sous une courbe, entre deux courbes, aire algébrique.",
        "Calcul de volumes : volumes de révolution autour des axes de coordonnées.",
        "Valeur moyenne d'une fonction : μ = (1/(b-a)) ∫[a→b] f(x) dx.",
        "Applications en physique : travail d'une force, quantité de mouvement.",
        "Équations différentielles du premier ordre : y' = f(x) ⟹ y = ∫f(x) dx + C.",
        "Primitives et antidérivées dans la résolution de problèmes concrets.",
        "Approximation numérique d'intégrales par méthodes de quadrature."
      ],
      examples: [
        {
          title: "Volume de révolution",
          description: "Calculer le volume engendré par y = √x autour de l'axe Ox sur [0,4]",
          solution: "V = π ∫[0→4] (√x)² dx = π ∫[0→4] x dx\n= π [x²/2][0→4] = π × 8 = 8π",
          domain: "Géométrie dans l'espace"
        },
        {
          title: "Valeur moyenne",
          description: "Calculer la valeur moyenne de f(x) = x² sur [0,3]",
          solution: "Valeur moyenne = (1/(3-0)) ∫[0→3] x² dx\n= (1/3) × [x³/3][0→3] = (1/3) × 9 = 3",
          domain: "Statistiques et probabilités"
        },
        {
          title: "Équation différentielle",
          description: "Résoudre y' = 2x avec y(0) = 1",
          solution: "y = ∫ 2x dx = x² + C\nCondition initiale : y(0) = 1 ⟹ 0 + C = 1 ⟹ C = 1\nDonc y = x² + 1",
          domain: "Équations différentielles"
        }
      ],
      keyFormulas: [
        "Aire = ∫[a→b] |f(x)| dx",
        "Volume révolution = π ∫[a→b] [f(x)]² dx",
        "Valeur moyenne = (1/(b-a)) ∫[a→b] f(x) dx",
        "Travail = ∫[a→b] F(x) dx"
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
                <h1 className="text-xl font-bold text-slate-900">Cours - Primitives et intégrales</h1>
              </div>
            </div>
            <Link to="/analysis/integrals/exercise">
              <Button>
                Faire les exercices
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseContent 
          title="Primitives et intégrales"
          sections={sections} 
          color="from-purple-600 to-purple-800" 
        />
      </div>
    </div>
  );
};

export default AnalysisIntegralsCoursePage;
