import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

export default function LegalFooter() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-800 text-neutral-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white text-2xl font-black tracking-tight">
            {"{{APP_NAME}}"}
          </h3>
          <p className="text-sm leading-relaxed max-w-xs">
            {"{{APP_DESCRIPTION}}"}
          </p>
          <div className="pt-4 space-y-1">
            <p className="text-sm text-neutral-500">
              Sviluppato da{" "}
              <strong className="text-white">{"{{COMPANY_NAME}}"}</strong>
            </p>
            <p className="text-sm text-neutral-500">{"{{COMPANY_ADDRESS}}"}</p>
          </div>
        </div>

        {/* Prodotto */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold">Prodotto</h4>
          <a
            href="#"
            className="hover:text-white transition-colors flex items-center gap-1 group"
          >
            <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
            Accedi
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors flex items-center gap-1 group"
          >
            <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
            Registrati
          </a>
        </div>

        {/* Legale */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold">Legale</h4>
          <Link
            href="/legal"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" /> Note Legali
          </Link>
          <Link
            href="/termini-e-condizioni"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" /> Termini e Condizioni
          </Link>
          <Link
            href="/privacy"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" /> Privacy Policy
          </Link>
          <Link
            href="/cookie-policy"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" /> Cookie Policy
          </Link>
          <Link
            href="/cmp"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" /> Preferenze Cookie
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-600">
        &copy; {new Date().getFullYear()} {"{{APP_NAME}}"}. Tutti i diritti
        riservati. Sviluppato da {"{{COMPANY_NAME}}"}, {"{{COMPANY_ADDRESS}}"}.
      </div>
    </footer>
  );
}
