"use client";

import { useState, useEffect } from "react";
import { Check, ShieldCheck } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CMPPage() {
  const [saved, setSaved] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem("{{STORAGE_KEY}}");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences({ essential: true, ...parsed });
      } catch {
        // Se il valore e' una stringa semplice (accepted/rejected)
        setPreferences({
          essential: true,
          analytics: stored === "accepted" || stored.includes("analytics"),
          marketing: stored === "accepted" || stored.includes("marketing"),
        });
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("{{STORAGE_KEY}}", JSON.stringify(preferences));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-[70vh]">
      <h1 className="text-4xl font-bold mb-4 text-white tracking-tight">
        Preferenze Privacy e Cookie
      </h1>
      <p className="text-neutral-400 mb-8 max-w-2xl">
        Su {"{{APP_NAME}}"} rispettiamo le tue scelte. Personalizza i tuoi
        consensi per l&apos;utilizzo dei cookie.
      </p>

      <div className="space-y-4">
        {/* Tecnici — sempre attivi */}
        <div className="border border-neutral-800 bg-neutral-900/50 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <h3 className="text-xl font-semibold text-white">
                Tecnici e Strettamente Necessari
              </h3>
            </div>
            <p className="text-sm text-neutral-400">
              Garantiscono il funzionamento del sito. Non disattivabili.
            </p>
          </div>
          <div className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-400 select-none">
            Sempre Attivi
          </div>
        </div>

        {/* Analitici */}
        <div className="border border-neutral-800 bg-neutral-900/50 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-1">
              Cookie Analitici
            </h3>
            <p className="text-sm text-neutral-400">
              Permettono di analizzare le visite in forma aggregata e anonima
              per migliorare il servizio.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={preferences.analytics}
              onChange={(e) =>
                setPreferences((p) => ({ ...p, analytics: e.target.checked }))
              }
            />
            <div className="w-11 h-6 bg-neutral-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-{{BRAND_COLOR}}-500" />
          </label>
        </div>

        {/* Marketing */}
        <div className="border border-neutral-800 bg-neutral-900/50 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-1">
              Cookie di Marketing
            </h3>
            <p className="text-sm text-neutral-400">
              Utilizzati per mostrare contenuti personalizzati e misurare
              l&apos;efficacia delle campagne.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={preferences.marketing}
              onChange={(e) =>
                setPreferences((p) => ({ ...p, marketing: e.target.checked }))
              }
            />
            <div className="w-11 h-6 bg-neutral-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-{{BRAND_COLOR}}-500" />
          </label>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center min-w-[150px]"
        >
          {saved ? <Check className="w-5 h-5" /> : "Salva Preferenze"}
        </button>
      </div>
    </div>
  );
}
