import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import TestimonialsCarousel from "./testimonialsCarousel";
import ModalTestimonialForm from "./ModalTestimonialForm";
import axios from "axios";
import { testimonials as localTestimonials } from "../constants";



const TestimonialCard = ({ testimonial }) => {
  const [expanded, setExpanded] = React.useState(false);


  return (
    <div className="">
      <motion.div
        variants={fadeIn("up", "spring")}
        className="bg-tertiary text-white p-6 rounded-2xl shadow-2xl w-72  flex flex-col justify-between h-[360px]"
      >
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

        <div className="flex-1 mb-4 overflow-hidden">
          <p
            className={`text-sm text-gray-300 transition-all duration-300 `}
          >
            {testimonial.review}
          </p>

        </div>

        <div className="flex items-baseline justify-between pt-2 border-t border-gray-700">
          <p className="text-green-400 font-semibold">
            Recovered: {testimonial.recovered}
          </p>
          <p className="text-sm text-orange-400">Verified Recovery</p>
        </div>
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const [allTestimonials, setAllTestimonials] = useState(localTestimonials);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchBackendTestimonials = async () => {
      try {
        const res = await axios.get("https://macro-server.onrender.com/app1/reviews/", {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log('hey')
        const verifiedTestimonials = res.data;
        console.log(verifiedTestimonials)

        // Map backend testimonials to match frontend structure
        const formattedBackend = verifiedTestimonials.map((t) => ({
          name: t.name,
          title: "Verified Client",
          review: t.comment,
          recovered: t.recovered,
          image: "https://i.pravatar.cc/150?u=" + t._id, // avatar based on ID
        }));

        setAllTestimonials([...formattedBackend, ...localTestimonials]);

      } catch (err) {
        console.error("Failed to fetch testimonials", err);
      }
    };

    fetchBackendTestimonials();
  }, []);

  return (
    <div className="w-full bg-primary flex justify-center ">
      <motion.div className="container flex flex-col py-1 space-y-6">
        <motion.h2
          className={`font-bold text-white ${styles.sectionHeadText}`}
          variants={textVariant()}
        >
          Recovery Success Stories
        </motion.h2>
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="text-gray-400 max-w-lg"
        >
          Join hundreds of satisfied clients who successfully recovered their digital assets through our professional services.
        </motion.p>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-tertiary text-green-500 text-sm px-4 py-2 rounded-md self-start"
        >
          Leave a Testimony
        </button>

        <TestimonialsCarousel>
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </TestimonialsCarousel>

        <ModalTestimonialForm
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onAddTestimonial={(newTestimonial) =>
            setAllTestimonials((prev) => [newTestimonial, ...prev])
          }
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Testimonials, "");
