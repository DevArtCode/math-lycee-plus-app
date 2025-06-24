
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const LogicSetsExercisePage = () => {
  const exercises = [
    {
      id: "ls-1",
      title: "Opérations sur les ensembles",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Soit A = {1, 2, 3} et B = {2, 3, 4}. Calculer A ∪ B et A ∩ B.",
      hint: "L'union contient tous les éléments, l'intersection les éléments communs",
      solution: "A ∪ B = {1, 2, 3, 4}\nA ∩ B = {2, 3}",
      explanation: "Application directe des définitions d'union et d'intersection",
      category: "Opérations ensemblistes"
    },
    {
      id: "ls-2",
      title: "Complémentaire d'un ensemble",
      difficulty: "Débutant" as const,
      points: 10,
      statement: "Dans ℕ, soit A = {0, 1, 2, 3}. Que vaut Ā (complémentaire de A) ?",
      hint: "Le complémentaire contient tous les éléments de ℕ qui ne sont pas dans A",
      solution: "Ā = {4, 5, 6, 7, 8, ...} = {n ∈ ℕ | n ≥ 4}",
      explanation: "Le complémentaire de A dans ℕ contient tous les naturels ≥ 4",
      category: "Complémentaire"
    },
    {
      id: "ls-3",
      title: "Différence d'ensembles",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Soit A = {1, 2, 3, 4, 5} et B = {3, 4, 5, 6, 7}. Calculer A \\ B et B \\ A.",
      hint: "A \\ B contient les éléments de A qui ne sont pas dans B",
      solution: "A \\ B = {1, 2}\nB \\ A = {6, 7}",
      explanation: "La différence A \\ B exclut de A tous les éléments de B",
      category: "Opérations ensemblistes"
    },
    {
      id: "ls-4",
      title: "Produit cartésien",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Soit A = {1, 2} et B = {a, b}. Déterminer A × B et calculer |A × B|.",
      hint: "Le produit cartésien forme tous les couples possibles",
      solution: "A × B = {(1,a), (1,b), (2,a), (2,b)}\n|A × B| = 4",
      explanation: "Le cardinal du produit cartésien est |A| × |B| = 2 × 2 = 4",
      category: "Produit cartésien"
    },
    {
      id: "ls-5",
      title: "Parties d'un ensemble",
      difficulty: "Intermédiaire" as const,
      points: 15,
      statement: "Soit E = {a, b, c}. Déterminer P(E) (ensemble des parties de E).",
      hint: "Il y a 2³ = 8 parties possibles",
      solution: "P(E) = {∅, {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}}",
      explanation: "Un ensemble à n éléments possède 2ⁿ parties",
      category: "Ensemble des parties"
    },
    {
      id: "ls-6",
      title: "Lois de De Morgan",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Démontrer que (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ",
      hint: "Utilisez la définition du complémentaire",
      solution: "x ∈ (A ∪ B)ᶜ ⟺ x ∉ (A ∪ B) ⟺ x ∉ A et x ∉ B ⟺ x ∈ Aᶜ et x ∈ Bᶜ ⟺ x ∈ Aᶜ ∩ Bᶜ",
      explanation: "Première loi de De Morgan pour les ensembles",
      category: "Lois de De Morgan"
    },
    {
      id: "ls-7",
      title: "Inclusion d'ensembles",
      difficulty: "Débutant" as const,
      points: 10,
      statement: "Soit A = {2, 4, 6} et B = {1, 2, 3, 4, 5, 6, 7}. Montrer que A ⊆ B.",
      hint: "Vérifiez que chaque élément de A appartient à B",
      solution: "2 ∈ B, 4 ∈ B, 6 ∈ B, donc tous les éléments de A sont dans B, d'où A ⊆ B",
      explanation: "A est inclus dans B car tous ses éléments appartiennent à B",
      category: "Inclusion"
    },
    {
      id: "ls-8",
      title: "Ensemble vide",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Montrer que ∅ ⊆ A pour tout ensemble A.",
      hint: "L'ensemble vide ne contient aucun élément",
      solution: "Par définition, ∅ ⊆ A signifie : ∀x ∈ ∅, x ∈ A. Comme ∅ ne contient aucun élément, cette implication est vacuement vraie.",
      explanation: "L'ensemble vide est inclus dans tout ensemble (inclusion vacue)",
      category: "Ensemble vide"
    },
    {
      id: "ls-9",
      title: "Distributivité",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Démontrer que A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)",
      hint: "Montrez la double inclusion",
      solution: "x ∈ A ∩ (B ∪ C) ⟺ x ∈ A et x ∈ (B ∪ C) ⟺ x ∈ A et (x ∈ B ou x ∈ C) ⟺ (x ∈ A et x ∈ B) ou (x ∈ A et x ∈ C) ⟺ x ∈ (A ∩ B) ∪ (A ∩ C)",
      explanation: "Distributivité de l'intersection sur l'union",
      category: "Distributivité"
    },
    {
      id: "ls-10",
      title: "Cardinal d'une union",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Soit A et B deux ensembles finis. Établir la formule |A ∪ B| = |A| + |B| - |A ∩ B|.",
      hint: "Principe d'inclusion-exclusion",
      solution: "Les éléments de A ∪ B sont comptés une fois dans |A| + |B|, sauf ceux de A ∩ B qui sont comptés deux fois. Il faut donc soustraire |A ∩ B|.",
      explanation: "Principe d'inclusion-exclusion pour deux ensembles",
      category: "Cardinal"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Théorie des Ensembles</h1>
              </div>
            </div>
            <Link to="/logic/sets/course">
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

export default LogicSetsExercisePage;
