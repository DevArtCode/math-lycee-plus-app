
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseContent from '@/components/CourseContent';

const AnalysisSequencesCoursePage = () => {
  const sections = [
    {
      id: "definition",
      title: "Suites numériques - Définitions",
      content: [
        "Une suite numérique est une fonction de ℕ dans ℝ, notée (un)n∈ℕ ou (un).",
        "Terme général : un = f(n) où f est une fonction définie sur ℕ.",
        "Suite arithmétique : un+1 = un + r (r est la raison).",
        "Suite géométrique : un+1 = un × q (q est la raison, q ≠ 0).",
        "Suite définie par récurrence : u0 donné et un+1 = f(un).",
        "Suite croissante : un+1 ≥ un pour tout n. Suite décroissante : un+1 ≤ un.",
        "Suite majorée : ∃M, ∀n, un ≤ M. Suite minorée : ∃m, ∀n, un ≥ m. Suite bornée : majorée et minorée."
      ],
      examples: [
        {
          title: "Suite arithmétique",
          description: "Étudier la suite (un) définie par u0 = 3 et un+1 = un + 5",
          solution: "C'est une suite arithmétique de premier terme u0 = 3 et de raison r = 5\nTerme général : un = u0 + nr = 3 + 5n\nSomme des n premiers termes : Sn = n(u0 + un-1)/2 = n(3 + 3 + 5(n-1))/2 = n(6 + 5n - 5)/2 = n(1 + 5n)/2",
          domain: "Suites arithmétiques"
        },
        {
          title: "Suite géométrique",
          description: "Étudier la suite (vn) définie par v0 = 2 et vn+1 = 3vn",
          solution: "C'est une suite géométrique de premier terme v0 = 2 et de raison q = 3\nTerme général : vn = v0 × q^n = 2 × 3^n\nSomme des n premiers termes : Sn = v0(1-q^n)/(1-q) = 2(1-3^n)/(1-3) = 3^n - 1",
          domain: "Suites géométriques"
        },
        {
          title: "Suite définie par récurrence",
          description: "Étudier la monotonie de (wn) définie par w0 = 1 et wn+1 = √(2 + wn)",
          solution: "Calculons wn+1 - wn = √(2 + wn) - wn\nPosons f(x) = √(2 + x) - x\nf'(x) = 1/(2√(2 + x)) - 1\nPour x ≥ 0 : f'(x) < 0 si √(2 + x) < 2, soit x < 2\nDonc pour 0 ≤ x < 2 : f(x) décroissante et f(0) = √2 > 0\nLa suite est croissante tant que wn < 2",
          domain: "Suites récurrentes"
        }
      ],
      keyFormulas: [
        "Suite arithmétique : un = u0 + nr",
        "Somme arithmétique : Sn = n(u0 + un-1)/2",
        "Suite géométrique : un = u0 × q^n",
        "Somme géométrique : Sn = u0(1-q^n)/(1-q) si q ≠ 1",
        "Monotonie : un+1 - un (croissance) ou un+1/un (géométrique)"
      ]
    },
    {
      id: "limites",
      title: "Limites de suites",
      content: [
        "Limite finie : lim(n→∞) un = L si pour tout ε > 0, il existe N tel que pour n ≥ N, |un - L| < ε.",
        "Limite infinie : lim(n→∞) un = +∞ si pour tout A > 0, il existe N tel que pour n ≥ N, un > A.",
        "Théorèmes de convergence : suite croissante majorée converge, suite décroissante minorée converge.",
        "Théorème des gendarmes : si un ≤ vn ≤ wn et lim un = lim wn = L, alors lim vn = L.",
        "Limites usuelles : lim(1/n) = 0, lim(n^α) = +∞ (α > 0), lim(q^n) = 0 si |q| < 1.",
        "Opérations sur les limites : somme, produit, quotient (avec règles sur les formes indéterminées).",
        "Suite géométrique : lim(q^n) = 0 si |q| < 1, diverge si |q| > 1, limite 1 si q = 1."
      ],
      examples: [
        {
          title: "Limite par encadrement",
          description: "Calculer lim(n→∞) sin(n)/n",
          solution: "On sait que -1 ≤ sin(n) ≤ 1 pour tout n\nDonc -1/n ≤ sin(n)/n ≤ 1/n\nComme lim(-1/n) = 0 et lim(1/n) = 0\nPar le théorème des gendarmes : lim(sin(n)/n) = 0",
          domain: "Théorème des gendarmes"
        },
        {
          title: "Suite récurrente et limite",
          description: "Soit un+1 = (un + 2)/2 avec u0 = 0. Étudier la convergence",
          solution: "Supposons que la suite converge vers L\nÀ la limite : L = (L + 2)/2 ⟹ 2L = L + 2 ⟹ L = 2\nÉtudions la monotonie : un+1 - un = (un + 2)/2 - un = (2 - un)/2\nSi un < 2, alors un+1 > un (croissante)\nLa suite est croissante et majorée par 2, donc converge vers 2",
          domain: "Suites récurrentes"
        },
        {
          title: "Limite avec forme indéterminée",
          description: "Calculer lim(n→∞) (n² + 3n)/(2n² - n + 1)",
          solution: "Forme ∞/∞. On divise par n² :\nlim [(n² + 3n)/(2n² - n + 1)] = lim [(1 + 3/n)/(2 - 1/n + 1/n²)]\n= (1 + 0)/(2 - 0 + 0) = 1/2",
          domain: "Formes indéterminées"
        }
      ],
      keyFormulas: [
        "|un - L| < ε ⟺ L - ε < un < L + ε",
        "lim(1/n^α) = 0 (α > 0)",
        "lim(q^n) = 0 si |q| < 1",
        "Théorème : suite croissante majorée converge",
        "Si lim un = L et lim vn = M, alors lim(un + vn) = L + M"
      ]
    },
    {
      id: "convergence",
      title: "Convergence et divergence",
      content: [
        "Une suite converge si elle admet une limite finie, sinon elle diverge.",
        "Critère de Cauchy : une suite converge ssi pour tout ε > 0, ∃N tel que |up - uq| < ε pour p,q ≥ N.",
        "Suite de Cauchy : suite qui vérifie le critère de Cauchy (équivalent à convergente dans ℝ).",
        "Convergence monotone : toute suite monotone bornée converge.",
        "Sous-suites : si (un) converge vers L, toute sous-suite converge vers L.",
        "Théorème de Bolzano-Weierstrass : de toute suite bornée, on peut extraire une sous-suite convergente.",
        "Rapidité de convergence : comparaison entre suites qui tendent vers la même limite."
      ],
      examples: [
        {
          title: "Convergence par théorème de comparaison",
          description: "Étudier la convergence de un = (1 + 1/n)^n",
          solution: "Cette suite est croissante (démonstration par inégalité de Bernoulli)\nDe plus, un = (1 + 1/n)^n < 3 pour tout n (démonstration)\nDonc la suite est croissante et majorée, elle converge\nSa limite est le nombre e ≈ 2,718",
          domain: "Suites remarquables"
        },
        {
          title: "Divergence d'une suite",
          description: "Montrer que vn = (-1)^n diverge",
          solution: "v2k = (-1)^(2k) = 1 et v2k+1 = (-1)^(2k+1) = -1\nLa sous-suite des termes pairs tend vers 1\nLa sous-suite des termes impairs tend vers -1\nComme ces limites sont différentes, la suite diverge",
          domain: "Divergence"
        },
        {
          title: "Suite définie implicitement",
          description: "Soit un tel que un + e^un = n. Étudier la convergence",
          solution: "La fonction f(x) = x + e^x est strictement croissante\nDonc un est bien défini et unique pour chaque n\nun + e^un = n ⟹ un < n\nDe plus, un > ln(n) - ln(ln(n)) pour n assez grand\nComme n → ∞, on a un → ∞",
          domain: "Suites implicites"
        }
      ],
      keyFormulas: [
        "Suite croissante majorée ⟹ convergente",
        "lim(1 + 1/n)^n = e",
        "Critère de Cauchy : |up - uq| < ε",
        "Si (vn) sous-suite de (un) et lim un = L, alors lim vn = L"
      ]
    },
    {
      id: "applications",
      title: "Applications et suites remarquables",
      content: [
        "Suites et algorithmes : méthode de Newton-Raphson, méthode de dichotomie.",
        "Suites et intégrales : méthode des rectangles, formule des trapèzes.",
        "Développements asymptotiques : comportement d'une suite pour les grandes valeurs.",
        "Suites récurrentes linéaires : un+2 = aun+1 + bun (résolution par équation caractéristique).",
        "Suites logistiques : un+1 = run(1 - un), modélisation de populations.",
        "Convergence vers des constantes remarquables : e, π, nombre d'or φ.",
        "Applications en analyse numérique et en probabilités discrètes."
      ],
      examples: [
        {
          title: "Méthode de Newton",
          description: "Approximer √2 par la suite un+1 = (un + 2/un)/2 avec u0 = 1",
          solution: "Cette suite converge vers √2\nu1 = (1 + 2)/2 = 1,5\nu2 = (1,5 + 2/1,5)/2 = (1,5 + 4/3)/2 ≈ 1,417\nu3 ≈ 1,4142\nLa convergence est très rapide (quadratique)",
          domain: "Analyse numérique"
        },
        {
          title: "Suite récurrente linéaire",
          description: "Résoudre un+2 = 5un+1 - 6un avec u0 = 1, u1 = 2",
          solution: "Équation caractéristique : r² - 5r + 6 = 0\n(r - 2)(r - 3) = 0 ⟹ r = 2 ou r = 3\nSolution générale : un = A×2^n + B×3^n\nConditions initiales :\nu0 = A + B = 1\nu1 = 2A + 3B = 2\nRésolution : B = 0, A = 1\nDonc un = 2^n",
          domain: "Suites récurrentes linéaires"
        },
        {
          title: "Approximation d'intégrale",
          description: "Approcher ∫[0→1] e^x dx par la méthode des rectangles",
          solution: "∫[0→1] e^x dx = e - 1 ≈ 1,718\nMéthode des rectangles avec n intervalles :\nSn = (1/n) Σ(k=0 à n-1) e^(k/n)\nPour n = 4 : S4 = (1/4)(1 + e^(1/4) + e^(1/2) + e^(3/4)) ≈ 1,68\nPlus n est grand, plus l'approximation est précise",
          domain: "Intégration numérique"
        }
      ],
      keyFormulas: [
        "Newton-Raphson : un+1 = un - f(un)/f'(un)",
        "Suite récurrente linéaire : un = A×r1^n + B×r2^n",
        "Nombre d'or : φ = (1 + √5)/2 ≈ 1,618",
        "Approximation rectangles : ∫f ≈ (b-a)/n × Σf(xi)"
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
                <h1 className="text-xl font-bold text-slate-900">Cours - Suites numériques</h1>
              </div>
            </div>
            <Link to="/analysis/sequences/exercise">
              <Button>
                Faire les exercices
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseContent 
          title="Suites numériques"
          sections={sections} 
          color="from-purple-600 to-purple-800" 
        />
      </div>
    </div>
  );
};

export default AnalysisSequencesCoursePage;
