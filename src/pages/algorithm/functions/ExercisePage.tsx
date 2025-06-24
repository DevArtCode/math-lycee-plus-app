
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgorithmFunctionsExercisePage = () => {
  const exercises = [
    {
      id: "af-1",
      title: "Fonction factorielle",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Écrire une fonction qui calcule la factorielle d'un nombre n.",
      hint: "Utilisez une boucle ou la récursivité",
      solution: "def factorielle(n):\n    if n <= 1:\n        return 1\n    else:\n        return n * factorielle(n-1)\n\n# Version itérative\ndef factorielle_iter(n):\n    resultat = 1\n    for i in range(1, n+1):\n        resultat *= i\n    return resultat",
      explanation: "Implémentation récursive et itérative de la fonction factorielle",
      category: "Fonctions récursives"
    },
    {
      id: "af-2",
      title: "Fonction maximum",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Créer une fonction qui retourne le maximum de trois nombres.",
      hint: "Comparez les nombres deux à deux",
      solution: "def maximum_trois(a, b, c):\n    \"\"\"Retourne le maximum de trois nombres\"\"\"\n    return max(a, max(b, c))\n\n# Ou avec des conditions\ndef maximum_trois_v2(a, b, c):\n    if a >= b and a >= c:\n        return a\n    elif b >= c:\n        return b\n    else:\n        return c",
      explanation: "Fonction pour trouver le maximum parmi trois valeurs",
      category: "Fonctions de comparaison"
    },
    {
      id: "af-3",
      title: "Suite de Fibonacci",
      difficulty: "Intermédiaire" as const,
      points: 15,
      statement: "Implémenter une fonction récursive pour calculer le n-ème terme de la suite de Fibonacci.",
      hint: "F(n) = F(n-1) + F(n-2) avec F(0)=0 et F(1)=1",
      solution: "def fibonacci(n):\n    \"\"\"Calcule le n-ème terme de Fibonacci\"\"\"\n    if n <= 1:\n        return n\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)\n\n# Version optimisée avec mémoïsation\ndef fibonacci_memo(n, memo={}):\n    if n in memo:\n        return memo[n]\n    if n <= 1:\n        return n\n    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)\n    return memo[n]",
      explanation: "Implémentation récursive de Fibonacci avec optimisation par mémoïsation",
      category: "Algorithmes récursifs"
    },
    {
      id: "af-4",
      title: "Fonction palindrome",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Écrire une fonction qui vérifie si un mot est un palindrome.",
      hint: "Comparez le mot avec son inverse ou utilisez la récursivité",
      solution: "def est_palindrome(mot):\n    \"\"\"Vérifie si un mot est un palindrome\"\"\"\n    mot = mot.lower().replace(' ', '')\n    return mot == mot[::-1]\n\n# Version récursive\ndef palindrome_recursif(mot):\n    mot = mot.lower().replace(' ', '')\n    if len(mot) <= 1:\n        return True\n    if mot[0] != mot[-1]:\n        return False\n    return palindrome_recursif(mot[1:-1])",
      explanation: "Vérification de palindrome avec approche itérative et récursive",
      category: "Traitement de chaînes"
    },
    {
      id: "af-5",
      title: "Calculatrice avec fonctions",
      difficulty: "Intermédiaire" as const,
      points: 18,
      statement: "Créer un ensemble de fonctions pour une calculatrice (addition, soustraction, multiplication, division).",
      hint: "Gérez les cas d'erreur comme la division par zéro",
      solution: "def addition(a, b):\n    return a + b\n\ndef soustraction(a, b):\n    return a - b\n\ndef multiplication(a, b):\n    return a * b\n\ndef division(a, b):\n    if b == 0:\n        return \"Erreur: Division par zéro\"\n    return a / b\n\ndef calculatrice(operation, a, b):\n    operations = {\n        '+': addition,\n        '-': soustraction,\n        '*': multiplication,\n        '/': division\n    }\n    if operation in operations:\n        return operations[operation](a, b)\n    else:\n        return \"Opération non supportée\"",
      explanation: "Implémentation modulaire d'une calculatrice avec gestion d'erreurs",
      category: "Applications pratiques"
    },
    {
      id: "af-6",
      title: "Fonction puissance",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Implémenter une fonction qui calcule a^n de manière récursive.",
      hint: "Utilisez la propriété a^n = a * a^(n-1)",
      solution: "def puissance(a, n):\n    \"\"\"Calcule a^n récursivement\"\"\"\n    if n == 0:\n        return 1\n    elif n > 0:\n        return a * puissance(a, n-1)\n    else:\n        return 1 / puissance(a, -n)\n\n# Version optimisée (exponentiation rapide)\ndef puissance_rapide(a, n):\n    if n == 0:\n        return 1\n    elif n % 2 == 0:\n        temp = puissance_rapide(a, n//2)\n        return temp * temp\n    else:\n        return a * puissance_rapide(a, n-1)",
      explanation: "Calcul de puissance avec algorithme naïf et optimisé",
      category: "Algorithmes mathématiques"
    },
    {
      id: "af-7",
      title: "Fonction PGCD",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Implémenter l'algorithme d'Euclide pour calculer le PGCD de deux nombres.",
      hint: "PGCD(a,b) = PGCD(b, a mod b) si b ≠ 0",
      solution: "def pgcd(a, b):\n    \"\"\"Calcule le PGCD par l'algorithme d'Euclide\"\"\"\n    while b != 0:\n        a, b = b, a % b\n    return a\n\n# Version récursive\ndef pgcd_recursif(a, b):\n    if b == 0:\n        return a\n    else:\n        return pgcd_recursif(b, a % b)",
      explanation: "Algorithme d'Euclide pour le calcul du PGCD",
      category: "Algorithmes mathématiques"
    },
    {
      id: "af-8",
      title: "Fonction de tri",
      difficulty: "Avancé" as const,
      points: 22,
      statement: "Implémenter une fonction de tri rapide (quicksort).",
      hint: "Divisez autour d'un pivot et triez récursivement",
      solution: "def tri_rapide(liste):\n    \"\"\"Tri rapide récursif\"\"\"\n    if len(liste) <= 1:\n        return liste\n    \n    pivot = liste[len(liste) // 2]\n    gauche = [x for x in liste if x < pivot]\n    milieu = [x for x in liste if x == pivot]\n    droite = [x for x in liste if x > pivot]\n    \n    return tri_rapide(gauche) + milieu + tri_rapide(droite)",
      explanation: "Algorithme de tri rapide avec approche divide-and-conquer",
      category: "Tri"
    },
    {
      id: "af-9",
      title: "Fonction récursive sur listes",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Écrire une fonction récursive qui calcule la somme des éléments d'une liste.",
      hint: "Cas de base : liste vide, cas récursif : premier élément + somme du reste",
      solution: "def somme_liste(liste):\n    \"\"\"Calcule la somme des éléments récursivement\"\"\"\n    if not liste:  # liste vide\n        return 0\n    else:\n        return liste[0] + somme_liste(liste[1:])\n\n# Version avec accumulateur\ndef somme_acc(liste, acc=0):\n    if not liste:\n        return acc\n    else:\n        return somme_acc(liste[1:], acc + liste[0])",
      explanation: "Récursion sur structures de données avec optimisation par accumulateur",
      category: "Structures de données"
    },
    {
      id: "af-10",
      title: "Générateur de nombres premiers",
      difficulty: "Avancé" as const,
      points: 25,
      statement: "Créer une fonction qui génère tous les nombres premiers jusqu'à n (crible d'Ératosthène).",
      hint: "Marquez les multiples de chaque nombre premier",
      solution: "def crible_eratosthene(n):\n    \"\"\"Génère tous les premiers jusqu'à n\"\"\"\n    if n < 2:\n        return []\n    \n    # Initialiser le crible\n    premier = [True] * (n + 1)\n    premier[0] = premier[1] = False\n    \n    p = 2\n    while p * p <= n:\n        if premier[p]:\n            # Marquer les multiples de p\n            for i in range(p * p, n + 1, p):\n                premier[i] = False\n        p += 1\n    \n    return [i for i in range(2, n + 1) if premier[i]]",
      explanation: "Algorithme du crible d'Ératosthène pour générer les nombres premiers",
      category: "Algorithmes mathématiques"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Fonctions et Procédures</h1>
              </div>
            </div>
            <Link to="/algorithm/functions/course">
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

export default AlgorithmFunctionsExercisePage;
