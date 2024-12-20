import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';

// Custom function to preload PDF files using fetch to improve performance
function preloadPdf(url: string) {
  fetch(url, { method: 'HEAD' }) // Fetch the PDF with a HEAD request to initiate loading
    .then((response) => {
      if (response.ok) {
        console.log(`Preloaded PDF: ${url}`);
      } else {
        console.error(`Failed to preload PDF: ${url}`);
      }
    })
    .catch((error) => {
      console.error(`Error while preloading PDF: ${error}`);
    });
}

function Work() {
  const pdfLinks = [
    '/pdfs/Portofolio - Content Writing.pdf',
    '/pdfs/Company profile pdf3 (2).pdf',
    '/pdfs/portfolio T_T.pdf',
    '/pdfs/Shopify Company profile pdf.pdf',
    '/pdfs/SEO REPORT.pdf',
    '/pdfs/Company profile pdf2.pdf',
  ];

  const pdfLoadedRef = useRef(new Set());

  // Preload all PDFs on mount
  useEffect(() => {
    pdfLinks.forEach((pdf) => preloadPdf(pdf));
  }, []);

  const cardData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      text: 'Content Writing Portfolio',
      pdfLink: '/pdfs/Portofolio - Content Writing.pdf',
      icon: '📝',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      text: 'Digital Marketing Portfolio',
      pdfLink: '/pdfs/Company profile pdf3 (2).pdf',
      icon: '📊',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      text: 'Graphic Design Portfolio',
      pdfLink: '/pdfs/portfolio T_T.pdf',
      icon: '🎨',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      text: 'Shopify Portfolio',
      pdfLink: '/pdfs/Shopify Company profile pdf.pdf',
      icon: '🛍️',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      text: 'SEO Portfolio',
      pdfLink: '/pdfs/SEO REPORT.pdf',
      icon: '🔍',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      text: 'Web Development Portfolio',
      pdfLink: '/pdfs/Company profile pdf2.pdf',
      icon: '🌐',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-left mb-4">Our Work</h2>
      <hr className="mt-2 mb-12 border-gray-700" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="relative">
              <img
                src={card.image}
                alt={card.text}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <motion.div
                className="absolute top-2 right-2 bg-orange-500 rounded-full p-2 text-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {card.icon}
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-300">{card.text}</h3>
            </div>
            <div className="bg-gray-700 p-4 text-center hover:bg-gray-600">
              <LazyLoad height={200} offset={100} once>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // Check if the PDF is preloaded and open it
                    if (!pdfLoadedRef.current.has(card.pdfLink)) {
                      console.log('PDF not preloaded, preloading now...');
                      preloadPdf(card.pdfLink); // Preload the PDF when clicked
                    } else {
                      console.log('Opening preloaded PDF...');
                    }
                    window.open(card.pdfLink, '_blank');
                    pdfLoadedRef.current.add(card.pdfLink); // Mark PDF as loaded
                  }}
                  className="text-lg font-semibold text-white hover:text-orange-500"
                >
                  View PDF
                </a>
              </LazyLoad>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Work;
