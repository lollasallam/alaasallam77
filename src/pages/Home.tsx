import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { themesInfo } from "../data/themes";

export default function Home() {
  return (
      <div className="space-y-12 pb-20 overflow-hidden">
      <section className="relative rounded-bl-3xl rounded-br-3xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-xl flex flex-col md:flex-row items-center">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 mix-blend-overlay border-[40px] border-white blur-2xl pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 w-full md:w-1/2 p-5 sm:p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 sm:px-4 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-sm font-medium mb-3 sm:mb-6">
              متعة التعلم والصحة
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-6 leading-tight">
              برنامج تثقيفي غذائي باستخدام الحاسب الآلي عن مخاطر الوجبات السريعة و تأثيرها على السلوك الصحي لتلميذات المرحلة الثانية من التعليم الأساسي
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-5 sm:mb-8 leading-relaxed max-w-xl">
              مرحباً بكِ في هذا البرنامج التثقيفي الممتع! اكتشفي أسرار الغذاء الصحي، وكيف تحافظين على نشاطك وجمالك وتركيزك بالابتعاد عن مخاطر الوجبات السريعة.
            </p>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 pt-0 sm:pt-0 md:pt-16">
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
           >
             <div className="absolute inset-0 bg-white/20 rounded-[2rem] blur-xl transform -rotate-6"></div>
             <img src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1000&auto=format&fit=crop" alt="Healthy eating" className="relative rounded-[2rem] shadow-2xl object-cover h-64 md:h-80 w-full border-4 border-white/20" />
           </motion.div>
        </div>
      </section>

      <section className="mt-8 mb-16 px-0">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-slate-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">مقدمة البرنامج</h2>
            <p className="text-slate-500 mt-2">شاهدي هذا الفيديو التعريفي الممتع لمعرفة المزيد</p>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingTop: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/xyQY8a-ng6g" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      <section className="px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">محاور البرنامج</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            تعرفي على أهم المواضيع التي ستساعدك في بناء عادات صحية سليمة مدى الحياة.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {themesInfo.map((theme, idx) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Link 
                to={`/theme/${theme.id}`}
                className="group block h-full bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-full h-1 sm:h-2 bg-gradient-to-r ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative h-24 sm:h-40 mb-3 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    src={theme.image} 
                    alt={theme.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3 ${theme.color} backdrop-blur-sm bg-opacity-90`}>
                    <theme.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <h3 className="text-sm sm:text-xl font-bold text-slate-800 mb-1 sm:mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 leading-snug">
                  {theme.title}
                </h3>
                
                <p className="text-xs sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-6 line-clamp-2">
                  {theme.description}
                </p>

                <div className="flex items-center text-[10px] sm:text-sm font-bold text-primary-500 group-hover:translate-x-[-4px] sm:group-hover:translate-x-[-8px] transition-transform w-fit mt-auto cursor-pointer">
                  <span className="hidden sm:inline">ابدئي الرحلة</span>
                  <span className="inline sm:hidden">التفاصيل</span>
                  <svg className="w-3 h-3 sm:w-5 sm:h-5 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
