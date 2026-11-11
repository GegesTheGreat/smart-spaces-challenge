# Phase 1 Specification - First Playable Office Room

## 1. Purpose

Replace the Play placeholder with one interactive office room. The player adjusts brightness and temperature and immediately sees deterministic comfort and energy feedback.

## 2. User story

As a player, I want to adjust office brightness and temperature so that I can see how environmental choices affect occupant comfort and energy use.

## 3. Starting state

- Room: Office
- Occupants: 12, read-only
- Brightness: 70%
- Temperature: Comfortable
- Comfort score: calculated from defaults
- Energy score: calculated from defaults

## 4. Controls

### Brightness

- Numeric slider
- Minimum: 0
- Maximum: 100
- Step: 10
- Current value displayed as a percentage

### Temperature

- Three choices: Cool, Comfortable, Warm
- Exactly one choice selected at a time
- Selected choice is visually and textually identifiable

### Reset

- Restore brightness to 70
- Restore temperature to Comfortable
- Recalculate feedback immediately

## 5. Comfort formula

`brightnessPenalty = abs(brightness - 70)`

Temperature penalty:
- Comfortable: 0
- Cool: 15
- Warm: 15

`comfortScore = clamp(100 - brightnessPenalty - temperaturePenalty, 0, 100)`

## 6. Energy formula

`energyScore = clamp(100 - brightness, 0, 100)`

Temperature does not affect energy in Phase 1. Heating and cooling energy are outside this phase.

## 7. Status rules

Evaluate in this order:
1. Comfort ≥ 85 and Energy ≥ 20: Balanced office
2. Comfort < 60: Occupants need a better environment
3. Energy < 20: Energy use is very high
4. Otherwise: Trade-off in progress

## 8. Visual behaviour

- Display one office-room panel.
- Brightness 0–30: low-light treatment and “Low light”.
- Brightness 40–70: working-light treatment and “Working light”.
- Brightness 80–100: high-light treatment and “High light”.
- Always display brightness, temperature, comfort score, energy score and status as text.
- Use the Phase 0 shared theme and reusable components.

## 9. Architecture

- Keep route composition in `src/app/play.tsx`.
- Put pure score calculations in `src/engine/roomScoring.ts`.
- Put shared Phase 1 types in `src/models/RoomState.ts`.
- Reusable room controls/cards belong in `src/components/`.
- Score functions must not depend on React or the screen.

## 10. Acceptance criteria

AC01: Play opens one office room without a blocking error.
AC02: Occupants displays 12 and cannot be edited.
AC03: Brightness defaults to 70 and is visibly displayed as 70%.
AC04: Brightness cannot be set below 0 or above 100.
AC05: Brightness changes only in steps of 10.
AC06: Temperature defaults to Comfortable.
AC07: Exactly one of Cool, Comfortable or Warm is selected.
AC08: Comfort score follows the documented formula.
AC09: Energy score follows the documented formula.
AC10: Scores update immediately when either control changes.
AC11: Room treatment and text label follow the brightness bands.
AC12: Status follows the documented evaluation order.
AC13: Reset restores brightness 70 and Comfortable.
AC14: Reset restores the corresponding scores, treatment and status.
AC15: Current values and scores are communicated with text, not colour alone.
AC16: Back to Home continues to work.
AC17: Browser route works.
AC18: Expo Go route works where available.
AC19: TypeScript check passes.
AC20: Expo Doctor has no blocking failure.
AC21: Automated tests cover score boundaries and representative combinations.

## 11. Out of scope

- Multiple rooms or scene selection
- Rounds, timer or final result
- Combined total score
- Budget or reliability scoring
- Events or random behaviour
- Persistent settings or leaderboard
- Electronics, AIS or Commerce feature
- Sound, animation or external artwork
- Backend, account or cloud service

## 12. Evidence required

- Browser screenshots at defaults, low light and high light
- Phone screenshots where available
- Completed acceptance checklist
- Score test results
- TypeScript check
- Expo Doctor result
- Clean Git status
- `phase-01-first-room` tag created in A07
