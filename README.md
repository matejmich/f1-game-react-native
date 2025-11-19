# 🏎️ F1 Mini

A lightweight Formula-1 inspired mobile game suite built with **React Native**.

F1 Mini includes multiple skill-based mini-games. Player performance is normalized using realistic human ability ranges and converted into a **1–20 F1-style ranking**.

---

## 🚀 Features

### 🎮 Mini-Games

- **Lights Out** — reaction-time test modeled after real FIA start light behavior
- **Take Turns** — timing and precision cornering
- **Circuit Quiz** — guess the circuit based on outline
- **Driver → Team Match** — memory and F1 knowledge
- - more mini-games in development

### 🧠 Scoring System

Each game outputs a **normalized performance score**.  
The final ranking is mapped to a realistic **1 → 20 “F1 standing"**, where:

- **1st place** = outstanding, high-skill performance
- **20th place** = beginner or low performance

### 🗃️ State Management with Zustand

- Centralized player stats
- Leaderboard storage
- Shared cross-game state

### 📱 Modern Expo Setup

- File-based routing using **Expo Router**
- Fast refresh

---

## 🛠️ Tech Stack

| Area             | Tools                                |
| ---------------- | ------------------------------------ |
| Framework        | Expo + React Native                  |
| Language         | TypeScript                           |
| State Management | Zustand                              |
| Routing          | Expo Router                          |
| UI               | Custom RN components                 |
| Gameplay         | Timers, gestures, normalized scoring |

---

## 📦 Getting Started

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npx expo start
```

<!--
## 📄 License

MIT -->
