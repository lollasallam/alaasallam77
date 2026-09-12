import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Droplets, 
  Dumbbell, 
  Moon, 
  AlertTriangle, 
  CheckCircle, 
  HelpCircle, 
  ArrowDown, 
  Leaf, 
  Flame, 
  ShieldCheck 
} from "lucide-react";

interface PyramidLevel {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  portion: string;
  color: string;
  borderColor: string;
  bgLight: string;
  textColor: string;
  badgeBg: string;
  width: string;
  items: string[];
  whyImportant: string;
  studentTip: string;
  isCaution?: boolean;
}

export default function FoodPyramid() {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [showComparison, setShowComparison] = useState(false);

  // Levels of the 2026 New Food Pyramid (Real Food Model)
  const newPyramidLevels: PyramidLevel[] = [
    {
      id: "proteins-dairy",
      title: "البروتينات عالية الجودة والألبان الطبيعية",
      subtitle: "الأساس الحيوي لبناء الجسم ونمو العظام والعضلات",
      category: "طعام حقيقي كامل • أولوية كبرى",
      portion: "مع كل وجبة رئيسية (1.2 - 1.6 جم/كجم)",
      color: "bg-emerald-600",
      borderColor: "border-emerald-500",
      bgLight: "bg-emerald-50 text-emerald-950",
      textColor: "text-emerald-700",
      badgeBg: "bg-emerald-100 text-emerald-800",
      width: "w-full",
      items: ["البيض", "الأسماك والمأكولات البحرية", "الدواجن", "اللحوم الطبيعية", "البقوليات (عدس وحمص)", "الزبادي والأجبان الطبيعية"],
      whyImportant: "تمنحك شعوراً مستقراً بالشبع لساعات طويلة دون هبوط مفاجئ في طاقتك، وتبني خلايا الدماغ والعضلات وتمنحك القوة للنشاط الدراسي والرياضي.",
      studentTip: "احرصي على تناول بيضة مسلوقة أو علبة زبادي طبيعي مع وجبة الإفطار قبل الذهاب إلى المدرسة لتنعمي بتركيز عالٍ حتى موعد الغداء."
    },
    {
      id: "veggies-fruits",
      title: "الخضروات الورقية والملونة والفواكه الكاملة",
      subtitle: "حماية الخلايا وتزويد الجسم بالألياف والفيتامينات الحيوية",
      category: "طعام طازج غير مصنع",
      portion: "وفرة يومية (خضار متنوع مع فواكه كاملة باعتدال)",
      color: "bg-teal-600",
      borderColor: "border-teal-500",
      bgLight: "bg-teal-50 text-teal-950",
      textColor: "text-teal-700",
      badgeBg: "bg-teal-100 text-teal-800",
      width: "w-[92%]",
      items: ["السبانخ والورقيات الخضراء", "البروكلي", "الجزر والخيار والطماطم", "التوت والفراولة", "التفاح والبرتقال"],
      whyImportant: "تحتوي على مضادات أكسدة طبيعية تحافظ على نضارة بشرتك وصحة عينيك، وألياف غذائية تريح الهضم وتغذي البكتيريا النافعة في الأمعاء.",
      studentTip: "تناولي الفاكهة كحبة كاملة واستمتعي بأليافها الطبيعية، وابتعدي عن العصائر المعلبة المصنعة المليئة بالسكريات المضافة."
    },
    {
      id: "healthy-fats",
      title: "الدهون الصحية والزيوت الطبيعية",
      subtitle: "غذاء المخ وامتصاص الفيتامينات الذائبة",
      category: "دهون طبيعية غير مهدرجة",
      portion: "حصص متوازنة يومياً",
      color: "bg-amber-500",
      borderColor: "border-amber-400",
      bgLight: "bg-amber-50 text-amber-950",
      textColor: "text-amber-700",
      badgeBg: "bg-amber-100 text-amber-800",
      width: "w-[80%]",
      items: ["زيت الزيتون البكر الممتاز", "الأفوكادو", "المكسرات النيئة (جوز ولوز)", "بذور الشيا وبذور الكتان", "زبدة طبيعية باعتدال"],
      whyImportant: "تتكون خلايا دماغك من نسبة عالية من الدهون الصحية! هذا المستوى يوفر لكِ التركيز وسرعة الاستيعاب الذهني وحماية القلب.",
      studentTip: "أضيفي ملعقة زيت زيتون بكر على طبق السلطة، أو تناولي قبضة صغيرة من المكسرات النيئة كوجبة خفيفة ومقرمشة أثناء المذاكرة."
    },
    {
      id: "whole-grains",
      title: "الحبوب الكاملة غير المكررة (بكميات معتدلة)",
      subtitle: "طاقة مستدامة بحصص محسوبة بدلاً من الإفراط",
      category: "نشويات معقدة فقط",
      portion: "حصص معتدلة (تم تقليصها عن الهرم القديم)",
      color: "bg-orange-500",
      borderColor: "border-orange-400",
      bgLight: "bg-orange-50 text-orange-950",
      textColor: "text-orange-700",
      badgeBg: "bg-orange-100 text-orange-800",
      width: "w-[65%]",
      items: ["الشوفان الكامل", "الكينوا", "الأرز البني", "خبز الحبة الكاملة (الردة)", "البرغل"],
      whyImportant: "على عكس الدقيق الأبيض السريع الذي يسبب السمنة، الحبوب الكاملة تتحلل ببطء فتعطيك طاقة تدريجية للأداء الحركي دون رفع حاد للأنسولين.",
      studentTip: "استبدلي الخبز الأبيض الفينو بالخبز الأسمر المصنوع من الحبة الكاملة لتتجنبي الشعور المفاجئ بالجوع والنعاس في الحصص المدرسية."
    },
    {
      id: "ultra-processed",
      title: "الأطعمة فائقة المعالجة والسكريات المضافة (منطقة الحذر)",
      subtitle: "أضيق جزء في الهرم — يجب تجنبها أو حصرها في أضيق نطاق",
      category: "مخاطر الوجبات السريعة • تجنبيها تماماً",
      portion: "الحد الأدنى أو استبعادها",
      color: "bg-rose-600",
      borderColor: "border-rose-500",
      bgLight: "bg-rose-50 text-rose-950",
      textColor: "text-rose-700",
      badgeBg: "bg-rose-100 text-rose-800",
      width: "w-[48%]",
      items: ["الوجبات السريعة (برجر، بطاطس مقلية)", "المشروبات الغازية ومشروبات الطاقة", "الحلويات والمقرمشات المصنعة", "الزيوت المهدرجة"],
      whyImportant: "تسبب التهابات في الجسم، دهوناً حشوية ضارة، تشتت الانتباه، وتؤدي إلى تعب مستمر وهبوط حاد في مستوى الطاقة والتحصيل الدراسي.",
      studentTip: "تحدي صديقاتك في استبدال المشروبات الغازية والوجبات السريعة بأطعمة حقيقية لذيذة محضرة في المنزل، وستلاحظين صفاء بشرتك ونشاطك الفوري!",
      isCaution: true
    }
  ];

  const currentLevel = newPyramidLevels[selectedLevel];

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-7 md:p-10 shadow-sm border border-slate-100 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-8 w-full">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold mb-3 shadow-xs">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>الهرم الغذائي الجديد المعتمد (دليل الغذاء الحقيقي Real Food)</span>
        </div>
        <h3 className="text-xl sm:text-3xl font-extrabold text-slate-800 mb-3">
          الهرم الغذائي الحديث لتلميذات المرحلة الأساسية
        </h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
          أحدث الإرشادات الغذائية العالمية تعتمد على مبدأ <strong className="text-emerald-700">"تناول طعام حقيقي كامل"</strong>: تصدرت البروتينات عالية الجودة والخضروات والدهون الصحية الأولوية اليومية، مع تقليص النشويات والتحذير الشديد من الأغذية المصنعة والوجبات السريعة.
        </p>

        {/* Comparison Toggle Button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>{showComparison ? "إخفاء المقارنة مع الهرم القديم" : "ما الفرق بين الهرم القديم والهرم الجديد؟"}</span>
          </button>
        </div>
      </div>

      {/* Comparison Drawer / Card */}
      <AnimatePresence>
        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-3xl mb-8 overflow-hidden"
          >
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 space-y-4">
              <h4 className="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                أبرز الفروق الجوهرية بين الهرم الغذائي التقليدي والهرم الجديد:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl">
                  <div className="font-bold text-rose-800 mb-1">الهرم التقليدي القديم (السابق):</div>
                  <ul className="list-disc list-inside space-y-1 text-rose-900/80 leading-relaxed">
                    <li>وضع الحبوب والنشويات في القاعدة العريضة (6-11 حصة يومياً!).</li>
                    <li>حذر من جميع أنواع الدهون دون تمييز بين النافع والضار.</li>
                    <li>لم يركز على خطورة الأغذية فائقة المعالجة والسكريات المضافة.</li>
                  </ul>
                </div>
                <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                  <div className="font-bold text-emerald-800 mb-1">الهرم الغذائي الجديد (المحدث):</div>
                  <ul className="list-disc list-inside space-y-1 text-emerald-900/80 leading-relaxed">
                    <li>يعتمد على "الأطعمة الحقيقية الكاملة" (Real Food).</li>
                    <li>وضع البروتينات عالية الجودة والخضروات في الأولوية العظمى.</li>
                    <li>أعاد الاعتبار للدهون الصحية الطبيعية (كزيت الزيتون والمكسرات) كغذاء للدماغ.</li>
                    <li>قلّص النشويات، وحذر بشدة من الوجبات السريعة والسكريات.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visual Pyramid Representation */}
      <div className="w-full max-w-2xl flex flex-col items-center gap-2.5">
        <div className="w-full flex items-center justify-between text-xs text-slate-500 px-2 pb-1 font-medium">
          <span className="flex items-center gap-1 text-emerald-700 font-bold">
            <Sparkles className="w-3.5 h-3.5" /> الأولوية والأهمية الكبرى (الأطعمة الكاملة)
          </span>
          <span className="text-rose-600 font-bold flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5" /> الأقل والأخطر (تجنبيها)
          </span>
        </div>

        {newPyramidLevels.map((level, idx) => {
          const isSelected = selectedLevel === idx;
          return (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              onClick={() => setSelectedLevel(idx)}
              className={`${level.width} ${level.color} rounded-2xl p-3 sm:p-4 text-white text-center shadow-md relative overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                isSelected ? "ring-4 ring-offset-2 ring-emerald-400 shadow-xl" : "opacity-95 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] sm:text-xs font-bold bg-black/25 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                  {level.category}
                </span>
                <span className="text-[10px] sm:text-xs text-white/90 bg-white/20 px-2 py-0.5 rounded-full font-medium">
                  {level.portion}
                </span>
              </div>

              <h4 className="font-extrabold text-xs sm:text-base md:text-lg mb-1 drop-shadow-xs">
                {level.title}
              </h4>

              {/* Items pills */}
              <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 mt-2">
                {level.items.slice(0, 4).map((item, i) => (
                  <span
                    key={i}
                    className="text-[9px] sm:text-xs bg-white/20 text-white px-2 py-0.5 rounded-md backdrop-blur-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
                {level.items.length > 4 && (
                  <span className="text-[9px] sm:text-xs bg-white/25 text-white px-1.5 py-0.5 rounded-md font-bold">
                    +{level.items.length - 4} المزيد
                  </span>
                )}
              </div>

              {isSelected && (
                <div className="mt-2 text-[10px] sm:text-xs font-semibold bg-white/20 py-0.5 px-2 rounded-full inline-flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> تم تحديد هذا المستوى - انظري التفاصيل بالأسفل
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Daily Healthy Lifestyle Foundation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-slate-800 text-white rounded-2xl p-3.5 sm:p-4 text-center mt-3 shadow-lg"
        >
          <div className="text-xs sm:text-sm font-bold text-emerald-300 mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" /> الركيزة الحيوية لنمط الحياة المتكامل (ترافق كل الوجبات):
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] sm:text-xs">
            <div className="bg-slate-700/70 p-2 rounded-xl flex flex-col items-center gap-1">
              <Droplets className="w-4 h-4 text-sky-400" />
              <span className="font-bold">الماء النقي</span>
              <span className="text-slate-300 text-[9px]">6-8 أكواب يومياً</span>
            </div>
            <div className="bg-slate-700/70 p-2 rounded-xl flex flex-col items-center gap-1">
              <Dumbbell className="w-4 h-4 text-emerald-400" />
              <span className="font-bold">النشاط البدني</span>
              <span className="text-slate-300 text-[9px]">60 دقيقة لعب وحركة</span>
            </div>
            <div className="bg-slate-700/70 p-2 rounded-xl flex flex-col items-center gap-1">
              <Moon className="w-4 h-4 text-indigo-300" />
              <span className="font-bold">النوم الكافي</span>
              <span className="text-slate-300 text-[9px]">8-9 ساعات ليلاً</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Selected Level Interactive Detail Box */}
      <motion.div
        key={currentLevel.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`w-full max-w-2xl mt-8 rounded-2xl p-4 sm:p-6 border ${currentLevel.borderColor} ${currentLevel.bgLight} shadow-sm`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b pb-3 border-slate-200/60">
          <div>
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${currentLevel.badgeBg} mb-1`}>
              {currentLevel.category}
            </span>
            <h4 className="text-base sm:text-xl font-bold text-slate-800">
              {currentLevel.title}
            </h4>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-600 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200/50 w-fit">
            الحصة الموصى بها: <strong className={currentLevel.textColor}>{currentLevel.portion}</strong>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-700">
          <div>
            <strong className="block text-slate-900 font-bold mb-1">الأطعمة المشمولة:</strong>
            <div className="flex flex-wrap gap-1.5">
              {currentLevel.items.map((item, i) => (
                <span key={i} className="bg-white/90 border border-slate-200 px-2.5 py-1 rounded-lg text-slate-800 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <strong className="text-slate-900 font-bold">لماذا هي مهمة لكِ كطالبة؟ </strong>
            <span>{currentLevel.whyImportant}</span>
          </div>

          <div className="pt-2 p-3 bg-white/80 rounded-xl border border-slate-200/70 flex items-start gap-2.5">
            <div className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-0.5">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <strong className="block font-bold text-slate-900 text-xs sm:text-sm mb-0.5">نصيحة عملية ليومك الدراسي:</strong>
              <p className="text-slate-600 text-xs sm:text-sm">{currentLevel.studentTip}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

