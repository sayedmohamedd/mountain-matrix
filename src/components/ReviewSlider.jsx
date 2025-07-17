// components/ReviewSlider.jsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react'; // نستخدم lucide-react لنجمة أنيقة
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    image: '/reviews/texas-based-client.png',
    quote:
      "It's been crazy. Since we started we only had five guys and thanks to all the leads you've been providing we've been able to double the team.",
    author: 'Texas-based Roofing Company',
    rating: 5,
  },
  {
    image: '/reviews/texas-roofing.png',
    quote:
      "Your responses are really quick, it feels like you guys are working 24/7, that's how quick you are",
    author: 'Texas-based Roofing Company',
    rating: 4,
  },
  {
    image: '/reviews/california.png',
    quote:
      "Their system brought us leads we never thought we'd reach. Highly recommended!",
    author: 'California-based Roofing Company',
    rating: 5,
  },
  {
    image: '/reviews/florida.png',
    quote:
      "It's been a great return on investment if I'm being honest. it definitely equals it self out. you're not going to get all of them but the ones that do convert definitely does pay off.",
    author: 'Florida-based Roofing Contractor',
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function ReviewSlider() {
  return (
    <section>
      <div className="container p-10">
        <div className="py-20 px-4 ">
          <h2
            // className="text-3xl font-bold text-center mb-10 text-gray-800"
            className="text-center text-3xl font-extrabold text-[#003049] my-10"
          >
            What Our Clients Say
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-gradient-to-br mb-14 min-h-[296px] from-white to-blue-50 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center transition hover:scale-[1.02] duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  variants={fadeUp}
                >
                  <img
                    src={review.image}
                    alt="review"
                    className="w-20 h-20 object-cover rounded-full border-4 border-blue-500 mb-4"
                  />
                  <h4 className="text-gray-700 italic mb-3">
                    "{review.quote}"
                  </h4>

                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        } fill-current`}
                        fill={i < review.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>

                  <p className="text-blue-600 font-semibold">
                    — {review.author}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
