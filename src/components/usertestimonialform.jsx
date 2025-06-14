import  { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const UserTestimonialForm = ({ onAddTestimonial }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [recovered, setRecovered] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    const newTestimonial = {
      name,
      title,
      image,
      recovered,
      review,
      verified: false,
    };

    try {
      setLoading(true);
      const res = await fetch("/api/example/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTestimonial),
      });

      if (!res.ok) throw new Error("Failed to post testimonial");

      onAddTestimonial(newTestimonial); // Add to UI
      // Clear inputs
      setName("");
      setTitle("");
      setImage("");
      setRecovered("");
      setReview("");
    } catch (error) {
      console.error(error);
      alert("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.75)}
      className="bg-[#1a1a1a] text-white p-6 rounded-2xl shadow-xl mt-10 max-w-2xl w-full"
    >
      <h3 className="text-xl font-bold mb-4 text-white">Post Your Story</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-tertiary p-3 rounded-md border border-gray-700 placeholder-gray-400 text-white"
        />
        <input
          type="text"
          placeholder="Your Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-tertiary p-3 rounded-md border border-gray-700 placeholder-gray-400 text-white"
        />
        <input
          type="text"
          placeholder="Amount Recovered (e.g. $10,000)"
          value={recovered}
          onChange={(e) => setRecovered(e.target.value)}
          className="bg-tertiary p-3 rounded-md border border-gray-700 placeholder-gray-400 text-white"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="bg-tertiary p-3 rounded-md border border-gray-700 placeholder-gray-400 text-white"
        />
        <textarea
          placeholder="Your Recovery Story"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
          className="md:col-span-2 bg-tertiary p-3 rounded-md border border-gray-700 placeholder-gray-400 text-white"
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            onClick={handlePost}
            disabled={loading}
            className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-md text-white font-semibold shadow-md disabled:opacity-50"
          >
            {loading ? "Posting..." : "Post Story"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UserTestimonialForm;
