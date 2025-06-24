
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseContent from '@/components/CourseContent';

const AnalysisDerivativesCoursePage = () => {
  const sections = [
    {
      id: "definition",
      title: "Définition de la dérivée",
      content: [
        "La dérivée de f en a est la limite du taux d'accroissement : f'(a) = lim(h→0) [f(a+h)-f(a)]/h",
        "Interprétation géométrique : f'(a) est le coefficient directeur de la tangente à la courbe en (a, f(a))",
        "Interprétation physique : Si f(t) est la position, f'(t) est la vitesse instantanée",
        "Une fonction est dérivable en a si cette limite existe et est finie"
      ],
      examples: [
        {
          title: "Dérivée de x² par définition",
          description: "Calculer f'(x) pour f(x) = x² en utilisant la définition",
          solution: "f'(x) = lim(h→0) [(x+h)²-x²]/h\n= lim(h→0) [x²+2xh+h²-x²]/h\n= lim(h→0) [2xh+h²]/h\n= lim(h→0) (2x+h) = 2x",
          domain: "Calcul de dérivées"
        }
      ],
      keyFormulas: [
        "f'(a) = lim(h→0) [f(a+h)-f(a)]/h",
        "Équation de la tangente : y = f'(a)(x-a) + f(a)"
      ]
    },
    {
      id: "regles",
      title: "Règles de dérivation",
      content: [
        "Dérivée d'une somme : (u+v)' = u' + v'",
        "Dérivée d'un produit : (uv)' = u'v + uv'",
        "Dérivée d'un quotient : (u/v)' = (u'v - uv')/v²",
        "Dérivée d'une composée : (f∘g)'(x) = f'(g(x)) × g'(x)"
      ],
      examples: [
        {
          title: "Dérivée d'un produit",
          description: "Calculer la dérivée de h(x) = x²sin(x)",
          solution: "h(x) = x² × sin(x)\nu = x², u' = 2x\nv = sin(x), v' = cos(x)\nh'(x) = 2x·sin(x) + x²·cos(x)",
          domain: "Règles de dérivation"
        }
      ],
      keyFormulas: [
        "(u+v)' = u' + v'",
        "(uv)' = u'v + uv'",
        "(u/v)' = (u'v - uv')/v²",
        "(f∘g)' = f'(g) × g'"
      ]
    },
    {
      id: "usuelles",
      title: "Dérivées usuelles",
      content: [
        "Fonction constante : (k)' = 0",
        "Fonction puissance : (xⁿ)' = nxⁿ⁻¹",
        "Fonction exponentielle : (eˣ)' = eˣ, (eᵘ)' = u'eᵘ",
        "Fonction logarithme : (ln(x))' = 1/x, (ln(u))' = u'/u",
        "Fonctions trigonométriques : (sin(x))' = cos(x), (cos(x))' = -sin(x), (tan(x))' = 1 + tan²(x) = 1/cos²(x)",
        "Fonctions composées : (sin(u))' = u'cos(u), (cos(u))' = -u'sin(u)",
        "Fonction racine : (√x)' = 1/(2√x), (√u)' = u'/(2√u)",
        "Fonction inverse : (1/x)' = -1/x², (1/u)' = -u'/u²"
      ],
      examples: [
        {
          title: "Dérivée composée avec ln",
          description: "Calculer la dérivée de f(x) = ln(x²+1)",
          solution: "f(x) = ln(u) avec u = x²+1\nf'(x) = u'/u = (2x)/(x²+1) = 2x/(x²+1)",
          domain: "Fonctions composées"
        },
        {
          title: "Dérivée d'exponentielle composée",
          description: "Calculer la dérivée de g(x) = e^(2x+1)",
          solution: "g(x) = e^u avec u = 2x+1\ng'(x) = u' × e^u = 2 × e^(2x+1) = 2e^(2x+1)",
          domain: "Exponentielle composée"
        }
      ],
      keyFormulas: [
        "(k)' = 0",
        "(xⁿ)' = nxⁿ⁻¹",
        "(eˣ)' = eˣ, (eᵘ)' = u'eᵘ",
        "(ln(x))' = 1/x, (ln(u))' = u'/u",
        "(sin(x))' = cos(x), (sin(u))' = u'cos(u)",
        "(cos(x))' = -sin(x), (cos(u))' = -u'sin(u)",
        "(tan(x))' = 1/cos²(x), (tan(u))' = u'/cos²(u)",
        "(√x)' = 1/(2√x), (√u)' = u'/(2√u)",
        "(1/x)' = -1/x², (1/u)' = -u'/u²"
      ]
    },
    {
      id: "applications",
      title: "Applications de la dérivée",
      content: [
        "Étude des variations : f'(x) > 0 ⟹ f croissante, f'(x) < 0 ⟹ f décroissante",
        "Extremums locaux : si f'(a) = 0 et f' change de signe en a, alors f admet un extremum en a",
        "Théorème de Rolle : si f continue sur [a,b], dérivable sur ]a,b[ et f(a) = f(b), alors ∃c tel que f'(c) = 0",
        "Optimisation : résolution de problèmes de maximum/minimum"
      ],
      examples: [
        {
          title: "Optimisation - Rectangle inscrit",
          description: "Maximiser l'aire d'un rectangle inscrit dans un demi-cercle de rayon R",
          solution: "Rectangle de côtés 2x et y = √(R²-x²)\nAire A(x) = 2x√(R²-x²)\nA'(x) = 2√(R²-x²) - 2x²/√(R²-x²) = 2(R²-2x²)/√(R²-x²)\nA'(x) = 0 ⟹ R²-2x² = 0 ⟹ x = R/√2\nAire maximale = 2 × (R/√2) × (R/√2) = R²",
          domain: "Problèmes d'optimisation"
        }
      ],
      keyFormulas: [
        "f' > 0 ⟹ f croissante",
        "f'(a) = 0 et changement de signe ⟹ extremum",
        "Théorème de Rolle"
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
                <h1 className="text-xl font-bold text-slate-900">Cours - Dérivation</h1>
              </div>
            </div>
            <Link to="/analysis/derivatives/exercise">
              <Button>
                Faire les exercices
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseContent 
          title="Dérivation"
          sections={sections} 
          color="from-purple-600 to-purple-800" 
        />
      </div>
    </div>
  );
};

export default AnalysisDerivativesCoursePage;
