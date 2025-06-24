
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const LogicSetsQcmPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});

  const exercises = [
    {
      id: 1,
      question: "Si A = {1, 2, 3} et B = {2, 3, 4}, que vaut A ∩ B ?",
      options: ["{2, 3}", "{1, 2, 3, 4}", "{1, 4}", "∅"],
      correct: 0,
      explanation: "L'intersection contient les éléments communs aux deux ensembles : A ∩ B = {2, 3}"
    },
    {
      id: 2,
      question: "Pour A = {1, 2} et B = {3, 4}, A ∪ B = ?",
      options: ["{1, 2, 3, 4}", "{1, 2}", "{3, 4}", "∅"],
      correct: 0,
      explanation: "L'union contient tous les éléments des deux ensembles : A ∪ B = {1, 2, 3, 4}"
    },
    {
      id: 3,
      question: "Si E = {1, 2, 3, 4, 5} et A = {1, 3, 5}, alors A̅ = ?",
      options: ["{2, 4}", "{1, 3, 5}", "E", "∅"],
      correct: 0,
      explanation: "Le complémentaire de A dans E contient les éléments de E qui ne sont pas dans A : A̅ = {2, 4}"
    },
    {
      id: 4,
      question: "La différence A \\ B représente :",
      options: ["Les éléments de A qui ne sont pas dans B", "Les éléments de B qui ne sont pas dans A", "L'intersection de A et B", "L'union de A et B"],
      correct: 0,
      explanation: "A \\ B = {x ∈ A : x ∉ B}, les éléments de A qui ne sont pas dans B"
    },
    {
      id: 5,
      question: "Si A ⊆ B et B ⊆ A, alors :",
      options: ["A = B", "A ∩ B = ∅", "A ∪ B = E", "A \\ B ≠ ∅"],
      correct: 0,
      explanation: "Si A ⊆ B et B ⊆ A, alors A = B (double inclusion)"
    },
    {
      id: 6,
      question: "Card(A ∪ B) = Card(A) + Card(B) - ?",
      options: ["Card(A ∩ B)", "Card(A \\ B)", "Card(B \\ A)", "Card(A̅)"],
      correct: 0,
      explanation: "Principe d'inclusion-exclusion : |A ∪ B| = |A| + |B| - |A ∩ B|"
    },
    {
      id: 7,
      question: "L'ensemble vide ∅ vérifie :",
      options: ["∅ ⊆ A pour tout ensemble A", "∅ ∈ A pour tout ensemble A", "A ⊆ ∅ pour tout ensemble A", "∅ = {0}"],
      correct: 0,
      explanation: "L'ensemble vide est inclus dans tout ensemble : ∅ ⊆ A pour tout A"
    },
    {
      id: 8,
      question: "Si A = {1, {2, 3}}, alors :",
      options: ["2 ∈ A", "{2, 3} ∈ A", "Card(A) = 3", "A ⊆ {1, 2, 3}"],
      correct: 1,
      explanation: "A contient deux éléments : 1 et l'ensemble {2, 3}. Donc {2, 3} ∈ A"
    },
    {
      id: 9,
      question: "Les lois de De Morgan affirment que (A ∪ B)̅ = ?",
      options: ["A̅ ∪ B̅", "A̅ ∩ B̅", "A ∩ B", "A̅ \\ B̅"],
      correct: 1,
      explanation: "Loi de De Morgan : (A ∪ B)̅ = A̅ ∩ B̅"
    },
    {
      id: 10,
      question: "Si A et B sont disjoints, alors :",
      options: ["A ∩ B = ∅", "A ∪ B = ∅", "A = B", "A ⊆ B"],
      correct: 0,
      explanation: "Deux ensembles sont disjoints si leur intersection est vide : A ∩ B = ∅"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/logic/sets/exercise">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux exercices
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">📦 QCM - Théorie des ensembles</h1>
            </div>
            <Link to="/logic/sets/course">
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
                          ? 'border-blue-500 bg-blue-50'
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
                    className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600"
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

export default LogicSetsQcmPage;
