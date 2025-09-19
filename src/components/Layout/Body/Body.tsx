import FashionList from "../../FashionList/FashionList";
import "./Body.css";

export const Body = () => {
  return (
    <main>
      {/* Video section */}
      <div className="hero-video">
        <video src="/hero-video.mp4" autoPlay loop muted />
      </div>

      {/* Fashion Sections */}
      <section className="fashion-sections">
        <div className="fashion-card">
          <img src="/tops.jpg" alt="Tops" />
          <h2>Tops</h2>
        </div>
        <div className="fashion-card">
          <img src="/bottoms.jpg" alt="Bottoms" />
          <h2>Bottoms</h2>
        </div>
        <div className="fashion-card">
          <img src="/dresses.jpg" alt="Dresses" />
          <h2>Dresses</h2>
        </div>
        {/* Add more sections similarly */}
      </section>

      {/* Optionally, your full fashion list */}
      <FashionList />
    </main>
  );
};
