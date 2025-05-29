'use client';

import { useState } from 'react';
import Modal from './Modal';

export default function Quote({ text, source, sourceTitle, category }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <div 
          className="border-l-4 border-gray-400 bg-white p-4 rounded shadow-sm h-full group cursor-pointer hover:shadow-md transition-shadow duration-200"
          onClick={() => setIsModalOpen(true)}
        >
          <p className="text-lg italic text-gray-800">"{text}"</p>
          
          <p className="mt-2 text-sm text-gray-600">
            — {source}
            {sourceTitle && <span className="italic">, <i>{sourceTitle}</i></span>}
          </p>
    
          {category && (
            <p className="mt-1 text-xs text-gray-500 uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {category}
            </p>
          )}
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="space-y-4">
            <p className="text-2xl italic text-gray-800">"{text}"</p>
            
            <div className="border-t pt-4">
              <p className="text-lg text-gray-600">
                — {source}
                {sourceTitle && <span className="italic">, <i>{sourceTitle}</i></span>}
              </p>
      
              {category && (
                <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
                  {category}
                </p>
              )}
            </div>
          </div>
        </Modal>
      </>
    );
  }