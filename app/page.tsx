import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm dark:border-zinc-800 dark:bg-zinc-900">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Bereitgestellt mit Dokploy
          </div>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Dokploy Demo App
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Diese Next.js-Anwendung wurde mit{" "}
            <a
              href="https://dokploy.com"
              className="font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-700 dark:hover:decoration-zinc-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dokploy
            </a>
            {" "}bereitgestellt, einer selbst gehosteten Deployment-Plattform. Dokploy macht es einfach, deine Anwendungen mit Docker-Unterstützung, automatischem SSL und vielem mehr zu deployen und zu verwalten.
          </p>
          <div className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Docker Support</h3>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Containerisierte Deployments</p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Auto SSL</h3>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Automatische HTTPS-Einrichtung</p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Self-Hosted</h3>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Volle Kontrolle & Privatsphäre</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        </div>
      </main>
    </div>
  );
}
