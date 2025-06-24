
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ProbabilityContinuousQcmPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});

  const exercises = [
    {
      id: 1,
      question: "X suit une loi uniforme sur [0,10]. Quelle est P(3 ≤ X ≤ 7) ?",
      options: ["0.4", "0.3", "0.7", "0.1"],
      correct: 0,
      explanation: "P(3 ≤ X ≤ 7) = (7-3)/(10-0) = 4/10 = 0.4"
    },
    {
      id: 2,
      question: "Pour X ~ Uniforme[0,10], que vaut E(X) ?",
      options: ["5", "10", "0", "2.5"],
      correct: 0,
      explanation: "E(X) = (a+b)/2 = (0+10)/2 = 5"
    },
    {
      id: 3,
      question: "Pour X ~ Uniforme[0,10], que vaut V(X) ?",
      options: ["100/12", "25", "10", "50"],
      correct: 0,
      explanation: "V(X) = (b-a)²/12 = (10-0)²/12 = 100/12"
    },
    {
      id: 4,
      question: "Si Z ~ N(0,1), comment s'exprime P(-1 ≤ Z ≤ 1) ?",
      options: ["2Φ(1) - 1", "Φ(1)", "1 - Φ(1)", "Φ(1) + Φ(-1)"],
      correct: 0,
      explanation: "P(-1 ≤ Z ≤ 1) = Φ(1) - Φ(-1). Par symétrie, Φ(-1) = 1 - Φ(1), donc P = 2Φ(1) - 1"
    },
    {
      id: 5,
      question: "X ~ Exp(2). Que vaut P(X > 1) ?",
      options: ["e^(-2)", "e^(-1)", "1 - e^(-2)", "2e^(-1)"],
      correct: 0,
      explanation: "Pour une loi exponentielle Exp(λ), P(X > t) = e^(-λt) = e^(-2×1) = e^(-2)"
    },
    {
      id: 6,
      question: "Pour X ~ Exp(λ), que vaut E(X) ?",
      options: ["1/λ", "λ", "1/λ²", "λ²"],
      correct: 0,
      explanation: "Pour une loi exponentielle Exp(λ), E(X) = 1/λ"
    },
    {
      id: 7,
      question: "Soit f(x) = kx² sur [0,2]. Pour que f soit une densité, k = ?",
      options: ["3/8", "1/8", "8/3", "1/3"],
      correct: 0,
      explanation: "∫₀² kx² dx = k[x³/3]₀² = k×8/3 = 1, donc k = 3/8"
    },
    {
      id: 8,
      question: "Si X ~ N(μ, σ²), comment centre-t-on et réduit-on X ?",
      options: ["Z = (X-μ)/σ", "Z = (X+μ)/σ", "Z = X/σ - μ", "Z = σ(X-μ)"],
      correct: 0,
      explanation: "La variable centrée réduite est Z = (X-μ)/σ ~ N(0,1)"
    },
    {
      id: 9,
      question: "Quelle est la propriété caractéristique de la loi exponentielle ?",
      options: ["Propriété sans mémoire", "Symétrie", "Normalité", "Uniformité"],
      correct: 0,
      explanation: "La loi exponentielle vérifie la propriété sans mémoire : P(X > s+t | X > s) = P(X > t)"
    },
    {
      id: 10,
      question: "Pour une densité f, que vaut ∫_{-∞}^{+∞} f(x)dx ?",
      options: ["1", "0", "μ", "σ²"],
      correct: 0,
      explanation: "Pour qu'une fonction soit une densité de probabilité, elle doit vérifier ∫_{-∞}^{+∞} f(x)dx = 1"
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
              <Link to="/probability/continuous/exercise">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux exercices
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">📈 QCM - Lois continues</h1>
            </div>
            <Link to="/probability/continuous/course">
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
            <span className="text-slate-600">{Object.keys(showResults).length}/{exercises.length} questions</span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <Card key={exercise.id} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Question {exercise.id}</CardTitle>
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

export default ProbabilityContinuousQcmPage;
