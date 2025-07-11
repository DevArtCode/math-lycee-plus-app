
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Algebra from "./pages/Algebra";
import Analysis from "./pages/Analysis";
import Geometry from "./pages/Geometry";
import Probability from "./pages/Probability";
import Logic from "./pages/Logic";
import Algorithm from "./pages/Algorithm";

// Algebra chapter pages
import AlgebraSetsCoursePage from "./pages/algebra/sets/CoursePage";
import AlgebraSetsExercisePage from "./pages/algebra/sets/ExercisePage";
import AlgebraCalculusCoursePage from "./pages/algebra/calculus/CoursePage";
import AlgebraCalculusExercisePage from "./pages/algebra/calculus/ExercisePage";
import AlgebraArithmeticCoursePage from "./pages/algebra/arithmetic/CoursePage";
import AlgebraArithmeticExercisePage from "./pages/algebra/arithmetic/ExercisePage";
import AlgebraSequencesCoursePage from "./pages/algebra/sequences/CoursePage";
import AlgebraSequencesExercisePage from "./pages/algebra/sequences/ExercisePage";

// Geometry chapter pages
import GeometryPlaneCoursePage from "./pages/geometry/plane/CoursePage";
import GeometryPlaneExercisePage from "./pages/geometry/plane/ExercisePage";
import GeometrySpaceCoursePage from "./pages/geometry/space/CoursePage";
import GeometrySpaceExercisePage from "./pages/geometry/space/ExercisePage";
import GeometryTrigonometryCoursePage from "./pages/geometry/trigonometry/CoursePage";
import GeometryTrigonometryExercisePage from "./pages/geometry/trigonometry/ExercisePage";
import GeometryComplexCoursePage from "./pages/geometry/complex/CoursePage";
import GeometryComplexExercisePage from "./pages/geometry/complex/ExercisePage";

// Probability chapter pages
import ProbabilityBasicsCoursePage from "./pages/probability/basics/CoursePage";
import ProbabilityBasicsExercisePage from "./pages/probability/basics/ExercisePage";
import ProbabilityBasicsQcmPage from "./pages/probability/basics/QcmPage";
import ProbabilityConditionalCoursePage from "./pages/probability/conditional/CoursePage";
import ProbabilityConditionalExercisePage from "./pages/probability/conditional/ExercisePage";
import ProbabilityConditionalQcmPage from "./pages/probability/conditional/QcmPage";
import ProbabilityVariablesCoursePage from "./pages/probability/variables/CoursePage";
import ProbabilityVariablesExercisePage from "./pages/probability/variables/ExercisePage";
import ProbabilityVariablesQcmPage from "./pages/probability/variables/QcmPage";
import ProbabilityContinuousCoursePage from "./pages/probability/continuous/CoursePage";
import ProbabilityContinuousExercisePage from "./pages/probability/continuous/ExercisePage";
import ProbabilityContinuousQcmPage from "./pages/probability/continuous/QcmPage";
import ProbabilityStatisticsCoursePage from "./pages/probability/statistics/CoursePage";
import ProbabilityStatisticsExercisePage from "./pages/probability/statistics/ExercisePage";
import ProbabilityStatisticsQcmPage from "./pages/probability/statistics/QcmPage";

// Logic chapter pages
import LogicBasicsCoursePage from "./pages/logic/basics/CoursePage";
import LogicBasicsExercisePage from "./pages/logic/basics/ExercisePage";
import LogicBasicsQcmPage from "./pages/logic/basics/QcmPage";
import LogicQuantifiersCoursePage from "./pages/logic/quantifiers/CoursePage";
import LogicQuantifiersExercisePage from "./pages/logic/quantifiers/ExercisePage";
import LogicQuantifiersQcmPage from "./pages/logic/quantifiers/QcmPage";
import LogicSetsCoursePage from "./pages/logic/sets/CoursePage";
import LogicSetsExercisePage from "./pages/logic/sets/ExercisePage";
import LogicSetsQcmPage from "./pages/logic/sets/QcmPage";
import LogicInductionCoursePage from "./pages/logic/induction/CoursePage";
import LogicInductionExercisePage from "./pages/logic/induction/ExercisePage";
import LogicInductionQcmPage from "./pages/logic/induction/QcmPage";

