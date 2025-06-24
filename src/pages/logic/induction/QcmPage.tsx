
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const LogicInductionQcmPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({});

  const exercises = [
    {
      id: 1,
      question: "Le principe de récurrence permet de démontrer qu'une propriété P(n) est vraie pour :",
      options: ["Tous les entiers naturels n ≥ n₀", "Quelques entiers naturels", "Tous les entiers relatifs", "Seulement n₀"],
      correct: 0,
      explanation: "Le principe de récurrence prouve qu'une propriété est vraie pour tous les entiers naturels à partir d'un certain rang n₀."
    },
    {
      id: 2,
      question: "Les deux étapes essentielles d'une démonstration par récurrence sont :",
      options: ["Initialisation et hérédité", "Hypothèse et conclusion", "Prémisse et conséquence", "Base et induction"],
      correct: 0,
      explanation: "Une récurrence nécessite l'initialisation (vérifier P(n₀)) et l'hérédité (montrer P(k) ⟹ P(k+1))."
    },
    {
      id: 3,
      question: "Pour démontrer que ∑(i=1 à n) i = n(n+1)/2, l'étape d'initialisation consiste à vérifier :",
      options: ["P(1) : 1 = 1(1+1)/2", "P(0) : 0 = 0", "P(n) pour n quelconque", "Que la formule est vraie"],
      correct: 0,
      explanation: "L'initialisation vérifie la propriété pour le plus petit rang, ici n=1 : ∑(i=1 à 1) i = 1 = 1×2/2."
    },
    {
      id: 4,
      question: "Dans l'étape d'hérédité, on suppose P(k) vraie et on démontre :",
      options: ["P(k+1)", "P(k-1)", "P(k) ∧ P(k+1)", "¬P(k)"],
      correct: 0,
      explanation: "L'hérédité consiste à montrer que si P(k) est vraie, alors P(k+1) l'est aussi."
    },
    {
      id: 5,
      question: "La récurrence forte (ou complète) utilise comme hypothèse :",
      options: ["P(n₀) ∧ P(n₀+1) ∧ ... ∧ P(k)", "Seulement P(k)", "P(k+1)", "P(k) ∨ P(k+1)"],
      correct: 0,
      explanation: "La récurrence forte suppose que P est vraie pour tous les entiers de n₀ à k pour démontrer P(k+1)."
    },
    {
      id: 6,
      question: "Pour démontrer par récurrence que 2ⁿ > n pour n ≥ 1, quelle est l'hypothèse de récurrence ?",
      options: ["2ᵏ > k", "2ᵏ⁺¹ > k+1", "2ⁿ > n", "2¹ > 1"],
      correct: 0,
      explanation: "L'hypothèse de récurrence est que la propriété est vraie au rang k : 2ᵏ > k."
    },
    {
      id: 7,
      question: "La récurrence peut être utilisée pour démontrer :",
      options: ["Des formules, inégalités et propriétés de divisibilité", "Seulement des égalités", "Seulement des inégalités", "Seulement des formules"],
      correct: 0,
      explanation: "La récurrence s'applique à tout type de propriété dépendant d'un entier naturel."
    },
    {
      id: 8,
      question: "Pour démontrer que n! ≥ 2ⁿ⁻¹ pour n ≥ 1, quel est le cas de base ?",
      options: ["1! ≥ 2⁰, soit 1 ≥ 1", "0! ≥ 2⁻¹", "n! ≥ 2ⁿ⁻¹", "2! ≥ 2¹"],
      correct: 0,
      explanation: "Le cas de base vérifie la propriété pour n=1 : 1! = 1 ≥ 2⁰ = 1."
    },
    {
      id: 9,
      question: "Si on veut démontrer une propriété pour n ≥ 5, l'initialisation se fait à :",
      options: ["n = 5", "n = 0", "n = 1", "n quelconque"],
      correct: 0,
      explanation: "L'initialisation se fait toujours au plus petit rang concerné par la propriété."
    },
    {
      id: 10,
      question: "L'erreur la plus courante dans une récurrence est :",
      options: ["Oublier l'initialisation", "Mal faire l'hérédité", "Utiliser une mauvaise hypothèse", "Ne pas conclure"],
      correct: 0,
      explanation: "Beaucoup d'étudiants oublient de vérifier le cas de base, ce qui rend la démonstration incomplète."
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/logic/induction/exercise">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux exercices
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-slate-900">🔄 QCM - Récurrence</h1>
            </div>
            <Link to="/logic/induction/course">
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
                          ? 'border-purple-500 bg-purple-50'
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
                    className="mt-4 bg-gradient-to-r from-purple-500 to-purple-600"
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

export default LogicInductionQcmPage;
