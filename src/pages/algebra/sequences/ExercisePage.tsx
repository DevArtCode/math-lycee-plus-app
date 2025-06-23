import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgebraSequencesExercisePage = () => {
  const exercises = [
    {
      id: "1",
      title: "Reconnaissance de suites",
      difficulty: "Débutant" as const,
      points: 5,
      statement: "Déterminer si les suites suivantes sont arithmétiques, géométriques ou ni l'une ni l'autre :",
      hint: "Vérifiez si la différence (arithmétique) ou le rapport (géométrique) est constant",
      solution: "1, 4, 7, 10, 13, ... → Arithmétique (raison r = 3)\n2, 6, 18, 54, 162, ... → Géométrique (raison q = 3)\n1, 4, 9, 16, 25, ... → Ni l'une ni l'autre (carrés parfaits)",
      explanation: "Pour identifier le type de suite, on calcule les différences ou les rapports entre termes consécutifs.",
      category: "Types de suites"
    },
    {
      id: "2",
      title: "Calcul de termes",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Pour les suites définies ci-dessous, calculer les termes demandés :",
      hint: "Utilisez les formules : u_n = u_0 + nr (arithmétique) et u_n = u_0 × q^n (géométrique)",
      solution: "u_n = 3 + 2n, calculer u_10 :\nu_10 = 3 + 2×10 = 23\n\nv_n = 5 × 3^n, calculer v_4 :\nv_4 = 5 × 3^4 = 5 × 81 = 405\n\nw_n = 2n² - 1, calculer w_5 :\nw_5 = 2×5² - 1 = 2×25 - 1 = 49",
      explanation: "On applique directement les formules en substituant la valeur de n.",
      category: "Calcul de termes"
    },
    {
      id: "3",
      title: "Sommes de suites",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Calculer les sommes suivantes et résoudre le problème d'application :",
      hint: "Utilisez les formules de somme pour les suites arithmétiques et géométriques",
      solution: "S = 2 + 5 + 8 + ... + 32 (arithmétique, r=3)\nPremier terme: 2, dernier: 32\n32 = 2 + 3n → n = 10, donc 11 termes\nS = 11×(2+32)/2 = 11×17 = 187\n\nT = 1 + 3 + 9 + 27 + ... + 243 (géométrique, q=3)\n243 = 3^5, donc 6 termes (de 3^0 à 3^5)\nT = (1-3^6)/(1-3) = (1-729)/(-2) = 364\n\nPlacement: 1000€ première année, +5% chaque année\nC_n = 1000×(1.05)^n\nGain total sur 10 ans = Σ C_n = 1000×Σ(1.05)^n\n= 1000×(1.05)×(1.05^10-1)/(1.05-1) ≈ 13,207€",
      explanation: "Pour les suites arithmétiques, on utilise S_n = n(premier+dernier)/2. Pour les géométriques, S_n = premier×(1-q^n)/(1-q).",
      category: "Sommes et applications"
    },
    {
      id: "4",
      title: "Suite de Fibonacci",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "La suite de Fibonacci est définie par F₀ = 0, F₁ = 1 et Fₙ = Fₙ₋₁ + Fₙ₋₂.\na) Calculer les 10 premiers termes\nb) Calculer le rapport Fₙ₊₁/Fₙ pour n = 5, 6, 7, 8\nc) Que remarquez-vous ?",
      hint: "Ce rapport tend vers le nombre d'or φ = (1+√5)/2",
      solution: "a) F₀=0, F₁=1, F₂=1, F₃=2, F₄=3, F₅=5, F₆=8, F₇=13, F₈=21, F₉=34\n\nb) F₆/F₅ = 8/5 = 1.6\nF₇/F₆ = 13/8 = 1.625\nF₈/F₇ = 21/13 ≈ 1.615\nF₉/F₈ = 34/21 ≈ 1.619\n\nc) Le rapport converge vers φ = (1+√5)/2 ≈ 1.618 (nombre d'or)",
      explanation: "La suite de Fibonacci a de nombreuses propriétés remarquables, notamment sa convergence vers le nombre d'or.",
      category: "Suites récurrentes"
    },
    {
      id: "5",
      title: "Suites récurrentes linéaires",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Résoudre la récurrence uₙ₊₁ = 3uₙ - 2 avec u₀ = 1.\na) Calculer u₁, u₂, u₃\nb) Poser vₙ = uₙ - a et déterminer a pour que vₙ soit géométrique\nc) En déduire l'expression de uₙ",
      hint: "Pour rendre géométrique, il faut vₙ₊₁ = q·vₙ",
      solution: "a) u₁ = 3×1 - 2 = 1\nu₂ = 3×1 - 2 = 1\nu₃ = 3×1 - 2 = 1\n\nb) vₙ = uₙ - a\nvₙ₊₁ = uₙ₊₁ - a = 3uₙ - 2 - a = 3(vₙ + a) - 2 - a = 3vₙ + 2a - 2\nPour que vₙ soit géométrique : 2a - 2 = 0 ⟹ a = 1\nAlors vₙ₊₁ = 3vₙ avec v₀ = u₀ - 1 = 0\n\nc) vₙ = 0 pour tout n (car v₀ = 0)\nDonc uₙ = vₙ + 1 = 1 pour tout n\nVérification : uₙ₊₁ = 1 = 3×1 - 2 ✓",
      explanation: "La méthode du point fixe permet de résoudre les suites récurrentes linéaires.",
      category: "Récurrence linéaire"
    },
    {
      id: "6",
      title: "Limites de suites",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Étudier la limite des suites suivantes :\na) uₙ = (2n + 1)/(3n - 2)\nb) vₙ = (-1)ⁿ/n\nc) wₙ = (1 + 1/n)ⁿ",
      hint: "Pour a), diviser par n. Pour c), c'est une limite remarquable",
      solution: "a) uₙ = (2n + 1)/(3n - 2) = (2 + 1/n)/(3 - 2/n)\nQuand n → +∞ : uₙ → 2/3\n\nb) |vₙ| = 1/n → 0 quand n → +∞\nDonc vₙ → 0 (théorème des gendarmes)\n\nc) wₙ = (1 + 1/n)ⁿ → e quand n → +∞ (limite remarquable)",
      explanation: "Pour les fractions rationnelles, on divise par la plus haute puissance de n.",
      category: "Limites"
    },
    {
      id: "7",
      title: "Suites monotones et bornées",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Soit uₙ = √(2 + uₙ₋₁) avec u₀ = 0.\na) Calculer u₁, u₂, u₃\nb) Montrer que la suite est croissante\nc) Montrer qu'elle est majorée par 2\nd) En déduire qu'elle converge et calculer sa limite",
      hint: "Utiliser le théorème de convergence monotone",
      solution: "a) u₁ = √(2 + 0) = √2 ≈ 1.41\nu₂ = √(2 + √2) ≈ 1.85\nu₃ = √(2 + √(2 + √2)) ≈ 1.96\n\nb) Par récurrence : uₙ₊₁ - uₙ = √(2 + uₙ) - uₙ\nSi uₙ < 2, alors uₙ² < 4, donc 2 + uₙ > uₙ², d'où √(2 + uₙ) > uₙ\n\nc) Par récurrence : si uₙ ≤ 2, alors uₙ₊₁ = √(2 + uₙ) ≤ √(2 + 2) = 2\n\nd) Suite croissante et majorée donc convergente.\nSi l = lim uₙ, alors l = √(2 + l)\nl² = 2 + l ⟹ l² - l - 2 = 0 ⟹ (l-2)(l+1) = 0\nComme l ≥ 0, on a l = 2",
      explanation: "Le théorème de convergence monotone garantit la convergence d'une suite monotone et bornée.",
      category: "Convergence"
    },
    {
      id: "8",
      title: "Suites arithmético-géométriques",
      difficulty: "Avancé" as const,
      points: 17,
      statement: "Résoudre la récurrence uₙ₊₁ = 2uₙ + 3 avec u₀ = 1.\na) Calculer les premiers termes\nb) Déterminer le point fixe\nc) Résoudre par changement de variable",
      hint: "Le point fixe vérifie l = 2l + 3",
      solution: "a) u₁ = 2×1 + 3 = 5\nu₂ = 2×5 + 3 = 13\nu₃ = 2×13 + 3 = 29\n\nb) Point fixe l : l = 2l + 3 ⟹ -l = 3 ⟹ l = -3\n\nc) Posons vₙ = uₙ - (-3) = uₙ + 3\nvₙ₊₁ = uₙ₊₁ + 3 = 2uₙ + 3 + 3 = 2(vₙ - 3) + 6 = 2vₙ\nDonc vₙ = v₀ × 2ⁿ = (u₀ + 3) × 2ⁿ = 4 × 2ⁿ\nAlors uₙ = vₙ - 3 = 4 × 2ⁿ - 3\n\nVérification : u₀ = 4×1 - 3 = 1 ✓\nuₙ₊₁ = 4×2ⁿ⁺¹ - 3 = 2(4×2ⁿ - 3) + 3 = 2uₙ + 3 ✓",
      explanation: "Les suites arithmético-géométriques se résolvent par translation vers le point fixe.",
      category: "Arithmético-géométrique"
    },
    {
      id: "9",
      title: "Applications financières",
      difficulty: "Intermédiaire" as const,
      points: 13,
      statement: "Un capital de 10000€ est placé à 4% d'intérêts composés.\na) Exprimer le capital Cₙ après n années\nb) Au bout de combien d'années le capital double-t-il ?\nc) Combien rapporte un versement de 1000€ par an pendant 20 ans ?",
      hint: "Pour c), c'est une rente : somme d'une suite géométrique",
      solution: "a) Cₙ = 10000 × (1.04)ⁿ\n\nb) On cherche n tel que Cₙ = 20000\n10000 × (1.04)ⁿ = 20000\n(1.04)ⁿ = 2\nn × ln(1.04) = ln(2)\nn = ln(2)/ln(1.04) ≈ 17.7 années\n\nc) Chaque versement de 1000€ rapporte :\n- 1er versement (20 ans) : 1000 × (1.04)²⁰\n- 2e versement (19 ans) : 1000 × (1.04)¹⁹\n- ...\n- 20e versement (1 an) : 1000 × (1.04)¹\nTotal = 1000 × 1.04 × [(1.04)²⁰ - 1]/(1.04 - 1)\n= 1000 × 1.04 × [(1.04)²⁰ - 1]/0.04 ≈ 31570€",
      explanation: "Les intérêts composés suivent une progression géométrique. Une rente est une somme de termes géométriques.",
      category: "Applications financières"
    },
    {
      id: "10",
      title: "Suite définie par une intégrale",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Soit Iₙ = ∫₀¹ xⁿe⁻ˣ dx pour n ≥ 0.\na) Calculer I₀\nb) Établir une relation de récurrence entre Iₙ₊₁ et Iₙ\nc) En déduire I₁ et I₂",
      hint: "Utiliser l'intégration par parties pour b)",
      solution: "a) I₀ = ∫₀¹ e⁻ˣ dx = [-e⁻ˣ]₀¹ = -e⁻¹ - (-1) = 1 - 1/e\n\nb) Intégration par parties avec u = xⁿ⁺¹ et v' = e⁻ˣ :\nIₙ₊₁ = ∫₀¹ xⁿ⁺¹e⁻ˣ dx\n= [xⁿ⁺¹(-e⁻ˣ)]₀¹ - ∫₀¹ (n+1)xⁿ(-e⁻ˣ) dx\n= -1/e + (n+1)∫₀¹ xⁿe⁻ˣ dx\n= -1/e + (n+1)Iₙ\n\nc) I₁ = -1/e + 1×I₀ = -1/e + (1 - 1/e) = 1 - 2/e\nI₂ = -1/e + 2×I₁ = -1/e + 2(1 - 2/e) = 2 - 5/e",
      explanation: "L'intégration par parties permet d'établir des relations de récurrence pour les intégrales paramétrées.",
      category: "Suites intégrales"
    }
  ];

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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Suites numériques</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-purple-600 to-pink-600" />
      </div>
    </div>
  );
};

export default AlgebraSequencesExercisePage;
