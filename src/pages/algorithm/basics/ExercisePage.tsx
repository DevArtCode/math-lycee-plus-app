
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgorithmBasicsExercisePage = () => {
  const exercises = [
    {
      id: "ab-1",
      title: "Structure conditionnelle",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Écrire un algorithme qui détermine si un nombre est positif, négatif ou nul.",
      hint: "Utilisez des structures if/else",
      solution: "ALGORITHME:\nSaisir n\nSI n > 0 ALORS\n  Afficher 'positif'\nSINON SI n < 0 ALORS\n  Afficher 'négatif'\nSINON\n  Afficher 'nul'\nFIN SI",
      explanation: "Utilisation des structures conditionnelles pour classifier un nombre",
      category: "Structures conditionnelles"
    },
    {
      id: "ab-2",
      title: "Boucle POUR",
      difficulty: "Débutant" as const,
      points: 10,
      statement: "Écrire un algorithme qui affiche les nombres de 1 à 10.",
      hint: "Utilisez une boucle POUR",
      solution: "ALGORITHME:\nPOUR i DE 1 À 10 FAIRE\n  Afficher i\nFIN POUR",
      explanation: "Boucle POUR avec compteur croissant",
      category: "Boucles"
    },
    {
      id: "ab-3",
      title: "Boucle TANT QUE",
      difficulty: "Débutant" as const,
      points: 12,
      statement: "Écrire un algorithme qui calcule la somme des entiers de 1 à n (n donné).",
      hint: "Utilisez une variable somme et une boucle",
      solution: "ALGORITHME:\nSaisir n\nsomme ← 0\ni ← 1\nTANT QUE i ≤ n FAIRE\n  somme ← somme + i\n  i ← i + 1\nFIN TANT QUE\nAfficher somme",
      explanation: "Utilisation d'une boucle TANT QUE pour calculer une somme",
      category: "Boucles"
    },
    {
      id: "ab-4",
      title: "Recherche du maximum",
      difficulty: "Intermédiaire" as const,
      points: 15,
      statement: "Écrire un algorithme qui trouve le plus grand élément d'un tableau de n nombres.",
      hint: "Initialisez le maximum avec le premier élément",
      solution: "ALGORITHME:\nSaisir n\nSaisir T[1..n]\nmax ← T[1]\nPOUR i DE 2 À n FAIRE\n  SI T[i] > max ALORS\n    max ← T[i]\n  FIN SI\nFIN POUR\nAfficher max",
      explanation: "Parcours de tableau pour trouver le maximum",
      category: "Tableaux"
    },
    {
      id: "ab-5",
      title: "Test de primalité",
      difficulty: "Intermédiaire" as const,
      points: 18,
      statement: "Écrire un algorithme qui teste si un nombre n est premier.",
      hint: "Testez tous les diviseurs de 2 à √n",
      solution: "ALGORITHME:\nSaisir n\nSI n ≤ 1 ALORS\n  Afficher 'non premier'\nSINON\n  premier ← VRAI\n  i ← 2\n  TANT QUE i ≤ √n ET premier FAIRE\n    SI n MOD i = 0 ALORS\n      premier ← FAUX\n    FIN SI\n    i ← i + 1\n  FIN TANT QUE\n  Afficher premier\nFIN SI",
      explanation: "Test d'efficacité en ne vérifiant que jusqu'à √n",
      category: "Algorithmes mathématiques"
    },
    {
      id: "ab-6",
      title: "Tri par sélection",
      difficulty: "Avancé" as const,
      points: 22,
      statement: "Écrire l'algorithme de tri par sélection pour un tableau de n éléments.",
      hint: "À chaque étape, placez le minimum en première position",
      solution: "ALGORITHME:\nSaisir n\nSaisir T[1..n]\nPOUR i DE 1 À n-1 FAIRE\n  indice_min ← i\n  POUR j DE i+1 À n FAIRE\n    SI T[j] < T[indice_min] ALORS\n      indice_min ← j\n    FIN SI\n  FIN POUR\n  Échanger T[i] et T[indice_min]\nFIN POUR",
      explanation: "Tri en sélectionnant le minimum à chaque étape",
      category: "Tri"
    },
    {
      id: "ab-7",
      title: "Factorielle",
      difficulty: "Débutant" as const,
      points: 10,
      statement: "Écrire un algorithme qui calcule n! (factorielle de n).",
      hint: "Utilisez une boucle ou la récursivité",
      solution: "ALGORITHME:\nSaisir n\nfact ← 1\nPOUR i DE 1 À n FAIRE\n  fact ← fact × i\nFIN POUR\nAfficher fact",
      explanation: "Calcul itératif de la factorielle",
      category: "Algorithmes mathématiques"
    },
    {
      id: "ab-8",
      title: "Recherche dans un tableau",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Écrire un algorithme qui recherche un élément x dans un tableau et retourne sa position.",
      hint: "Parcourez le tableau et comparez chaque élément à x",
      solution: "ALGORITHME:\nSaisir n\nSaisir T[1..n]\nSaisir x\nposition ← -1\nPOUR i DE 1 À n FAIRE\n  SI T[i] = x ALORS\n    position ← i\n    Sortir de la boucle\n  FIN SI\nFIN POUR\nAfficher position",
      explanation: "Recherche séquentielle dans un tableau",
      category: "Recherche"
    },
    {
      id: "ab-9",
      title: "Inversion d'un tableau",
      difficulty: "Intermédiaire" as const,
      points: 16,
      statement: "Écrire un algorithme qui inverse l'ordre des éléments d'un tableau.",
      hint: "Échangez les éléments symétriques",
      solution: "ALGORITHME:\nSaisir n\nSaisir T[1..n]\nPOUR i DE 1 À n÷2 FAIRE\n  Échanger T[i] et T[n+1-i]\nFIN POUR\nAfficher T",
      explanation: "Inversion par échange des éléments symétriques",
      category: "Tableaux"
    },
    {
      id: "ab-10",
      title: "Suite de Fibonacci",
      difficulty: "Intermédiaire" as const,
      points: 16,
      statement: "Écrire un algorithme qui calcule les n premiers termes de la suite de Fibonacci.",
      hint: "F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)",
      solution: "ALGORITHME:\nSaisir n\nSI n ≥ 1 ALORS\n  F[1] ← 0\n  Afficher F[1]\nFIN SI\nSI n ≥ 2 ALORS\n  F[2] ← 1\n  Afficher F[2]\nFIN SI\nPOUR i DE 3 À n FAIRE\n  F[i] ← F[i-1] + F[i-2]\n  Afficher F[i]\nFIN POUR",
      explanation: "Calcul itératif de la suite de Fibonacci",
      category: "Suites"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/algorithm">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux Algorithmes
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-orange-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Structures de Base</h1>
              </div>
            </div>
            <Link to="/algorithm/basics/course">
              <Button variant="outline">
                Revoir le cours
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-orange-600 to-orange-800" />
      </div>
    </div>
  );
};

export default AlgorithmBasicsExercisePage;
