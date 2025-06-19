
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
import AlgebraChapter from "./pages/AlgebraChapter";
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
          <Route path="/algebra" element={<Algebra />} />
          <Route path="/algebra/chapter" element={<AlgebraChapter />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/geometry" element={<Geometry />} />
          <Route path="/probability" element={<Probability />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
