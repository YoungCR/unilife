import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import CityDetailsPage from './pages/CityDetailsPage';
import Homepage from './pages/Homepage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage';
import HomeDetailsPage from './pages/HomeDetailsPage';

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
          <Route path="/properties/:cityId" element={<CityDetailsPage />} />
          <Route path="/property/:propertyId" element={<HomeDetailsPage />} />
        </Routes>
        <Contact />
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
