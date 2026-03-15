import React from 'react';
import { motion } from 'framer-motion';
import { FAQS } from '../../data/content';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentId = React.useId();

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <motion.div
        id={contentId}
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-slate-400 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

export const FAQ = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-emerald-500">Questions</span>
          </h2>
        </div>
        <div className="bg-slate-900/30 rounded-3xl p-8 border border-white/5">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};
