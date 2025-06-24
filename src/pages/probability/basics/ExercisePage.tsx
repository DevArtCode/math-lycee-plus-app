
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExerciseList from '@/components/ExerciseList';

const ProbabilityBasicsExercisePage = () => {
  const exercises = [
    {
      id: "pb-1",
      title: "Probabilité sur un dé",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "On lance un dé équilibré à 6 faces. Calculer la probabilité d'obtenir un nombre supérieur à 4.",
      hint: "Identifiez les cas favorables",
      solution: "Les nombres supérieurs à 4 sont {5, 6}.\nNombre de cas favorables : 2\nNombre de cas possibles : 6\nP = 2/6 = 1/3",
      explanation: "Les nombres supérieurs à 4 sont {5, 6}. Donc P = 2/6 = 1/3.",
      category: "Probabilité classique"
    },
    {
      id: "pb-2",
      title: "Tirage dans une urne",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Dans une urne, il y a 3 boules rouges et 7 boules bleues. Calculer la probabilité de tirer une boule rouge.",
      hint: "Utilisez la définition classique de la probabilité",
      solution: "Nombre de boules rouges : 3\nNombre total de boules : 3 + 7 = 10\nP(Rouge) = 3/10 = 0,3",
      explanation: "Il y a 3 boules rouges sur 10 boules au total. P(Rouge) = 3/10.",
      category: "Probabilité classique"
    },
    {
      id: "pb-3",
      title: "Événement complémentaire",
      difficulty: "Débutant" as const,
      points: 10,
      statement: "Si P(A) = 0,3, calculer P(Ā) (probabilité de l'événement complémentaire).",
      hint: "P(A) + P(Ā) = 1",
      solution: "P(Ā) = 1 - P(A) = 1 - 0,3 = 0,7",
      explanation: "P(Ā) = 1 - P(A) = 1 - 0,3 = 0,7",
      category: "Événements complémentaires"
    },
    {
      id: "pb-4",
      title: "Union d'événements incompatibles",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "On tire une carte dans un jeu de 52 cartes. Calculer la probabilité d'obtenir un As ou un Roi.",
      hint: "Les événements 'As' et 'Roi' sont incompatibles",
      solution: "Nombre d'As : 4\nNombre de Rois : 4\nComme As et Roi sont incompatibles :\nP(As ∪ Roi) = P(As) + P(Roi) = 4/52 + 4/52 = 8/52 = 2/13",
      explanation: "Il y a 4 As et 4 Rois, événements incompatibles. P = 4/52 + 4/52 = 8/52.",
      category: "Union d'événements"
    },
    {
      id: "pb-5",
      title: "Probabilité avec deux dés",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "Lors du lancer de deux dés, calculer la probabilité d'obtenir une somme égale à 7.",
      hint: "Énumérez tous les couples possibles",
      solution: "Couples donnant 7 : (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\nNombre de cas favorables : 6\nNombre de cas possibles : 6 × 6 = 36\nP = 6/36 = 1/6",
      explanation: "Les couples donnant 7 : (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Soit 6 cas sur 36.",
      category: "Probabilité avec plusieurs objets"
    },
    {
      id: "pb-6",
      title: "Événements incompatibles",
      difficulty: "Intermédiaire" as const,
      points: 12,
      statement: "Si A et B sont deux événements incompatibles avec P(A) = 0,4 et P(B) = 0,3, calculer P(A ∪ B).",
      hint: "Événements incompatibles : P(A ∩ B) = 0",
      solution: "A et B incompatibles ⟹ P(A ∩ B) = 0\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0,4 + 0,3 - 0 = 0,7",
      explanation: "A et B incompatibles ⟹ P(A ∪ B) = P(A) + P(B) = 0,4 + 0,3 = 0,7",
      category: "Événements incompatibles"
    },
    {
      id: "pb-7",
      title: "Probabilité complémentaire",
      difficulty: "Débutant" as const,
      points: 10,
      statement: "Dans une classe de 30 élèves, 18 sont des filles. Si on choisit un élève au hasard, calculer la probabilité que ce soit un garçon.",
      hint: "Calculez d'abord le nombre de garçons",
      solution: "Nombre de garçons : 30 - 18 = 12\nP(Garçon) = 12/30 = 2/5 = 0,4",
      explanation: "Il y a 30 - 18 = 12 garçons. P(Garçon) = 12/30 = 2/5",
      category: "Probabilité classique"
    },
    {
      id: "pb-8",
      title: "Lancer de pièce multiple",
      difficulty: "Intermédiaire" as const,
      points: 14,
      statement: "On lance une pièce 3 fois. Calculer la probabilité d'obtenir exactement 2 faces.",
      hint: "Énumérez les séquences possibles",
      solution: "Séquences avec exactement 2 faces : FFP, FPF, PFF\nNombre de cas favorables : 3\nNombre de cas possibles : 2³ = 8\nP = 3/8",
      explanation: "Les cas favorables : FFP, FPF, PFF. Soit 3 cas sur 2³ = 8 possibilités.",
      category: "Probabilité avec répétition"
    },
    {
      id: "pb-9",
      title: "Formule de Poincaré",
      difficulty: "Avancé" as const,
      points: 16,
      statement: "Si P(A ∩ B) = 0,2, P(A) = 0,5 et P(B) = 0,4, calculer P(A ∪ B).",
      hint: "Utilisez la formule P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
      solution: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0,5 + 0,4 - 0,2 = 0,7",
      explanation: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0,5 + 0,4 - 0,2 = 0,7",
      category: "Formule d'inclusion-exclusion"
    },
    {
      id: "pb-10",
      title: "Événement certain",
      difficulty: "Débutant" as const,
      points: 8,
      statement: "Expliquer ce qu'est un événement de probabilité 1 et donner un exemple.",
      hint: "Un événement qui se produit toujours",
      solution: "Un événement de probabilité 1 est un événement certain qui se produit toujours.\nExemple : En lançant un dé, obtenir un nombre entre 1 et 6.",
      explanation: "Un événement de probabilité 1 est un événement certain qui se produit toujours.",
      category: "Concepts fondamentaux"
    }
  ];

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
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-orange-600" />
                <h1 className="text-xl font-bold text-slate-900">Exercices - Bases de probabilité</h1>
              </div>
            </div>
            <Link to="/probability/basics/course">
              <Button variant="outline">
                Revoir le cours
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExerciseList exercises={exercises} color="from-orange-600 to-orange-800" />
        
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6 border-2 border-orange-200">
          <h3 className="text-xl font-bold text-orange-900 mb-4">🎯 QCM - Test de connaissances</h3>
          <p className="text-slate-600 mb-4">
            Testez vos connaissances avec notre QCM de 10 questions sur les bases de probabilité.
          </p>
          <Link to="/probability/basics/qcm">
            <Button className="bg-gradient-to-r from-orange-600 to-orange-800">
              Commencer le QCM
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProbabilityBasicsExercisePage;
