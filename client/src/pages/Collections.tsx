import { ArrowLeft, ArrowRight, Leaf, ShoppingBag } from "lucide-react";
import { useLocation } from "wouter";

export default function Collections() {
  const [, navigate] = useLocation();
  return (
    <div className="collections-page">
      <header className="site-header collections-header">
        <button className="brand-mark" onClick={() => navigate("/")} aria-label="KOSH Imperial home"><span>KOSH</span><em>Imperial</em></button>
        <button className="back-link" onClick={() => navigate("/")}><ArrowLeft size={16} /> Back to home</button>
        <button className="bag-button" onClick={() => navigate("/")} aria-label="Return to bag"><ShoppingBag size={19} strokeWidth={1.6} /></button>
      </header>
      <main className="collections-main">
        <p className="kicker">KOSH IMPERIAL / PERSONAL EDIT</p>
        <h1>My collection</h1>
        <p className="collections-lede">Your saved pieces will live here — a slower, more intentional way to gather the objects you want to keep close.</p>
        <div className="empty-collection-card">
          <div className="empty-collection-icon"><Leaf size={26} strokeWidth={1.4} /></div>
          <h2>Your collection is empty.</h2>
          <p>Save a product with the heart icon and it will appear here. Images are intentionally kept quiet until you choose your pieces.</p>
          <button className="dark-button" onClick={() => navigate("/")}>Explore the edit <ArrowRight size={16} /></button>
        </div>
      </main>
      <footer className="collections-footer"><span>© 2026 KOSH Imperial</span><span>Luxury Eco-Craft. Crafted to grow life.</span></footer>
    </div>
  );
}
