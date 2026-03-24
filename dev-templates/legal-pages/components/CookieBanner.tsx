"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("{{STORAGE_KEY}}");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("{{STORAGE_KEY}}", JSON.stringify(prefs));
    setIsVisible(false);
  };

  const acceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const rejectOptional = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  };

  const saveCustom = () => {
    saveConsent(preferences);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay bloccante — impedisce interazione con la pagina */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-black/70 backdrop-blur-sm"
          />

          {/* Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-4 font-sans"
          >
            <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 backdrop-blur-md">
              {/* Header con azioni principali */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-1 space-y-2">
                  <h3 className="text-white font-bold text-lg">
                    Informativa sui Cookie
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Utilizziamo cookie tecnici per il funzionamento del sito e,
                    previo tuo consenso, cookie analitici e di marketing.
                    Consulta la nostra{" "}
                    <Link
                      href="/cookie-policy"
                      className="text-{{BRAND_COLOR}}-500 hover:underline"
                    >
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 min-w-max">
                  <button
                    onClick={rejectOptional}
                    className="px-5 py-2.5 rounded-xl border border-neutral-700 text-neutral-300 hover:bg-neutral-800 transition-colors text-sm font-medium"
                  >
                    Rifiuta Opzionali
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-bold shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]"
                  >
                    Accetta Tutti
                  </button>
                </div>
              </div>

              {/* Espandi personalizzazione */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="mt-4 flex items-center gap-1 text-sm text-{{BRAND_COLOR}}-500 hover:text-{{BRAND_COLOR}}-400 transition-colors font-medium"
              >
                Personalizza le tue scelte
                {showDetails ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {/* Dettaglio categorie cookie */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3 border-t border-neutral-800 pt-4">
                      {/* Tecnici — sempre attivi */}
                      <div className="flex items-center justify-between p-3 bg-neutral-800/50 rounded-xl">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-white">
                              Tecnici e Necessari
                            </p>
                            <p className="text-xs text-neutral-500">
                              Indispensabili per il funzionamento del sito. Non
                              disattivabili.
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded-full shrink-0">
                          Sempre attivi
                        </span>
                      </div>

                      {/* Analitici — toggle */}
                      <div className="flex items-center justify-between p-3 bg-neutral-800/50 rounded-xl">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-white">
                              Cookie Analitici
                            </p>
                            <p className="text-xs text-neutral-500">
                              Analisi anonima delle visite per migliorare il
                              servizio.
                            </p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer shrink-0 ml-3">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={preferences.analytics}
                            onChange={(e) =>
                              setPreferences((p) => ({
                                ...p,
                                analytics: e.target.checked,
                              }))
                            }
                          />
                          <div className="w-11 h-6 bg-neutral-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-{{BRAND_COLOR}}-500" />
                        </label>
                      </div>

                      {/* Marketing — toggle */}
                      <div className="flex items-center justify-between p-3 bg-neutral-800/50 rounded-xl">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <ShieldCheck className="w-5 h-5 text-purple-500 shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-white">
                              Cookie di Marketing
                            </p>
                            <p className="text-xs text-neutral-500">
                              Utilizzati per contenuti personalizzati e
                              campagne.
                            </p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer shrink-0 ml-3">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={preferences.marketing}
                            onChange={(e) =>
                              setPreferences((p) => ({
                                ...p,
                                marketing: e.target.checked,
                              }))
                            }
                          />
                          <div className="w-11 h-6 bg-neutral-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-{{BRAND_COLOR}}-500" />
                        </label>
                      </div>

                      {/* Salva preferenze custom */}
                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={saveCustom}
                          className="px-5 py-2.5 rounded-xl bg-{{BRAND_COLOR}}-600 hover:bg-{{BRAND_COLOR}}-500 text-white text-sm font-bold transition-colors"
                        >
                          Salva le mie preferenze
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
