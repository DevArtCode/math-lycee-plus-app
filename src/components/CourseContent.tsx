
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronDown, BookOpen, Calculator } from 'lucide-react';

interface Example {
  title: string;
  description: string;
  solution: string;
  domain: string;
}

interface Section {
  id: string;
  title: string;
  content: string[];
  examples: Example[];
  keyFormulas: string[];
}

interface CourseContentProps {
  title: string;
  sections: Section[];
  color: string;
}

const CourseContent: React.FC<CourseContentProps> = ({ title, sections, color }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedExample, setExpandedExample] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const toggleExample = (exampleId: string) => {
    setExpandedExample(expandedExample === exampleId ? null : exampleId);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-4`}>
          {title}
        </h2>
        <p className="text-slate-600">Cours complet avec exemples concrets et applications</p>
      </div>

      {sections.map((section) => (
        <Card key={section.id} className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleSection(section.id)}
              >
                {expandedSection === section.id ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </Button>
            </div>
          </CardHeader>

          {expandedSection === section.id && (
            <CardContent className="space-y-6">
              {/* Contenu théorique */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">📚 Théorie</h4>
                <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                  {section.content.map((item, index) => (
                    <p key={index} className="text-slate-700">• {item}</p>
                  ))}
                </div>
              </div>

              {/* Formules clés */}
              {section.keyFormulas.length > 0 && (
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">🔑 Formules clés</h4>
                  <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                    {section.keyFormulas.map((formula, index) => (
                      <p key={index} className="font-mono text-sm text-blue-800">{formula}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Exemples concrets */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">💡 Exemples concrets</h4>
                <div className="space-y-3">
                  {section.examples.map((example, index) => (
                    <Card key={index} className="border border-green-200">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg text-green-800">{example.title}</CardTitle>
                            <CardDescription className="text-green-600">
                              Application en {example.domain}
                            </CardDescription>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExample(`${section.id}-${index}`)}
                          >
                            <Calculator className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700 mb-3">{example.description}</p>
                        {expandedExample === `${section.id}-${index}` && (
                          <div className="bg-green-50 p-3 rounded-lg">
                            <h5 className="font-semibold text-green-800 mb-2">Solution :</h5>
                            <p className="text-green-700 whitespace-pre-line">{example.solution}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};

export default CourseContent;
