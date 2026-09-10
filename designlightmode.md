# Visual Design System: Light Mode

This document establishes the visual design specifications, design tokens, typography, hierarchy, and spatial rules for the **Light Mode** theme of Sudeep Kumar Surya's personal portfolio.

---

## 1. Color Palette Tokens

### 1.1 Canvas & Surfaces
| Token | Hex / Value | Description & Use |
| :--- | :--- | :--- |
| `--bg-canvas` | `#F8FAFC` | Main viewport page background (Slate 50) |
| `--bg-surface` | `#FFFFFF` | Primary surface cards, nav, containers (Pure White) |
| `--bg-surface-elevated` | `#F1F5F9` | Elevated or secondary component background (Slate 100) |
| `--bg-glass` | `rgba(255, 255, 255, 0.78)` | Translucent backdrop for sticky header & overlays |
| `--border-subtle` | `rgba(148, 163, 184, 0.25)` | Clean, non-distracting element divider & card border |
| `--border-focus` | `#6366F1` | Active input or focused element border highlight |

### 1.2 Text & Content Hierarchy
| Token | Hex / Value | Description & Use |
| :--- | :--- | :--- |
| `--text-primary` | `#0F172A` | Ultra-high contrast for H1, H2, titles (Slate 900) |
| `--text-secondary` | `#334155` | Body copy and prominent descriptions (Slate 700) |
| `--text-muted` | `#64748B` | Subtle captions, meta dates, placeholders (Slate 500) |
| `--text-inverse` | `#FFFFFF` | Contrasting text inside vibrant buttons/badges |

### 1.3 Brand Accents & Gradients
| Token | Hex / Value | Description & Use |
| :--- | :--- | :--- |
| `--accent-primary` | `#4F46E5` | Electric Indigo 600 (Accessible on light surfaces) |
| `--accent-hover` | `#4338CA` | Darker indigo hover state (Indigo 700) |
| `--accent-secondary` | `#0284C7` | Ocean Sky 600 for gradients and tags |
| `--accent-gradient` | `linear-gradient(135deg, #4F46E5 0%, #0284C7 100%)` | Vibrant text masks, CTAs, highlight borders |
| `--badge-bg` | `rgba(79, 70, 229, 0.08)` | Subtle pill background for tags and categories |

### 1.4 Shadows & Depth
| Token | Value | Use Case |
| :--- | :--- | :--- |
| `--shadow-sm` | `0 1px 2px 0 rgba(15, 23, 42, 0.05)` | Small buttons, chips, tags |
| `--shadow-md` | `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)` | Cards, preview boxes |
| `--shadow-lg` | `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)` | Hover elevations, modals, dropdowns |

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
