
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const LogicQuantifiersQcmPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});

  const exercises = [
    {
      id: 1,
      question: "Que signifie ∀x ∈ ℝ, x² ≥ 0 ?",
      options: ["Il existe un réel dont le carré est positif", "Pour tout réel, le carré est positif", "Aucun réel n'a un carré négatif", "Certains réels ont un carré positif"],
      correct: 1,
      explanation: "∀ signifie 'pour tout'. Cette proposition affirme que tout nombre réel a un carré positif ou nul."
    },
    {
      id: 2,
      question: "La négation de ∀x ∈ E, P(x) est :",
      options: ["∀x ∈ E, ¬P(x)", "∃x ∈ E, ¬P(x)", "∃x ∈ E, P(x)", "¬∀x ∈ E, P(x)"],
      correct: 1,
      explanation: "La négation de 'pour tout x, P(x)' est 'il existe x tel que non P(x)' : ∃x ∈ E, ¬P(x)"
    },
    {
      id: 3,
      question: "∃x ∈ ℕ, x + 1 = 0. Cette proposition est :",
      options: ["Vraie", "Fausse", "Indéterminée", "Sans sens"],
      correct: 1,
      explanation: "Il n'existe aucun entier naturel x tel que x + 1 = 0, car cela donnerait x = -1 ∉ ℕ."
    },
    {
      id: 4,
      question: "Comment lit-on ∀ε > 0, ∃δ > 0, ... ?",
      options: ["Pour tout epsilon, il existe delta", "Il existe epsilon, pour tout delta", "Pour epsilon et delta positifs", "Avec epsilon et delta"],
      correct: 0,
      explanation: "On lit : 'Pour tout epsilon strictement positif, il existe delta strictement positif...'"
    },
    {
      id: 5,
      question: "La négation de ∃x ∈ ℝ, x² = -1 est :",
      options: ["∀x ∈ ℝ, x² ≠ -1", "∃x ∈ ℝ, x² ≠ -1", "∀x ∈ ℝ, x² = -1", "Il n'y a pas de négation"],
      correct: 0,
      explanation: "La négation de 'il existe x tel que P(x)' est 'pour tout x, non P(x)' : ∀x ∈ ℝ, x² ≠ -1"
    },
    {
      id: 6,
      question: "∀x ∈ ℝ, ∃y ∈ ℝ, x + y = 0. Cette proposition signifie :",
      options: ["Tous les réels ont un opposé", "Il existe un réel opposé à tous", "Certains réels ont un opposé", "Aucun réel n'a d'opposé"],
      correct: 0,
      explanation: "Pour tout réel x, il existe un réel y (son opposé -x) tel que x + y = 0."
    },
    {
      id: 7,
      question: "L'ordre des quantificateurs dans ∀x, ∃y, P(x,y) :",
      options: ["N'a pas d'importance", "Est crucial", "Dépend de P", "Est toujours le même"],
      correct: 1,
      explanation: "L'ordre est crucial : ∀x, ∃y, P(x,y) ≠ ∃y, ∀x, P(x,y) en général."
    },
    {
      id: 8,
      question: "∃!x ∈ ℝ, x² = 4 signifie :",
      options: ["Il existe exactement un réel", "Il existe au moins un réel", "Il existe au plus un réel", "Il n'existe aucun réel"],
      correct: 1,
      explanation: "∃! signifie 'il existe exactement un'. Mais x² = 4 a deux solutions (2 et -2), donc c'est faux."
    },
    {
      id: 9,
      question: "Dans ∀x ∈ ℕ, ∃y ∈ ℕ, y > x, la variable x est :",
      options: ["Libre", "Liée", "Muette", "Constante"],
      correct: 1,
      explanation: "x est liée par le quantificateur ∀. Toutes les variables quantifiées sont liées."
    },
    {
      id: 10,
      question: "La proposition ∀x ∈ ∅, P(x) est :",
      options: ["Toujours fausse", "Toujours vraie", "Dépend de P", "Sans sens"],
      correct: 1,
      explanation: "Une proposition universelle sur l'ensemble vide est toujours vraie (vacuité)."
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
              <Link to="/logic/quantifiers/exercise">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux exercices
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">🔢 QCM - Quantificateurs</h1>
            </div>
            <Link to="/logic/quantifiers/course">
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

export default LogicQuantifiersQcmPage;
