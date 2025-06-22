
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, PlayCircle, PauseCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExamPage = () => {
  const { examId } = useParams();
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [examFinished, setExamFinished] = useState(false);

  const examData = {
    algebra: {
      title: 'Examen d\'Algèbre',
      duration: 3600,
      difficulty: 'Intermédiaire',
      questions: [
        {
          id: 1,
          question: 'Résoudre l\'équation : 2x² - 7x + 3 = 0',
          type: 'calculation',
          points: 8
        },
        {
          id: 2,
          question: 'Développer et simplifier : (3x - 2)² - (x + 1)(x - 1)',
          type: 'calculation', 
          points: 6
        },
        {
          id: 3,
          question: 'Une suite arithmétique a pour premier terme u₁ = 7 et raison r = 4. Calculer u₁₀ et S₁₀.',
          type: 'problem',
          points: 10
        }
      ]
    }
  };

  const exam = examData[examId as keyof typeof examData] || examData.algebra;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setIsRunning(false);
            setExamFinished(true);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startExam = () => {
    setIsRunning(true);
  };

  const pauseExam = () => {
    setIsRunning(false);
  };

  const finishExam = () => {
    setIsRunning(false);
    setExamFinished(true);
  };

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  if (examFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 flex items-center justify-center">
        <Card className="max-w-2xl mx-auto border-0 shadow-xl">
          <CardHeader className="text-center">
            <CheckCircle className="w-16 h-16 mx-auto text-green-600 mb-4" />
            <CardTitle className="text-2xl text-green-800">Examen terminé !</CardTitle>
            <CardDescription>Vos réponses ont été enregistrées</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">
                Temps utilisé : {formatTime(exam.duration - timeLeft)}
              </p>
              <p className="text-green-700">
                Questions répondues : {Object.keys(answers).length} / {exam.questions.length}
              </p>
            </div>
            <Link to={`/${examId}`}>
              <Button className="bg-gradient-to-r from-green-500 to-green-600">
                Retour au domaine
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to={`/${examId}`}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">{exam.title}</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-mono font-bold text-red-600">
                {formatTime(timeLeft)}
              </div>
              <Badge className="bg-yellow-100 text-yellow-800">
                {exam.difficulty}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!isRunning && timeLeft === exam.duration ? (
          // Start screen
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-slate-900 mb-4">{exam.title}</CardTitle>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Clock className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                  <p className="font-semibold">Durée</p>
                  <p className="text-sm text-slate-600">{Math.floor(exam.duration / 60)} minutes</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-8 h-8 mx-auto text-green-600 mb-2" />
                  <p className="font-semibold">Questions</p>
                  <p className="text-sm text-slate-600">{exam.questions.length} exercices</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <Badge className="w-8 h-8 mx-auto bg-yellow-600 mb-2" />
                  <p className="font-semibold">Difficulté</p>
                  <p className="text-sm text-slate-600">{exam.difficulty}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-slate-800 mb-2">Instructions</h3>
                <ul className="text-sm text-slate-600 space-y-1 text-left max-w-md mx-auto">
                  <li>• Répondez à toutes les questions</li>
                  <li>• Le temps est limité et affiché en permanence</li>
                  <li>• Vous pouvez passer d'une question à l'autre</li>
                  <li>• Vos réponses sont sauvegardées automatiquement</li>
                </ul>
              </div>
              <Button
                size="lg"
                onClick={startExam}
                className="bg-gradient-to-r from-blue-500 to-blue-600"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Commencer l'examen
              </Button>
            </CardContent>
          </Card>
        ) : (
          // Exam interface
          <div className="space-y-6">
            {/* Control bar */}
            <Card className="border-0 shadow-lg">
              <CardContent className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={isRunning ? pauseExam : () => setIsRunning(true)}
                  >
                    {isRunning ? <PauseCircle className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
                  </Button>
                  <span className="text-sm text-slate-600">
                    Question {currentQuestion + 1} / {exam.questions.length}
                  </span>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={finishExam}
                >
                  Terminer l'examen
                </Button>
              </CardContent>
            </Card>

            {/* Questions */}
            {exam.questions.map((question, index) => (
              <Card key={question.id} className={`border-0 shadow-lg ${index === currentQuestion ? '' : 'hidden'}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Question {question.id}</CardTitle>
                    <Badge variant="outline">{question.points} points</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-slate-800">{question.question}</p>
                  </div>
                  <textarea
                    className="w-full h-32 p-3 border border-slate-300 rounded-lg resize-none"
                    placeholder="Écrivez votre réponse ici..."
                    value={answers[question.id] || ''}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  />
                </CardContent>
              </Card>
            ))}

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                Question précédente
              </Button>
              <Button
                onClick={() => setCurrentQuestion(Math.min(exam.questions.length - 1, currentQuestion + 1))}
                disabled={currentQuestion === exam.questions.length - 1}
              >
                Question suivante
              </Button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ExamPage;
