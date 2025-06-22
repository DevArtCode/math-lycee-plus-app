
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseContent from '@/components/CourseContent';

const GeometryPlaneCoursePage = () => {
  const sections = [
    {
      id: 'vectors',
      title: 'Vecteurs dans le plan',
      content: [
        'Un vecteur AB⃗ représente un déplacement de A vers B',
        'Égalité de vecteurs : AB⃗ = CD⃗ si même direction, sens et longueur',
        'Addition vectorielle : AB⃗ + BC⃗ = AC⃗ (relation de Chasles)',
        'Multiplication par un scalaire : k·u⃗ a même direction que u⃗',
        'Coordonnées : u⃗(x,y) avec x et y les composantes'
      ],
      examples: [
        {
          title: 'Calcul vectoriel',
          description: 'Soit A(1,2), B(4,6) et C(7,10). Calculer AB⃗ + BC⃗',
          solution: 'AB⃗ = (4-1, 6-2) = (3,4)\nBC⃗ = (7-4, 10-6) = (3,4)\nAB⃗ + BC⃗ = (3+3, 4+4) = (6,8)\nOr AC⃗ = (7-1, 10-2) = (6,8)\nDonc AB⃗ + BC⃗ = AC⃗ ✓',
          domain: 'géométrie analytique'
        }
      ],
      keyFormulas: [
        'AB⃗ = (xB - xA, yB - yA)',
        '||u⃗|| = √(x² + y²)',
        'u⃗ + v⃗ = (x₁ + x₂, y₁ + y₂)',
        'k·u⃗ = (kx, ky)'
      ]
    },
    {
      id: 'scalar-product',
      title: 'Produit scalaire',
      content: [
        'Définition : u⃗·v⃗ = ||u⃗|| × ||v⃗|| × cos(θ)',
        'Propriétés : symétrique, bilinéaire, distributive',
        'Orthogonalité : u⃗ ⊥ v⃗ ⟺ u⃗·v⃗ = 0',
        'En coordonnées : u⃗·v⃗ = x₁x₂ + y₁y₂',
        'Applications : calcul d\'angles, projection orthogonale'
      ],
      examples: [
        {
          title: 'Angle entre deux vecteurs',
          description: 'Calculer l\'angle entre u⃗(3,4) et v⃗(1,2)',
          solution: 'u⃗·v⃗ = 3×1 + 4×2 = 11\n||u⃗|| = √(9+16) = 5\n||v⃗|| = √(1+4) = √5\ncos(θ) = 11/(5√5) = 11√5/25\nθ = arccos(11√5/25) ≈ 26.57°',
          domain: 'trigonométrie'
        }
      ],
      keyFormulas: [
        'u⃗·v⃗ = x₁x₂ + y₁y₂',
        'cos(θ) = (u⃗·v⃗)/(||u⃗||×||v⃗||)',
        'proj_u⃗(v⃗) = (u⃗·v⃗/||u⃗||²)u⃗'
      ]
    },
    {
      id: 'al-kashi',
      title: 'Théorème d\'Al-Kashi',
      content: [
        'Généralisation du théorème de Pythagore',
        'Dans un triangle ABC : c² = a² + b² - 2ab cos(C)',
        'Permet de calculer un côté connaissant les deux autres et l\'angle opposé',
        'Ou de calculer un angle connaissant les trois côtés',
        'Cas particulier : si C = 90°, on retrouve Pythagore'
      ],
      examples: [
        {
          title: 'Application du théorème d\'Al-Kashi',
          description: 'Dans un triangle ABC, a = 5, b = 7, C = 60°. Calculer c.',
          solution: 'c² = a² + b² - 2ab cos(C)\nc² = 25 + 49 - 2×5×7×cos(60°)\nc² = 74 - 70×(1/2) = 74 - 35 = 39\nc = √39 ≈ 6.24',
          domain: 'trigonométrie'
        }
      ],
      keyFormulas: [
        'c² = a² + b² - 2ab cos(C)',
        'cos(C) = (a² + b² - c²)/(2ab)'
      ]
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
                <BookOpen className="w-6 h-6 text-green-600" />
                <h1 className="text-xl font-bold text-slate-900">Géométrie Plane</h1>
              </div>
            </div>
            <Link to="/geometry/plane/exercise">
              <Button className="bg-gradient-to-r from-green-500 to-green-600">
                Faire les exercices
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseContent 
          title="Cours : Géométrie Plane" 
          sections={sections} 
          color="from-green-600 to-green-800"
        />
      </div>
    </div>
  );
};

export default GeometryPlaneCoursePage;
