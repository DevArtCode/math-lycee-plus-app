
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgorithmMathAppsExercisePage = () => {
  const exercises = [
    {
      id: "ama-1",
      title: "Méthode de dichotomie",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Implémenter la méthode de dichotomie pour trouver une racine de f(x) = x² - 2 sur [1,2].",
      hint: "Utilisez le théorème des valeurs intermédiaires",
      solution: "def dichotomie(f, a, b, precision=1e-6):\n    \"\"\"Méthode de dichotomie\"\"\"\n    while abs(b - a) > precision:\n        c = (a + b) / 2\n        if f(a) * f(c) < 0:\n            b = c\n        else:\n            a = c\n    return (a + b) / 2\n\n# Application\ndef f(x):\n    return x**2 - 2\n\nracine = dichotomie(f, 1, 2)\nprint(f\"Racine de x²-2: {racine}\")",
      explanation: "Implémentation de la méthode de dichotomie pour approximer √2",
      category: "Méthodes numériques"
    },
    {
      id: "ama-2",
      title: "Méthode de Newton",
      difficulty: "Avancé" as const,
      points: 22,
      statement: "Implémenter la méthode de Newton-Raphson pour trouver les racines d'une fonction.",
      hint: "x_{n+1} = x_n - f(x_n)/f'(x_n)",
      solution: "def newton_raphson(f, df, x0, precision=1e-10, max_iter=100):\n    \"\"\"Méthode de Newton-Raphson\"\"\"\n    x = x0\n    for i in range(max_iter):\n        fx = f(x)\n        if abs(fx) < precision:\n            return x\n        dfx = df(x)\n        if abs(dfx) < 1e-15:\n            raise ValueError(\"Dérivée trop petite\")\n        x = x - fx / dfx\n    return x\n\n# Exemple: racine de x²-2\ndef f(x): return x**2 - 2\ndef df(x): return 2*x\n\nracine = newton_raphson(f, df, 1.5)\nprint(f\"√2 ≈ {racine}\")",
      explanation: "Méthode de Newton pour la recherche de racines",
      category: "Méthodes numériques"
    },
    {
      id: "ama-3",
      title: "Intégration numérique",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Implémenter la méthode des trapèzes pour calculer numériquement une intégrale.",
      hint: "Divisez l'intervalle en sous-intervalles et approximez par des trapèzes",
      solution: "def integration_trapezes(f, a, b, n):\n    \"\"\"Intégration par la méthode des trapèzes\"\"\"\n    h = (b - a) / n\n    somme = (f(a) + f(b)) / 2\n    \n    for i in range(1, n):\n        x = a + i * h\n        somme += f(x)\n    \n    return h * somme\n\n# Exemple: intégrale de x² de 0 à 1\ndef f(x): return x**2\n\nintegrale = integration_trapezes(f, 0, 1, 1000)\nprint(f\"∫₀¹ x² dx ≈ {integrale}\")\nprint(f\"Valeur exacte: {1/3}\")",
      explanation: "Calcul numérique d'intégrales par la méthode des trapèzes",
      category: "Intégration numérique"
    },
    {
      id: "ama-4",
      title: "Résolution d'équations linéaires",
      difficulty: "Avancé" as const,
      points: 25,
      statement: "Implémenter l'élimination de Gauss pour résoudre un système d'équations linéaires.",
      hint: "Triangularisation puis substitution remontante",
      solution: "def elimination_gauss(A, b):\n    \"\"\"Résolution par élimination de Gauss\"\"\"\n    n = len(A)\n    # Copie pour ne pas modifier les originaux\n    M = [row[:] + [b[i]] for i, row in enumerate(A)]\n    \n    # Élimination\n    for i in range(n):\n        # Recherche du pivot\n        max_row = i\n        for k in range(i+1, n):\n            if abs(M[k][i]) > abs(M[max_row][i]):\n                max_row = k\n        M[i], M[max_row] = M[max_row], M[i]\n        \n        # Élimination\n        for k in range(i+1, n):\n            if M[i][i] != 0:\n                factor = M[k][i] / M[i][i]\n                for j in range(i, n+1):\n                    M[k][j] -= factor * M[i][j]\n    \n    # Substitution remontante\n    x = [0] * n\n    for i in range(n-1, -1, -1):\n        x[i] = M[i][n]\n        for j in range(i+1, n):\n            x[i] -= M[i][j] * x[j]\n        x[i] /= M[i][i]\n    \n    return x",
      explanation: "Résolution de systèmes linéaires par élimination de Gauss",
      category: "Algèbre linéaire"
    },
    {
      id: "ama-5",
      title: "Interpolation polynomiale",
      difficulty: "Avancé" as const,
      points: 24,
      statement: "Implémenter l'interpolation de Lagrange pour un ensemble de points.",
      hint: "P(x) = Σ y_i * L_i(x) où L_i sont les polynômes de Lagrange",
      solution: "def interpolation_lagrange(points, x):\n    \"\"\"Interpolation de Lagrange\"\"\"\n    n = len(points)\n    resultat = 0\n    \n    for i in range(n):\n        xi, yi = points[i]\n        # Calcul du polynôme de Lagrange L_i(x)\n        Li = 1\n        for j in range(n):\n            if i != j:\n                xj = points[j][0]\n                Li *= (x - xj) / (xi - xj)\n        resultat += yi * Li\n    \n    return resultat\n\n# Exemple\npoints = [(0, 1), (1, 4), (2, 9), (3, 16)]  # Points de y = x² + 1\nx_test = 1.5\ny_interpole = interpolation_lagrange(points, x_test)\nprint(f\"P({x_test}) = {y_interpole}\")",
      explanation: "Interpolation polynomiale par la méthode de Lagrange",
      category: "Interpolation"
    },
    {
      id: "ama-6",
      title: "Optimisation - Recherche du minimum",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Implémenter la méthode de la section dorée pour trouver le minimum d'une fonction unimodale.",
      hint: "Utilisez le nombre d'or pour diviser l'intervalle",
      solution: "import math\n\ndef section_doree(f, a, b, tolerance=1e-6):\n    \"\"\"Recherche du minimum par section dorée\"\"\"\n    phi = (1 + math.sqrt(5)) / 2  # Nombre d'or\n    resphi = 2 - phi  # 1/phi\n    \n    # Points intérieurs\n    x1 = a + resphi * (b - a)\n    x2 = b - resphi * (b - a)\n    f1, f2 = f(x1), f(x2)\n    \n    while abs(b - a) > tolerance:\n        if f1 > f2:\n            a = x1\n            x1 = x2\n            f1 = f2\n            x2 = b - resphi * (b - a)\n            f2 = f(x2)\n        else:\n            b = x2\n            x2 = x1\n            f2 = f1\n            x1 = a + resphi * (b - a)\n            f1 = f(x1)\n    \n    return (a + b) / 2\n\n# Exemple: minimum de (x-2)²\ndef f(x): return (x - 2)**2\nminimum = section_doree(f, 0, 4)\nprint(f\"Minimum en x = {minimum}\")",
      explanation: "Optimisation par la méthode de la section dorée",
      category: "Optimisation"
    },
    {
      id: "ama-7",
      title: "Équations différentielles - Euler",
      difficulty: "Avancé" as const,
      points: 22,
      statement: "Implémenter la méthode d'Euler pour résoudre numériquement y' = f(x,y).",
      hint: "y_{n+1} = y_n + h * f(x_n, y_n)",
      solution: "def methode_euler(f, x0, y0, h, n):\n    \"\"\"Méthode d'Euler pour y' = f(x,y)\"\"\"\n    x_values = [x0]\n    y_values = [y0]\n    \n    x, y = x0, y0\n    for i in range(n):\n        y = y + h * f(x, y)\n        x = x + h\n        x_values.append(x)\n        y_values.append(y)\n    \n    return x_values, y_values\n\n# Exemple: y' = y avec y(0) = 1 (solution: y = e^x)\ndef f(x, y): return y\n\nx_vals, y_vals = methode_euler(f, 0, 1, 0.1, 10)\nprint(\"Solution numérique de y' = y:\")\nfor i in range(0, len(x_vals), 2):\n    print(f\"x = {x_vals[i]:.1f}, y = {y_vals[i]:.4f}\")",
      explanation: "Résolution numérique d'équations différentielles par Euler",
      category: "Équations différentielles"
    },
    {
      id: "ama-8",
      title: "Transformation de Fourier discrète",
      difficulty: "Avancé" as const,
      points: 28,
      statement: "Implémenter la transformation de Fourier discrète (DFT) simple.",
      hint: "X_k = Σ x_n * e^(-2πikn/N)",
      solution: "import math\n\ndef dft(signal):\n    \"\"\"Transformation de Fourier Discrète\"\"\"\n    N = len(signal)\n    X = []\n    \n    for k in range(N):\n        somme = 0\n        for n in range(N):\n            angle = -2 * math.pi * k * n / N\n            somme += signal[n] * complex(math.cos(angle), math.sin(angle))\n        X.append(somme)\n    \n    return X\n\ndef idft(spectrum):\n    \"\"\"Transformation inverse\"\"\"\n    N = len(spectrum)\n    x = []\n    \n    for n in range(N):\n        somme = 0\n        for k in range(N):\n            angle = 2 * math.pi * k * n / N\n            somme += spectrum[k] * complex(math.cos(angle), math.sin(angle))\n        x.append(somme / N)\n    \n    return x\n\n# Exemple\nsignal = [1, 2, 3, 4]\nspectrum = dft(signal)\nprint(\"Spectre:\", [abs(x) for x in spectrum])",
      explanation: "Implémentation de la transformation de Fourier discrète",
      category: "Traitement du signal"
    },
    {
      id: "ama-9",
      title: "Approximation de fonctions",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Implémenter l'approximation de fonctions par moindres carrés (régression polynomiale).",
      hint: "Minimisez Σ(yi - P(xi))² où P est un polynôme",
      solution: "import numpy as np\n\ndef regression_polynomiale(x, y, degre):\n    \"\"\"Régression polynomiale par moindres carrés\"\"\"\n    # Construction de la matrice de Vandermonde\n    A = np.vander(x, degre + 1, increasing=True)\n    \n    # Résolution du système normal A^T A c = A^T y\n    coeffs = np.linalg.solve(A.T @ A, A.T @ y)\n    \n    return coeffs\n\ndef evaluer_polynome(coeffs, x):\n    \"\"\"Évalue le polynôme en x\"\"\"\n    resultat = 0\n    for i, coeff in enumerate(coeffs):\n        resultat += coeff * (x ** i)\n    return resultat\n\n# Version sans numpy (manuelle)\ndef moindres_carres_manuel(x_data, y_data, degre):\n    n = len(x_data)\n    # Matrice de Vandermonde\n    A = [[x_data[i]**j for j in range(degre+1)] for i in range(n)]\n    \n    # A^T * A et A^T * y\n    AtA = [[sum(A[i][k] * A[i][j] for i in range(n)) \n            for j in range(degre+1)] \n           for k in range(degre+1)]\n    \n    Aty = [sum(A[i][j] * y_data[i] for i in range(n)) \n           for j in range(degre+1)]\n    \n    # Résolution par Gauss (fonction précédente)\n    coeffs = elimination_gauss(AtA, Aty)\n    return coeffs",
      explanation: "Approximation de fonctions par régression polynomiale",
      category: "Approximation"
    },
    {
      id: "ama-10",
      title: "Analyse numérique - Stabilité",
      difficulty: "Avancé" as const,
      points: 26,
      statement: "Implémenter et comparer différentes méthodes pour calculer la dérivée numérique.",
      hint: "Différences finies : f'(x) ≈ (f(x+h) - f(x))/h",
      solution: "def derivee_avant(f, x, h=1e-8):\n    \"\"\"Différence finie avant\"\"\"\n    return (f(x + h) - f(x)) / h\n\ndef derivee_arriere(f, x, h=1e-8):\n    \"\"\"Différence finie arrière\"\"\"\n    return (f(x) - f(x - h)) / h\n\ndef derivee_centree(f, x, h=1e-8):\n    \"\"\"Différence finie centrée (plus précise)\"\"\"\n    return (f(x + h) - f(x - h)) / (2 * h)\n\ndef derivee_ordre_superieur(f, x, h=1e-4):\n    \"\"\"Formule à 5 points (ordre 4)\"\"\"\n    return (-f(x + 2*h) + 8*f(x + h) - 8*f(x - h) + f(x - 2*h)) / (12*h)\n\ndef test_precision():\n    \"\"\"Test de précision des méthodes\"\"\"\n    import math\n    \n    def f(x): return math.sin(x)\n    def df_exact(x): return math.cos(x)\n    \n    x = 1.0\n    exact = df_exact(x)\n    \n    print(f\"Dérivée exacte de sin(1): {exact}\")\n    print(f\"Différence avant:    {derivee_avant(f, x)}\")\n    print(f\"Différence arrière:  {derivee_arriere(f, x)}\")\n    print(f\"Différence centrée:  {derivee_centree(f, x)}\")\n    print(f\"Ordre supérieur:     {derivee_ordre_superieur(f, x)}\")\n\ntest_precision()",
      explanation: "Calcul numérique de dérivées avec analyse de précision",
      category: "Dérivation numérique"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Applications Mathématiques</h1>
              </div>
            </div>
            <Link to="/algorithm/math-apps/course">
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

export default AlgorithmMathAppsExercisePage;