// Algorithm chapter pages
import AlgorithmBasicsCoursePage from "./pages/algorithm/basics/CoursePage";
import AlgorithmBasicsExercisePage from "./pages/algorithm/basics/ExercisePage";
import AlgorithmFunctionsCoursePage from "./pages/algorithm/functions/CoursePage";
import AlgorithmFunctionsExercisePage from "./pages/algorithm/functions/ExercisePage";
import AlgorithmMathAppsCoursePage from "./pages/algorithm/math-apps/CoursePage";
import AlgorithmMathAppsExercisePage from "./pages/algorithm/math-apps/ExercisePage";
import AlgorithmSimulationCoursePage from "./pages/algorithm/simulation/CoursePage";
import AlgorithmSimulationExercisePage from "./pages/algorithm/simulation/ExercisePage";

// Bilan and exam pages
import AlgebraBilanPage from "./pages/algebra/BilanPage";
import GeometryBilanPage from "./pages/geometry/BilanPage";
import ProbabilityBilanPage from "./pages/probability/BilanPage";
import LogicBilanPage from "./pages/logic/BilanPage";
import AlgorithmBilanPage from "./pages/algorithm/BilanPage";
import MegaBilanPage from "./pages/MegaBilanPage";
import ExamPage from "./pages/ExamPage";
import NotFound from "./pages/NotFound";

// Analysis chapter pages
import AnalysisFunctionsCoursePage from "./pages/analysis/functions/CoursePage";
import AnalysisFunctionsExercisePage from "./pages/analysis/functions/ExercisePage";
import AnalysisDerivativesCoursePage from "./pages/analysis/derivatives/CoursePage";
import AnalysisDerivativesExercisePage from "./pages/analysis/derivatives/ExercisePage";
import AnalysisIntegralsCoursePage from "./pages/analysis/integrals/CoursePage";
import AnalysisIntegralsExercisePage from "./pages/analysis/integrals/ExercisePage";
import AnalysisSequencesCoursePage from "./pages/analysis/sequences/CoursePage";
import AnalysisSequencesExercisePage from "./pages/analysis/sequences/ExercisePage";

