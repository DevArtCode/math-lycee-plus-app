
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const LogicQuantifiersExercisePage = () => {
  const exercises = [
    {
      id: "lq-1",
      title: "Négation de quantificateurs",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Écrire la négation de : ∀x ∈ ℝ, x² ≥ 0",
      hint: "La négation de ∀ est ∃ avec négation du prédicat",
      solution: "¬(∀x ∈ ℝ, x² ≥ 0) = ∃x ∈ ℝ, ¬(x² ≥ 0) = ∃x ∈ ℝ, x² < 0",
      explanation: "Règle de négation des quantificateurs universels",
      category: "Négation"
    },
    {
      id: "lq-2",
      title: "Quantificateurs multiples",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Traduire en français : ∀x ∈ ℝ, ∃y ∈ ℝ, x + y = 0",
      hint: "Attention à l'ordre des quantificateurs",
      solution: "Pour tout nombre réel x, il existe un nombre réel y tel que x + y = 0",
      explanation: "Cette proposition dit que tout réel admet un opposé",
      category: "Traduction"
    },
    {
      id: "lq-3",
      title: "Négation complexe",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Écrire la négation de : ∀x ∈ ℕ, ∃y ∈ ℕ, y > x",
      hint: "Négation de ∀∃ devient ∃∀",
      solution: "¬(∀x ∈ ℕ, ∃y ∈ ℕ, y > x) = ∃x ∈ ℕ, ∀y ∈ ℕ, y ≤ x",
      explanation: "Il existerait un entier naturel plus grand que tous les autres",
      category: "Négation"
    },
    {
      id: "lq-4",
      title: "Quantificateur existentiel",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Que signifie : ∃x ∈ ℝ, x² = 2 ?",
      hint: "Il existe signifie au moins un",
      solution: "Il existe au moins un nombre réel dont le carré vaut 2",
      explanation: "Cette proposition est vraie (√2 et -√2 conviennent)",
      category: "Interprétation"
    },
    {
      id: "lq-5",
      title: "Ordre des quantificateurs",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Les propositions ∀x∃y, P(x,y) et ∃y∀x, P(x,y) sont-elles équivalentes ?",
      hint: "Pensez à un exemple concret",
      solution: "Non, elles ne sont pas équivalentes. ∃y∀x, P(x,y) ⟹ ∀x∃y, P(x,y) mais pas l'inverse",
      explanation: "L'ordre des quantificateurs change le sens de la proposition",
      category: "Comparaison"
    },
    {
      id: "lq-6",
      title: "Quantificateurs et fonction",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Traduire : Une fonction f est croissante sur ℝ",
      hint: "Utilisez des quantificateurs",
      solution: "∀x, y ∈ ℝ, (x < y) ⟹ (f(x) ≤ f(y))",
      explanation: "Définition formelle de la croissance d'une fonction",
      category: "Applications"
    },
    {
      id: "lq-7",
      title: "Négation d'une propriété",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Écrire la négation de : ∀ε > 0, ∃N ∈ ℕ, ∀n ≥ N, |uₙ - l| < ε",
      hint: "C'est la définition de la limite d'une suite",
      solution: "∃ε > 0, ∀N ∈ ℕ, ∃n ≥ N, |uₙ - l| ≥ ε",
      explanation: "Négation de la convergence d'une suite vers l",
      category: "Applications"
    },
    {
      id: "lq-8",
      title: "Unicité",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Comment exprimer qu'il existe un unique x tel que P(x) ?",
      hint: "Existence + unicité",
      solution: "∃x, P(x) ∧ ∀y, P(y) ⟹ (y = x)\nou plus simplement : ∃!x, P(x)",
      explanation: "Le quantificateur ∃! exprime l'existence et l'unicité",
      category: "Unicité"
    },
    {
      id: "lq-9",
      title: "Quantificateurs et ensembles",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Traduire : L'ensemble A est inclus dans B",
      hint: "Tout élément de A est dans B",
      solution: "∀x, (x ∈ A) ⟹ (x ∈ B)",
      explanation: "Définition formelle de l'inclusion ensembliste",
      category: "Ensembles"
    },
    {
      id: "lq-10",
      title: "Quantificateurs et égalité",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Écrire avec des quantificateurs : f est injective",
      hint: "Des antécédents différents ont des images différentes",
      solution: "∀x, y ∈ Dom(f), (f(x) = f(y)) ⟹ (x = y)\nou équivalent : ∀x, y ∈ Dom(f), (x ≠ y) ⟹ (f(x) ≠ f(y))",
      explanation: "Définition formelle de l'injectivité d'une fonction",
      category: "Applications"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Quantificateurs</h1>
              </div>
            </div>
            <Link to="/logic/quantifiers/course">
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

export default LogicQuantifiersExercisePage;
