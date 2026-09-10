# Visual Design System: Dark Mode

This document establishes the visual design specifications, design tokens, typography, hierarchy, and spatial rules for the **Dark Mode** theme of Sudeep Kumar Surya's personal portfolio.

---

## 1. Color Palette Tokens

### 1.1 Canvas & Surfaces
| Token | Hex / Value | Description & Use |
| :--- | :--- | :--- |
| `--bg-canvas` | `#0A0D14` | Deep obsidian background (ultra-deep immersion) |
| `--bg-surface` | `#121826` | Primary surface cards, container backgrounds |
| `--bg-surface-elevated` | `#1A2234` | Interactive elevated elements & dropdowns |
| `--bg-glass` | `rgba(18, 24, 38, 0.72)` | Translucent glassmorphism with backdrop-blur |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Elegant fine glass border |
| `--border-focus` | `#818CF8` | Indigo 400 focus and hover outline |

### 1.2 Text & Content Hierarchy
| Token | Hex / Value | Description & Use |
| :--- | :--- | :--- |
| `--text-primary` | `#F8FAFC` | Crisp high-contrast heading text (Slate 50) |
| `--text-secondary` | `#CBD5E1` | Legible body and description copy (Slate 300) |
| `--text-muted` | `#94A3B8` | Subtle captions, timestamps, meta info (Slate 400) |
| `--text-inverse` | `#0A0D14` | Contrasting dark text on high-luminance elements |

### 1.3 Brand Accents & Neon Glows
| Token | Hex / Value | Description & Use |
| :--- | :--- | :--- |
| `--accent-primary` | `#6366F1` | Electric Indigo 500 |
| `--accent-hover` | `#818CF8` | Radiant Indigo 400 hover state |
| `--accent-secondary` | `#38BDF8` | Cyan 400 for gradient transitions |
| `--accent-gradient` | `linear-gradient(135deg, #6366F1 0%, #38BDF8 100%)` | Striking headline masks, primary buttons |
| `--badge-bg` | `rgba(99, 102, 241, 0.14)` | Glowing pill background for tags and categories |

### 1.4 Shadows & Ambient Glows
| Token | Value | Use Case |
| :--- | :--- | :--- |
| `--shadow-sm` | `0 1px 3px rgba(0, 0, 0, 0.4)` | Buttons, small items |
| `--shadow-md` | `0 4px 12px rgba(0, 0, 0, 0.5)` | Glassmorphism cards |
| `--shadow-lg` | `0 12px 28px rgba(0, 0, 0, 0.6)` | Modals, active hover elevation |
| `--glow-ambient` | `0 0 45px -10px rgba(99, 102, 241, 0.35)` | Accent card and hero focal radiance |

---

## 2. Typography System

### 2.1 Font Families
- **Primary / Headings / Body**: `'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Code / Monospace**: `'JetBrains Mono', 'Fira Code', monospace`

### 2.2 Typographic Scale & Hierarchy
| Level | Font Size | Line Height | Font Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| `H1` (Hero Headline) | `3.25rem` (52px) | `1.15` | `800` (Bold) | `-0.025em` |
| `H2` (Section Titles) | `2.25rem` (36px) | `1.25` | `700` (Bold) | `-0.02em` |
| `H3` (Card / Subtitles) | `1.375rem` (22px) | `1.35` | `600` (SemiBold) | `-0.015em` |
| `Body Large` | `1.125rem` (18px) | `1.6` | `400` / `500` | normal |
| `Body Regular` | `1.0rem` (16px) | `1.6` | `400` | normal |
| `Small / Captions` | `0.875rem` (14px) | `1.5` | `500` | `+0.01em` |

---

## 3. Spacing & Spatial Layout

### 3.1 Spacing Scale (8pt Grid System)
- `--space-1`: `0.25rem` (4px)
- `--space-2`: `0.5rem` (8px)
- `--space-3`: `0.75rem` (12px)
- `--space-4`: `1.0rem` (16px)
- `--space-6`: `1.5rem` (24px)
- `--space-8`: `2.0rem` (32px)
- `--space-12`: `3.0rem` (48px)
- `--space-16`: `4.0rem` (64px)
- `--space-24`: `6.0rem` (96px)

### 3.2 Containers & Layout
- `--container-max-width`: `1200px`
- `--container-padding`: `clamp(1rem, 5vw, 2rem)`
- `--section-gap`: `clamp(4rem, 8vw, 6.5rem)`
- `--border-radius-sm`: `8px`
- `--border-radius-md`: `12px`
- `--border-radius-lg`: `18px`
- `--border-radius-full`: `9999px`
