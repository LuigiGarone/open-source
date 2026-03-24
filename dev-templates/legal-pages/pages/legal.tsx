export default function LegalPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
        Note Legali
      </h1>
      <div className="prose prose-invert prose-neutral max-w-none">
        <p className="text-neutral-300">
          Benvenuti su {"{{APP_NAME}}"}, una piattaforma sviluppata e gestita da{" "}
          {"{{COMPANY_NAME}}"}.
        </p>
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Dati Societari
          </h2>
          <ul className="list-disc pl-6 text-neutral-400 space-y-2">
            <li>
              <strong>Ragione Sociale:</strong> {"{{COMPANY_NAME}}"}
            </li>
            <li>
              <strong>Sede Legale:</strong> {"{{COMPANY_ADDRESS}}"}
            </li>
            <li>
              <strong>Contatto Email:</strong> {"{{CONTACT_EMAIL}}"}
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8">
            Copyright
          </h2>
          <p className="text-neutral-400">
            I contenuti, il design e la logica di business di {"{{APP_NAME}}"}{" "}
            sono di proprieta esclusiva di {"{{COMPANY_NAME}}"}. Ogni
            riproduzione o utilizzo non autorizzato e severamente proibito ai
            sensi della legge sul diritto d&apos;autore.
          </p>
        </div>
      </div>
    </div>
  );
}
