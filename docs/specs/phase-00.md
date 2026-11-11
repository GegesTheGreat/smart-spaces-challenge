# Phase 0 Specification - Smart Spaces Application Shell
## 1. Purpose
Create a stable, mobile-friendly application shell for Smart Spaces Challenge. Phase 0 provides
navigation, shared styling and placeholders only. It does not implement gameplay.
## 2. Primary user
A Transition Year student or programme reviewer opening the app for the first time.
## 3. User story
As a player, I want to open Smart Spaces Challenge and move between its main sections so that I
understand the product and can access future game features.
## 4. Required routes
- Home: `/`
- Play placeholder: `/play`
- Settings placeholder: `/settings`
- Leaderboard placeholder: `/leaderboard`
- How to Play: `/help`
## 5. Home-screen content
- Product name: Smart Spaces Challenge
- Short description: Manage smart spaces, respond to customer needs and balance comfort, energy,
budget and reliability.
- Primary Start button linking to `/play`
- Buttons or links for Settings, Leaderboard and How to Play
- DCoE learning note stating that later features connect to Electronics, AIS or Commerce
## 6. Placeholder-screen behaviour
- Play displays that the first playable room is added in Phase 1.
- Settings displays that preferences are added in a later phase.
- Leaderboard displays that local scores are added in a later phase.
- How to Play explains the future game objective without claiming unavailable functionality.
- Every non-home route provides a clear route back to Home.
## 7. Shared visual requirements
- Portrait-first mobile layout
- Readable on supported phone and browser routes
- One shared colour palette
- One shared spacing system
- Reusable primary and secondary button styles
- Clear heading hierarchy
- Visible focus and adequate contrast where supported
- No required internet-backed images or services
## 8. Technical constraints
- React Native with Expo and TypeScript
- Expo Router file-based navigation
- Route files separated from reusable components
- No new backend, account, payment or cloud-database service
- No game state, scoring, event, local-storage or workstream-feature logic in Phase 0
- Browser and Expo Go routes remain supported
- No passwords, tokens or confidential data
## 9. Acceptance criteria
AC01: The app opens at Home without a blocking error.
AC02: Home displays the product name and short description.
AC03: Start opens the Play placeholder.
AC04: Settings opens the Settings placeholder.
AC05: Leaderboard opens the Leaderboard placeholder.
AC06: How to Play opens the Help screen.
AC07: Every non-home screen has a clear way back to Home.
AC08: Navigation works in the supported browser route.
AC09: Navigation works in Expo Go where the phone route is available.
AC10: The same shared theme and reusable button treatment are used across screens.
AC11: The Play, Settings and Leaderboard screens clearly identify unavailable future functionality.
AC12: No gameplay, scoring, storage or workstream-feature behaviour is present.
AC13: Expo Doctor completes without a blocking failure.
AC14: TypeScript check completes without an error.
## 10. Out of scope
- Playable room
- Controls
- Scores or rounds
- Events
- Persistent settings
- Leaderboard storage

- Electronics, AIS or Commerce feature
- Authentication or cloud backend
- App-store packaging
## 11. Evidence required
- Browser screenshots of all five routes
- Phone screenshots where available
- Completed acceptance checklist
- Expo Doctor result
- TypeScript check result
- Clean Git status
- Commit and annotated `phase-00-starter` tag created in A05