import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";
import "./styles.css";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Sennheiser Momentum 3 Wireless",
      desc: "Elegant and high-quality wireless headphones with active noise cancellation.",
      image: "/images/cat-1.png",
      url: "/product/9i0j1k2l-3456-78hd-fabc-90abcdef0123",
    },
    {
      title: "Apple iPhone SE (2024)",
      desc: "Affordable smartphone with powerful features and compact design.",
      image: "/images/cat-2.png",
      url: "/product/b2c3d4e5-f678-90ab-cdef-234567890abc",
    },
    {
      title: "HP Spectre x360 14",
      desc: "Convertible laptop with a sleek design and powerful performance.",
      image: "/images/cat-3.png",
      url: "/product/5gh8h9i0j-1234-56fb-deac-7890abcdef01",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const variantsButton = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const variantsImage = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%" },
  };

  const transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 1.25,
  };

  const transitionImage = {
    type: "spring",
    bounce: 0.25,
    ease: "easeInOut",
    duration: 2,
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-800">
      <Swiper
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        effect="fade"
        loop={false}
        autoplay={{ delay: 6000 }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className="mySwiper rounded-bl-xl container mx-auto "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="pb-20 pt-16">
            <div className="flex flex-col sm:flex-row justify-between relative">
              <div className="flex flex-col justify-center pl-14 pr-6 sm:pl-28 sm:w-1/2">
                <motion.div
                  className="slide-content"
                  initial="hidden"
                  animate={currentSlide === index ? "visible" : "hidden"}
                  variants={variants}
                  transition={transition}
                >
                  <h3 className="font-quantico uppercase text-3xl md:text-4xl text-white font-bold mb-4">
                    {slide.title}
                  </h3>
                  <p className="mb-6 text-white font-light text-lg ">
                    {slide.desc}
                  </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={currentSlide === index ? "visible" : "hidden"}
                  variants={variantsButton}
                  transition={transition}
                >
                  <Link
                    to={slide.url}
                    className="block px-6 py-3 bg-transparent hover:bg-neutral-100 border-white/20 hover:border-neutral-100 border-2 w-[150px] rounded-lg shadow-md text-white hover:text-neutral-800 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
              <div className="flex justify-center">
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[50%] object-cover h-full rounded-md drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]"
                  animate={currentSlide === index ? "visible" : "hidden"}
                  variants={variantsImage}
                  transition={transitionImage}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[75px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,160L60,138.7C120,117,240,75,360,64C480,53,600,75,720,106.7C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomeSlider;
