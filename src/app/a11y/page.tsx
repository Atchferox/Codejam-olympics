"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function KeyboardTrapEscapeRoom() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Categorie 2: Accessibility (a11y)
        </h1>
        
        <h2 className="text-xl font-semibold mb-4">De "Keyboard Trap" Escape Room</h2>
        
        <div className="space-y-4 text-slate-300 mb-8">
          <p>
            We gebruiken <strong className="text-white">shadcn/ui</strong> voor onze componenten. 
            De <code className="bg-slate-800 px-2 py-0.5 rounded">Dialog</code> component is gebouwd 
            op <strong className="text-white">Radix UI</strong>, wat betekent dat accessibility 
            features al ingebouwd zijn:
          </p>
          
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Focus trapping:</strong> Tab blijft binnen de modal - je kunt niet per ongeluk 
              naar elementen buiten de popup navigeren
            </li>
            <li>
              <strong>Escape-toets:</strong> Druk op <kbd className="bg-slate-800 px-2 py-0.5 rounded text-sm">Esc</kbd> om 
              de modal te sluiten
            </li>
            <li>
              <strong>ARIA attributen:</strong> Correcte role, aria-labelledby, aria-describedby
            </li>
          </ul>
          
          <p className="text-slate-400 italic">
            Dit hoeven we dus niet zelf te implementeren - het zit al in shadcn!
          </p>
        </div>

        {/* Demo Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">
              Open de Escape Room
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-slate-900 border-slate-700 text-white">
            <DialogHeader>
              <DialogTitle>🔐 Je zit in de Escape Room!</DialogTitle>
              <DialogDescription className="text-slate-400">
                Probeer te ontsnappen met je toetsenbord. De focus blijft gevangen!
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <p className="text-sm text-slate-300">Probeer dit:</p>
              <ul className="text-sm text-slate-400 space-y-1 list-disc list-inside">
                <li>Druk op <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-xs">Tab</kbd> om door de elementen te navigeren</li>
                <li>Merk op dat je focus NIET buiten de modal gaat</li>
                <li>Druk op <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-xs">Esc</kbd> om te ontsnappen!</li>
              </ul>
              
              <div className="space-y-3 pt-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">Je naam:</label>
                  <Input
                    id="name"
                    placeholder="Typ hier..."
                    className="bg-slate-800 border-slate-600"
                  />
                </div>
                <div>
                  <label htmlFor="secret" className="block text-sm mb-1">Geheime code:</label>
                  <Input
                    id="secret"
                    type="password"
                    placeholder="••••••"
                    className="bg-slate-800 border-slate-600"
                  />
                </div>
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button>Ontsnap! (of druk Esc)</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Code voorbeeld */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-3">Code:</h3>
          <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-sm overflow-x-auto">
            <code className="text-slate-300">{`import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    {/* Focus trapping: automatisch ✅ */}
    {/* Escape sluit modal: automatisch ✅ */}
    {/* ARIA attributen: automatisch ✅ */}
  </DialogContent>
</Dialog>`}</code>
          </pre>
        </div>
      </main>
    </div>
  );
}
