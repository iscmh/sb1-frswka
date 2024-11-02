import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  offerId: string;
}

export default function EmailModal({ isOpen, onClose, offerId }: EmailModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://discord.com/api/webhooks/1301773131962384394/6bo5kQ49xoFyGaucKmsbifnMqau830oF6s22IUBCi5BHfoPSdzqgkeBYO6D-G5QU3fLs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `New offer signup:\nEmail: ${email}\nOffer ID: ${offerId}\nTimestamp: ${new Date().toISOString()}`,
        }),
      });

      onClose();
      navigate(`/offer/${offerId}`);
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-semibold mb-4">Enter your email to continue</h3>
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Continue to Offer'}
          </button>
        </form>
      </div>
    </div>
  );
}