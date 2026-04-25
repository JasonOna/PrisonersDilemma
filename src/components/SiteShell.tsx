import { NavLink } from 'react-router-dom';
import type { PropsWithChildren } from 'react';

const links = [
  { to: '/', label: 'Intro' },
  { to: '/one-shot', label: 'One-Shot' },
  { to: '/iterated', label: 'Iterated' },
];

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container site-header-inner">
          <div>
            <p className="eyebrow">Game Theory Explorer</p>
            <h1 className="brand-title">Prisoner's Dilemma Lab</h1>
          </div>
          <nav aria-label="Primary" className="main-nav">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main id="content" className="container main-content">
        {children}
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>Built for Day 1: setup, structure, and visual system.</p>
        </div>
      </footer>
    </div>
  );
}
