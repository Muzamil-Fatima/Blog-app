import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
      >
        Premium Blog Platform
      </motion.h1>

      <p className="mt-6 text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl">
        Create beautiful blogs with modern UI and secure authentication.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/create")}
        className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition"
      >
        Start Writing
      </motion.button>

    </div>
  );
}

export default Hero;