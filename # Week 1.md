# Week 1

Excellent. Here is a strict Week 1 execution plan you can follow day-by-day, with acceptance criteria and definition of done for each day.

**Week 1 Goal**

Ship a polished v0 of Project 1: an interactive Prisoner’s Dilemma concept site with:
1. Intro page
2. One-shot PD page
3. Iterated PD page
4. One rich interactive figure
5. Basic concept checks

Time budget: 2 to 3 focused hours per day.

**Day 1: Project Setup + Visual Direction**
Tasks
1. Initialize React app with TypeScript.
2. Set up routing for three pages: Intro, One-Shot, Iterated.
3. Define visual system:
   1. Color tokens
   2. Type scale
   3. Spacing and layout tokens
4. Build page shell with responsive header/nav/footer.

Acceptance Criteria
1. All three routes load and are mobile-friendly.
2. Shared layout and design tokens are in place.
3. No broken links or blank sections.

Definition of Done
1. You can navigate between all pages on desktop and mobile widths.
2. Lighthouse accessibility score is at least decent baseline (no obvious contrast or semantic issues).
3. Project runs cleanly with no TypeScript errors.

**Day 2: Core PD Model + Parameter Constraints**
Tasks
1. Implement payoff model and validation for T, R, P, S.
2. Add configurable payoff controls (sliders or numeric inputs).
3. Enforce constraints and show clear inline feedback when invalid.
4. Add simple strategy selector for player A and B (Cooperate/Defect).

Acceptance Criteria
1. Entering invalid payoff ordering immediately shows feedback.
2. Action pair outcomes map correctly to payoffs.
3. UI updates instantly when values change.

Definition of Done
1. Model logic is separated from UI components.
2. Unit tests cover payoff mapping and constraint checks.
3. No inconsistent state when users type quickly or partially.

**Day 3: One-Shot Page (Concept + Interaction)**
Tasks
1. Build payoff matrix visualization for one-shot game.
2. Add hover/click interactions to inspect outcomes.
3. Add dynamic “best response” helper text.
4. Add short concept blocks:
   1. Dominant strategy
   2. Nash equilibrium
   3. Social optimum mismatch

Acceptance Criteria
1. User can see all four outcome cells and associated payoffs.
2. Best-response helper changes correctly with payoff values.
3. Concepts are understandable in one pass.

Definition of Done
1. One-shot page is fully usable without reading external docs.
2. At least 3 edge-case tests pass for altered payoff settings.
3. You can demo the core one-shot insight in under 2 minutes.

**Day 4: Iterated Engine v1 + Timeline**
Tasks
1. Build round-based simulator for N rounds.
2. Implement at least 3 strategies:
   1. Always Cooperate
   2. Always Defect
   3. Tit for Tat
3. Add action timeline strip per round.
4. Add cumulative payoff chart.

Acceptance Criteria
1. Round results and cumulative scores are correct.
2. Tit for Tat behavior reflects previous opponent move.
3. User can change N and rerun simulation.

Definition of Done
1. Deterministic behavior with fixed setup.
2. Tests cover strategy behavior in known matchups.
3. No UI desync between timeline and score chart.

**Day 5: Rich Interactive Figure + Story Flow**
Tasks
1. Create one flagship figure:
   1. Side-by-side timeline and score trajectory
   2. Live controls for round count and optional noise
2. Add guided annotations (step 1, step 2, step 3).
3. Add animation/stagger reveal for learning flow (subtle, purposeful).

Acceptance Criteria
1. Figure teaches why outcomes diverge between strategies.
2. Controls feel immediate and stable.
3. Animation improves comprehension, not distraction.

Definition of Done
1. A first-time user can explain what changed and why after 60 to 90 seconds.
2. Figure works on both touch and desktop pointer interaction.
3. Performance remains smooth during repeated reruns.

**Day 6: Concept Checks + UX Polish**
Tasks
1. Add 5 short concept checks:
   1. Multiple choice or true/false
   2. Instant feedback and explanation
2. Improve microcopy and labels for clarity.
3. Add loading/empty/error states where relevant.
4. Polish responsive behavior and spacing.

Acceptance Criteria
1. Checks validate key ideas from all pages.
2. Feedback explains why an answer is correct or incorrect.
3. Mobile layout has no clipping or overlap.

Definition of Done
1. Content and interaction are coherent across all pages.
2. At least one user test pass (friend/self scripted walkthrough) is completed.
3. No obvious usability blockers remain.

**Day 7: QA, Hardening, and Ship**
Tasks
1. Run full test suite and fix failures.
2. Add smoke end-to-end checks for key flows.
3. Do cross-browser sanity checks.
4. Deploy preview/production build.
5. Write concise readme with:
   1. What it teaches
   2. How to run
   3. How to test
   4. Known limitations

Acceptance Criteria
1. Core flows pass in deployed environment.
2. No high-severity bugs in core interactions.
3. Readme is enough for another dev to run and evaluate quickly.

Definition of Done
1. Public link is shareable and stable.
2. Demo script is ready (3 to 5 minutes).
3. You can confidently move into Week 2 without refactoring debt panic.

**Non-Negotiable Engineering Gates for Week 1**
1. Determinism gate: same inputs produce same round-by-round output.
2. Correctness gate: all four action pairs map to correct payoffs.
3. UX gate: controls and results stay synchronized.
4. Teaching gate: each page answers one explicit learning question.

**Daily Exit Checklist (Use Every Night)**
1. Did I ship something visible today?
2. Did I add or update at least one test?
3. Did I remove one confusion point from UI or copy?
4. Is main branch deployable right now?

If you want, next I can give you a Week 1 task board format (copy-paste tickets for Linear/Jira/Trello) with story points and test cases already written.