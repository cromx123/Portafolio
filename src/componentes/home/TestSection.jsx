import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function CounterCard() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const res = await fetch("http://localhost:3002/api/visits");
        const data = await res.json();
        setVisits(data.count);
      } catch (err) {
        console.error("Error fetching visits:", err);
      }
    };

    fetchVisits();
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-48 h-48 bg-[#141425] border border-pink-400/20 rounded-2xl shadow-md flex flex-col items-center justify-center text-center p-6 transition-all hover:border-pink-400/40"
    >
      <Eye className="w-12 h-12 text-pink-400 mb-4" />
      <h3 className="text-xl font-bold text-pink-400 mb-2">Visitas</h3>
      <span className="text-3xl font-mono text-gray-200">{visits}</span>
    </motion.div>
  );
}
