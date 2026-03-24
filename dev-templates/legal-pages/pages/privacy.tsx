export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
        Privacy Policy (GDPR)
      </h1>
      <div className="prose prose-invert prose-neutral max-w-none">
        <p className="text-neutral-300">
          A tutela dei dati personali di Clienti e Utenti Finali, secondo il
          Regolamento (UE) 2016/679 (GDPR).
        </p>
        <div className="mt-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Titolare del Trattamento
            </h2>
            <p className="text-neutral-400">
              {"{{COMPANY_NAME}}"}, con sede legale in {"{{COMPANY_ADDRESS}}"}.
              Per qualsiasi comunicazione in materia Privacy:{" "}
              {"{{CONTACT_EMAIL}}"}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Categorie di Dati Trattati
            </h2>
            <ul className="list-disc pl-6 text-neutral-400 space-y-2">
              <li>
                <strong>Utenti Finali:</strong> Dati di navigazione, interazioni
                con la piattaforma, dati forniti volontariamente (nome,
                commenti). Le sessioni possono iniziare anonime.
              </li>
              <li>
                <strong>Clienti Business:</strong> Denominazione, email, dati
                necessari all&apos;erogazione del servizio.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Sicurezza
            </h2>
            <p className="text-neutral-400">
              I dati sono protetti con misure tecniche e organizzative adeguate.
              Il database utilizza Row Level Security (RLS) per garantire
              l&apos;isolamento dei dati tra tenant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Esercizio dei Diritti
            </h2>
            <p className="text-neutral-400">
              L&apos;interessato ha diritto a richiedere accesso, rettifica,
              portabilita, limitazione o cancellazione dei propri dati in
              qualunque momento contattando {"{{CONTACT_EMAIL}}"}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
