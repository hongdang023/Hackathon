# Conan School UI Style Guide (Admin)

Design system and UI specifications for the Conan School admin portals.

---

## 1. Color Palette

All admin applications share a YC-inspired white and dark gray minimal theme with vibrant orange accents.

- **Primary (Orange):** `#f26625` — Used for brand accents, links, actions, and active states.
- **Background:** `#ffffff` — Primary page and application background color.
- **Foreground:** `#111827` — Dark gray for high contrast text.
- **Secondary:** `#f9fafb` — Off-white background for sidebar, inputs, and cards.
- **Border / Input:** `#e5e7eb` — Default gray for subtle borders.

---

## 2. Typography

- **Heading 1:** `text-2xl font-bold tracking-tight text-foreground`
- **Heading 2:** `text-lg font-bold text-foreground`
- **Body Text:** `text-sm text-muted-foreground`
- **Font Family:** `Inter`, sans-serif.

---

## 3. UI Controls & Buttons

- **Primary Button:** `bg-primary text-white hover:opacity-90 transition-opacity`
- **Secondary/Outline:** `bg-transparent border border-border text-foreground hover:bg-muted`
- **Destructive/Delete:** `text-red-600 hover:bg-red-50 hover:text-red-700 border-red-200`
