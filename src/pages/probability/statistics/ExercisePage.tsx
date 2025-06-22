
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProbabilityStatisticsExercisePage = () => {
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
              <h1 className="text-xl font-bold text-slate-900">📊 Exercices - Statistiques</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Exercices de statistiques descriptives</CardTitle>
            <CardDescription>
              Entraînez-vous sur les moyennes, médianes, quartiles...
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">Exercices en cours de développement...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProbabilityStatisticsExercisePage;
