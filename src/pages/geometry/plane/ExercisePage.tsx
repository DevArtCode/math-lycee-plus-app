
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const GeometryPlaneExercisePage = () => {
  const exercises = [
    {
      id: "gp-1",
      title: "Calculs vectoriels de base",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Soit A(2,1), B(5,3) et C(1,4).\n1. Calculer les vecteurs AB⃗ et AC⃗\n2. Calculer AB⃗ + AC⃗\n3. En déduire les coordonnées du point D tel que ABDC soit un parallélogramme",
      hint: "Pour un parallélogramme ABDC, on a AB⃗ = DC⃗",
      solution: "1. AB⃗ = (5-2, 3-1) = (3,2)\n   AC⃗ = (1-2, 4-1) = (-1,3)\n\n2. AB⃗ + AC⃗ = (3-1, 2+3) = (2,5)\n\n3. Pour ABDC parallélogramme : AB⃗ = DC⃗\n   Donc D + AB⃗ = C\n   D = C - AB⃗ = (1,4) - (3,2) = (-2,2)",
      explanation: "Utilisation des coordonnées pour les calculs vectoriels et propriétés du parallélogramme",
      category: "Vecteurs"
    },
    {
      id: "gp-2",
      title: "Produit scalaire et orthogonalité",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Soit u⃗(4,3) et v⃗(2,-1).\n1. Calculer u⃗·v⃗\n2. Calculer ||u⃗|| et ||v⃗||\n3. Calculer l'angle entre u⃗ et v⃗\n4. Déterminer un vecteur w⃗ orthogonal à u⃗",
      hint: "Pour l'orthogonalité, utilisez la condition u⃗·w⃗ = 0",
      solution: "1. u⃗·v⃗ = 4×2 + 3×(-1) = 8 - 3 = 5\n\n2. ||u⃗|| = √(16+9) = 5\n   ||v⃗|| = √(4+1) = √5\n\n3. cos(θ) = 5/(5√5) = 1/√5 = √5/5\n   θ = arccos(√5/5) ≈ 63.43°\n\n4. Pour w⃗(x,y) ⊥ u⃗ : 4x + 3y = 0\n   Une solution : w⃗(3,-4)",
      explanation: "Application du produit scalaire pour calculer angles et déterminer l'orthogonalité",
      category: "Produit scalaire"
    },
    {
      id: "gp-3",
      title: "Théorème d'Al-Kashi",
      difficulty: "Intermédiaire" as const,
      points: 15,
      statement: "Dans un triangle ABC :\n- AB = 8 cm\n- AC = 6 cm  \n- Angle BAC = 120°\n\n1. Calculer BC\n2. Calculer l'aire du triangle\n3. Calculer l'angle ABC",
      hint: "Utilisez Al-Kashi puis la loi des sinus pour l'angle",
      solution: "1. BC² = AB² + AC² - 2×AB×AC×cos(BAC)\n   BC² = 64 + 36 - 2×8×6×cos(120°)\n   BC² = 100 - 96×(-1/2) = 100 + 48 = 148\n   BC = √148 = 2√37 ≈ 12.17 cm\n\n2. Aire = (1/2)×AB×AC×sin(BAC)\n   Aire = (1/2)×8×6×sin(120°) = 24×(√3/2) = 12√3 ≈ 20.78 cm²\n\n3. sin(ABC)/AC = sin(BAC)/BC\n   sin(ABC) = 6×sin(120°)/(2√37) = 6×(√3/2)/(2√37) = 3√3/(2√37)\n   ABC ≈ 25.66°",
      explanation: "Application complète du théorème d'Al-Kashi et des relations trigonométriques",
      category: "Triangles"
    },
    {
      id: "gp-4",
      title: "Projection orthogonale",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Soit la droite D d'équation 3x + 4y - 12 = 0 et le point M(5,2).\n1. Calculer la distance de M à D\n2. Déterminer les coordonnées du projeté orthogonal H de M sur D\n3. Vérifier que MH ⊥ D",
      hint: "Le vecteur normal à D est n⃗(3,4)",
      solution: "1. Distance = |3×5 + 4×2 - 12|/√(9+16) = |15 + 8 - 12|/5 = 11/5 = 2.2\n\n2. Le vecteur directeur de D est u⃗(-4,3)\n   La droite MH a pour équation : (x,y) = (5,2) + t(3,4)\n   Intersection avec D : 3(5+3t) + 4(2+4t) - 12 = 0\n   15 + 9t + 8 + 16t - 12 = 0\n   25t = -11, donc t = -11/25\n   H = (5,2) + (-11/25)(3,4) = (5-33/25, 2-44/25) = (92/25, 6/25)\n\n3. MH⃗ = (-33/25, -44/25) = (-11/25)(3,4)\n   u⃗·MH⃗ = (-4,3)·(-11/25)(3,4) = (-11/25)(-12+12) = 0 ✓",
      explanation: "Utilisation de la projection orthogonale et vérification de l'orthogonalité",
      category: "Projections"
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Géométrie Plane</h1>
              </div>
            </div>
            <Link to="/geometry/plane/course">
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

export default GeometryPlaneExercisePage;
