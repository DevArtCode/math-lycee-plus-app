import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const AlgebraArithmeticExercisePage = () => {
  const exercises = [
    {
      id: "1",
      title: "Division euclidienne - Niveau débutant",
      difficulty: "Débutant" as const,
      points: 5,
      statement: "Effectuer les divisions euclidiennes suivantes et donner le quotient et le reste :",
      hint: "Rappelez-vous que a = bq + r avec 0 ≤ r < b",
      solution: "23 ÷ 7 = 3 reste 2 (car 23 = 7×3 + 2)\n156 ÷ 13 = 12 reste 0 (car 156 = 13×12 + 0)\n89 ÷ 12 = 7 reste 5 (car 89 = 12×7 + 5)",
      explanation: "Pour chaque division, on cherche le plus grand multiple du diviseur qui ne dépasse pas le dividende. Le reste est ce qui manque pour atteindre le dividende.",
      category: "Division euclidienne"
    },
    {
      id: "2",
      title: "PGCD par l'algorithme d'Euclide",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Calculer le PGCD des couples suivants en utilisant l'algorithme d'Euclide :",
      hint: "L'algorithme d'Euclide : pgcd(a,b) = pgcd(b, a mod b)",
      solution: "pgcd(48, 18) :\n48 = 18×2 + 12\n18 = 12×1 + 6\n12 = 6×2 + 0\nDonc pgcd(48, 18) = 6\n\npgcd(126, 35) :\n126 = 35×3 + 21\n35 = 21×1 + 14\n21 = 14×1 + 7\n14 = 7×2 + 0\nDonc pgcd(126, 35) = 7",
      explanation: "L'algorithme d'Euclide est basé sur le fait que pgcd(a,b) = pgcd(b, r) où r est le reste de la division de a par b. On continue jusqu'à obtenir un reste nul.",
      category: "PGCD"
    },
    {
      id: "3",
      title: "Identité de Bézout",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Trouver les coefficients de Bézout pour les couples suivants :",
      hint: "Utilisez l'algorithme d'Euclide étendu en remontant les calculs",
      solution: "Pour pgcd(15, 10) = 5 :\n15 = 10×1 + 5\n10 = 5×2 + 0\nEn remontant : 5 = 15 - 10×1\nDonc 15×1 + 10×(-1) = 5\nCoefficients : u = 1, v = -1",
      explanation: "L'identité de Bézout garantit l'existence de coefficients u et v tels que au + bv = pgcd(a,b). On les trouve en remontant l'algorithme d'Euclide.",
      category: "Identité de Bézout"
    },
    {
      id: "4",
      title: "Nombres premiers et crible d'Ératosthène",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "a) Utiliser le crible d'Ératosthène pour trouver tous les nombres premiers ≤ 30\nb) Vérifier que 97 est premier\nc) Décomposer 252 en facteurs premiers",
      hint: "Pour b), tester la divisibilité jusqu'à √97 ≈ 9.8",
      solution: "a) Premiers ≤ 30 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29\n\nb) √97 ≈ 9.8, donc tester 2, 3, 5, 7\n97 = 48×2 + 1, 97 = 32×3 + 1, 97 = 19×5 + 2, 97 = 13×7 + 6\nAucune division exacte, donc 97 est premier\n\nc) 252 = 4×63 = 4×9×7 = 2²×3²×7",
      explanation: "Le crible élimine les multiples. Un nombre n est premier si aucun premier ≤ √n ne le divise.",
      category: "Nombres premiers"
    },
    {
      id: "5",
      title: "Congruences modulo n",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "a) Calculer 2⁵⁰ mod 7\nb) Résoudre 3x ≡ 5 (mod 11)\nc) Vérifier que 2⁶ ≡ 1 (mod 7) et en déduire 2²⁰²⁴ mod 7",
      hint: "Utilisez les propriétés des congruences et le petit théorème de Fermat",
      solution: "a) 2³ = 8 ≡ 1 (mod 7)\n2⁵⁰ = 2⁴⁸×2² = (2³)¹⁶×4 ≡ 1¹⁶×4 ≡ 4 (mod 7)\n\nb) Chercher l'inverse de 3 mod 11 :\n3×4 = 12 ≡ 1 (mod 11)\nDonc x ≡ 4×5 ≡ 20 ≡ 9 (mod 11)\n\nc) 2⁶ = 64 = 9×7 + 1 ≡ 1 (mod 7)\n2²⁰²⁴ = (2⁶)³³⁷×2² ≡ 1³³⁷×4 ≡ 4 (mod 7)",
      explanation: "Utiliser les cycles dans les congruences et l'arithmétique modulaire.",
      category: "Congruences"
    },
    {
      id: "6",
      title: "PPCM et applications",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "a) Calculer PPCM(12, 18, 24)\nb) Deux engrenages ont 15 et 20 dents. Après combien de tours du premier les deux sont-ils de nouveau alignés ?\nc) Démontrer que PGCD(a,b) × PPCM(a,b) = a × b",
      hint: "PPCM de plusieurs nombres = produit des facteurs premiers avec les plus grands exposants",
      solution: "a) 12 = 2²×3, 18 = 2×3², 24 = 2³×3\nPPCM(12,18,24) = 2³×3² = 72\n\nb) PPCM(15,20) = PPCM(3×5, 2²×5) = 2²×3×5 = 60\nLe premier fait 60/15 = 4 tours\n\nc) Soit a = p₁^α₁ × ... × pₖ^αₖ et b = p₁^β₁ × ... × pₖ^βₖ\nPGCD = p₁^min(α₁,β₁) × ... × pₖ^min(αₖ,βₖ)\nPPCM = p₁^max(α₁,β₁) × ... × pₖ^max(αₖ,βₖ)\nProduit = p₁^(min+max) × ... = p₁^(α₁+β₁) × ... = a×b",
      explanation: "Le PPCM utilise les plus grands exposants, le produit PGCD×PPCM reconstitue a×b.",
      category: "PPCM"
    },
    {
      id: "7",
      title: "Théorème chinois des restes",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Résoudre le système de congruences :\nx ≡ 2 (mod 3)\nx ≡ 3 (mod 5)\nx ≡ 1 (mod 7)",
      hint: "Les modules sont premiers entre eux deux à deux",
      solution: "M = 3×5×7 = 105\nM₁ = 35, M₂ = 21, M₃ = 15\n\nChercher les inverses :\n35×2 ≡ 1 (mod 3) car 70 ≡ 1 (mod 3)\n21×1 ≡ 1 (mod 5) car 21 ≡ 1 (mod 5)\n15×1 ≡ 1 (mod 7) car 15 ≡ 1 (mod 7)\n\nx ≡ 2×35×2 + 3×21×1 + 1×15×1 (mod 105)\nx ≡ 140 + 63 + 15 ≡ 218 ≡ 8 (mod 105)\n\nVérification : 8 ≡ 2 (mod 3), 8 ≡ 3 (mod 5), 8 ≡ 1 (mod 7) ✓",
      explanation: "Le théorème chinois permet de résoudre des systèmes de congruences à modules premiers entre eux.",
      category: "Théorème chinois"
    },
    {
      id: "8",
      title: "Équations diophantiennes",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Résoudre dans ℤ :\na) 12x + 18y = 6\nb) 15x + 12y = 9\nc) Une boulangerie vend des pains à 3€ et des croissants à 2€. Comment payer exactement 50€ ?",
      hint: "Une équation ax + by = c a des solutions ssi pgcd(a,b) divise c",
      solution: "a) pgcd(12,18) = 6, et 6|6 donc solutions existent\n12x + 18y = 6 ⟺ 2x + 3y = 1\nSolution particulière : x₀ = 2, y₀ = -1\nSolutions générales : x = 2 + 3k, y = -1 - 2k (k ∈ ℤ)\n\nb) pgcd(15,12) = 3, et 3|9 donc solutions existent\n15x + 12y = 9 ⟺ 5x + 4y = 3\nSolution particulière : x₀ = -1, y₀ = 2\nSolutions : x = -1 + 4k, y = 2 - 5k\n\nc) 3x + 2y = 50\npgcd(3,2) = 1 et 1|50 donc solutions existent\nSolution particulière : x₀ = 16, y₀ = 1 (48 + 2 = 50)\nSolutions positives : chercher k tel que x,y ≥ 0",
      explanation: "Résoudre d'abord l'équation simplifiée, puis généraliser avec les solutions de l'équation homogène.",
      category: "Équations diophantiennes"
    },
    {
      id: "9",
      title: "Critères de divisibilité avancés",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "a) Démontrer le critère de divisibilité par 9\nb) Créer un critère pour la divisibilité par 11\nc) Un nombre à 4 chiffres abcd est-il divisible par 37 si 100a + 10b + c + 37d est divisible par 37 ?",
      hint: "Utilisez les congruences modulo n",
      solution: "a) 10 ≡ 1 (mod 9), donc 10ᵏ ≡ 1 (mod 9)\nUn nombre abcd = a×10³ + b×10² + c×10 + d ≡ a + b + c + d (mod 9)\nDonc divisible par 9 ssi somme des chiffres divisible par 9\n\nb) 10 ≡ -1 (mod 11), donc 10ᵏ ≡ (-1)ᵏ (mod 11)\nabcd ≡ a×(-1) + b×1 + c×(-1) + d×1 ≡ -a + b - c + d (mod 11)\nCritère : somme alternée des chiffres\n\nc) abcd = 1000a + 100b + 10c + d\n1000 ≡ 1 (mod 37) car 1000 = 27×37 + 1\nDonc abcd ≡ a + 100b + 10c + d (mod 37)\nLe critère proposé ne fonctionne pas (il manque 'a')",
      explanation: "Les critères de divisibilité utilisent les congruences des puissances de 10.",
      category: "Critères de divisibilité"
    },
    {
      id: "10",
      title: "Applications cryptographiques - RSA simplifié",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Alice choisit p = 7, q = 11 pour RSA.\na) Calculer n et φ(n)\nb) Choisir e = 13. Vérifier que pgcd(e, φ(n)) = 1\nc) Calculer la clé privée d\nd) Chiffrer le message m = 5",
      hint: "φ(n) = (p-1)(q-1) pour RSA, et ed ≡ 1 (mod φ(n))",
      solution: "a) n = p×q = 7×11 = 77\nφ(n) = (p-1)(q-1) = 6×10 = 60\n\nb) pgcd(13, 60) = pgcd(13, 8) = pgcd(5, 8) = pgcd(5, 3) = pgcd(2, 3) = 1 ✓\n\nc) Chercher d tel que 13d ≡ 1 (mod 60)\nAlgorithme d'Euclide étendu :\n60 = 13×4 + 8\n13 = 8×1 + 5\n8 = 5×1 + 3\n5 = 3×1 + 2\n3 = 2×1 + 1\nEn remontant : 1 = 13×37 - 60×8\nDonc d = 37\n\nd) c = m^e mod n = 5¹³ mod 77\n5² = 25, 5⁴ = 625 ≡ 9 (mod 77)\n5⁸ ≡ 81 ≡ 4 (mod 77)\n5¹³ = 5⁸×5⁴×5¹ ≡ 4×9×5 ≡ 180 ≡ 26 (mod 77)",
      explanation: "RSA utilise l'arithmétique modulaire et le théorème d'Euler pour le chiffrement.",
      category: "Cryptographie"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
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
                <Hash className="w-6 h-6 text-green-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Arithmétique</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-green-600 to-emerald-600" />
      </div>
    </div>
  );
};

export default AlgebraArithmeticExercisePage;
