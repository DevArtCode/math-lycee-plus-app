import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const LogicBilanPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Soit P(x) : 'x est premier' et Q(x) : 'x est impair'. Comment traduire 'Tous les nombres premiers sauf 2 sont impairs' ?",
      options: ["∀x, (P(x) ∧ x ≠ 2) ⟹ Q(x)", "∀x, P(x) ⟹ Q(x)", "∃x, P(x) ∧ Q(x)", "∀x, Q(x) ⟹ P(x)"],
      correct: 0,
      explanation: "On dit que pour tout x, si x est premier et différent de 2, alors x est impair"
    },
    {
      id: 2,
      question: "Quelle est la négation de ∀x ∈ ℝ, ∃y ∈ ℝ, x + y = 0 ?",
      options: ["∃x ∈ ℝ, ∀y ∈ ℝ, x + y ≠ 0", "∀x ∈ ℝ, ∀y ∈ ℝ, x + y ≠ 0", "∃x ∈ ℝ, ∃y ∈ ℝ, x + y ≠ 0", "∀x ∈ ℝ, ∃y ∈ ℝ, x + y ≠ 0"],
      correct: 0,
      explanation: "¬(∀x, ∃y, P(x,y)) ≡ ∃x, ¬(∃y, P(x,y)) ≡ ∃x, ∀y, ¬P(x,y)"
    },
    {
      id: 3,
      question: "Montrons par récurrence que pour tout n ≥ 1, 1+2+...+n = n(n+1)/2. Quelle est l'étape d'hérédité ?",
      options: ["Montrer que si P(k) alors P(k+1)", "Montrer P(1)", "Montrer P(n) pour tout n", "Conclure"],
      correct: 0,
      explanation: "L'hérédité consiste à montrer que si la propriété est vraie au rang k, elle l'est aussi au rang k+1"
    },
    {
      id: 4,
      question: "Soit A = {1,2,3} et B = {2,3,4}. Que vaut A ∩ B̄ (où B̄ est le complémentaire de B dans ℕ) ?",
      options: ["{1}", "{2,3}", "{1,2,3,4}", "∅"],
      correct: 0,
      explanation: "B̄ contient tous les naturels sauf 2,3,4. Donc A ∩ B̄ = {1,2,3} ∩ {1,5,6,...} = {1}"
    },
    {
      id: 5,
      question: "Combien y a-t-il de parties d'un ensemble à n éléments ?",
      options: ["2ⁿ", "n!", "n²", "2n"],
      correct: 0,
      explanation: "Chaque élément peut être pris ou non dans une partie, donc 2 choix par élément : 2ⁿ parties"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({...selectedAnswers, [currentQuestionIndex]: answerIndex});
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correct++;
      }
    });
    setScore(correct);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/logic">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la Logique
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">🧠 Résultats du Bilan Logique</h1>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <Brain className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <CardTitle className="text-3xl">Score : {score}/{questions.length}</CardTitle>
              <CardDescription className="text-lg">
                {score === questions.length ? "Excellent ! Votre logique est parfaite !" :
                 score >= questions.length * 0.8 ? "Très bien ! Vous maîtrisez bien la logique." :
                 score >= questions.length * 0.6 ? "Bon travail, quelques révisions seraient utiles." :
                 "Il faut revoir les bases de la logique mathématique."}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={resetQuiz} className="bg-gradient-to-r from-purple-500 to-purple-600">
                <RotateCcw className="w-4 h-4 mr-2" />
                Recommencer
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {questions.map((question, index) => (
              <Card key={question.id} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    {selectedAnswers[index] === question.correct ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mr-2" />
                    )}
                    Question {question.id}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-700">
                    {question.question}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`p-3 rounded-lg border ${
                          optionIndex === question.correct ? 'border-green-500 bg-green-50' :
                          selectedAnswers[index] === optionIndex ? 'border-red-500 bg-red-50' :
                          'border-slate-200'
                        }`}
                      >
                        {String.fromCharCode(65 + optionIndex)}. {option}
                        {optionIndex === question.correct && ' ✓'}
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-slate-700">
                      <strong>Explication :</strong> {question.explanation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/logic">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à la Logique
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-slate-900">🧠 Bilan Logique</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Question {currentQuestionIndex + 1} sur {questions.length}
            </h2>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswerSelect(optionIndex)}
                  className={`w-full p-4 text-left rounded-lg border transition-colors ${
                    selectedAnswers[currentQuestionIndex] === optionIndex
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {String.fromCharCode(65 + optionIndex)}. {option}
                </button>
              ))}
            </div>

            {selectedAnswers[currentQuestionIndex] !== undefined && (
              <Button 
                onClick={nextQuestion}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600"
              >
                {currentQuestionIndex === questions.length - 1 ? 'Voir les résultats' : 'Question suivante'}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogicBilanPage;
