import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const ModalTestimonialForm = ({ isOpen, onClose, onAddTestimonial }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [recovered, setRecovered] = useState("");
  const [review, setReview] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handlePost = async () => {
    if (!name || !title || !review || !recovered || !email) return;

    const payload = {
      name,
      email,
      title,
      recovered,
      comment:review,
      verified: false,
    };

    try {
      setLoading(true);
      const res = await axios.post(
        "https://macro-server.onrender.com/app1/reviews/comment",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      onAddTestimonial(res.data);
      onClose();
    } catch (err) {
      console.error("Post failed:", err.response?.data || err.message);
      alert("Failed to post testimonial.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-tertiary text-white p-6 rounded-xl max-w-lg w-[90%] shadow-2xl relative"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Leave a Testimony</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-md bg-tertiary text-white border border-gray-700 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-md bg-tertiary text-white border border-gray-700 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 rounded-md bg-tertiary text-white border border-gray-700 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Amount Recovered"
                value={recovered}
                onChange={(e) => setRecovered(e.target.value)}
                className="w-full p-3 rounded-md bg-tertiary text-white border border-gray-700 focus:outline-none"
              />
              <textarea
                placeholder="What happened? Tell your recovery story..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                rows={4}
                className="w-full p-3 rounded-md bg-tertiary text-white border border-gray-700 focus:outline-none resize-none"
              />

              <button
                onClick={handlePost}
                disabled={loading}
                className="bg-green-600 hover:bg-green-500 px-4 py-3 rounded-md w-full mt-2 font-semibold text-white disabled:opacity-60"
              >
                {loading ? "Posting..." : "Post Story"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalTestimonialForm;
