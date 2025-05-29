'use client';

import { useEffect, useState } from 'react';
import Quote from '../components/Quote';

export default function HomePage() {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/quotes`) // ✅ use port 4000
        .then(res => res.json())
        .then(data => {
          setQuotes(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching quotes:', err);
          setLoading(false);
        });
    }, []);
  
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-8">All Quotes</h1>
  
        {loading && <p className="text-gray-500">Loading...</p>}
  
        {quotes.length === 0 && !loading && (
          <p className="text-gray-500">No quotes found.</p>
        )}
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {quotes.map((quote) => (
            <Quote
              key={quote._id}
              text={quote.text}
              source={quote.source}
              sourceTitle={quote.sourceTitle}
              category={quote.category}
            />
          ))}
        </div>
      </main>
    );
  }