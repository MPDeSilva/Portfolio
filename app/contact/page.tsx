'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';

interface FormState {
  name: string;
  email: string;
  project: string;
  budget: string;
  message: string;
}

const initial: FormState = { name: '', email: '', project: '', budget: '', message: '' };

const PROJECTS = [
  'Marketing / landing site',
  'Web app / full-stack',
  'AI tool / integration',
  'Knowledge base / docs',
  'CMS / digital presence',
  'SEO, AIO & GEO',
  'Something else',
];

const BUDGETS = [
  'Under £250',
  '£250 - £750',
  '£750 - £1,500',
  '£1,500 - £3,000',
  '£3,000+',
  'Not sure yet',
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>(initial);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initial);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="wrap section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span
            className="font-mono uppercase text-accent-500 block mb-4"
            style={{ fontSize: 11, letterSpacing: '.14em' }}
          >
            Get in touch
          </span>
          <h1
            className="font-heading text-ink-900 mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', letterSpacing: '-.02em', lineHeight: 1.05 }}
          >
            Let&rsquo;s work <em className="italic text-accent-500">together.</em>
          </h1>
          <p className="text-ink-600 mb-12 max-w-[56ch]" style={{ fontSize: 17, lineHeight: 1.6 }}>
            Tell me about your project - even a rough sketch is fine. I read every message
            personally and reply within one business day.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <Field label="Name" required htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Email" required htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Project type" htmlFor="project">
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select one (optional)</option>
                  {PROJECTS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Budget" htmlFor="budget">
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select one (optional)</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Message" required htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </Field>

            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`font-mono uppercase bg-ink-900 text-paper hover:bg-accent-500 transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{ fontSize: 12, letterSpacing: '.08em', padding: '.95rem 2.2rem' }}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </motion.button>
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 text-green-800 rounded-sm"
              >
                Thanks - your message reached me. Check your inbox for a confirmation.
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 text-red-800 rounded-sm"
              >
                Something went wrong. Please try again or email me directly.
              </motion.div>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 pt-12 border-t border-ink-200"
          >
            <h2 className="font-heading text-ink-900 mb-6" style={{ fontSize: '1.6rem' }}>
              Other ways to connect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3
                  className="font-mono uppercase text-ink-400 mb-2"
                  style={{ fontSize: 10, letterSpacing: '.14em' }}
                >
                  Email
                </h3>
                <a
                  href="mailto:milindapds@hotmail.com"
                  className="text-ink-700 hover:text-accent-500 transition-colors"
                >
                  milindapds@hotmail.com
                </a>
              </div>
              <div>
                <h3
                  className="font-mono uppercase text-ink-400 mb-2"
                  style={{ fontSize: 10, letterSpacing: '.14em' }}
                >
                  Social
                </h3>
                <div className="space-x-4">
                  <a
                    href="https://www.linkedin.com/in/milinda-de-silva/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-700 hover:text-accent-500 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/MPDeSilva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-700 hover:text-accent-500 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

const inputClass =
  'w-full px-4 py-3 border border-ink-200 bg-white focus:border-ink-900 focus:outline-none transition-colors duration-200';

function Field({
  label,
  htmlFor,
  required = false,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="font-mono uppercase text-ink-500 block mb-2"
        style={{ fontSize: 11, letterSpacing: '.1em' }}
      >
        {label}
        {required && <span className="text-accent-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}
