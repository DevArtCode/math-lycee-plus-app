
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, BookOpen, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseContent from '@/components/CourseContent';
import ExerciseList from '@/components/ExerciseList';

const AlgebraChapter = () => {
  const courseData = [
    {
      id: 'nombres-ensembles',
      title: '🔢 Nombres & Ensembles',
      content: [
        'Les nombres naturels ℕ = {0, 1, 2, 3, ...} permettent de compter les objets.',
        'Les entiers relatifs ℤ = {..., -2, -1, 0, 1, 2, ...} incluent les nombres négatifs.',
        'Les rationnels ℚ = {p/q | p∈ℤ, q∈ℤ*} sont les fractions d\'entiers.',
        'Les réels ℝ complètent ℚ avec les nombres irrationnels comme √2, π.',
        'Les complexes ℂ = {a + ib | a,b∈ℝ} étendent ℝ avec l\'unité imaginaire i.'
      ],
      keyFormulas: [
        'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ',
        'i² = -1',
        '|z| = √(a² + b²) pour z = a + ib'
      ],
      examples: [
        {
          title: 'Population d\'une ville',
          description: 'Une ville compte 45 000 habitants. Après une croissance de 2% par an pendant 5 ans, combien aura-t-elle d\'habitants ?',
          solution: 'Population finale = 45 000 × (1,02)⁵ = 45 000 × 1,104 = 49 680 habitants',
          domain: 'démographie'
        },
        {
          title: 'Température et nombres relatifs',
          description: 'La température baisse de 3°C chaque heure. Si elle était de 8°C à 14h, quelle sera-t-elle à 18h ?',
          solution: 'Baisse totale = 4 heures × 3°C = 12°C\nTempérature finale = 8°C - 12°C = -4°C',
          domain: 'météorologie'
        }
      ]
    },
    {
      id: 'calcul-algebrique',
      title: '🧮 Calcul Algébrique',
      content: [
        'Les identités remarquables simplifient les calculs : (a±b)² = a² ± 2ab + b²',
        'La différence de carrés : (a-b)(a+b) = a² - b²',
        'La factorisation permet de résoudre des équations complexes.',
        'Le discriminant Δ = b² - 4ac détermine le nombre de solutions d\'une équation du 2nd degré.',
        'Les racines complexes apparaissent quand Δ < 0.'
      ],
      keyFormulas: [
        '(a + b)² = a² + 2ab + b²',
        '(a - b)² = a² - 2ab + b²',
        '(a - b)(a + b) = a² - b²',
        'ax² + bx + c = 0 : x = (-b ± √Δ)/(2a)',
        'Δ = b² - 4ac'
      ],
      examples: [
        {
          title: 'Calcul de surface',
          description: 'Un carré de côté (x + 3) a une aire de 64 m². Trouvez x.',
          solution: '(x + 3)² = 64\nx + 3 = ±8\nx = 5 ou x = -11\nComme x représente une longueur : x = 5 m',
          domain: 'géométrie'
        },
        {
          title: 'Trajectoire d\'un projectile',
          description: 'La hauteur d\'un projectile est h(t) = -5t² + 20t + 1. À quels moments touche-t-il le sol ?',
          solution: '-5t² + 20t + 1 = 0\nΔ = 400 + 20 = 420\nt = (-20 ± √420)/(-10)\nt ≈ -0,05 s ou t ≈ 4,05 s\nSeul t ≈ 4,05 s a un sens physique.',
          domain: 'physique'
        }
      ]
    },
    {
      id: 'arithmetique',
      title: '🔍 Arithmétique',
      content: [
        'La division euclidienne : tout entier a s\'écrit a = bq + r avec 0 ≤ r < b.',
        'L\'identité de Bézout : si gcd(a,b) = d, alors ∃u,v : au + bv = d.',
        'Les congruences : a ≡ b [n] signifie que n divise (a-b).',
        'Le petit théorème de Fermat : si p est premier, alors aᵖ ≡ a [p].',
        'Applications en cryptographie (RSA) et codes correcteurs.'
      ],
      keyFormulas: [
        'a = bq + r avec 0 ≤ r < |b|',
        'gcd(a,b) = gcd(b, a mod b)',
        'a ≡ b [n] ⟺ n | (a-b)',
        'Si p premier : aᵖ ≡ a [p]'
      ],
      examples: [
        {
          title: 'Code de sécurité sociale',
          description: 'Vérifiez si le numéro 1 85 03 75 116 029 est valide (clé = 97 - (num mod 97)).',
          solution: 'Numéro sans clé : 185037511629\n185037511629 mod 97 = 68\nClé calculée = 97 - 68 = 29\nLe numéro est valide car la clé correspond.',
          domain: 'administration'
        }
      ]
    },
    {
      id: 'suites',
      title: '📈 Suites Numériques',
      content: [
        'Une suite arithmétique a une différence constante : uₙ = u₀ + nr.',
        'Une suite géométrique a un rapport constant : uₙ = u₀ × qⁿ.',
        'La somme d\'une suite arithmétique : Sₙ = (n+1)(u₀ + uₙ)/2.',
        'La somme d\'une suite géométrique : Sₙ = u₀(1-qⁿ⁺¹)/(1-q) si q ≠ 1.',
        'Les limites permettent d\'étudier le comportement asymptotique.'
      ],
      keyFormulas: [
        'Suite arithmétique : uₙ = u₀ + nr',
        'Suite géométrique : uₙ = u₀ × qⁿ',
        'Somme arithmétique : Sₙ = (n+1)(u₀ + uₙ)/2',
        'Somme géométrique : Sₙ = u₀(1-qⁿ⁺¹)/(1-q)'
      ],
      examples: [
        {
          title: 'Croissance démographique',
          description: 'Une population croît de 2% par an. Elle compte 50 000 habitants en 2020. Combien en 2030 ?',
          solution: 'Suite géométrique avec u₀ = 50 000 et q = 1,02\nu₁₀ = 50 000 × (1,02)¹⁰ = 50 000 × 1,219 = 60 950 habitants',
          domain: 'démographie'
        },
        {
          title: 'Épargne mensuelle',
          description: 'Paul épargne 200€ par mois. Combien aura-t-il économisé après 2 ans ?',
          solution: 'Suite arithmétique avec u₁ = 200 et r = 200\nAprès 24 mois : S₂₄ = 24 × (200 + 200×24)/2 = 24 × 2600 = 62 400€',
          domain: 'finance'
        }
      ]
    }
  ];

  const exerciseData = [
    {
      id: 'ex1',
      title: 'Nombres et ensembles - Base',
      difficulty: 'Débutant' as const,
      points: 5,
      category: 'Nombres & Ensembles',
      statement: 'Classer les nombres suivants dans les ensembles ℕ, ℤ, ℚ, ℝ :\n-3, √16, π/2, 2.5, -√9, 0',
      hint: 'Rappel : ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Un nombre appartient au plus petit ensemble qui le contient.',
      solution: '• -3 ∈ ℤ (entier négatif)\n• √16 = 4 ∈ ℕ\n• π/2 ∈ ℝ (irrationnel)\n• 2.5 = 5/2 ∈ ℚ\n• -√9 = -3 ∈ ℤ\n• 0 ∈ ℕ',
      explanation: 'On choisit toujours le plus petit ensemble. Par exemple, 4 est dans ℕ, ℤ, ℚ et ℝ, mais on dit qu\'il appartient à ℕ.'
    },
    {
      id: 'ex2',
      title: 'Identités remarquables',
      difficulty: 'Intermédiaire' as const,
      points: 8,
      category: 'Calcul Algébrique',
      statement: 'Développer et simplifier :\na) (2x - 3)²\nb) (x + 1)(x - 1)\nc) (3a + 2b)²',
      solution: 'a) (2x - 3)² = (2x)² - 2(2x)(3) + 3² = 4x² - 12x + 9\n\nb) (x + 1)(x - 1) = x² - 1²  = x² - 1\n\nc) (3a + 2b)² = (3a)² + 2(3a)(2b) + (2b)² = 9a² + 12ab + 4b²',
      explanation: 'Utilisez les identités : (a±b)² = a² ± 2ab + b² et (a+b)(a-b) = a² - b²'
    },
    {
      id: 'ex3',
      title: 'Équation du second degré',
      difficulty: 'Intermédiaire' as const,
      points: 10,
      category: 'Calcul Algébrique',
      statement: 'Résoudre l\'équation : 2x² - 7x + 3 = 0',
      hint: 'Calculez le discriminant Δ = b² - 4ac, puis utilisez la formule des racines.',
      solution: 'a = 2, b = -7, c = 3\nΔ = (-7)² - 4(2)(3) = 49 - 24 = 25\nΔ > 0 donc 2 solutions :\nx₁ = (7 + √25)/(2×2) = (7 + 5)/4 = 3\nx₂ = (7 - 5)/4 = 1/2',
      explanation: 'Quand Δ > 0, il y a deux solutions réelles distinctes. Vérification : 2(3)² - 7(3) + 3 = 18 - 21 + 3 = 0 ✓'
    },
    {
      id: 'ex4',
      title: 'Division euclidienne',
      difficulty: 'Débutant' as const,
      points: 6,
      category: 'Arithmétique',
      statement: 'Effectuer la division euclidienne de 157 par 13.',
      solution: '157 = 13 × 12 + 1\nDonc q = 12 et r = 1\nVérification : 13 × 12 + 1 = 156 + 1 = 157 ✓',
      explanation: 'Dans la division euclidienne a = bq + r, on a toujours 0 ≤ r < |b|.'
    },
    {
      id: 'ex5',
      title: 'Suite arithmétique',
      difficulty: 'Intermédiaire' as const,
      points: 12,
      category: 'Suites',
      statement: 'Une suite arithmétique a pour premier terme u₁ = 5 et pour raison r = 3.\na) Exprimer uₙ en fonction de n\nb) Calculer u₁₀\nc) Calculer la somme S₁₀ = u₁ + u₂ + ... + u₁₀',
      solution: 'a) uₙ = u₁ + (n-1)r = 5 + (n-1)×3 = 5 + 3n - 3 = 3n + 2\n\nb) u₁₀ = 3×10 + 2 = 32\n\nc) S₁₀ = 10(u₁ + u₁₀)/2 = 10(5 + 32)/2 = 10×37/2 = 185',
      explanation: 'Formules clés : uₙ = u₁ + (n-1)r et Sₙ = n(u₁ + uₙ)/2'
    },
    {
      id: 'ex6',
      title: 'Applications économiques',
      difficulty: 'Avancé' as const,
      points: 15,
      category: 'Suites',
      statement: 'Une entreprise investit 100 000€ qui rapportent 4% d\'intérêts composés par an.\na) Quelle sera la valeur de cet investissement après 8 ans ?\nb) Au bout de combien d\'années l\'investissement aura-t-il doublé ?',
      hint: 'Les intérêts composés suivent une suite géométrique de raison (1 + taux).',
      solution: 'a) Suite géométrique : uₙ = 100 000 × (1,04)ⁿ\nu₈ = 100 000 × (1,04)⁸ = 100 000 × 1,369 = 136 900€\n\nb) On cherche n tel que uₙ = 200 000\n100 000 × (1,04)ⁿ = 200 000\n(1,04)ⁿ = 2\nn × ln(1,04) = ln(2)\nn = ln(2)/ln(1,04) ≈ 17,7 ans\nDonc environ 18 ans.',
      explanation: 'Les intérêts composés croissent exponentiellement. La règle des 72 donne une approximation : 72/4 = 18 ans pour doubler.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
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
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">🔢 Algèbre - Cours Complet</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="cours" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="cours" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Cours</span>
            </TabsTrigger>
            <TabsTrigger value="exercices" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Exercices</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cours">
            <CourseContent
              title="Cours d'Algèbre"
              sections={courseData}
              color="from-blue-600 to-blue-800"
            />
          </TabsContent>

          <TabsContent value="exercices">
            <ExerciseList
              exercises={exerciseData}
              color="from-blue-500 to-blue-600"
            />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default AlgebraChapter;
