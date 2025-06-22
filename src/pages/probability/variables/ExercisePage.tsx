
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ProbabilityVariablesExercisePage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});

  const exercises = [
    {
      id: 1,
      question: "Soit X une variable aléatoire avec P(X=1)=0.3, P(X=2)=0.5, P(X=3)=0.2. Calculez E(X).",
      options: ["1.9", "2.0", "1.8", "2.1"],
      correct: 0,
      explanation: "E(X) = 1×0.3 + 2×0.5 + 3×0.2 = 0.3 + 1.0 + 0.6 = 1.9"
    },
    {
      id: 2,
      question: "Pour la même variable X, calculez V(X). (E(X) = 1.9)",
      options: ["0.49", "0.36", "0.64", "0.81"],
      correct: 0,
      explanation: "E(X²) = 1²×0.3 + 2²×0.5 + 3²×0.2 = 0.3 + 2.0 + 1.8 = 4.1. V(X) = 4.1 - 1.9² = 4.1 - 3.61 = 0.49"
    },
    {
      id: 3,
      question: "X suit une loi binomiale B(20, 0.3). Quelle est E(X) ?",
      options: ["6", "14", "20", "0.3"],
      correct: 0,
      explanation: "Pour B(n,p), E(X) = np = 20 × 0.3 = 6"
    },
    {
      id: 4,
      question: "Pour X ~ B(20, 0.3), quelle est V(X) ?",
      options: ["4.2", "6", "14", "18"],
      correct: 0,
      explanation: "Pour B(n,p), V(X) = np(1-p) = 20 × 0.3 × 0.7 = 4.2"
    },
    {
      id: 5,
      question: "On lance 100 fois une pièce équilibrée. Quelle est la probabilité d'obtenir exactement 50 faces ?",
      options: ["C(100,50)/2¹⁰⁰", "0.5", "50/100", "1/2"],
      correct: 0,
      explanation: "X ~ B(100, 0.5). P(X=50) = C(100,50) × (0.5)⁵⁰ × (0.5)⁵⁰ = C(100,50)/2¹⁰⁰"
    },
    {
      id: 6,
      question: "Si E(X) = 5 et V(X) = 4, que vaut E(2X + 3) ?",
      options: ["13", "10", "22", "7"],
      correct: 0,
      explanation: "E(2X + 3) = 2E(X) + 3 = 2×5 + 3 = 13"
    },
    {
      id: 7,
      question: "Avec les mêmes données, que vaut V(2X + 3) ?",
      options: ["16", "4", "19", "22"],
      correct: 0,
      explanation: "V(2X + 3) = 2²V(X) = 4×4 = 16"
    },
    {
      id: 8,
      question: "Un dé est truqué : P(6) = 0.4, les autres faces ont probabilité égale. Quelle est P(1) ?",
      options: ["0.12", "0.1", "0.15", "0.2"],
      correct: 0,
      explanation: "P(1) + ... + P(5) + P(6) = 1. Soit 5×P(1) + 0.4 = 1, donc P(1) = 0.6/5 = 0.12"
    },
    {
      id: 9,
      question: "Dans un QCM de 10 questions à 4 choix, en répondant au hasard, combien de bonnes réponses espère-t-on ?",
      options: ["2.5", "5", "10", "1"],
      correct: 0,
      explanation: "X ~ B(10, 0.25). E(X) = 10 × 0.25 = 2.5"
    },
    {
      id: 10,
      question: "X et Y sont indépendantes avec E(X) = 3, E(Y) = 4, V(X) = 2, V(Y) = 5. Que vaut V(X + Y) ?",
      options: ["7", "2", "5", "9"],
      correct: 0,
      explanation: "X et Y indépendantes ⟹ V(X + Y) = V(X) + V(Y) = 2 + 5 = 7"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/probability">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux Probabilités
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">🎲 Exercices - Variables aléatoires</h1>
            </div>
            <Link to="/probability/variables/course">
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
                          ? 'border-orange-500 bg-orange-50'
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
                    className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600"
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

export default ProbabilityVariablesExercisePage;
