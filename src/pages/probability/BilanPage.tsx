
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ProbabilityBilanPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "On lance deux dés équilibrés. Quelle est la probabilité d'obtenir une somme de 8, sachant que la somme est paire ?",
      options: ["5/18", "5/36", "1/6", "1/9"],
      correct: 0,
      explanation: "Sommes paires : 2,4,6,8,10,12. Il y a 18 cas favorables. Parmi eux, 5 donnent la somme 8. P = 5/18"
    },
    {
      id: 2,
      question: "X suit B(100, 0.02). En utilisant l'approximation de Poisson, que vaut approximativement P(X = 3) ?",
      options: ["e⁻²×2³/3!", "e⁻²×2³/6", "C(100,3)×0.02³×0.98⁹⁷", "2³/3!"],
      correct: 0,
      explanation: "B(n,p) ≈ Poisson(np) quand n grand et p petit. Ici λ = 100×0.02 = 2. P(X=3) ≈ e⁻²×2³/3!"
    },
    {
      id: 3,
      question: "Une variable X suit une loi uniforme sur [0,5]. Quelle est P(X > 2 | X < 4) ?",
      options: ["1/2", "2/5", "3/5", "1/4"],
      correct: 0,
      explanation: "P(X>2|X<4) = P(2<X<4)/P(X<4) = (2/5)/(4/5) = 2/4 = 1/2"
    },
    {
      id: 4,
      question: "Soit X et Y indépendantes avec X~N(2,4) et Y~N(3,9). Que suit 2X - Y + 1 ?",
      options: ["N(2, 25)", "N(4, 25)", "N(2, 7)", "N(6, 13)"],
      correct: 0,
      explanation: "E(2X-Y+1) = 2×2-3+1 = 2. V(2X-Y+1) = 4×4+9 = 25. Donc N(2,25)"
    },
    {
      id: 5,
      question: "Un test a une sensibilité de 95% et une spécificité de 90%. Si 1% de la population est malade, quelle est la probabilité d'être malade sachant un test positif ?",
      options: ["≈ 8.7%", "95%", "90%", "1%"],
      correct: 0,
      explanation: "Formule de Bayes : P(M|T+) = P(T+|M)×P(M)/P(T+) = 0.95×0.01/(0.95×0.01+0.1×0.99) ≈ 0.087"
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

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/probability">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux Probabilités
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">🏆 Résultats du Bilan</h1>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <Trophy className="w-16 h-16 mx-auto text-orange-600 mb-4" />
              <CardTitle className="text-3xl">Score : {score}/{questions.length}</CardTitle>
              <CardDescription className="text-lg">
                {score === questions.length ? "Parfait ! Excellent travail !" :
                 score >= questions.length * 0.8 ? "Très bien ! Vous maîtrisez bien les probabilités." :
                 score >= questions.length * 0.6 ? "Bon travail, mais il y a encore des points à améliorer." :
                 "Il faut revoir certains concepts. N'hésitez pas à refaire les cours !"}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={resetQuiz} className="bg-gradient-to-r from-orange-500 to-orange-600">
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/probability">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux Probabilités
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-slate-900">🎯 Bilan Probabilités</h1>
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
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600"
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

export default ProbabilityBilanPage;
