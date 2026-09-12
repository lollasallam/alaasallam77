import { motion } from "motion/react";
import { Info } from "lucide-react";

export function FastFoodRelation({ title, description }: { title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="bg-amber-50/50 border border-amber-100 rounded-3xl p-5 sm:p-6 md:p-8 mt-6 shadow-sm flex flex-col md:flex-row items-center gap-4 sm:gap-6"
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shadow-inner">
        <Info className="w-7 h-7 sm:w-9 sm:h-9" />
      </div>
      <div>
        <h4 className="text-lg sm:text-xl font-bold text-amber-900 mb-2">{title}</h4>
        <p className="text-amber-800 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
