import { useMemo, useState } from 'react';
import { payoffMatrix, type Move } from '../data/payoff';

type PlayerStrategy = 'always-cooperate' | 'always-defect' | 'random';
type OpponentStrategy = 'tit-for-tat' | 'always-defect';

function playerMove(strategy: PlayerStrategy): Move {
  if (strategy === 'always-cooperate') return 'cooperate';
  if (strategy === 'always-defect') return 'defect';
  return Math.random() > 0.5 ? 'defect' : 'cooperate';
}

function opponentMove(strategy: OpponentStrategy, lastPlayerMove: Move): Move {
  if (strategy === 'always-defect') return 'defect';
  return lastPlayerMove;
}

export function IteratedPage() {
  const [rounds, setRounds] = useState(8);
  const [playerStrategyChoice, setPlayerStrategyChoice] =
    useState<PlayerStrategy>('always-cooperate');
  const [opponentStrategyChoice, setOpponentStrategyChoice] =
    useState<OpponentStrategy>('tit-for-tat');

  const simulation = useMemo(() => {
    let playerTotal = 0;
    let opponentTotal = 0;
    const history: { round: number; you: Move; them: Move }[] = [];

    let previousPlayerMove: Move = 'cooperate';

    for (let round = 1; round <= rounds; round += 1) {
      const yourMove = playerMove(playerStrategyChoice);
      const theirMove = opponentMove(opponentStrategyChoice, previousPlayerMove);
      const payoff = payoffMatrix[yourMove][theirMove];

      playerTotal += payoff.player;
      opponentTotal += payoff.opponent;
      history.push({ round, you: yourMove, them: theirMove });

      previousPlayerMove = yourMove;
    }

    return { playerTotal, opponentTotal, history };
  }, [rounds, playerStrategyChoice, opponentStrategyChoice]);

  return (
    <section className="page-grid">
      <article className="card card-hero">
        <p className="eyebrow">Iterated</p>
        <h2>Repeated-Round Dynamics</h2>
        <p>
          Try simple strategy combinations and watch how scores evolve over many
          rounds.
        </p>
      </article>

      <article className="card">
        <h3>Simulation Controls</h3>
        <div className="controls-grid">
          <label>
            Your strategy
            <select
              value={playerStrategyChoice}
              onChange={(event) =>
                setPlayerStrategyChoice(event.target.value as PlayerStrategy)
              }
            >
              <option value="always-cooperate">Always Cooperate</option>
              <option value="always-defect">Always Defect</option>
              <option value="random">Random</option>
            </select>
          </label>

          <label>
            Opponent strategy
            <select
              value={opponentStrategyChoice}
              onChange={(event) =>
                setOpponentStrategyChoice(event.target.value as OpponentStrategy)
              }
            >
              <option value="tit-for-tat">Tit For Tat</option>
              <option value="always-defect">Always Defect</option>
            </select>
          </label>

          <label>
            Rounds: {rounds}
            <input
              type="range"
              min={3}
              max={30}
              value={rounds}
              onChange={(event) => setRounds(Number(event.target.value))}
            />
          </label>
        </div>

        <div className="result-block">
          <p>
            You total: <strong>{simulation.playerTotal}</strong>
          </p>
          <p>
            Opponent total: <strong>{simulation.opponentTotal}</strong>
          </p>
        </div>

        <div className="table-wrap" aria-label="Round history">
          <table>
            <thead>
              <tr>
                <th>Round</th>
                <th>You</th>
                <th>Opponent</th>
              </tr>
            </thead>
            <tbody>
              {simulation.history.map((entry) => (
                <tr key={entry.round}>
                  <td>{entry.round}</td>
                  <td>{entry.you}</td>
                  <td>{entry.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
