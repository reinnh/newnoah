import React from "react";
import { motion } from "framer-motion";
import { fadeIn ,textVariant} from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { styles } from "../styles";



const TestimonialCard = ({ testimonial }) => {
  return (
    <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}>
          <motion.div variants={fadeIn("up", "spring")} className="bg-tertiary text-white p-6 rounded-2xl shadow-2xl max-w-md md:w-96">
      <div className="flex items-center space-x-4 mb-4">
       <div className="rounded-full w-12 h-12 overflow-hidden">
       <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full rounded-full border border-gray-500"
        />
       </div>
        <div>
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-gray-400 text-sm">{testimonial.title}</p>
        </div>
      </div>
      <p className="mb-4">{testimonial.review}</p>
     <div className="flex items-baseline justify-between">
      <p className="text-green-400 font-semibold">Recovered: {testimonial.recovered}</p>
      <p className=" text-sm text-orange-400 ">Verified Recovery</p>
     </div>
    </motion.div>
     </Tilt>
  );
};

const Testimonials = () => {
  return (
    <div className="w-full bg-primary flex justify-center ">
      <motion.div  className="container  flex flex-col   py-1 space-y-6  ">
      <motion.h2 className={` font-bold text-white ${styles.sectionHeadText}`} variants={textVariant()}>Recovery Success Stories</motion.h2>
      <motion.p variants={fadeIn("","",0.1)} className="text-gray-400 max-w-lg ">
        Join hundreds of satisfied clients who successfully recovered their digital assets through our professional services.
      </motion.p>
      <div className="  w-full flex flex-col md:flex-row gap-y-8 md:gap-x-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </motion.div>
    </div>
  );
};

export default SectionWrapper(Testimonials,"");
