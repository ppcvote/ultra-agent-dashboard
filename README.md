# ultra-agent-dashboard

Animated AI agent dashboard with 3 switchable themes. React + TypeScript, zero API dependencies.

Built by [Ultra Lab](https://ultralab.tw) — live demo at [ultralab.tw/agent](https://ultralab.tw/agent).

## Themes

### 1. Colony View
RimWorld-inspired top-down pixel office. Agents walk between rooms, work at desks, meet in the corridor.

- 5 rooms with furniture (command center, server room, social hub, security lab, advisory)
- Pixel sprite characters with walking animations
- Corridor meetings with chat bubbles
- Real-time wall clock
- Ambient particle effects

### 2. Orbital Command
Space station schematic with 4 connected modules orbiting a central core.

- Animated starfield + shooting stars
- Data stream particles flowing between modules
- Rotating radar sweep
- Per-module equipment viewports (holographic display, satellite dish, radar, charts)
- Signal bars + typing indicators

### 3. Deep Ocean
Aquarium with bioluminescent sea creatures — one per agent.

- Octopus (8 animated tentacles, eye tracking, chromatophore spots)
- Tropical fish school (7 fish with individual glide paths)
- Anglerfish (bioluminescent lure, jaw snap, prowling)
- Sea turtle (flipper stroke animation, head bob)
- Seaweed, coral, anemone, bubbles, caustic light canvas
- Tank monitoring panel with environment stats

## Quick start

```bash
git clone https://github.com/ppcvote/ultra-agent-dashboard.git
cd ultra-agent-dashboard
npm install
npm run dev
```

Open `http://localhost:5173`.

## Customize

### Add your own data

Edit `src/hooks/useAgentActivity.ts` — replace the `SAMPLE_DATA` object with your own data source (Firebase, REST API, WebSocket, etc.).

### Add your own agents

Edit `src/data/agent-data.ts` — modify `AGENTS_META` for card info and `AGENTS_VISUAL` for sprite appearance.

### Add translations

Edit `src/hooks/useI18n.ts` — the `TRANSLATIONS` object contains all UI strings. Add more languages or plug in react-i18next.

## Structure

```
src/
├── AgentApp.tsx              ← Main page (hero + theme switcher + agent cards)
├── main.tsx                  ← React entry
├── index.css                 ← Global reset
├── components/
│   ├── NerveCenter.tsx       ← Theme 1: Colony View
│   ├── SpaceStation.tsx      ← Theme 2: Orbital Command
│   ├── Aquarium.tsx          ← Theme 3: Deep Ocean
│   ├── sprites.tsx           ← SVG geometric characters
│   ├── Furniture.tsx         ← Colony room furniture
│   ├── StationFurniture.tsx  ← Space station equipment
│   ├── AquariumCreatures.tsx ← Sea creatures (octopus, fish, anglerfish, turtle)
│   ├── AgentPopup.tsx        ← Click-to-inspect agent card
│   ├── ParticleCanvas.tsx    ← Ambient floating particles
│   └── CorridorDecor.tsx     ← Colony corridor decorations
├── data/
│   ├── agent-data.ts         ← Agent definitions + room layout
│   └── pathfinding.ts        ← Colony agent movement routes
├── hooks/
│   ├── useAgentActivity.ts   ← Data provider (mock, replace with yours)
│   └── useI18n.ts            ← Translation stub
└── themes/
    ├── nerve-center.css      ← Colony View animations
    ├── space-station.css     ← Orbital Command animations
    └── aquarium.css          ← Deep Ocean animations
```

## Tech

- React 18 + TypeScript
- Vite
- Lucide React (icons)
- Pure CSS animations (50+ keyframes, no animation libraries)
- Canvas API (particles, starfield, caustic lights)
- Zero runtime dependencies beyond React

## License

MIT

## Links

- [Live demo](https://ultralab.tw/agent) — all 3 themes running with live data
- [Ultra Lab](https://ultralab.tw) — AI automation services
- [Discord](https://discord.gg/ewS4rWXvWk) — Solo Lab developer community
