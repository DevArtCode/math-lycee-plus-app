
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, BookOpen, Target, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AlgebraSetsCoursePage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('naturals');

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 'naturals',
      title: 'ℕ - Les entiers naturels',
      content: [
        'ℕ = {0, 1, 2, 3, 4, ...} représente l\'ensemble des entiers naturels.',
        'Ils servent à compter : 0 objet, 1 objet, 2 objets, etc.',
        'Propriétés : addition et multiplication sont commutatives et associatives.',
        'Ordre total : pour tous a, b ∈ ℕ, soit a ≤ b, soit b ≤ a.'
      ],
      exercises: [
        {
          question: 'Combien y a-t-il d\'entiers naturels entre 5 et 12 inclus ?',
          answer: '12 - 5 + 1 = 8 entiers naturels'
        }
      ]
    },
    {
      id: 'integers',
      title: 'ℤ - Les entiers relatifs',
      content: [
        'ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...} contient les entiers positifs et négatifs.',
        'Permet de résoudre des équations comme x + 5 = 2 (solution : x = -3).',
        'Règles des signes : (+) × (+) = (+), (+) × (-) = (-), (-) × (-) = (+).',
        'Distance à zéro : |a| représente la valeur absolue de a.'
      ],
      exercises: [
        {
          question: 'Calculer (-3) × (-7) + (-2) × 5',
          answer: '(-3) × (-7) = 21, (-2) × 5 = -10, donc 21 + (-10) = 11'
        }
      ]
    },
    {
      id: 'rationals',
      title: 'ℚ - Les nombres rationnels',
      content: [
        'ℚ = {p/q | p ∈ ℤ, q ∈ ℤ*} représente les fractions d\'entiers.',
        'Tout nombre décimal fini ou périodique est rationnel.',
        'Exemples : 1/2 = 0,5 ; 1/3 = 0,333... ; 22/7 ≈ 3,142857142857...',
        'Opérations : a/b + c/d = (ad + bc)/(bd), (a/b) × (c/d) = (ac)/(bd).'
      ],
      exercises: [
        {
          question: 'Simplifier 18/24',
          answer: 'PGCD(18,24) = 6, donc 18/24 = 3/4'
        }
      ]
    },
    {
      id: 'reals',
      title: 'ℝ - Les nombres réels',
      content: [
        'ℝ complète ℚ en ajoutant les nombres irrationnels comme √2, π, e.',
        'Propriété fondamentale : tout réel peut être approché par des rationnels.',
        'Droite réelle : chaque point correspond à un unique nombre réel.',
        'Intervalles : [a,b], ]a,b[, [a,b[, etc. représentent des ensembles de réels.'
      ],
      exercises: [
        {
          question: 'Donner un encadrement de √2 à 10⁻² près',
          answer: '1² = 1 < 2 < 4 = 2², donc 1 < √2 < 2. Affinement : 1,41 < √2 < 1,42'
        }
      ]
    },
    {
      id: 'complex',
      title: 'ℂ - Les nombres complexes',
      content: [
        'ℂ = {a + ib | a,b ∈ ℝ} où i² = -1 est l\'unité imaginaire.',
        'Partie réelle : Re(z) = a, partie imaginaire : Im(z) = b.',
        'Module : |z| = √(a² + b²) représente la distance à l\'origine.',
        'Conjugué : z̄ = a - ib, propriété : z × z̄ = |z|².'
      ],
      exercises: [
        {
          question: 'Calculer (2 + 3i)(1 - i)',
          answer: '(2 + 3i)(1 - i) = 2 - 2i + 3i - 3i² = 2 + i + 3 = 5 + i'
        }
      ]
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
                <h1 className="text-xl font-bold text-slate-900">🔢 Nombres & Ensembles</h1>
              </div>
            </div>
            <Link to="/algebra/sets/exercise">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600">
                <Target className="w-4 h-4 mr-2" />
                Exercices
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Cours : Nombres & Ensembles
          </h2>
          <p className="text-slate-600">Des entiers naturels aux nombres complexes</p>
        </div>

        {/* Hierarchy Overview */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              Hiérarchie des ensembles de nombres
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <p className="text-2xl font-mono text-blue-800 mb-4">
                ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ
              </p>
              <p className="text-slate-700">
                Chaque ensemble contient le précédent et ajoute de nouveaux nombres
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Course Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <Card key={section.id} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-blue-800">{section.title}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection(section.id)}
                  >
                    {expandedSection === section.id ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>

              {expandedSection === section.id && (
                <CardContent className="space-y-6">
                  {/* Theory */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">📚 Théorie</h4>
                    <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                      {section.content.map((item, index) => (
                        <p key={index} className="text-slate-700">• {item}</p>
                      ))}
                    </div>
                  </div>

                  {/* In-course exercises */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">💡 Exercice d'application</h4>
                    <div className="space-y-3">
                      {section.exercises.map((exercise, index) => (
                        <div key={index} className="bg-green-50 border border-green-200 p-4 rounded-lg">
                          <p className="font-medium text-green-800 mb-2">Question :</p>
                          <p className="text-green-700 mb-3">{exercise.question}</p>
                          <details className="cursor-pointer">
                            <summary className="font-medium text-green-800">Solution</summary>
                            <p className="text-green-700 mt-2">{exercise.answer}</p>
                          </details>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-12">
          <Link to="/algebra/sets/exercise">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600">
              Passer aux exercices
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AlgebraSetsCoursePage;
