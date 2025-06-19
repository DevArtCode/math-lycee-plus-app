
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, ChevronDown, CheckCircle, XCircle, Target } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  points: number;
  statement: string;
  hint?: string;
  solution: string;
  explanation: string;
  category: string;
}

interface ExerciseListProps {
  exercises: Exercise[];
  color: string;
}

const ExerciseList: React.FC<ExerciseListProps> = ({ exercises, color }) => {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState<string | null>(null);
  const [showHint, setShowHint] = useState<string | null>(null);

  const toggleExercise = (exerciseId: string) => {
    setExpandedExercise(expandedExercise === exerciseId ? null : exerciseId);
    setShowSolution(null);
    setShowHint(null);
  };

  const toggleSolution = (exerciseId: string) => {
    setShowSolution(showSolution === exerciseId ? null : exerciseId);
  };

  const toggleHint = (exerciseId: string) => {
    setShowHint(showHint === exerciseId ? null : exerciseId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const groupedExercises = exercises.reduce((acc, exercise) => {
    if (!acc[exercise.category]) {
      acc[exercise.category] = [];
    }
    acc[exercise.category].push(exercise);
    return acc;
  }, {} as Record<string, Exercise[]>);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-4`}>
          Exercices pratiques
        </h2>
        <p className="text-slate-600">Exercices progressifs avec solutions détaillées</p>
      </div>

      {Object.entries(groupedExercises).map(([category, categoryExercises]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-800 border-b border-slate-200 pb-2">
            📝 {category}
          </h3>
          
          {categoryExercises.map((exercise) => (
            <Card key={exercise.id} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{exercise.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getDifficultyColor(exercise.difficulty)}>
                          {exercise.difficulty}
                        </Badge>
                        <span className="text-sm text-slate-500">{exercise.points} points</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExercise(exercise.id)}
                  >
                    {expandedExercise === exercise.id ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>

              {expandedExercise === exercise.id && (
                <CardContent className="space-y-4">
                  {/* Énoncé */}
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">📋 Énoncé</h4>
                    <p className="text-slate-700 whitespace-pre-line">{exercise.statement}</p>
                  </div>

                  {/* Boutons d'aide */}
                  <div className="flex space-x-2">
                    {exercise.hint && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleHint(exercise.id)}
                      >
                        💡 {showHint === exercise.id ? 'Masquer l\'indice' : 'Voir un indice'}
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSolution(exercise.id)}
                    >
                      {showSolution === exercise.id ? '❌ Masquer la solution' : '✅ Voir la solution'}
                    </Button>
                  </div>

                  {/* Indice */}
                  {showHint === exercise.id && exercise.hint && (
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">💡 Indice</h4>
                      <p className="text-yellow-700">{exercise.hint}</p>
                    </div>
                  )}

                  {/* Solution */}
                  {showSolution === exercise.id && (
                    <div className="space-y-3">
                      <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">✅ Solution</h4>
                        <p className="text-green-700 font-mono whitespace-pre-line">{exercise.solution}</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">📝 Explication</h4>
                        <p className="text-blue-700 whitespace-pre-line">{exercise.explanation}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
