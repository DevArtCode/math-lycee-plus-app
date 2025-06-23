
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AnalysisSequencesExercisePage = () => {
  const exercises = [
    {
      id: "as-1",
      title: "Suite arithmétique - Terme général",
      difficulty: "Débutant" as const,
      points: 6,
      statement: "Soit (un) une suite arithmétique avec u3 = 7 et u7 = 15. Déterminer u0 et la raison r",
      hint: "Utilisez la relation un = u0 + nr",
      solution: "u3 = u0 + 3r = 7\nu7 = u0 + 7r = 15\nSoustraction : 4r = 8 ⟹ r = 2\nDonc u0 = 7 - 3×2 = 1\nVérification : u3 = 1 + 3×2 = 7 ✓",
      explanation: "On utilise deux termes connus pour former un système d'équations",
      category: "Suites arithmétiques"
    },
    {
      id: "as-2",
      title: "Suite géométrique - Somme",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Calculer la somme S = 2 + 6 + 18 + 54 + 162",
      hint: "Identifiez d'abord la raison de cette suite géométrique",
      solution: "C'est une suite géométrique de premier terme u0 = 2 et raison q = 3\nNombre de termes : n = 5\nS = u0(1-q^n)/(1-q) = 2(1-3^5)/(1-3) = 2(1-243)/(-2) = 2×242/2 = 242",
      explanation: "Formule de la somme des n premiers termes d'une suite géométrique",
      category: "Suites géométriques"
    },
    {
      id: "as-3",
      title: "Limite d'une suite",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Calculer lim(n→∞) (2n² + 3n - 1)/(n² - n + 2)",
      hint: "Divisez numérateur et dénominateur par n²",
      solution: "lim (2n² + 3n - 1)/(n² - n + 2) = lim (2 + 3/n - 1/n²)/(1 - 1/n + 2/n²)\n= (2 + 0 - 0)/(1 - 0 + 0) = 2/1 = 2",
      explanation: "Pour les fractions rationnelles, on divise par le terme de plus haut degré",
      category: "Limites"
    },
    {
      id: "as-4",
      title: "Suite définie par récurrence",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Soit u0 = 1 et un+1 = (2un + 3)/(un + 2). Étudier la monotonie de cette suite",
      hint: "Calculez un+1 - un et étudiez son signe",
      solution: "un+1 - un = (2un + 3)/(un + 2) - un = (2un + 3 - un(un + 2))/(un + 2)\n= (2un + 3 - un² - 2un)/(un + 2) = (3 - un²)/(un + 2)\nSi un² < 3, alors un+1 > un (croissante)\nSi un² > 3, alors un+1 < un (décroissante)\nComme u0 = 1 < √3, la suite est d'abord croissante",
      explanation: "L'étude du signe de un+1 - un détermine la monotonie",
      category: "Suites récurrentes"
    },
    {
      id: "as-5",
      title: "Convergence par encadrement",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Montrer que la suite un = (1 + cos(n))/n² converge vers 0",
      hint: "Utilisez l'encadrement de cos(n)",
      solution: "On sait que -1 ≤ cos(n) ≤ 1\nDonc 0 ≤ 1 + cos(n) ≤ 2\nAinsi 0 ≤ (1 + cos(n))/n² ≤ 2/n²\nComme lim(2/n²) = 0, par le théorème des gendarmes :\nlim((1 + cos(n))/n²) = 0",
      explanation: "Le théorème des gendarmes permet de conclure à la convergence",
      category: "Convergence"
    },
    {
      id: "as-6",
      title: "Suite récurrente linéaire",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Résoudre un+2 = 3un+1 - 2un avec u0 = 1 et u1 = 4",
      hint: "Cherchez l'équation caractéristique",
      solution: "Équation caractéristique : r² - 3r + 2 = 0\n(r-1)(r-2) = 0 ⟹ r = 1 ou r = 2\nSolution générale : un = A + B×2^n\nConditions initiales :\nu0 = A + B = 1\nu1 = A + 2B = 4\nSoustraction : B = 3, donc A = -2\nAinsi un = -2 + 3×2^n = 3×2^n - 2",
      explanation: "Résolution par équation caractéristique pour les suites récurrentes linéaires",
      category: "Suites récurrentes linéaires"
    },
    {
      id: "as-7",
      title: "Approximation par suite",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Soit un+1 = (un + 3/un)/2 avec u0 = 2. Vers quelle valeur converge cette suite?",
      hint: "C'est une méthode d'approximation d'une racine carrée",
      solution: "Si la suite converge vers L, alors à la limite :\nL = (L + 3/L)/2 ⟹ 2L = L + 3/L ⟹ L² = 3 ⟹ L = √3\nVérifions la convergence :\nun+1 - √3 = (un + 3/un)/2 - √3 = (un - √3)²/(2un)\nComme un > 0, on a |un+1 - √3| < |un - √3|, donc convergence vers √3",
      explanation: "Méthode de Newton pour approcher √3",
      category: "Méthodes numériques"
    },
    {
      id: "as-8",
      title: "Suite et intégrale",
      difficulty: "Avancé" as const,
      points: 12,
      statement: "Soit In = ∫[0→1] x^n dx. Calculer In et étudier la convergence",
      hint: "Calculez d'abord l'intégrale puis étudiez la limite",
      solution: "In = ∫[0→1] x^n dx = [x^(n+1)/(n+1)][0→1] = 1/(n+1)\nDonc lim(n→∞) In = lim(n→∞) 1/(n+1) = 0\nInterprétation : l'aire sous x^n sur [0,1] tend vers 0 quand n → ∞",
      explanation: "Application des suites en calcul intégral",
      category: "Suites et intégrales"
    },
    {
      id: "as-9",
      title: "Étude complète d'une suite",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Soit un = n/(n+1). Étudier monotonie, bornes et limite",
      hint: "Étudiez un+1 - un pour la monotonie",
      solution: "Monotonie : un+1 - un = (n+1)/(n+2) - n/(n+1)\n= [(n+1)² - n(n+2)]/[(n+1)(n+2)] = [n² + 2n + 1 - n² - 2n]/[(n+1)(n+2)] = 1/[(n+1)(n+2)] > 0\nDonc la suite est strictement croissante\n\nBornes : un = n/(n+1) = 1 - 1/(n+1) < 1 (majorée)\nun = n/(n+1) > 0 (minorée)\n\nLimite : lim(n→∞) n/(n+1) = lim(n→∞) (1)/(1 + 1/n) = 1/1 = 1",
      explanation: "Étude complète : monotonie, bornes et convergence",
      category: "Étude complète"
    },
    {
      id: "as-10",
      title: "Suite logistique",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Soit un+1 = 2un(1 - un) avec u0 = 0,3. Étudier le comportement de cette suite",
      hint: "Étudiez les points fixes et la stabilité",
      solution: "Points fixes : L = 2L(1-L) ⟹ L = 2L - 2L² ⟹ 2L² - L = 0 ⟹ L(2L-1) = 0\nDonc L = 0 ou L = 1/2\n\nÉtude de stabilité autour de L = 1/2 :\nf(x) = 2x(1-x), f'(x) = 2(1-2x)\nf'(1/2) = 2(1-1) = 0\n\nPour u0 = 0,3 : u1 = 2×0,3×0,7 = 0,42\nu2 = 2×0,42×0,58 ≈ 0,487\nLa suite converge vers 1/2",
      explanation: "Modèle logistique de croissance de population",
      category: "Modélisation"
    },
    {
      id: "as-qcm",
      title: "QCM - Suites numériques",
      difficulty: "Intermédiaire" as const,
      points: 20,
      statement: "Questions à choix multiples sur les suites numériques",
      hint: "Réfléchissez bien à chaque question",
      solution: "1. B) un = 2 + 3n\n2. C) 1023\n3. A) 2\n4. B) √3\n5. A) Croissante et bornée",
      explanation: "QCM de révision générale sur le chapitre",
      category: "QCM",
      isQCM: true,
      questions: [
        {
          question: "Suite arithmétique u0 = 2, r = 3. Terme général ?",
          options: ["un = 2 + 3(n-1)", "un = 2 + 3n", "un = 3 + 2n", "un = 5n"],
          correct: 1
        },
        {
          question: "Somme 1 + 2 + 4 + 8 + ... + 512 = ?",
          options: ["512", "1024", "1023", "511"],
          correct: 2
        },
        {
          question: "lim(n→∞) (2n+1)/(n-1) = ?",
          options: ["2", "1", "∞", "0"],
          correct: 0
        },
        {
          question: "La suite un+1 = (un + 3/un)/2 converge vers :",
          options: ["3", "√3", "1,5", "2"],
          correct: 1
        },
        {
          question: "La suite un = n/(n+1) est :",
          options: ["Croissante et bornée", "Décroissante", "Non bornée", "Constante"],
          correct: 0
        }
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
                <Target className="w-6 h-6 text-purple-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Suites numériques</h1>
              </div>
            </div>
            <Link to="/analysis/sequences/course">
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

export default AnalysisSequencesExercisePage;
