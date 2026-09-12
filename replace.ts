import fs from 'fs';
import path from 'path';

const themesDir = path.join(process.cwd(), 'src/pages/themes');
const files = fs.readdirSync(themesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(themesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace p-8 with p-5 md:p-8
  content = content.replace(/className="([^"]*\b)p-8(\b[^"]*)"/g, 'className="$1p-5 sm:p-6 md:p-8$2"');
  
  // Tab responsiveness
  content = content.replace(
    /className="flex flex-wrap gap-2 mb-8 bg-slate-50 p-2 rounded-2xl w-fit"/g,
    'className="flex flex-col sm:flex-row flex-wrap gap-2 mb-8 bg-slate-50 p-2 rounded-2xl w-full sm:w-fit"'
  );
  
  // Make tab buttons w-full on mobile
  content = content.replace(
    /className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all text-sm sm:text-base \${/g,
    'className={`w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-3 rounded-xl font-medium transition-all text-sm sm:text-base ${'
  );

  fs.writeFileSync(filePath, content, 'utf-8');
}
console.log('Fixed themes layouts');
