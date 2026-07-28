'use client';

import { useState, useRef } from 'react';

interface NewsletterFormProps {
  variant?: 'full' | 'compact';
  dark?: boolean;
  buttonText?: string;
}

/**
 * Newsletter signup — every field feeds the Yes Crew CRM via /api/lead.
 * Phone is required (CRM rejects submissions without it).
 */
export default function NewsletterForm({ variant = 'full', dark = false, buttonText = 'Subscribe' }: NewsletterFormProps) {
  const [formData, setFormData] = useState({ firstName: '', email: '', phone: '' });
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
          ...formData,
          source: 'newsletter',
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - startedAt.current,
        }),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', email: '', phone: '' });
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
      <h3 className={`text-2xl ${dark ? 'text-white' : 'text-navy'}`}>Success!</h3>
    );
  }

  const inputClass = dark
    ? 'w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-gold outline-none'
    : 'w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-navy focus:ring-2 focus:ring-teal outline-none';

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
      {variant === 'full' && (
        <p>
          <input
            type="text"
            placeholder="Name"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className={inputClass}
          />
        </p>
      )}
      <p>
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
        />
      </p>
      <p>
        <input
          type="tel"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass}
        />
      </p>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`${dark ? 'btn-white' : 'btn-teal'} disabled:opacity-60`}
      >
        {status === 'submitting' ? 'Subscribing...' : buttonText}
      </button>
      {status === 'error' && (
        <p className={`text-sm ${dark ? 'text-white' : 'text-navy'}`}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
