export type Move = 'cooperate' | 'defect';

export type Payoff = {
  player: number;
  opponent: number;
  label: string;
};

export const payoffMatrix: Record<Move, Record<Move, Payoff>> = {
  cooperate: {
    cooperate: { player: 3, opponent: 3, label: 'Mutual Cooperation' },
    defect: { player: 0, opponent: 5, label: 'You got exploited' },
  },
  defect: {
    cooperate: { player: 5, opponent: 0, label: 'You exploited the opponent' },
    defect: { player: 1, opponent: 1, label: 'Mutual Defection' },
  },
};

export function moveLabel(move: Move): string {
  return move === 'cooperate' ? 'Cooperate' : 'Defect';
}
