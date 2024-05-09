import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Suspense } from 'react';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage'));

function App() {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="catalog" element={<CatalogPage />}></Route>
          <Route path="favorites" element={<FavoritePage />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
