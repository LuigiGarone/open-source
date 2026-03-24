export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
        Cookie Policy
      </h1>
      <div className="prose prose-invert prose-neutral max-w-none">
        <p className="text-neutral-300">
          Informativa estesa sull&apos;uso dei Cookie all&apos;interno di{" "}
          {"{{APP_NAME}}"}, gestita da {"{{COMPANY_NAME}}"}.
        </p>
        <div className="mt-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Cosa Sono i Cookie?
            </h2>
            <p className="text-neutral-400">
              I cookie sono stringhe di testo che i siti visitati inviano al
              browser per essere memorizzati e ritrasmessi alla visita
              successiva. Il sito utilizza anche localStorage e sessionStorage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Tipologia di Cookie Utilizzati
            </h2>
            <ul className="list-disc pl-6 text-neutral-400 space-y-2">
              <li>
                <strong>Cookie Tecnici / Essenziali:</strong> Indispensabili per
                la sessione e il funzionamento base del sito. Nessun consenso
                preventivo richiesto.
              </li>
              <li>
                <strong>Cookie Analitici:</strong> Utilizzati per tracciare
                anonimamente le performance del sito e individuare aree di
                miglioramento.
              </li>
              <li>
                <strong>Cookie di Marketing:</strong> Utilizzati per mostrare
                contenuti personalizzati e misurare l&apos;efficacia delle
                campagne. Attivati solo tramite consenso esplicito.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Gestione delle Preferenze
            </h2>
            <p className="text-neutral-400">
              Puoi modificare le tue preferenze in qualsiasi momento dalla
              pagina{" "}
              <a href="/cmp" className="text-white underline">
                Preferenze Cookie
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
