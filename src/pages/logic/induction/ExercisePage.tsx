
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const LogicInductionExercisePage = () => {
  const exercises = [
    {
      id: "li-1",
      title: "Récurrence simple",
      difficulty: "Intermédiaire" as const,
      points: 15,
      statement: "Démontrer par récurrence que pour tout n ≥ 1 : 1 + 3 + 5 + ... + (2n-1) = n²",
      hint: "Initialisez avec n=1, puis montrez l'hérédité",
      solution: "Initialisation : Pour n=1, 1 = 1² ✓\nHérédité : Supposons 1+3+...+(2k-1) = k²\nAlors 1+3+...+(2k-1)+(2(k+1)-1) = k² + (2k+1) = k² + 2k + 1 = (k+1)²\nConclusion : La propriété est vraie pour tout n ≥ 1",
      explanation: "Démonstration par récurrence de la somme des premiers nombres impairs",
      category: "Récurrence"
    },
    {
      id: "li-2",
      title: "Somme géométrique",
      difficulty: "Intermédiaire" as const,
      points: 18,
      statement: "Démontrer par récurrence que pour tout n ∈ ℕ et q ≠ 1 : 1 + q + q² + ... + qⁿ = (qⁿ⁺¹ - 1)/(q - 1)",
      hint: "Utilisez l'hypothèse de récurrence au rang k",
      solution: "Initialisation : Pour n=0, 1 = (q¹-1)/(q-1) = (q-1)/(q-1) = 1 ✓\nHérédité : Si 1+q+...+qᵏ = (qᵏ⁺¹-1)/(q-1)\nAlors 1+q+...+qᵏ+qᵏ⁺¹ = (qᵏ⁺¹-1)/(q-1) + qᵏ⁺¹ = (qᵏ⁺¹-1+qᵏ⁺¹(q-1))/(q-1) = (qᵏ⁺²-1)/(q-1)",
      explanation: "Formule de la somme des termes d'une suite géométrique",
      category: "Récurrence"
    },
    {
      id: "li-3",
      title: "Inégalité de Bernoulli",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Démontrer par récurrence que pour tout n ∈ ℕ et x ≥ -1 : (1+x)ⁿ ≥ 1 + nx",
      hint: "Attention au cas x ≥ -1 dans l'hérédité",
      solution: "Initialisation : Pour n=0, (1+x)⁰ = 1 ≥ 1 + 0·x = 1 ✓\nHérédité : Si (1+x)ᵏ ≥ 1 + kx\nAlors (1+x)ᵏ⁺¹ = (1+x)ᵏ(1+x) ≥ (1+kx)(1+x) = 1+(k+1)x+kx²\nComme kx² ≥ 0, on a (1+x)ᵏ⁺¹ ≥ 1+(k+1)x",
      explanation: "Inégalité fondamentale utilisée en analyse",
      category: "Inégalités"
    },
    {
      id: "li-4",
      title: "Divisibilité",
      difficulty: "Intermédiaire" as const,
      points: 16,
      statement: "Démontrer par récurrence que 7ⁿ - 1 est divisible par 6 pour tout n ≥ 1",
      hint: "Montrez que 7ⁿ - 1 ≡ 0 (mod 6)",
      solution: "Initialisation : Pour n=1, 7¹-1 = 6 est divisible par 6 ✓\nHérédité : Si 7ᵏ-1 est divisible par 6, alors 7ᵏ-1 = 6m pour un entier m\nDonc 7ᵏ = 6m+1\n7ᵏ⁺¹-1 = 7·7ᵏ-1 = 7(6m+1)-1 = 42m+7-1 = 42m+6 = 6(7m+1)\nDonc 7ᵏ⁺¹-1 est divisible par 6",
      explanation: "Application de la récurrence aux problèmes de divisibilité",
      category: "Divisibilité"
    },
    {
      id: "li-5",
      title: "Nombre de parties",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Démontrer par récurrence qu'un ensemble à n éléments possède 2ⁿ parties",
      hint: "Ajoutez un élément à un ensemble de cardinal n-1",
      solution: "Initialisation : ∅ a 2⁰ = 1 partie (lui-même) ✓\nHérédité : Si un ensemble à k éléments a 2ᵏ parties, considérons un ensemble E à k+1 éléments.\nSoit x ∈ E. Les parties de E sont : celles qui ne contiennent pas x (2ᵏ parties) et celles qui contiennent x (2ᵏ parties)\nTotal : 2ᵏ + 2ᵏ = 2·2ᵏ = 2ᵏ⁺¹",
      explanation: "Cardinal de l'ensemble des parties",
      category: "Combinatoire"
    },
    {
      id: "li-6",
      title: "Suite récurrente",
      difficulty: "Avancé" as const,
      points: 22,
      statement: "Soit uₙ = 3uₙ₋₁ - 2uₙ₋₂ avec u₀ = 1 et u₁ = 2. Démontrer que uₙ = 2ⁿ + 1 pour tout n ≥ 0",
      hint: "Récurrence forte sur deux termes consécutifs",
      solution: "Initialisation : u₀ = 1 = 2⁰ + 1 ✓, u₁ = 2 = 2¹ + 1 ✓\nHérédité : Si uₖ = 2ᵏ + 1 et uₖ₊₁ = 2ᵏ⁺¹ + 1\nAlors uₖ₊₂ = 3uₖ₊₁ - 2uₖ = 3(2ᵏ⁺¹ + 1) - 2(2ᵏ + 1)\n= 3·2ᵏ⁺¹ + 3 - 2·2ᵏ - 2 = 3·2ᵏ⁺¹ - 2ᵏ⁺¹ + 1 = 2·2ᵏ⁺¹ + 1 = 2ᵏ⁺² + 1",
      explanation: "Résolution d'une relation de récurrence linéaire",
      category: "Suites"
    },
    {
      id: "li-7",
      title: "Récurrence forte",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Démontrer que tout entier n ≥ 2 peut s'écrire comme produit de nombres premiers",
      hint: "Récurrence forte : utilisez tous les rangs < k",
      solution: "Initialisation : 2 est premier ✓\nHérédité forte : Soit k ≥ 3. Supposons que tout entier n avec 2 ≤ n < k s'écrit comme produit de premiers.\nSi k est premier, c'est fini. Sinon k = ab avec 2 ≤ a,b < k.\nPar hypothèse, a et b sont produits de premiers, donc k aussi.",
      explanation: "La récurrence forte utilise tous les rangs précédents",
      category: "Récurrence forte"
    },
    {
      id: "li-8",
      title: "Formule du binôme",
      difficulty: "Avancé" as const,
      points: 25,
      statement: "Démontrer par récurrence la formule du binôme : (a+b)ⁿ = Σₖ₌₀ⁿ C(n,k)aⁿ⁻ᵏbᵏ",
      hint: "Utilisez la relation de Pascal C(n+1,k) = C(n,k) + C(n,k-1)",
      solution: "Initialisation : Pour n=0, (a+b)⁰ = 1 = C(0,0)a⁰b⁰ ✓\nHérédité : Si (a+b)ᵏ = Σⱼ₌₀ᵏ C(k,j)aᵏ⁻ʲbʲ\nAlors (a+b)ᵏ⁺¹ = (a+b)·Σⱼ₌₀ᵏ C(k,j)aᵏ⁻ʲbʲ\n= Σⱼ₌₀ᵏ C(k,j)aᵏ⁺¹⁻ʲbʲ + Σⱼ₌₀ᵏ C(k,j)aᵏ⁻ʲbʲ⁺¹\nEn regroupant les termes et utilisant C(k+1,j) = C(k,j) + C(k,j-1), on obtient le résultat.",
      explanation: "Démonstration du théorème du binôme de Newton",
      category: "Binôme"
    },
    {
      id: "li-9",
      title: "Récurrence et matrices",
      difficulty: "Avancé" as const,
      points: 24,
      statement: "Soit A = [[1,1],[1,0]]. Démontrer que Aⁿ = [[Fₙ₊₁,Fₙ],[Fₙ,Fₙ₋₁]] où Fₙ est le n-ème terme de Fibonacci",
      hint: "Fibonacci : F₀=0, F₁=1, Fₙ₊₁ = Fₙ + Fₙ₋₁",
      solution: "Initialisation : A¹ = [[1,1],[1,0]] = [[F₂,F₁],[F₁,F₀]] ✓\nHérédité : Si Aᵏ = [[Fₖ₊₁,Fₖ],[Fₖ,Fₖ₋₁]]\nAlors Aᵏ⁺¹ = A·Aᵏ = [[1,1],[1,0]]·[[Fₖ₊₁,Fₖ],[Fₖ,Fₖ₋₁]]\n= [[Fₖ₊₁+Fₖ, Fₖ+Fₖ₋₁],[Fₖ₊₁, Fₖ]] = [[Fₖ₊₂,Fₖ₊₁],[Fₖ₊₁,Fₖ]]",
      explanation: "Relation entre puissances de matrices et suite de Fibonacci",
      category: "Applications"
    },
    {
      id: "li-10",
      title: "Récurrence et géométrie",
      difficulty: "Intermédiaire" as const,
      points: 18,
      statement: "Démontrer qu'un polygone convexe à n sommets (n ≥ 3) possède n(n-3)/2 diagonales",
      hint: "Ajoutez un sommet à un polygone à n-1 sommets",
      solution: "Initialisation : Un triangle (n=3) a 3(3-3)/2 = 0 diagonale ✓\nHérédité : Si un polygone à k sommets a k(k-3)/2 diagonales, considérons un polygone à k+1 sommets.\nEn ajoutant un sommet, on ajoute k-2 nouvelles diagonales (vers tous les sommets sauf les 2 adjacents).\nTotal : k(k-3)/2 + (k-2) = (k²-3k+2k-4)/2 = (k²-k-4)/2 = (k+1)(k-2)/2 = (k+1)((k+1)-3)/2",
      explanation: "Application de la récurrence en géométrie combinatoire",
      category: "Géométrie"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/logic">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la Logique
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-purple-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Raisonnement par Récurrence</h1>
              </div>
            </div>
            <Link to="/logic/induction/course">
              <Button variant="outline">
                Revoir le cours
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-purple-600 to-purple-800" />
      </div>
    </div>
  );
};

export default LogicInductionExercisePage;
