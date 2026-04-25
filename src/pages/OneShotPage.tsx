import { useMemo, useState } from 'react';
import { moveLabel, payoffMatrix, type Move } from '../data/payoff';

const allMoves: Move[] = ['cooperate', 'defect'];

export function OneShotPage() {
  const [playerMove, setPlayerMove] = useState<Move>('cooperate');
  const [opponentMove, setOpponentMove] = useState<Move>('cooperate');

  const result = useMemo(
    () => payoffMatrix[playerMove][opponentMove],
    [playerMove, opponentMove]
  );

  return (
    <section className="page-grid">
      <article className="card card-hero">
        <p className="eyebrow">One-Shot</p>
        <h2>Single-Round Outcome</h2>
        <p>
          Pick a move for both players and inspect the payoff produced by the
          classic matrix.
        </p>
      </article>

      <article className="card">
        <h3>Choose Moves</h3>
        <div className="controls-grid">
          <label>
            Your move
            <select
              value={playerMove}
              onChange={(event) => setPlayerMove(event.target.value as Move)}
            >
              {allMoves.map((move) => (
                <option key={move} value={move}>
                  {moveLabel(move)}
                </option>
              ))}
            </select>
          </label>

          <label>
            Opponent move
            <select
              value={opponentMove}
              onChange={(event) => setOpponentMove(event.target.value as Move)}
            >
              {allMoves.map((move) => (
                <option key={move} value={move}>
                  {moveLabel(move)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="result-block" role="status" aria-live="polite">
          <p className="result-label">{result.label}</p>
          <p>
            You: <strong>{result.player}</strong> points
          </p>
          <p>
            Opponent: <strong>{result.opponent}</strong> points
          </p>
        </div>
      </article>
    </section>
  );
}
