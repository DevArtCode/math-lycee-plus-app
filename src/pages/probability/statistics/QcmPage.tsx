
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ProbabilityStatisticsQcmPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});

  const exercises = [
    {
      id: 1,
      question: "Pour la série {2, 4, 6, 8, 10}, quelle est la moyenne ?",
      options: ["6", "5", "7", "8"],
      correct: 0,
      explanation: "Moyenne = (2+4+6+8+10)/5 = 30/5 = 6"
    },
    {
      id: 2,
      question: "Dans une série ordonnée de 9 valeurs, la médiane est :",
      options: ["La 5ème valeur", "La 4ème valeur", "La moyenne des 4ème et 5ème", "La 9ème valeur"],
      correct: 0,
      explanation: "Pour n=9 (impair), la médiane est la valeur de rang (9+1)/2 = 5"
    },
    {
      id: 3,
      question: "Pour la série {1, 2, 2, 3, 4, 4, 4, 5}, le mode est :",
      options: ["4", "2", "3", "Il n'y en a pas"],
      correct: 0,
      explanation: "Le mode est la valeur qui apparaît le plus souvent. Ici, 4 apparaît 3 fois."
    },
    {
      id: 4,
      question: "L'étendue d'une série statistique est :",
      options: ["Maximum - Minimum", "Maximum + Minimum", "Médiane - Q1", "Q3 - Q1"],
      correct: 0,
      explanation: "L'étendue mesure la dispersion totale : plus grande valeur moins plus petite valeur."
    },
    {
      id: 5,
      question: "Dans une série, Q1 = 10, Q2 = 15, Q3 = 20. L'écart interquartile est :",
      options: ["10", "5", "15", "20"],
      correct: 0,
      explanation: "L'écart interquartile = Q3 - Q1 = 20 - 10 = 10"
    },
    {
      id: 6,
      question: "Si tous les individus d'une série ont la même valeur, la variance est :",
      options: ["0", "1", "Égale à la moyenne", "Indéterminée"],
      correct: 0,
      explanation: "Sans dispersion, tous les écarts à la moyenne sont nuls, donc la variance = 0."
    },
    {
      id: 7,
      question: "L'écart-type est :",
      options: ["La racine carrée de la variance", "Le carré de la variance", "La moyenne des écarts", "La médiane des écarts"],
      correct: 0,
      explanation: "Par définition, σ = √V où V est la variance."
    },
    {
      id: 8,
      question: "Dans un diagramme en boîte, les 'moustaches' s'étendent généralement jusqu'à :",
      options: ["Q1 - 1.5×IQR et Q3 + 1.5×IQR", "Min et Max", "Q1 et Q3", "μ ± σ"],
      correct: 0,
      explanation: "Les moustaches s'étendent jusqu'à 1.5 fois l'écart interquartile au-delà des quartiles."
    },
    {
      id: 9,
      question: "Un coefficient de corrélation r = 0.8 indique :",
      options: ["Une forte corrélation positive", "Une forte corrélation négative", "Aucune corrélation", "Une corrélation parfaite"],
      correct: 0,
      explanation: "r proche de 1 indique une forte corrélation positive entre les deux variables."
    },
    {
      id: 10,
      question: "Dans une régression linéaire y = ax + b, si a > 0 alors :",
      options: ["Les variables sont positivement corrélées", "Les variables sont négativement corrélées", "Il n'y a pas de corrélation", "La régression n'est pas valide"],
      correct: 0,
      explanation: "Un coefficient directeur positif indique que y augmente quand x augmente."
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
              <Link to="/probability/statistics/exercise">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux exercices
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">📈 QCM - Statistiques descriptives</h1>
            </div>
            <Link to="/probability/statistics/course">
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

export default ProbabilityStatisticsQcmPage;
