
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, AlertTriangle, CheckCircle, Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const ExamPage = () => {
  const { examId } = useParams();
  const { toast } = useToast();
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);

  const exams = {
    'algebra-basic': {
      title: 'Examen Algèbre - Niveau Basique',
      duration: 60, // minutes
      difficulty: 'Facile',
      description: 'Examen sur les bases de l\'algèbre',
      questions: [
        {
          id: 1,
          question: 'Résoudre l\'équation : 2x + 5 = 13',
          options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
          correct: 1,
          points: 5
        },
        {
          id: 2,
          question: 'Développer : (x + 3)²',
          options: ['x² + 6x + 9', 'x² + 3x + 9', 'x² + 6x + 3', 'x² + 9'],
          correct: 0,
          points: 5
        },
        {
          id: 3,
          question: 'Factoriser : x² - 16',
          options: ['(x-4)(x+4)', '(x-4)²', '(x+4)²', 'Ne se factorise pas'],
          correct: 0,
          points: 8
        }
      ]
    },
    'algebra-advanced': {
      title: 'Examen Algèbre - Niveau Avancé',
      duration: 120,
      difficulty: 'Difficile',
      description: 'Examen approfondi sur l\'algèbre avancée',
      questions: [
        {
          id: 1,
          question: 'Résoudre dans ℂ : z² + z + 1 = 0',
          options: ['z = (-1 ± i√3)/2', 'z = (-1 ± √3)/2', 'z = (1 ± i√3)/2', 'Pas de solution'],
          correct: 0,
          points: 10
        },
        {
          id: 2,
          question: 'Calculer pgcd(84, 36) par l\'algorithme d\'Euclide',
          options: ['6', '12', '18', '24'],
          correct: 1,
          points: 12
        },
        {
          id: 3,
          question: 'Limite de la suite uₙ = (3n² + 2n)/(2n² - 1) quand n → +∞',
          options: ['0', '1', '3/2', '+∞'],
          correct: 2,
          points: 15
        }
      ]
    },
    'mega': {
      title: 'Méga Examen Interdisciplinaire',
      duration: 180,
      difficulty: 'Expert',
      description: 'Examen combinant tous les domaines mathématiques',
      questions: [
        {
          id: 1,
          question: 'Dans le plan complexe, les points A(1+i), B(2-i), C(-1+2i) forment-ils un triangle rectangle ?',
          options: ['Oui, rectangle en A', 'Oui, rectangle en B', 'Oui, rectangle en C', 'Non'],
          correct: 0,
          points: 20
        },
        {
          id: 2,
          question: 'Soit f(x) = x²e^(-x). Quel est le maximum de f sur ℝ⁺ ?',
          options: ['f(1) = 1/e', 'f(2) = 4/e²', 'f(0) = 0', 'Pas de maximum'],
          correct: 1,
          points: 25
        }
      ]
    }
  };

  const currentExam = exams[examId as keyof typeof exams];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && !isPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => {
          if (timeLeft <= 1) {
            handleTimeUp();
            return 0;
          }
          return timeLeft - 1;
        });
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      handleTimeUp();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused, timeLeft]);

  const handleTimeUp = () => {
    setIsActive(false);
    setExamFinished(true);
    toast({
      title: "Temps écoulé !",
      description: "L'examen est terminé automatiquement.",
    });
  };

  const startExam = () => {
    setTimeLeft(currentExam.duration * 60);
    setIsActive(true);
    setExamStarted(true);
    toast({
      title: "Examen commencé !",
      description: `Vous avez ${currentExam.duration} minutes.`,
    });
  };

  const pauseExam = () => {
    setIsPaused(!isPaused);
  };

  const resetExam = () => {
    setTimeLeft(currentExam.duration * 60);
    setIsActive(false);
    setIsPaused(false);
    setCurrentQuestion(0);
    setAnswers({});
    setExamStarted(false);
    setExamFinished(false);
  };

  const finishExam = () => {
    setIsActive(false);
    setExamFinished(true);
    const score = calculateScore();
    toast({
      title: "Examen terminé !",
      description: `Votre score : ${score}/${getTotalPoints()} points`,
    });
  };

  const calculateScore = () => {
    return currentExam.questions.reduce((total, question, index) => {
      if (answers[index] === question.options[question.correct]) {
        return total + question.points;
      }
      return total;
    }, 0);
  };

  const getTotalPoints = () => {
    return currentExam.questions.reduce((total, question) => total + question.points, 0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const getTimeColor = () => {
    const percentage = (timeLeft / (currentExam.duration * 60)) * 100;
    if (percentage > 50) return 'text-green-600';
    if (percentage > 20) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (!currentExam) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="py-8 text-center">
            <AlertTriangle className="w-16 h-16 mx-auto text-red-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Examen non trouvé</h2>
            <p className="text-slate-600 mb-4">L'examen demandé n'existe pas.</p>
            <Link to="/">
              <Button>Retour à l'accueil</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-orange-600" />
                <h1 className="text-xl font-bold text-slate-900">{currentExam.title}</h1>
              </div>
            </div>
            {examStarted && !examFinished && (
              <div className="flex items-center space-x-4">
                <div className={`text-2xl font-mono font-bold ${getTimeColor()}`}>
                  {formatTime(timeLeft)}
                </div>
                <Button variant="outline" size="sm" onClick={pauseExam}>
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!examStarted && !examFinished && (
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-orange-800 mb-4">{currentExam.title}</CardTitle>
              <CardDescription className="text-lg">{currentExam.description}</CardDescription>
              <div className="flex justify-center items-center gap-6 mt-6">
                <Badge className={
                  currentExam.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                  currentExam.difficulty === 'Difficile' ? 'bg-red-100 text-red-800' :
                  'bg-purple-100 text-purple-800'
                }>
                  {currentExam.difficulty}
                </Badge>
                <div className="flex items-center text-slate-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {currentExam.duration} minutes
                </div>
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {currentExam.questions.length} questions
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-orange-800 mb-3">📋 Instructions :</h4>
                <ul className="text-sm text-orange-700 space-y-2 text-left max-w-2xl mx-auto">
                  <li>• Lisez attentivement chaque question</li>
                  <li>• Sélectionnez la meilleure réponse parmi les choix proposés</li>
                  <li>• Vous pouvez revenir sur vos réponses tant que le temps n'est pas écoulé</li>
                  <li>• L'examen se termine automatiquement à la fin du temps imparti</li>
                  <li>• Gérez bien votre temps !</li>
                </ul>
              </div>
              <Button size="lg" onClick={startExam} className="bg-orange-600 hover:bg-orange-700">
                <Play className="w-5 h-5 mr-2" />
                Commencer l'examen
              </Button>
            </CardContent>
          </Card>
        )}

        {examStarted && !examFinished && (
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Question {currentQuestion + 1} sur {currentExam.questions.length}</CardTitle>
                  <Badge>{currentExam.questions[currentQuestion].points} points</Badge>
                </div>
                <Progress value={((currentQuestion + 1) / currentExam.questions.length) * 100} />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-medium mb-4">
                  {currentExam.questions[currentQuestion].question}
                </h3>
                <div className="space-y-3">
                  {currentExam.questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant={answers[currentQuestion] === option ? "default" : "outline"}
                      className="w-full text-left justify-start p-4 h-auto"
                      onClick={() => handleAnswerSelect(currentQuestion, option)}
                    >
                      {String.fromCharCode(65 + index)}. {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                Question précédente
              </Button>
              
              {currentQuestion < currentExam.questions.length - 1 ? (
                <Button
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Question suivante
                </Button>
              ) : (
                <Button
                  onClick={finishExam}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Terminer l'examen
                </Button>
              )}
            </div>
          </div>
        )}

        {examFinished && (
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-green-800 mb-4">Examen terminé !</CardTitle>
              <div className="text-6xl mb-6">🎉</div>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {calculateScore()} / {getTotalPoints()}
                </div>
                <div className="text-lg text-slate-600">
                  Score : {Math.round((calculateScore() / getTotalPoints()) * 100)}%
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-lg">Récapitulatif des réponses :</h4>
                {currentExam.questions.map((question, index) => (
                  <div key={index} className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">Question {index + 1}</span>
                      <Badge className={
                        answers[index] === question.options[question.correct] 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }>
                        {answers[index] === question.options[question.correct] 
                          ? `+${question.points} pts` 
                          : '0 pts'}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{question.question}</p>
                    <div className="text-sm">
                      <div className={`${answers[index] === question.options[question.correct] ? 'text-green-600' : 'text-red-600'}`}>
                        Votre réponse : {answers[index] || 'Non répondu'}
                      </div>
                      <div className="text-green-600">
                        Bonne réponse : {question.options[question.correct]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                <Button onClick={resetExam} variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Recommencer
                </Button>
                <Link to="/mega-bilan">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Méga Bilans
                  </Button>
                </Link>
                <Link to="/">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Retour à l'accueil
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ExamPage;
