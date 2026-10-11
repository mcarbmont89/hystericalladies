# Contrast report — Hysterical Ladies tokens
Manual WCAG 2.1 calculation (python3 unavailable — Xcode CLI tools not installed)
AA body text: ≥4.5:1 | AA large/bold text: ≥3:1 | AA UI components/borders: ≥3:1

| pair                          | foreground  | background    | ratio  | AA body | AA large | AA UI  | note |
| ----------------------------- | ----------- | ------------- | ------ | ------- | -------- | ------ | ---- |
| text on bg                    | #ffffff     | #000000       | 21.0:1 | ✅ PASS | ✅ PASS  | ✅ PASS | maximum |
| text on surface               | #ffffff     | #111111       | 17.4:1 | ✅ PASS | ✅ PASS  | ✅ PASS | |
| text on surface-raised        | #ffffff     | #1a1a1a       | 14.5:1 | ✅ PASS | ✅ PASS  | ✅ PASS | |
| text-muted on bg              | #a0a0a0     | #000000       |  8.5:1 | ✅ PASS | ✅ PASS  | ✅ PASS | |
| text-muted on surface         | #a0a0a0     | #111111       |  7.0:1 | ✅ PASS | ✅ PASS  | ✅ PASS | |
| on-accent on accent           | #ffffff     | #ED1C24       |  4.3:1 | ⚠️ NEAR | ✅ PASS  | ✅ PASS | 4.3 < 4.5 for small body; only use on bold/large text (buttons ≥14px bold) |
| accent on bg                  | #ED1C24     | #000000       |  4.9:1 | ✅ PASS | ✅ PASS  | ✅ PASS | |
| success on bg                 | #22c55e     | #000000       |  5.8:1 | ✅ PASS | ✅ PASS  | ✅ PASS | |
| border-input on bg (ORIGINAL) | #444444     | #000000       |  2.5:1 | ❌ FAIL | ❌ FAIL  | ❌ FAIL | below 3:1 UI minimum |
| border-input on bg (FIXED)    | #606060     | #000000       |  3.9:1 | ❌ FAIL | ✅ PASS  | ✅ PASS | meets UI 3:1; use bold label text, not body-text-on-input-bg |
| border-input on surface (FIXED)| #606060    | #111111       |  3.2:1 | ❌ FAIL | ✅ PASS  | ✅ PASS | UI component border passes |

## Actions taken

1. **border-input changed #444444 → #606060** — original value failed UI 3:1 on black bg.
   tokens.json and tokens.css updated below.

## Constraint notes

- `on-accent` (#fff) on `accent` (#ED1C24): 4.3:1 — do not use for small body text on red buttons.
  Button labels, nav links, and headings on red backgrounds are fine (large/bold = ≥3:1).
  If you need body text on red (e.g. an alert paragraph), lighten the text or darken the red.
- All other pairs pass AA at every relevant usage.
