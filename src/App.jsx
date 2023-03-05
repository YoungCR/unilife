import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cities" element={<SeeAllCitiesPage />} />
        </Routes>
        <Contact />
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
