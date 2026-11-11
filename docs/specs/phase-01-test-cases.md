# Phase 1 Test Cases

| ID | Brightness | Temperature | Comfort | Energy | Status |
|---|---:|---|---:|---:|---|
| T01 | 70 | Comfortable | 100 | 30 | Balanced office |
| T02 | 50 | Comfortable | 80 | 50 | Trade-off in progress |
| T03 | 100 | Warm | 55 | 0 | Occupants need a better environment |
| T04 | 0 | Cool | 15 | 100 | Occupants need a better environment |
| T05 | 80 | Comfortable | 90 | 20 | Balanced office |
| T06 | 90 | Comfortable | 80 | 10 | Energy use is very high |
| T07 | 60 | Warm | 75 | 40 | Trade-off in progress |

## Boundary checks

- Brightness minimum is 0.
- Brightness maximum is 100.
- Brightness increments are 10.
- Comfort and energy are clamped to 0–100.
- Reset returns 70 and Comfortable.


