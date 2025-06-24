
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const GeometryComplexExercisePage = () => {
  const exercises = [
    {
      id: "gc-1",
      title: "Calculs avec nombres complexes",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Soit z₁ = 3 + 2i et z₂ = 1 - i. Calculer z₁ + z₂ et z₁ × z₂.",
      hint: "Utilisez les formules d'addition et de multiplication",
      solution: "z₁ + z₂ = (3+2i) + (1-i) = 4 + i\nz₁ × z₂ = (3+2i)(1-i) = 3 - 3i + 2i - 2i² = 3 - i + 2 = 5 - i",
      explanation: "Application des opérations sur les nombres complexes",
      category: "Opérations complexes"
    },
    {
      id: "gc-2",
      title: "Module et argument",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Soit z = -1 + i√3. Calculer |z| et arg(z).",
      hint: "Utilisez les formules du module et de l'argument",
      solution: "|z| = √((-1)² + (√3)²) = √(1 + 3) = 2\nPour l'argument : z = -1 + i√3\ntan(θ) = √3/(-1) = -√3\nComme z est dans le 2e quadrant : arg(z) = π - π/3 = 2π/3",
      explanation: "Calcul du module et de l'argument d'un nombre complexe",
      category: "Module et argument"
    },
    {
      id: "gc-3",
      title: "Forme trigonométrique",
      difficulty: "Intermédiaire" as const,
      points: 16,
      statement: "Écrire z = 1 + i sous forme trigonométrique.",
      hint: "Calculez le module puis l'argument",
      solution: "|z| = √(1² + 1²) = √2\narg(z) = arctan(1/1) = π/4 (1er quadrant)\nForme trigonométrique : z = √2(cos(π/4) + i sin(π/4))",
      explanation: "Passage de la forme algébrique à la forme trigonométrique",
      category: "Forme trigonométrique"
    },
    {
      id: "gc-4",
      title: "Puissances de nombres complexes",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Calculer (1 + i)⁸ en utilisant la forme trigonométrique.",
      hint: "Utilisez la formule de Moivre",
      solution: "1 + i = √2(cos(π/4) + i sin(π/4))\n(1 + i)⁸ = (√2)⁸(cos(8×π/4) + i sin(8×π/4))\n= 16(cos(2π) + i sin(2π))\n= 16(1 + 0i) = 16",
      explanation: "Utilisation de la formule de Moivre pour les puissances",
      category: "Puissances"
    },
    {
      id: "gc-5",
      title: "Équations complexes",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Résoudre dans ℂ : z² + 2z + 2 = 0",
      hint: "Calculez le discriminant et utilisez les racines complexes",
      solution: "Δ = 4 - 8 = -4 = 4i²\n√Δ = 2i\nz₁ = (-2 + 2i)/2 = -1 + i\nz₂ = (-2 - 2i)/2 = -1 - i",
      explanation: "Résolution d'équation du second degré dans ℂ",
      category: "Équations"
    },
    {
      id: "gc-6",
      title: "Racines n-ièmes",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Calculer les racines cubiques de 8i.",
      hint: "Écrivez 8i sous forme trigonométrique puis utilisez la formule des racines",
      solution: "8i = 8(cos(π/2) + i sin(π/2))\nRacines cubiques : ωₖ = 2(cos((π/2 + 2πk)/3) + i sin((π/2 + 2πk)/3))\nPour k = 0 : ω₀ = 2(cos(π/6) + i sin(π/6)) = √3 + i\nPour k = 1 : ω₁ = 2(cos(5π/6) + i sin(5π/6)) = -√3 + i\nPour k = 2 : ω₂ = 2(cos(3π/2) + i sin(3π/2)) = -2i",
      explanation: "Calcul des racines n-ièmes d'un nombre complexe",
      category: "Racines"
    },
    {
      id: "gc-7",
      title: "Nombres complexes conjugués",
      difficulty: "Intermédiaire" as const,
      points: 13,
      statement: "Soit z = 2 - 3i. Calculer z × z̄ et z + z̄.",
      hint: "Le conjugué de a + bi est a - bi",
      solution: "z̄ = 2 + 3i\nz × z̄ = (2 - 3i)(2 + 3i) = 4 - 9i² = 4 + 9 = 13\nz + z̄ = (2 - 3i) + (2 + 3i) = 4",
      explanation: "Propriétés des nombres complexes conjugués",
      category: "Conjugués"
    },
    {
      id: "gc-8",
      title: "Transformation géométrique",
      difficulty: "Avancé" as const,
      points: 17,
      statement: "Dans le plan complexe, quelle transformation géométrique représente z ↦ iz ?",
      hint: "Analysez l'effet de la multiplication par i sur le module et l'argument",
      solution: "Soit z = r(cos θ + i sin θ)\niz = ir(cos θ + i sin θ) = r(i cos θ - sin θ)\n= r(cos(θ + π/2) + i sin(θ + π/2))\nC'est une rotation de centre O et d'angle π/2 (90°)",
      explanation: "Interprétation géométrique de la multiplication par i",
      category: "Géométrie"
    },
    {
      id: "gc-9",
      title: "Forme exponentielle",
      difficulty: "Avancé" as const,
      points: 19,
      statement: "Écrire z = -2 + 2i sous forme exponentielle et calculer z⁵.",
      hint: "Utilisez la formule z = re^(iθ)",
      solution: "|z| = √(4 + 4) = 2√2\narg(z) = π - π/4 = 3π/4 (2e quadrant)\nz = 2√2 e^(i3π/4)\nz⁵ = (2√2)⁵ e^(i15π/4) = 32√32 e^(i15π/4)\n= 128√2 e^(i7π/4) = 128√2(cos(7π/4) + i sin(7π/4))\n= 128√2(√2/2 - i√2/2) = 128 - 128i",
      explanation: "Utilisation de la forme exponentielle des nombres complexes",
      category: "Forme exponentielle"
    },
    {
      id: "gc-10",
      title: "Équation de degré supérieur",
      difficulty: "Avancé" as const,
      points: 22,
      statement: "Résoudre dans ℂ : z⁴ - 1 = 0",
      hint: "Factoriser ou chercher les racines 4e de l'unité",
      solution: "z⁴ = 1 = cos(0) + i sin(0)\nRacines 4e de 1 : zₖ = cos(2πk/4) + i sin(2πk/4)\nPour k = 0 : z₀ = 1\nPour k = 1 : z₁ = i\nPour k = 2 : z₂ = -1\nPour k = 3 : z₃ = -i\nSolutions : {1, i, -1, -i}",
      explanation: "Résolution d'équation par les racines de l'unité",
      category: "Racines de l'unité"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/geometry">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la Géométrie
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-green-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Nombres Complexes</h1>
              </div>
            </div>
            <Link to="/geometry/complex/course">
              <Button variant="outline">
                Revoir le cours
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-green-600 to-green-800" />
      </div>
    </div>
  );
};

export default GeometryComplexExercisePage;
