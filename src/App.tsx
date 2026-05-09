import { lazy, Suspense, useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";

// Lazy-load non-critical routes (code splitting)
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const SoftwareTools = lazy(() => import("./pages/SoftwareTools"));
const Tools = lazy(() => import("./pages/Tools"));
const Legal = lazy(() => import("./pages/Legal"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Partners = lazy(() => import("./pages/Partners"));
const Vision = lazy(() => import("./pages/Vision"));
const Mission = lazy(() => import("./pages/Mission"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AIChatbot = lazy(() => import("@/components/AIChatbot"));

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } },
});

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="h-8 w-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
  </div>
);

const DeferredChatbot = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const idle = (window as any).requestIdleCallback || ((cb: any) => setTimeout(cb, 2500));
    const handle = idle(() => setShow(true));
    return () => {
      const cancel = (window as any).cancelIdleCallback;
      if (cancel) cancel(handle); else clearTimeout(handle);
    };
  }, []);
  if (!show) return null;
  return (
    <Suspense fallback={null}>
      <AIChatbot />
    </Suspense>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/software" element={<SoftwareTools />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
          <DeferredChatbot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
