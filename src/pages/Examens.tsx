
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Clock, Users, Award, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Examens = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  const examTypes = [
    {
      id: 'bac',
      title: 'Baccalauréat',
      description: 'Sujets type Bac avec barème officiel',
      duration: '4h',
      coefficient: 'Coef 7-9',
      color: 'from-red-500 to-red-600',
      icon: <Award className="w-6 h-6" />,
      subjects: ['Mathématiques', 'Sciences', 'Économie']
    },
    {
      id: 'concours',
      title: 'Concours',
      description: 'Préparation aux concours d\'entrée',
      duration: '3h',
      coefficient: 'Éliminatoire',
      color: 'from-blue-500 to-blue-600',
      icon: <Star className="w-6 h-6" />,
      subjects: ['Grandes Écoles', 'CPGE', 'Université']
    },
    {
      id: 'controle',
      title: 'Contrôles',
      description: 'Devoirs surveillés type lycée',
      duration: '2h',
      coefficient: 'Coef 2-4',
      color: 'from-green-500 to-green-600',
      icon: <FileText className="w-6 h-6" />,
      subjects: ['1ère', 'Terminale', 'Sup/Spé']
    },
    {
      id: 'concours-general',
      title: 'Concours Général',
      description: 'Concours Général des Lycées - Mathématiques',
      duration: '5h',
      coefficient: 'Excellence',
      color: 'from-purple-500 to-purple-600',
      icon: <Award className="w-6 h-6" />,
      subjects: ['Terminale', 'Excellence']
    }
  ];

  const availableExams = [
    // Bac 2024-2025 sujets réels
    {
      id: 'bac-2024-metropole-1',
      title: 'Bac Spé Maths - Métropole 2024 Jour 1',
      type: 'Baccalauréat',
      duration: '4h',
      difficulty: 'Standard',
      topics: ['Fonctions', 'Probabilités', 'Géométrie'],
      status: 'Disponible',
      participants: 2847,
      description: 'Sujet officiel Bac 2024 - Fonctions exponentielles, lois binomiales et géométrie dans l\'espace',
      content: `EXERCICE 1 (5 points) - Fonction exponentielle
Partie A : Étude d'une fonction
Soit f la fonction définie sur ℝ par f(x) = (2x - 1)e^(-x).
1. Calculer f'(x) et étudier le signe de f'(x).
2. Dresser le tableau de variations de f.
3. Déterminer les limites de f en -∞ et +∞.

Partie B : Équation
4. Démontrer que l'équation f(x) = 0 admet une unique solution α.
5. Donner un encadrement de α d'amplitude 0,1.

EXERCICE 2 (5 points) - Probabilités  
Un sac contient 20 billes : 12 rouges et 8 bleues.
On tire successivement et sans remise 3 billes du sac.

1. Calculer la probabilité que les 3 billes soient rouges.
2. Calculer la probabilité d'obtenir exactement 2 billes rouges.
3. On note X le nombre de billes rouges obtenues. Déterminer la loi de X.
4. Calculer E(X) et Var(X).

EXERCICE 3 (5 points) - Géométrie dans l'espace
Dans un repère orthonormé (O;i,j,k), on considère :
- Le point A(1, 0, 2)
- Le point B(3, 1, 0)  
- Le point C(0, 2, 1)

1. Calculer les coordonnées des vecteurs AB et AC.
2. Démontrer que les points A, B et C ne sont pas alignés.
3. Déterminer une équation cartésienne du plan (ABC).
4. Calculer la distance du point O au plan (ABC).

EXERCICE 4 (5 points) - QCM
Pour chacune des 5 questions, une seule réponse est exacte.
[Questions détaillées sur suites, fonctions, probabilités, géométrie, calcul intégral]`
    },
    {
      id: 'bac-2024-metropole-2',
      title: 'Bac Spé Maths - Métropole 2024 Jour 2',
      type: 'Baccalauréat',
      duration: '4h',
      difficulty: 'Standard',
      topics: ['Suites', 'Logarithmes', 'Probabilités conditionnelles'],
      status: 'Disponible',
      participants: 2654,
      description: 'Sujet officiel Bac 2024 - Suites géométriques, fonctions logarithmes et probabilités conditionnelles',
      content: `EXERCICE 1 (5 points) - Suites
On considère la suite (un) définie par u0 = 100 et un+1 = 0.8un + 15 pour tout entier n ≥ 0.

1. Calculer u1, u2 et u3.
2. On pose vn = un - 75. Montrer que (vn) est une suite géométrique.
3. Exprimer vn puis un en fonction de n.
4. Étudier la limite de la suite (un).
5. À partir de quel rang a-t-on un < 80 ?

EXERCICE 2 (5 points) - Fonction logarithme
Soit g la fonction définie sur ]0;+∞[ par g(x) = x - 1 - ln(x).

1. Calculer g'(x) et étudier ses variations.
2. En déduire que g(x) ≥ 0 pour tout x > 0.
3. Soit f(x) = (ln(x))²/x. Étudier les variations de f.
4. Résoudre l'équation f(x) = 1/e.

EXERCICE 3 (5 points) - Probabilités conditionnelles
Dans une entreprise, 60% des employés sont des femmes.
Parmi les femmes, 30% occupent un poste de cadre.
Parmi les hommes, 50% occupent un poste de cadre.

On choisit un employé au hasard. On note :
- F : "l'employé est une femme"
- C : "l'employé occupe un poste de cadre"

1. Calculer P(C).
2. Calculer P_C(F).
3. Les événements F et C sont-ils indépendants ?

EXERCICE 4 (5 points) - Géométrie et nombres complexes
Le plan est rapporté à un repère orthonormé (O;u,v).
On considère les points A, B, C d'affixes respectives :
zA = 1 + i, zB = -1 + 2i, zC = 2 - i

1. Calculer |zA|, |zB| et |zC|.
2. Calculer zB - zA et en déduire la nature du triangle OAB.
3. Déterminer l'affixe du point D tel que ABCD soit un parallélogramme.
4. Calculer l'aire du parallélogramme ABCD.`
    },
    {
      id: 'bac-2025-polynesie',
      title: 'Bac Spé Maths - Polynésie 2025',
      type: 'Baccalauréat',
      duration: '4h',
      difficulty: 'Standard',
      topics: ['Intégrales', 'Variables aléatoires', 'Géométrie plane'],
      status: 'Disponible',
      participants: 1923,
      description: 'Sujet récent 2025 - Calcul intégral, lois de probabilité continues et géométrie analytique',
      content: `EXERCICE 1 (5 points) - Calcul intégral
Soit f la fonction définie sur [0;1] par f(x) = xe^(x²).

1. Calculer ∫₀¹ f(x)dx.
2. On considère la suite (In) définie par In = ∫₀¹ x^n e^(x²) dx.
3. Établir une relation entre In+2 et In.
4. En déduire I2 et I4.

EXERCICE 2 (5 points) - Variables aléatoires continues
La durée de vie T (en années) d'un composant électronique suit une loi exponentielle de paramètre λ = 0,1.

1. Calculer P(T > 10).
2. Sachant que le composant fonctionne depuis 5 ans, quelle est la probabilité qu'il fonctionne encore dans 5 ans ?
3. On installe n composants identiques et indépendants. Combien faut-il en installer pour que la probabilité qu'au moins un fonctionne encore après 10 ans soit supérieure à 0,9 ?

EXERCICE 3 (5 points) - Géometrie analytique
Dans le plan muni d'un repère orthonormé (O;i,j), on considère :
- La droite D d'équation 2x + y - 3 = 0
- Le point A(1,1)

1. Le point A appartient-il à la droite D ?
2. Déterminer l'équation de la droite perpendiculaire à D passant par A.
3. Calculer les coordonnées du projeté orthogonal H de A sur D.
4. En déduire la distance de A à D.

EXERCICE 4 (5 points) - Algorithmique et programmation
On s'intéresse à l'algorithme suivant :

```python
def mystere(n):
    u = 1
    for i in range(n):
        u = 2*u + 1
    return u
```

1. Que renvoie mystere(3) ?
2. On note un la valeur renvoyée par mystere(n). Exprimer un+1 en fonction de un.
3. En déduire une expression de un en fonction de n.
4. Modifier l'algorithme pour qu'il calcule la somme u0 + u1 + ... + un.`
    },
    {
      id: 'bac-2024-centres-etrangers',
      title: 'Bac Spé Maths - Centres Étrangers 2024',
      type: 'Baccalauréat',
      duration: '4h',
      difficulty: 'Standard',
      topics: ['Fonction réciproque', 'Loi normale', 'Arithmétique'],
      status: 'Disponible',
      participants: 1456,
      description: 'Sujet centres étrangers - Fonctions réciproques, approximation normale et congruences',
      content: `EXERCICE 1 (5 points) - Fonction et fonction réciproque
Soit f la fonction définie sur ℝ par f(x) = x³ + 3x + 1.

1. Étudier les variations de f.
2. Démontrer que f admet une fonction réciproque f⁻¹ définie sur ℝ.
3. Calculer f(0) et f⁻¹(1).
4. Déterminer l'équation de la tangente à la courbe de f⁻¹ au point d'abscisse 1.

EXERCICE 2 (5 points) - Loi normale
Une machine produit des pièces dont la longueur X (en mm) suit une loi normale N(μ, σ²) avec μ = 50 et σ = 0,5.

1. Calculer P(49 < X < 51).
2. Une pièce est acceptée si sa longueur est comprise entre 49,5 et 50,5 mm. Calculer la probabilité qu'une pièce soit acceptée.
3. On prélève un échantillon de 100 pièces. Soit Y le nombre de pièces acceptées. Donner la loi de Y et calculer P(Y ≥ 95).

EXERCICE 3 (5 points) - Arithmétique  
1. Résoudre dans ℤ l'équation 17x + 12y = 1.
2. En déduire les solutions de 17x + 12y = 5.
3. Un confiseur dispose de boîtes de 17 chocolats et de boîtes de 12 chocolats. Montrer qu'il peut réaliser exactement toute commande de n chocolats dès que n ≥ 132.

EXERCICE 4 (5 points) - Géométrie dans l'espace
Dans l'espace muni d'un repère orthonormé (O;i,j,k), on considère :
- Le point A(2,1,0)
- Le point B(0,3,2)  
- Le point C(1,0,3)
- Le point D(3,2,1)

1. Calculer les coordonnées des vecteurs AB⃗, AC⃗ et AD⃗.
2. Les points A, B, C, D sont-ils coplanaires ?
3. Calculer le volume du tétraèdre ABCD.
4. Déterminer l'équation du plan médiateur du segment [AB].`
    },
    // Concours Général (section vide pour l'instant)
    {
      id: 'concours-general-placeholder',
      title: 'Concours Général - À venir',
      type: 'Concours Général',
      duration: '5h',
      difficulty: 'Très difficile',
      topics: ['En préparation'],
      status: 'Bientôt',
      participants: 0,
      description: 'Les sujets du Concours Général des Lycées seront bientôt disponibles',
      content: 'Contenu en cours de préparation...'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-800';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800';
      case 'Standard': return 'bg-blue-100 text-blue-800';
      case 'Difficile': return 'bg-orange-100 text-orange-800';
      case 'Très difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponible': return 'bg-green-100 text-green-800';
      case 'Bientôt': return 'bg-yellow-100 text-yellow-800';
      case 'Complet': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
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
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">📝 Examens blancs</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Préparez vos <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">examens</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Entraînez-vous avec des sujets d'examens réels dans les conditions officielles
          </p>
        </div>

        {/* Types d'examens */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {examTypes.map((exam) => (
            <Card key={exam.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exam.color} flex items-center justify-center text-white`}>
                    {exam.icon}
                  </div>
                  <Badge variant="outline">{exam.coefficient}</Badge>
                </div>
                <CardTitle className="text-xl text-slate-900">{exam.title}</CardTitle>
                <CardDescription>{exam.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Durée :</span>
                    <span className="font-medium">{exam.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Niveaux :</span>
                    <span className="font-medium text-xs">{exam.subjects.join(', ')}</span>
                  </div>
                </div>
                <Button className={`w-full bg-gradient-to-r ${exam.color} hover:opacity-90`}>
                  Voir les sujets
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Liste des examens disponibles */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">Sujets d'examens disponibles</CardTitle>
            <CardDescription>
              Choisissez un sujet et passez l'examen dans les conditions réelles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {availableExams.map((exam) => (
                <Card key={exam.id} className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">{exam.title}</h3>
                          <Badge variant="outline">{exam.type}</Badge>
                          <Badge className={getDifficultyColor(exam.difficulty)}>
                            {exam.difficulty}
                          </Badge>
                          <Badge className={getStatusColor(exam.status)}>
                            {exam.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">{exam.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{exam.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{exam.participants} participants</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {exam.topics.map((topic) => (
                            <Badge key={topic} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedExam(selectedExam === exam.id ? null : exam.id)}
                          disabled={exam.status === 'Bientôt'}
                        >
                          {selectedExam === exam.id ? 'Masquer' : 'Aperçu'}
                        </Button>
                        {exam.status === 'Disponible' && (
                          <Button size="sm" className="bg-gradient-to-r from-red-500 to-red-600">
                            <Play className="w-4 h-4 mr-1" />
                            Commencer
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    {selectedExam === exam.id && exam.content && (
                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-3">Contenu de l'épreuve :</h4>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <pre className="whitespace-pre-wrap text-sm text-slate-700 font-mono">
                            {exam.content}
                          </pre>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Examens;
