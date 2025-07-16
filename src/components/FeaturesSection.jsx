'use client';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <section className="bg-[#eaeaee] py-20">
      <div className="container rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-6 sm:px-12">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-extrabold text-[#003049] mb-5">
            We don’t just generate leads, we help you close more deals
          </h2>
          <ul className="flex flex-col gap-5 mb-5 pl-3 list-disc list-inside text-gray-600">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Proven track record with industry-leading results
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Tailored strategies for roofing, construction, home improvement &
              more
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Flexible & cost-effective solutions for every business size
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Dedicated support & account management
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Guaranteed lead quality & appointment scheduling
            </motion.li>
          </ul>

          <motion.a
            href="https://calendly.com/mountainssolutions/30min"
            target="_blank"
            className="inline-block overflow-hidden px-6 py-4 text-xl font-semibold rounded-full border text-[#003049] hover:bg-[#003049] hover:text-white transition duration-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Book appointment
          </motion.a>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="p-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="./business-decisions.svg" alt="who-we-are" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
