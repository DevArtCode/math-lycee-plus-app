
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// Bilan and exam pages
import AlgebraBilanPage from "./pages/algebra/BilanPage";
import MegaBilanPage from "./pages/MegaBilanPage";
import ExamPage from "./pages/ExamPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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

          {/* Bilan and exam routes */}
          <Route path="/algebra/bilan" element={<AlgebraBilanPage />} />
          <Route path="/mega-bilan" element={<MegaBilanPage />} />
          <Route path="/exam/:examId" element={<ExamPage />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
