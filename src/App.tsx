// App.tsx หรือไฟล์หลัก
import { useState } from "react";
import Home from "./Home";
import Gallery from "./Gallery";
import type { Traffic } from "./Home";

export default function App() {
  const [currentView, setCurrentView] = useState<Traffic | null>(null);

  if (currentView) {
    return <Gallery sel={currentView} onBack={() => setCurrentView(null)} />;
  }

  return <Home onSelect={setCurrentView} />;
}
