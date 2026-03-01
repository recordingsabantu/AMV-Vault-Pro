"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';

export default function ReleasesPage() {
  // This is where your music list will live
  const [releases, setReleases] = useState([]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Abantu Recordings - Music Vault</h1>
      <p className="text-gray-600 mb-8">Management Portal for Label Artists</p>
      
      {/* This is a placeholder. Your music list logic goes here */}
      <div className="grid gap-4">
        {releases.length === 0 ? (
          <div className="border dashed p-10 text-center rounded-lg">
            No releases found. Ready to upload?
          </div>
        ) : (
          <p>Displaying releases...</p>
        )}
      </div>
    </div>
  );
}
