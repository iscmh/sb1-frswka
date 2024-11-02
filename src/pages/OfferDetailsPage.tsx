import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Download, Eye } from 'lucide-react';
import { offers } from '../data/offers';

export default function OfferDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find(o => o.id === id);
  const [creativeType, setCreativeType] = useState<'organic' | 'paid'>('organic');

  if (!offer) {
    return <div>Offer not found</div>;
  }

  const handlePreview = () => {
    window.open(offer.image, '_blank');
  };

  return (
    <div className="animate-fadeIn space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">{offer.name}</h1>

      {/* Offer Guidelines */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Offer Guidelines</h2>
        <ul className="list-disc list-inside space-y-2">
          {offer.guidelines.map((guideline, index) => (
            <li key={index} className="text-gray-600">{guideline}</li>
          ))}
        </ul>
      </section>

      {/* Payout Box */}
      <section className="bg-blue-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Payout Details</h3>
            <p className="text-blue-600 font-semibold mt-1">
              ${offer.payout} Payout ({offer.commission}% Commission)
            </p>
          </div>
          {offer.isRecurring && (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Recurring
            </span>
          )}
        </div>
      </section>

      {/* Preview Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Preview</h2>
        <button
          onClick={handlePreview}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <Eye className="mr-2 h-4 w-4" />
          Preview Offer
        </button>
      </section>

      {/* Creatives Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Creatives</h2>
        
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setCreativeType('organic')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              creativeType === 'organic'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Organic
          </button>
          <button
            onClick={() => setCreativeType('paid')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              creativeType === 'paid'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Paid Ads
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offer.creatives[creativeType].map((creative, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{creative.platform}</h3>
                <a
                  href={creative.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Download className="mr-1 h-4 w-4" />
                  Download
                </a>
              </div>
              <img
                src={creative.url}
                alt={`${creative.platform} creative`}
                className="w-full h-48 object-cover rounded"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}