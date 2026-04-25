import { Link } from 'react-router-dom';

export function IntroPage() {
  return (
    <section className="page-grid">
      <article className="card card-hero">
        <p className="eyebrow">Intro</p>
        <h2>Why this dilemma matters</h2>
        <p>
          The Prisoner's Dilemma models tension between short-term self-interest
          and long-term collective gain. It appears in diplomacy, pricing,
          social trust, and online behavior.
        </p>
        <p>
          Use the routes above to explore both the one-shot and repeated forms
          of the game.
        </p>
      </article>

      <article className="card">
        <h3>Explore Next</h3>
        <div className="link-list">
          <Link className="cta-link" to="/one-shot">
            One-Shot Game
          </Link>
          <Link className="cta-link" to="/iterated">
            Iterated Game
          </Link>
        </div>
      </article>
    </section>
  );
}