// Evaluation pages
import Bilan from "./pages/Bilan";
import Examens from "./pages/Examens";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main subject pages */}
          <Route path="/algebra" element={<Algebra />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/geometry" element={<Geometry />} />
          <Route path="/probability" element={<Probability />} />
          <Route path="/logic" element={<Logic />} />
          <Route path="/algorithm" element={<Algorithm />} />

          {/* Algebra chapter routes */}
          <Route path="/algebra/sets/course" element={<AlgebraSetsCoursePage />} />
          <Route path="/algebra/sets/exercise" element={<AlgebraSetsExercisePage />} />
          <Route path="/algebra/calculus/course" element={<AlgebraCalculusCoursePage />} />
          <Route path="/algebra/calculus/exercise" element={<AlgebraCalculusExercisePage />} />
          <Route path="/algebra/arithmetic/course" element={<AlgebraArithmeticCoursePage />} />
          <Route path="/algebra/arithmetic/exercise" element={<AlgebraArithmeticExercisePage />} />
          <Route path="/algebra/sequences/course" element={<AlgebraSequencesCoursePage />} />
          <Route path="/algebra/sequences/exercise" element={<AlgebraSequencesExercisePage />} />

          {/* Geometry chapter routes */}
          <Route path="/geometry/plane/course" element={<GeometryPlaneCoursePage />} />
          <Route path="/geometry/plane/exercise" element={<GeometryPlaneExercisePage />} />
          <Route path="/geometry/space/course" element={<GeometrySpaceCoursePage />} />
          <Route path="/geometry/space/exercise" element={<GeometrySpaceExercisePage />} />
          <Route path="/geometry/trigonometry/course" element={<GeometryTrigonometryCoursePage />} />
          <Route path="/geometry/trigonometry/exercise" element={<GeometryTrigonometryExercisePage />} />
          <Route path="/geometry/complex/course" element={<GeometryComplexCoursePage />} />
          <Route path="/geometry/complex/exercise" element={<GeometryComplexExercisePage />} />

          {/* Probability chapter routes */}
          <Route path="/probability/basics/course" element={<ProbabilityBasicsCoursePage />} />
          <Route path="/probability/basics/exercise" element={<ProbabilityBasicsExercisePage />} />
          <Route path="/probability/basics/qcm" element={<ProbabilityBasicsQcmPage />} />
          <Route path="/probability/conditional/course" element={<ProbabilityConditionalCoursePage />} />
          <Route path="/probability/conditional/exercise" element={<ProbabilityConditionalExercisePage />} />
          <Route path="/probability/conditional/qcm" element={<ProbabilityConditionalQcmPage />} />
          <Route path="/probability/variables/course" element={<ProbabilityVariablesCoursePage />} />
          <Route path="/probability/variables/exercise" element={<ProbabilityVariablesExercisePage />} />
          <Route path="/probability/variables/qcm" element={<ProbabilityVariablesQcmPage />} />
          <Route path="/probability/continuous/course" element={<ProbabilityContinuousCoursePage />} />
          <Route path="/probability/continuous/exercise" element={<ProbabilityContinuousExercisePage />} />
          <Route path="/probability/continuous/qcm" element={<ProbabilityContinuousQcmPage />} />
          <Route path="/probability/statistics/course" element={<ProbabilityStatisticsCoursePage />} />
          <Route path="/probability/statistics/exercise" element={<ProbabilityStatisticsExercisePage />} />
          <Route path="/probability/statistics/qcm" element={<ProbabilityStatisticsQcmPage />} />

          {/* Logic chapter routes */}
          <Route path="/logic/basics/course" element={<LogicBasicsCoursePage />} />
          <Route path="/logic/basics/exercise" element={<LogicBasicsExercisePage />} />
          <Route path="/logic/basics/qcm" element={<LogicBasicsQcmPage />} />
          <Route path="/logic/quantifiers/course" element={<LogicQuantifiersCoursePage />} />
          <Route path="/logic/quantifiers/exercise" element={<LogicQuantifiersExercisePage />} />
          <Route path="/logic/quantifiers/qcm" element={<LogicQuantifiersQcmPage />} />
          <Route path="/logic/sets/course" element={<LogicSetsCoursePage />} />
          <Route path="/logic/sets/exercise" element={<LogicSetsExercisePage />} />
          <Route path="/logic/sets/qcm" element={<LogicSetsQcmPage />} />
          <Route path="/logic/induction/course" element={<LogicInductionCoursePage />} />
          <Route path="/logic/induction/exercise" element={<LogicInductionExercisePage />} />
          <Route path="/logic/induction/qcm" element={<LogicInductionQcmPage />} />

          {/* Algorithm chapter routes */}
          <Route path="/algorithm/basics/course" element={<AlgorithmBasicsCoursePage />} />
          <Route path="/algorithm/basics/exercise" element={<AlgorithmBasicsExercisePage />} />
          <Route path="/algorithm/functions/course" element={<AlgorithmFunctionsCoursePage />} />
          <Route path="/algorithm/functions/exercise" element={<AlgorithmFunctionsExercisePage />} />
          <Route path="/algorithm/math-apps/course" element={<AlgorithmMathAppsCoursePage />} />
          <Route path="/algorithm/math-apps/exercise" element={<AlgorithmMathAppsExercisePage />} />
          <Route path="/algorithm/simulation/course" element={<AlgorithmSimulationCoursePage />} />
          <Route path="/algorithm/simulation/exercise" element={<AlgorithmSimulationExercisePage />} />

          {/* Analysis routes */}
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/analysis/functions/course" element={<AnalysisFunctionsCoursePage />} />
          <Route path="/analysis/functions/exercise" element={<AnalysisFunctionsExercisePage />} />
          <Route path="/analysis/derivatives/course" element={<AnalysisDerivativesCoursePage />} />
          <Route path="/analysis/derivatives/exercise" element={<AnalysisDerivativesExercisePage />} />
          <Route path="/analysis/integrals/course" element={<AnalysisIntegralsCoursePage />} />
          <Route path="/analysis/integrals/exercise" element={<AnalysisIntegralsExercisePage />} />
          <Route path="/analysis/sequences/course" element={<AnalysisSequencesCoursePage />} />
          <Route path="/analysis/sequences/exercise" element={<AnalysisSequencesExercisePage />} />

          {/* Evaluation routes */}
          <Route path="/bilan" element={<Bilan />} />
          <Route path="/examens" element={<Examens />} />

          {/* Bilan and exam routes */}
          <Route path="/algebra/bilan" element={<AlgebraBilanPage />} />
          <Route path="/geometry/bilan" element={<GeometryBilanPage />} />
          <Route path="/probability/bilan" element={<ProbabilityBilanPage />} />
          <Route path="/logic/bilan" element={<LogicBilanPage />} />
          <Route path="/algorithm/bilan" element={<AlgorithmBilanPage />} />
          <Route path="/mega-bilan" element={<MegaBilanPage />} />
          <Route path="/exam/:examId" element={<ExamPage />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
