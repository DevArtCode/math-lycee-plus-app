
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const LogicBasicsExercisePage = () => {
  const exercises = [
    {
      id: "lb-1",
      title: "Translation d'une implication",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Soit P : 'Il pleut' et Q : 'Je prends mon parapluie'. Traduire en logique : 'Si il ne pleut pas, je ne prends pas mon parapluie'",
      hint: "Identifiez d'abord les propositions négatives",
      solution: "¬P ⟹ ¬Q",
      explanation: "'Si il ne pleut pas (¬P), je ne prends pas mon parapluie (¬Q)' se traduit par ¬P ⟹ ¬Q",
      category: "Traduction logique"
    },
    {
      id: "lb-2",
      title: "Contraposée d'une implication",
      difficulty: "Intermédiaire" as const,
      points: 10,
      statement: "Écrire la contraposée de : 'Si n est pair alors n² est pair'",
      hint: "La contraposée de P ⟹ Q est ¬Q ⟹ ¬P",
      solution: "Si n² est impair alors n est impair",
      explanation: "La contraposée de P ⟹ Q est ¬Q ⟹ ¬P. Ici : 'Si n² est impair alors n est impair'",
      category: "Contraposée"
    },
    {
      id: "lb-3",
      title: "Table de vérité",
      difficulty: "Débutant" as const,
      points: 12,
      statement: "Construire la table de vérité de P ∨ Q et déterminer quand cette expression est fausse",
      hint: "P ∨ Q signifie 'P ou Q'",
      solution: "P | Q | P∨Q\nV | V |  V\nV | F |  V\nF | V |  V\nF | F |  F\n\nP ∨ Q est faux seulement quand P et Q sont tous deux faux",
      explanation: "P ∨ Q (P ou Q) n'est faux que lorsque P et Q sont tous les deux faux",
      category: "Tables de vérité"
    },
    {
      id: "lb-4",
      title: "Équivalence logique",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Montrer que P ⟹ Q est équivalent à ¬P ∨ Q",
      hint: "Utilisez les tables de vérité",
      solution: "P | Q | P⟹Q | ¬P | ¬P∨Q\nV | V |  V   | F  |  V\nV | F |  F   | F  |  F\nF | V |  V   | V  |  V\nF | F |  V   | V  |  V\n\nLes colonnes P⟹Q et ¬P∨Q sont identiques",
      explanation: "P ⟹ Q est logiquement équivalent à ¬P ∨ Q (non P ou Q)",
      category: "Équivalences"
    },
    {
      id: "lb-5",
      title: "Démonstration par l'absurde",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Expliquer la méthode pour démontrer par l'absurde que √2 est irrationnel",
      hint: "On suppose le contraire de ce qu'on veut démontrer",
      solution: "1) On suppose que √2 est rationnel\n2) Alors √2 = p/q avec p,q entiers, pgcd(p,q)=1\n3) Donc 2 = p²/q², soit p² = 2q²\n4) Donc p² est pair, donc p est pair\n5) Soit p = 2k, alors 4k² = 2q², soit q² = 2k²\n6) Donc q² est pair, donc q est pair\n7) Contradiction : p et q sont tous deux pairs, donc pgcd(p,q) ≥ 2",
      explanation: "Dans une démonstration par l'absurde, on suppose le contraire de ce qu'on veut démontrer et on arrive à une contradiction",
      category: "Démonstration"
    },
    {
      id: "lb-6",
      title: "Réciproque d'une implication",
      difficulty: "Débutant" as const,
      points: 10,
      statement: "Écrire la réciproque de : 'Si x > 0 alors x² > 0'",
      hint: "La réciproque de P ⟹ Q est Q ⟹ P",
      solution: "Si x² > 0 alors x > 0",
      explanation: "La réciproque de P ⟹ Q est Q ⟹ P. Attention : la réciproque n'est pas toujours vraie (ici elle est fausse car x² > 0 même si x < 0)",
      category: "Réciproque"
    },
    {
      id: "lb-7",
      title: "Lois de De Morgan",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Appliquer les lois de De Morgan pour simplifier : ¬(P ∧ Q)",
      hint: "¬(P ∧ Q) = ¬P ∨ ¬Q",
      solution: "¬(P ∧ Q) = ¬P ∨ ¬Q",
      explanation: "Première loi de De Morgan : ¬(P ∧ Q) ≡ ¬P ∨ ¬Q (la négation du 'et' devient 'ou' des négations)",
      category: "Lois de De Morgan"
    },
    {
      id: "lb-8",
      title: "Condition nécessaire et suffisante",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Expliquer ce que signifie 'P est condition nécessaire et suffisante pour Q'",
      hint: "Cela implique une double implication",
      solution: "P est condition nécessaire et suffisante pour Q signifie P ⟺ Q, c'est-à-dire (P ⟹ Q) ∧ (Q ⟹ P)",
      explanation: "P ⟺ Q signifie que P et Q ont la même valeur de vérité : P est vrai si et seulement si Q est vrai",
      category: "Équivalence"
    },
    {
      id: "lb-9",
      title: "Analyse d'implications",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Soit P : 'x est divisible par 4' et Q : 'x est pair'. Analyser la relation entre P et Q",
      hint: "Vérifiez si P ⟹ Q, Q ⟹ P, ou P ⟺ Q",
      solution: "P ⟹ Q est vrai (si x est divisible par 4, alors x est pair)\nQ ⟹ P est faux (x peut être pair sans être divisible par 4, ex: 6)\nDonc P ⟹ Q mais Q ⟹/ P",
      explanation: "Si x est divisible par 4, alors x est forcément pair, donc P ⟹ Q. Mais la réciproque est fausse",
      category: "Analyse logique"
    },
    {
      id: "lb-10",
      title: "Négation complexe",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Simplifier : ¬(P ∨ Q) en utilisant les lois de De Morgan",
      hint: "Appliquez la deuxième loi de De Morgan",
      solution: "¬(P ∨ Q) = ¬P ∧ ¬Q",
      explanation: "Deuxième loi de De Morgan : ¬(P ∨ Q) ≡ ¬P ∧ ¬Q (la négation du 'ou' devient 'et' des négations)",
      category: "Lois de De Morgan"
    },
    {
      id: "lb-11",
      title: "Démonstration par contraposition",
      difficulty: "Avancé" as const,
      points: 18,
      statement: "Expliquer comment démontrer par contraposition que : 'Si n² est impair alors n est impair'",
      hint: "Utilisez la contraposée qui est équivalente",
      solution: "On démontre la contraposée : 'Si n est pair alors n² est pair'\nSi n est pair, alors n = 2k pour un entier k\nDonc n² = (2k)² = 4k² = 2(2k²)\nDonc n² est pair",
      explanation: "La contraposition utilise l'équivalence P ⟹ Q ≡ ¬Q ⟹ ¬P. On démontre la contraposée qui est souvent plus facile",
      category: "Démonstration"
    },
    {
      id: "lb-12",
      title: "Tautologie",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Montrer que P ∨ ¬P est une tautologie",
      hint: "Une tautologie est toujours vraie",
      solution: "P | ¬P | P∨¬P\nV | F  |  V\nF | V  |  V\n\nP ∨ ¬P est toujours vrai",
      explanation: "Une tautologie est une proposition logiquement vraie dans tous les cas. P ∨ ¬P (principe du tiers exclu) en est un exemple",
      category: "Tautologies"
    },
    {
      id: "lb-13",
      title: "Distribution logique",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Développer : P ⟹ (Q ∨ R) en utilisant la distributivité",
      hint: "L'implication se distribue sur la disjonction",
      solution: "P ⟹ (Q ∨ R) ≡ (P ⟹ Q) ∨ (P ⟹ R)",
      explanation: "Distribution de l'implication sur la disjonction : si P implique (Q ou R), alors (P implique Q) ou (P implique R)",
      category: "Distributivité"
    },
    {
      id: "lb-14",
      title: "Négation d'implication",
      difficulty: "Avancé" as const,
      points: 15,
      statement: "Simplifier la négation de P ⟹ Q",
      hint: "Utilisez l'équivalence P ⟹ Q ≡ ¬P ∨ Q",
      solution: "¬(P ⟹ Q) ≡ ¬(¬P ∨ Q) ≡ P ∧ ¬Q",
      explanation: "¬(P ⟹ Q) ≡ ¬(¬P ∨ Q) ≡ P ∧ ¬Q. La négation d'une implication signifie que P est vrai et Q est faux",
      category: "Négation"
    },
    {
      id: "lb-15",
      title: "Logique propositionnelle",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Expliquer pourquoi en logique propositionnelle, une proposition ne peut avoir que deux valeurs",
      hint: "Principe de bivalence",
      solution: "En logique propositionnelle, une proposition ne peut être que vraie (V) ou fausse (F). C'est le principe de bivalence : il n'y a pas de troisième valeur possible.",
      explanation: "En logique propositionnelle, une proposition ne peut être que vraie ou fausse, conformément au principe de bivalence",
      category: "Fondements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/logic">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la Logique
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-purple-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Logique de base</h1>
              </div>
            </div>
            <Link to="/logic/basics/course">
              <Button variant="outline">
                Revoir le cours
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-purple-600 to-purple-800" />
        
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6 border-2 border-purple-200">
          <h3 className="text-xl font-bold text-purple-900 mb-4">🎯 QCM - Test de connaissances</h3>
          <p className="text-slate-600 mb-4">
            Testez vos connaissances avec notre QCM de 15 questions sur la logique de base.
          </p>
          <Link to="/logic/basics/qcm">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-800">
              Commencer le QCM
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogicBasicsExercisePage;
