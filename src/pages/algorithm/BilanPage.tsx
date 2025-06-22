
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ExerciseList from '@/components/ExerciseList';

const AlgorithmBilanPage = () => {
  const [selectedBilan, setSelectedBilan] = useState<string | null>(null);

  const bilanSets = [
    {
      id: 'bilan-algo-1',
      title: 'Bilan 1 - Structures algorithmiques',
      description: 'Conditions, boucles et fonctions',
      chapters: ['Structures de base', 'Fonctions'],
      difficulty: 'Moyen',
      duration: '45 min',
      exercises: [
        {
          id: "ba1-1",
          title: "Algorithme de tri",
          difficulty: "Intermédiaire" as const,
          points: 15,
          statement: "Implémenter l'algorithme de tri par sélection pour trier un tableau d'entiers.",
          hint: "Cherchez le minimum dans la partie non triée",
          solution: "ALGORITHME tri_selection(T : tableau[1..n]):\nPOUR i DE 1 À n-1 FAIRE\n  min ← i\n  POUR j DE i+1 À n FAIRE\n    SI T[j] < T[min] ALORS min ← j\n  FIN POUR\n  échanger T[i] et T[min]\nFIN POUR",
          explanation: "Implémentation du tri par sélection avec complexité O(n²)",
          category: "Algorithmes de tri"
        }
      ]
    }
  ];

  const handleBilanSelect = (bilanId: string) => {
    setSelectedBilan(selectedBilan === bilanId ? null : bilanId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
                <Trophy className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-bold text-slate-900">Bilans Algorithmique</h1>
              </div>
            </div>
            <Link to="/mega-bilan">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500">
                Méga Bilan
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Bilans d'Évaluation - Algorithmique
          </h2>
          <p className="text-slate-600">Maîtrisez la résolution de problèmes par algorithmes</p>
        </div>

        <div className="grid gap-6 mb-8">
          {bilanSets.map((bilan) => (
            <Card key={bilan.id} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-blue-800">{bilan.title}</CardTitle>
                    <CardDescription className="mt-1">{bilan.description}</CardDescription>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge className="bg-yellow-100 text-yellow-800">
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
                    className="bg-blue-600 hover:bg-blue-700"
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
                  <ExerciseList exercises={bilan.exercises} color="from-blue-600 to-cyan-600" />
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmBilanPage;
