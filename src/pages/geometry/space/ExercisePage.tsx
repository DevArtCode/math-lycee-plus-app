
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const GeometrySpaceExercisePage = () => {
  const exercises = [
    {
      id: "gs-1",
      title: "Distance dans l'espace",
      difficulty: "Débutant" as const,
      points: 10,
      statement: "Calculer la distance entre les points A(1, 2, 3) et B(4, 6, 2).",
      hint: "Utilisez la formule de la distance dans l'espace",
      solution: "AB = √[(4-1)² + (6-2)² + (2-3)²] = √[9 + 16 + 1] = √26",
      explanation: "Application directe de la formule de distance dans l'espace",
      category: "Coordonnées 3D"
    },
    {
      id: "gs-2",
      title: "Vecteurs dans l'espace",
      difficulty: "Débutant" as const,
      points: 12,
      statement: "Soit A(1,2,3), B(4,1,-1) et C(0,3,2).\n1. Calculer AB⃗ et AC⃗\n2. Calculer AB⃗ · AC⃗\n3. Les vecteurs sont-ils orthogonaux ?",
      hint: "Le produit scalaire se calcule comme dans le plan mais avec 3 coordonnées",
      solution: "1. AB⃗ = (3,-1,-4) et AC⃗ = (-1,1,-1)\n2. AB⃗ · AC⃗ = 3×(-1) + (-1)×1 + (-4)×(-1) = -3 - 1 + 4 = 0\n3. Oui, car le produit scalaire est nul",
      explanation: "Calcul de produit scalaire dans l'espace et condition d'orthogonalité",
      category: "Vecteurs 3D"
    },
    {
      id: "gs-3",
      title: "Équation d'un plan",
      difficulty: "Intermédiaire" as const,
      points: 15,
      statement: "Déterminer l'équation du plan passant par A(1,0,2), B(2,1,1) et C(0,1,3).",
      hint: "Utilisez deux vecteurs du plan pour trouver un vecteur normal",
      solution: "AB⃗ = (1,1,-1) et AC⃗ = (-1,1,1)\nVecteur normal n⃗ = AB⃗ ∧ AC⃗ = (2,0,2)\nÉquation : 2(x-1) + 0(y-0) + 2(z-2) = 0\nSoit : 2x + 2z - 6 = 0 ou x + z - 3 = 0",
      explanation: "Méthode du produit vectoriel pour trouver l'équation d'un plan",
      category: "Plans"
    },
    {
      id: "gs-4",
      title: "Droite dans l'espace",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Écrire la représentation paramétrique de la droite passant par A(2,-1,3) et de vecteur directeur u⃗(1,2,-1).",
      hint: "Utilisez la forme paramétrique avec un paramètre t",
      solution: "Représentation paramétrique :\nx = 2 + t\ny = -1 + 2t\nz = 3 - t\navec t ∈ ℝ",
      explanation: "Équations paramétriques d'une droite dans l'espace",
      category: "Droites"
    },
    {
      id: "gs-5",
      title: "Intersection droite-plan",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Soit la droite d : x = 1+t, y = 2-t, z = 3+2t et le plan P : x + y - z + 1 = 0.\nTrouver leur point d'intersection.",
      hint: "Substituez les équations paramétriques dans l'équation du plan",
      solution: "En substituant dans P :\n(1+t) + (2-t) - (3+2t) + 1 = 0\n1 + t + 2 - t - 3 - 2t + 1 = 0\n1 - 2t = 0\nt = 1/2\nPoint d'intersection : (3/2, 3/2, 4)",
      explanation: "Résolution d'un système pour trouver l'intersection",
      category: "Intersections"
    },
    {
      id: "gs-6",
      title: "Volume d'un tétraèdre",
      difficulty: "Avancé" as const,
      points: 20,
      statement: "Calculer le volume du tétraèdre ABCD avec A(1,0,0), B(0,1,0), C(0,0,1) et D(1,1,1).",
      hint: "Utilisez la formule V = (1/6)|AB⃗ · (AC⃗ ∧ AD⃗)|",
      solution: "AB⃗ = (-1,1,0), AC⃗ = (-1,0,1), AD⃗ = (0,1,1)\nAC⃗ ∧ AD⃗ = (0×1-1×1, 1×0-(-1)×1, (-1)×1-0×0) = (-1,1,-1)\nAB⃗ · (AC⃗ ∧ AD⃗) = (-1)×(-1) + 1×1 + 0×(-1) = 2\nVolume = (1/6)|2| = 1/3",
      explanation: "Calcul de volume par produit mixte",
      category: "Volumes"
    },
    {
      id: "gs-7",
      title: "Sphère",
      difficulty: "Intermédiaire" as const,
      points: 16,
      statement: "Déterminer le centre et le rayon de la sphère d'équation x² + y² + z² - 4x + 2y - 6z + 5 = 0.",
      hint: "Complétez les carrés pour chaque variable",
      solution: "x² - 4x + y² + 2y + z² - 6z + 5 = 0\n(x-2)² - 4 + (y+1)² - 1 + (z-3)² - 9 + 5 = 0\n(x-2)² + (y+1)² + (z-3)² = 9\nCentre : (2,-1,3), Rayon : 3",
      explanation: "Méthode de complétion des carrés pour une sphère",
      category: "Sphères"
    },
    {
      id: "gs-8",
      title: "Positions relatives de droites",
      difficulty: "Avancé" as const,
      points: 19,
      statement: "Étudier la position relative des droites :\nd₁ : x=1+t, y=2-t, z=3+2t\nd₂ : x=2+s, y=1+2s, z=1-s",
      hint: "Vérifiez si les vecteurs directeurs sont colinéaires et si les droites se coupent",
      solution: "Vecteurs directeurs : u₁⃗(1,-1,2) et u₂⃗(1,2,-1)\nu₁⃗ et u₂⃗ non colinéaires car u₁⃗ ∧ u₂⃗ ≠ 0⃗\nCherchons si elles se coupent :\n1+t = 2+s → t-s = 1\n2-t = 1+2s → -t-2s = -1 → t+2s = 1\n3+2t = 1-s → 2t+s = -2\nSystème incompatible → droites gauches",
      explanation: "Étude complète de positions relatives dans l'espace",
      category: "Positions relatives"
    },
    {
      id: "gs-9",
      title: "Distance point-plan",
      difficulty: "Avancé" as const,
      points: 17,
      statement: "Calculer la distance du point M(2,1,-1) au plan P : 2x - y + 2z - 3 = 0.",
      hint: "Utilisez la formule de distance point-plan",
      solution: "Distance = |2×2 - 1×1 + 2×(-1) - 3| / √(2² + (-1)² + 2²)\n= |4 - 1 - 2 - 3| / √(4 + 1 + 4)\n= |-2| / 3 = 2/3",
      explanation: "Application de la formule de distance point-plan",
      category: "Distances"
    },
    {
      id: "gs-10",
      title: "Projection orthogonale sur un plan",
      difficulty: "Avancé" as const,
      points: 21,
      statement: "Déterminer la projection orthogonale du point A(1,2,3) sur le plan P : x + y - z + 1 = 0.",
      hint: "La droite perpendiculaire au plan a pour vecteur directeur le vecteur normal",
      solution: "Vecteur normal au plan : n⃗(1,1,-1)\nDroite perpendiculaire : x=1+t, y=2+t, z=3-t\nIntersection avec P : (1+t)+(2+t)-(3-t)+1 = 0\n1+t+2+t-3+t+1 = 0 → 3t+1 = 0 → t = -1/3\nProjection H : (2/3, 5/3, 10/3)",
      explanation: "Méthode de projection orthogonale dans l'espace",
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
                <h1 className="text-xl font-bold text-slate-900">Exercices - Géométrie dans l'Espace</h1>
              </div>
            </div>
            <Link to="/geometry/space/course">
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

export default GeometrySpaceExercisePage;
