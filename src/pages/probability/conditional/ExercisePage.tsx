
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ProbabilityConditionalExercisePage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});

  const exercises = [
    {
      id: 1,
      question: "Dans une classe, 60% des élèves sont des filles. Parmi les filles, 80% portent des lunettes. Quelle est la probabilité qu'un élève choisi au hasard soit une fille portant des lunettes ?",
      options: ["0.48", "0.60", "0.80", "0.140"],
      correct: 0,
      explanation: "P(Fille ∩ Lunettes) = P(Fille) × P(Lunettes|Fille) = 0.60 × 0.80 = 0.48"
    },
    {
      id: 2,
      question: "On lance deux dés. Sachant que la somme est supérieure à 8, quelle est la probabilité que le premier dé montre 6 ?",
      options: ["1/6", "3/10", "1/3", "1/2"],
      correct: 1,
      explanation: "Cas où somme > 8 : 10 cas. Cas où premier dé = 6 ET somme > 8 : 3 cas. P = 3/10"
    },
    {
      id: 3,
      question: "Soit P(A) = 0.4, P(B) = 0.6 et P(A ∩ B) = 0.3. A et B sont-ils indépendants ?",
      options: ["Oui", "Non", "Impossible à déterminer", "Information insuffisante"],
      correct: 1,
      explanation: "Si indépendants : P(A ∩ B) = P(A) × P(B) = 0.4 × 0.6 = 0.24 ≠ 0.3. Donc non indépendants."
    },
    {
      id: 4,
      question: "Dans une urne, 30% des boules sont rouges. On tire 2 boules avec remise. Quelle est la probabilité que les deux soient rouges ?",
      options: ["0.09", "0.30", "0.60", "0.21"],
      correct: 0,
      explanation: "Avec remise, les tirages sont indépendants. P = 0.30 × 0.30 = 0.09"
    },
    {
      id: 5,
      question: "Un test médical détecte une maladie dans 95% des cas si elle est présente. Si P(malade) = 0.01, quelle est P(test positif et malade) ?",
      options: ["0.0095", "0.95", "0.01", "0.9405"],
      correct: 0,
      explanation: "P(test+ ∩ malade) = P(malade) × P(test+|malade) = 0.01 × 0.95 = 0.0095"
    },
    {
      id: 6,
      question: "Si P(A|B) = 0.8, P(B) = 0.3, que vaut P(A ∩ B) ?",
      options: ["0.24", "0.50", "1.1", "0.11"],
      correct: 0,
      explanation: "P(A ∩ B) = P(A|B) × P(B) = 0.8 × 0.3 = 0.24"
    },
    {
      id: 7,
      question: "Deux événements A et B vérifient P(A) = P(B) = 0.5 et sont indépendants. Que vaut P(A ∪ B) ?",
      options: ["0.5", "0.75", "1", "0.25"],
      correct: 1,
      explanation: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.5 + 0.5 - (0.5 × 0.5) = 0.75"
    },
    {
      id: 8,
      question: "Dans un sac, 40% des billes sont bleues, 60% rouges. On en tire 3 avec remise. Probabilité d'avoir exactement 2 bleues ?",
      options: ["0.288", "0.48", "0.16", "0.064"],
      correct: 0,
      explanation: "C(3,2) × (0.4)² × (0.6)¹ = 3 × 0.16 × 0.6 = 0.288"
    },
    {
      id: 9,
      question: "Si P(A|B) = P(A), que peut-on dire de A et B ?",
      options: ["A ⊂ B", "A et B sont incompatibles", "A et B sont indépendants", "B ⊂ A"],
      correct: 2,
      explanation: "P(A|B) = P(A) signifie que B n'influence pas A, donc A et B sont indépendants."
    },
    {
      id: 10,
      question: "Une machine produit 2% de pièces défectueuses. On teste 100 pièces. Quelle est la probabilité qu'aucune ne soit défectueuse ?",
      options: ["0.98", "(0.98)¹⁰⁰", "0.02", "0"],
      correct: 1,
      explanation: "Chaque pièce a 0.98 de probabilité d'être bonne. Pour 100 pièces indépendantes : (0.98)¹⁰⁰"
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
              <h1 className="text-xl font-bold text-slate-900">🎯 Exercices - Probabilités conditionnelles</h1>
            </div>
            <Link to="/probability/conditional/course">
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

export default ProbabilityConditionalExercisePage;
