import React from 'react';
import { products } from '../data/product';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { useCartStore } from '../src/store/cartStore';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const navigate = useNavigate();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  // animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section className="bg-white text-black  py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center mb-8">
          FEATURED <span className="text-red-600">GEAR</span>
        </h2>

        <div className="w-full bg-neutral-100 py-10 px-4 shadow-2xl rounded-xl">
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold mb-8 text-start tracking-tight">
              Running <span className="text-red-600">Essentials</span>
            </h3>
          </div>

          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            freeMode={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {products.map((product, i) => (
              <SwiperSlide
                key={product.id}
                // Ensure SwiperSlide has a width and a fixed height to contain the card
                className="!w-[240px] md:!w-[280px] !h-[420px] pb-10" 
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <motion.div
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03, // Less aggressive scale
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)', 
                  }}
                  // KEY FIX: Fixed height and Flex properties
                  className="flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-2xl 
                  overflow-hidden p-4 relative cursor-pointer transition-shadow duration-300"
                >
                  {/* Animated glow border (Kept for unique flair) */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-transparent"
                    animate={{
                      borderColor: [
                        'rgba(255,0,0,0)',
                        'rgba(255,0,0,0.6)',
                        'rgba(255,0,0,0)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Product image - Now uses flex-grow to take up primary space */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }} // Less aggressive hover on image
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="flex-grow bg-neutral-200 rounded-lg flex items-center justify-center relative z-10 p-2"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain w-full h-full"
                    />
                  </motion.div>

                  {/* Product info - Fixed height with text truncation */}
                  <div className="h-16 flex flex-col justify-center text-center relative z-10 pt-2">
                    <h3 className="font-bold text-lg leading-tight line-clamp-2" title={product.name}>
                      {product.name}
                    </h3>
                    <p className="text-red-600 font-semibold text-lg">${product.price}</p>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    onClick={(e) => handleAddToCart(e, product)}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white px-5 py-2 text-sm rounded-full relative z-10 hover:bg-red-600 transition uppercase tracking-wider font-semibold mt-1"
                  >
                    Add to Cart
                  </motion.button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;