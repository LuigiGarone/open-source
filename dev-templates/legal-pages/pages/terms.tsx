export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
        Termini e Condizioni
      </h1>
      <div className="prose prose-invert prose-neutral max-w-none">
        <p className="text-neutral-300">
          Data di ultima modifica:{" "}
          {new Date().toLocaleDateString("it-IT")}
        </p>
        <div className="mt-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Introduzione
            </h2>
            <p className="text-neutral-400">
              I presenti Termini e Condizioni regolano l&apos;uso della
              piattaforma {"{{APP_NAME}}"} fornita da {"{{COMPANY_NAME}}"} (il
              &quot;Fornitore&quot;) al Cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. Servizio
            </h2>
            <p className="text-neutral-400">
              {"{{APP_NAME}}"} fornisce una piattaforma SaaS. Ogni cliente opera
              in un ambiente isolato (multi-tenant). I dati di ciascun cliente
              sono di stretta visibilita del cliente stesso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Proprieta Intellettuale
            </h2>
            <p className="text-neutral-400">
              Tutti i diritti di proprieta intellettuale relativi alla
              piattaforma {"{{APP_NAME}}"} appartengono a {"{{COMPANY_NAME}}"}.
              I contenuti caricati dai clienti (testi, immagini, video) restano
              di proprieta del cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Limitazione di Responsabilita
            </h2>
            <p className="text-neutral-400">
              {"{{COMPANY_NAME}}"} non sara responsabile per danni indiretti,
              incidentali o consequenziali derivanti dall&apos;uso della
              piattaforma, nei limiti consentiti dalla legge applicabile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Contatti
            </h2>
            <p className="text-neutral-400">
              Per qualsiasi domanda relativa ai presenti Termini, contattare:{" "}
              {"{{CONTACT_EMAIL}}"}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
