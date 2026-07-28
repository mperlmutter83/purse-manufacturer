'use client';

import { useState, useRef } from 'react';

/**
 * Contact form matching the original Divi form (Name, Email, Message)
 * plus Phone — required so every lead lands in the Yes Crew CRM.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const submissionId = useRef<string>(crypto.randomUUID());
  const startedAt = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: 'contact',
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - startedAt.current,
        }),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        submissionId.current = crypto.randomUUID();
        startedAt.current = Date.now();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-mint/20 border border-mint rounded-md p-6 text-center">
        <h3 className="text-2xl text-navy mb-2">Success!</h3>
        <p className="text-ink/70 text-sm">
          Thanks for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-navy focus:ring-2 focus:ring-teal outline-none';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — invisible to humans, passed through untouched */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input
        type="text"
        placeholder="Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className={inputClass}
      />
      <input
        type="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className={inputClass}
      />
      <input
        type="tel"
        placeholder="Phone"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className={inputClass}
      />
      <textarea
        placeholder="Message"
        rows={5}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className={inputClass}
      />
      <button type="submit" disabled={status === 'submitting'} className="btn-teal disabled:opacity-60">
        {status === 'submitting' ? 'Submitting...' : 'Submit'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
