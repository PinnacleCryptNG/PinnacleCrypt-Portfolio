import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HomeView } from './components/HomeView';
import { CreateView } from './components/CreateView';
import { OrganizeView } from './components/OrganizeView';
import { ShipView } from './components/ShipView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { EventModal } from './components/EventModal';
import { ProductModal } from './components/ProductModal';
import { LegalModal, LegalTab } from './components/LegalModal';
import { LoadingScreen } from './components/LoadingScreen';
import { ArticleItem, EventItem, ShippedProduct, PageView } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ShippedProduct | null>(null);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab | null>(null);

  // Ensure initial website load always starts at Home section
  useEffect(() => {
    // Force initial landing to 'home' unless user explicitly navigates via back/forward
    setCurrentPage('home');
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }

    const parseLocation = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['create', 'organize', 'ship', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageView);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', parseLocation);
    window.addEventListener('hashchange', parseLocation);

    return () => {
      window.removeEventListener('popstate', parseLocation);
      window.removeEventListener('hashchange', parseLocation);
    };
  }, []);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update URL hash smoothly
    if (page === 'home') {
      if (window.location.hash) {
        history.pushState(null, '', window.location.pathname);
      }
    } else {
      history.pushState(null, '', `#${page}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-[#F0F4F8] relative flex flex-col justify-between selection:bg-blue-600/30 selection:text-white font-sans-clean">
      {/* Global Interactive Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Top Header Navigation with Menu Drawer */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Container with Smooth Fade Transitions */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <HomeView onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'create' && (
            <motion.div
              key="create"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <CreateView
                onSelectArticle={setSelectedArticle}
                onNavigate={handleNavigate}
              />
            </motion.div>
          )}

          {currentPage === 'organize' && (
            <motion.div
              key="organize"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <OrganizeView
                onSelectEvent={setSelectedEvent}
                onNavigate={handleNavigate}
              />
            </motion.div>
          )}

          {currentPage === 'ship' && (
            <motion.div
              key="ship"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <ShipView
                onSelectProduct={setSelectedProduct}
                onNavigate={handleNavigate}
              />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <AboutView onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <ContactView onNavigate={handleNavigate} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer with Legal Links & Socials */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(tab) => setLegalModalTab(tab)}
      />

      {/* Interactive Detail Modals */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Legal & Compliance Modal (Privacy, Terms, Web3 Disclaimer, Cookies) */}
      <LegalModal
        isOpen={legalModalTab !== null}
        onClose={() => setLegalModalTab(null)}
        initialTab={legalModalTab || 'privacy'}
      />
    </div>
  );
}
