import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const LogicBasicsExercisePage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});

  const exercises = [
    {
      id: 1,
      question: "Soit P : 'Il pleut' et Q : 'Je prends mon parapluie'. Comment traduit-on 'Si il ne pleut pas, je ne prends pas mon parapluie' ?",
      options: ["¬P ⟹ ¬Q", "P ⟹ Q", "¬Q ⟹ ¬P", "P ∧ ¬Q"],
      correct: 0,
      explanation: "'Si il ne pleut pas (¬P), je ne prends pas mon parapluie (¬Q)' se traduit par ¬P ⟹ ¬Q"
    },
    {
      id: 2,
      question: "Quelle est la contraposée de 'Si n est pair alors n² est pair' ?",
      options: ["Si n² est impair alors n est impair", "Si n est impair alors n² est impair", "Si n² est pair alors n est pair", "Si n est pair alors n² est impair"],
      correct: 0,
      explanation: "La contraposée de P ⟹ Q est ¬Q ⟹ ¬P. Ici : 'Si n² est impair alors n est impair'"
    },
    {
      id: 3,
      question: "P ∨ Q est faux quand :",
      options: ["P et Q sont tous deux faux", "P est vrai et Q est faux", "P est faux et Q est vrai", "P et Q sont tous deux vrais"],
      correct: 0,
      explanation: "P ∨ Q (P ou Q) n'est faux que lorsque P et Q sont tous les deux faux"
    },
    {
      id: 4,
      question: "L'implication P ⟹ Q est équivalente à :",
      options: ["¬P ∨ Q", "P ∧ Q", "¬P ∧ ¬Q", "P ∨ ¬Q"],
      correct: 0,
      explanation: "P ⟹ Q est logiquement équivalent à ¬P ∨ Q (non P ou Q)"
    },
    {
      id: 5,
      question: "Pour démontrer par l'absurde que √2 est irrationnel, on suppose :",
      options: ["√2 est rationnel", "√2 est irrationnel", "√2 = 2", "√2 < 0"],
      correct: 0,
      explanation: "Dans une démonstration par l'absurde, on suppose le contraire de ce qu'on veut démontrer"
    }
  ];

  const handleAnswerSelect = (exerciseIndex: number, answerIndex: number) => {
    setSelectedAnswers({...selectedAnswers, [exerciseIndex]: answerIndex});
  };

  const checkAnswer = (exerciseIndex: number) => {
    setShowResults({...showResults, [exerciseIndex]: true});
  };

  const progress = (Object.keys(showResults).length / exercises.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/logic">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la Logique
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">🤔 Exercices - Logique de base</h1>
            </div>
            <Link to="/logic/basics/course">
              <Button variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                Voir le cours
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900">Progression</h2>
            <span className="text-slate-600">{Object.keys(showResults).length}/{exercises.length} exercices</span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <Card key={exercise.id} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Exercice {exercise.id}</CardTitle>
                <CardDescription className="text-base text-slate-700">
                  {exercise.question}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {exercise.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswerSelect(index, optionIndex)}
                      className={`w-full p-3 text-left rounded-lg border transition-colors ${
                        selectedAnswers[index] === optionIndex
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {String.fromCharCode(65 + optionIndex)}. {option}
                    </button>
                  ))}
                </div>

                {selectedAnswers[index] !== undefined && !showResults[index] && (
                  <Button 
                    onClick={() => checkAnswer(index)}
                    className="mt-4 bg-gradient-to-r from-purple-500 to-purple-600"
                  >
                    Vérifier la réponse
                  </Button>
                )}

                {showResults[index] && (
                  <div className="mt-4 p-4 rounded-lg border">
                    <div className="flex items-center mb-2">
                      {selectedAnswers[index] === exercise.correct ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mr-2" />
                      )}
                      <span className={`font-semibold ${
                        selectedAnswers[index] === exercise.correct ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {selectedAnswers[index] === exercise.correct ? 'Correct !' : 'Incorrect'}
                      </span>
                    </div>
                    <p className="text-slate-700">
                      <strong>Explication :</strong> {exercise.explanation}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogicBasicsExercisePage;
