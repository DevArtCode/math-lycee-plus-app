
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ruler, Clock, Star, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ExerciseList from '@/components/ExerciseList';

const GeometryBilanPage = () => {
  const [selectedBilan, setSelectedBilan] = useState<string | null>(null);

  const bilanSets = [
    {
      id: 'bilan-geo-1',
      title: 'Bilan 1 - Géométrie Plane',
      description: 'Vecteurs et produit scalaire',
      chapters: ['Vecteurs', 'Produit scalaire'],
      difficulty: 'Moyen',
      duration: '45 min',
      exercises: [
        {
          id: "bg1-1",
          title: "Parallélogramme et vecteurs",
          difficulty: "Intermédiaire" as const,
          points: 15,
          statement: "ABCD est un parallélogramme. Soit I le milieu de [AB] et J le milieu de [CD].\n1. Exprimer IJ⃗ en fonction de AD⃗\n2. Montrer que AIJC est un parallélogramme\n3. Calculer l'aire de AIJC sachant que AB = 6 et AD = 4 avec angle BAD = 60°",
          hint: "Utilisez les propriétés du parallélogramme et les milieux",
          solution: "1. IJ⃗ = IB⃗ + BC⃗ + CJ⃗ = (1/2)AB⃗ + AD⃗ + (1/2)DC⃗\n   = (1/2)AB⃗ + AD⃗ + (1/2)AB⃗ = AB⃗ + AD⃗ = AC⃗\n   Mais aussi IJ⃗ = IA⃗ + AD⃗ + DJ⃗ = -(1/2)AB⃗ + AD⃗ + (1/2)AB⃗ = AD⃗\n\n2. AI⃗ = -(1/2)AB⃗ et CJ⃗ = (1/2)CD⃗ = (1/2)AB⃗\n   Donc AI⃗ = -CJ⃗, ce qui prouve que AIJC est un parallélogramme\n\n3. Aire(AIJC) = ||AI⃗ × AJ⃗|| = ||(1/2)AB⃗ × (AD⃗ + (1/2)AB⃗)||\n   = (1/2)||AB⃗ × AD⃗|| = (1/2) × 6 × 4 × sin(60°) = 12 × √3/2 = 6√3",
          explanation: "Utilisation des relations vectorielles dans les parallélogrammes",
          category: "Géométrie vectorielle"
        }
      ]
    },
    {
      id: 'bilan-geo-2',
      title: 'Bilan 2 - Géométrie dans l\'Espace',
      description: 'Plans, droites et distances dans ℝ³',
      chapters: ['Géométrie 3D', 'Plans et droites'],
      difficulty: 'Avancé',
      duration: '60 min',
      exercises: [
        {
          id: "bg2-1",
          title: "Position relative de plans",
          difficulty: "Avancé" as const,
          points: 20,
          statement: "Soit P₁ : 2x + y - z + 1 = 0 et P₂ : x - y + 2z - 3 = 0\n1. Déterminer la position relative de P₁ et P₂\n2. Si les plans sont sécants, déterminer l'équation de leur intersection\n3. Calculer l'angle entre les deux plans",
          hint: "Utilisez les vecteurs normaux pour déterminer la position",
          solution: "1. Vecteurs normaux : n₁⃗(2,1,-1) et n₂⃗(1,-1,2)\n   n₁⃗ et n₂⃗ ne sont pas colinéaires donc P₁ et P₂ sont sécants\n\n2. L'intersection est une droite D définie par :\n   {2x + y - z + 1 = 0\n   {x - y + 2z - 3 = 0\n   Vecteur directeur : u⃗ = n₁⃗ × n₂⃗ = (1,5,3)\n   Point particulier : en posant z = 0, on obtient x = 1, y = -3\n   Équation : (x,y,z) = (1,-3,0) + t(1,5,3)\n\n3. cos(θ) = |n₁⃗·n₂⃗|/(||n₁⃗||×||n₂⃗||) = |2-1-2|/(√6×√6) = 1/6\n   θ = arccos(1/6) ≈ 80.41°",
          explanation: "Étude complète des positions relatives de plans dans l'espace",
          category: "Géométrie 3D"
        }
      ]
    }
  ];

  const handleBilanSelect = (bilanId: string) => {
    setSelectedBilan(selectedBilan === bilanId ? null : bilanId);
  };

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
                <Trophy className="w-6 h-6 text-green-600" />
                <h1 className="text-xl font-bold text-slate-900">Bilans Géométrie</h1>
              </div>
            </div>
            <Link to="/mega-bilan">
              <Button className="bg-gradient-to-r from-green-500 to-teal-500">
                Méga Bilan
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-4">
            Bilans d'Évaluation - Géométrie
          </h2>
          <p className="text-slate-600">Maîtrisez les formes et transformations géométriques</p>
        </div>

        <div className="grid gap-6 mb-8">
          {bilanSets.map((bilan) => (
            <Card key={bilan.id} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-green-800">{bilan.title}</CardTitle>
                    <CardDescription className="mt-1">{bilan.description}</CardDescription>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge className={
                        bilan.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-800' :
                        bilan.difficulty === 'Avancé' ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                      }>
                        {bilan.difficulty}
                      </Badge>
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {bilan.duration}
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="w-4 h-4 mr-1" />
                        {bilan.exercises.length} exercices
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleBilanSelect(bilan.id)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {selectedBilan === bilan.id ? 'Masquer' : 'Commencer'}
                  </Button>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-slate-600">
                    <strong>Chapitres couverts :</strong> {bilan.chapters.join(', ')}
                  </p>
                </div>
              </CardHeader>

              {selectedBilan === bilan.id && (
                <CardContent>
                  <ExerciseList exercises={bilan.exercises} color="from-green-600 to-teal-600" />
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeometryBilanPage;
