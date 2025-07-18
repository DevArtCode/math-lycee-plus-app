
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ProbabilityBasicsQcmPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});

  const exercises = [
    {
      id: 1,
      question: "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre supérieur à 4 ?",
      options: ["1/6", "2/6", "3/6", "4/6"],
      correct: 1,
      explanation: "Les nombres supérieurs à 4 sont {5, 6}. Donc P = 2/6 = 1/3."
    },
    {
      id: 2,
      question: "Dans une urne, il y a 3 boules rouges et 7 boules bleues. Quelle est la probabilité de tirer une boule rouge ?",
      options: ["3/7", "3/10", "7/10", "1/3"],
      correct: 1,
      explanation: "Il y a 3 boules rouges sur 10 boules au total. P(Rouge) = 3/10."
    },
    {
      id: 3,
      question: "Si P(A) = 0.3, quelle est P(A̅) ?",
      options: ["0.3", "0.7", "1.3", "0"],
      correct: 1,
      explanation: "P(A̅) = 1 - P(A) = 1 - 0.3 = 0.7"
    },
    {
      id: 4,
      question: "On tire une carte dans un jeu de 52 cartes. Quelle est la probabilité d'obtenir un As ou un Roi ?",
      options: ["4/52", "8/52", "12/52", "16/52"],
      correct: 1,
      explanation: "Il y a 4 As et 4 Rois, événements incompatibles. P = 4/52 + 4/52 = 8/52."
    },
    {
      id: 5,
      question: "Lors du lancer de deux dés, quelle est la probabilité d'obtenir une somme égale à 7 ?",
      options: ["1/6", "6/36", "7/36", "1/36"],
      correct: 1,
      explanation: "Les couples donnant 7 : (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Soit 6 cas sur 36."
    },
    {
      id: 6,
      question: "Si A et B sont deux événements incompatibles avec P(A) = 0.4 et P(B) = 0.3, que vaut P(A ∪ B) ?",
      options: ["0.1", "0.7", "0.12", "1"],
      correct: 1,
      explanation: "A et B incompatibles ⟹ P(A ∪ B) = P(A) + P(B) = 0.4 + 0.3 = 0.7"
    },
    {
      id: 7,
      question: "Dans une classe de 30 élèves, 18 sont des filles. Si on choisit un élève au hasard, quelle est la probabilité que ce soit un garçon ?",
      options: ["18/30", "12/30", "30/18", "6/30"],
      correct: 1,
      explanation: "Il y a 30 - 18 = 12 garçons. P(Garçon) = 12/30 = 2/5"
    },
    {
      id: 8,
      question: "On lance une pièce 3 fois. Quelle est la probabilité d'obtenir exactement 2 faces ?",
      options: ["1/8", "3/8", "2/8", "4/8"],
      correct: 1,
      explanation: "Les cas favorables : FFP, FPF, PFF. Soit 3 cas sur 2³ = 8 possibilités."
    },
    {
      id: 9,
      question: "Si P(A ∩ B) = 0.2, P(A) = 0.5 et P(B) = 0.4, que vaut P(A ∪ B) ?",
      options: ["0.7", "0.9", "0.3", "1.1"],
      correct: 0,
      explanation: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.5 + 0.4 - 0.2 = 0.7"
    },
    {
      id: 10,
      question: "Un événement A a une probabilité de 1. Que peut-on dire de cet événement ?",
      options: ["Il est impossible", "Il est certain", "Il est rare", "Il est équiprobable"],
      correct: 1,
      explanation: "Un événement de probabilité 1 est un événement certain qui se produit toujours."
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
              <Link to="/probability/basics/exercise">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux exercices
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">📊 QCM - Bases de probabilité</h1>
            </div>
            <Link to="/probability/basics/course">
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

export default ProbabilityBasicsQcmPage;
