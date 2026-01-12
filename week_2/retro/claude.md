# Retro Component Library Project

## Project Overview
Building a retro Street Fighter-inspired component library from scratch using React + Tailwind CSS. This is a learning project to master frontend development, focusing on both React fundamentals and design system architecture.

## User Context
- **Background**: ML developer transitioning to frontend, good programming fundamentals
- **React Level**: Basic (understands components, props, state)
- **Tailwind Level**: New to it, learned throughout this project
- **Learning Style**: Reads articles/docs independently, wants guidance not direct code solutions
- **Guidance Rule**: NEVER provide complete code solutions, only review and suggest improvements

## Design Vision & Completed Styling

### Aesthetic: Hybrid Retro
- Mix of pixel art, 90s fighting game UI, and CRT effects
- Inspiration: Street Fighter Alpha 3, Marvel vs Capcom, King of Fighters

### Design Tokens (Implemented)
**Colors:**
- Background: Pastel yellow (`#F4EFE4`)
- Primary Red: `#ED3F27`
- Primary Orange: `#FEB21A`

**Typography:**
- Font: Pixelify Sans (Google Fonts)
- Loaded via index.html

**Styling Pattern:**
- Sharp corners (no border radius)
- Block/chop shadow effect: `shadow-[6px_6px_0_0_black]`
- Thick borders: `border-4`
- Press effect: Button translates 6px when active, shadow disappears

**Custom Features:**
- Retro pixel cursors (.cur files) loaded from `src/assets/Jeelh-Retro-Cursors/`
- Normal cursor for body
- Pointer cursor for buttons/links

## Technical Stack (Installed & Configured)
- React 19.2.0
- Vite 7.2.4 (build tool)
- TypeScript 5.9.3
- Tailwind CSS 4.1.18 (v4 with @theme directive)

## Project Structure
```
week_2/retro/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button/
│   │       │   └── Button.tsx ✅
│   │       ├── input/
│   │       │   └── Input.tsx ✅
│   │       ├── card/
│   │       │   └── Card.tsx ✅
│   │       └── dialog/
│   │           └── Dialog.tsx ✅
│   ├── assets/
│   │   └── Jeelh-Retro-Cursors/ (custom cursor files)
│   ├── index.css (Tailwind import + theme config)
│   ├── App.css
│   ├── App.tsx
│   └── main.tsx
├── index.html (includes Pixelify Sans font link)
└── package.json
```

## Completed Components (4/5)

### ✅ 1. Button Component
**Location:** `src/components/ui/button/Button.tsx`

**Props:**
- `title: string` - Button text
- `onClick: () => void` - Click handler

**Styling:**
- Background: `bg-primary-red`
- Text: `text-white`
- Border: `border-4 border-black`
- Shadow: `shadow-[6px_6px_0_0_black]`
- Press effect: `active:translate-x-[6px] active:translate-y-[6px] active:shadow-none`
- Hover: `hover:brightness-110`
- Transition: `transition-all duration-75`

**Key Learning:**
- React props and TypeScript typing
- Tailwind arbitrary values for custom shadows
- Active state pseudo-classes
- onClick event handling

---

### ✅ 2. Input Component
**Location:** `src/components/ui/input/Input.tsx`

**Props:**
- `text: string` - Placeholder text

**Styling:**
- Background: `bg-white`
- Text: `text-gray-900`
- Border: `border-3 border-black`
- Focus: `focus:border-primary-red focus:outline-none focus:ring-0`
- Padding: `px-6 py-3`

**Key Learning:**
- HTML input elements are self-closing
- Focus states and removing default browser outlines
- Placeholder attribute vs children

**Note:** Currently simplified version without controlled component state management (value/onChange). Can be enhanced later for form usage.

---

### ✅ 3. Card Component
**Location:** `src/components/ui/card/Card.tsx`

**Props:**
- `children: ReactNode` - Flexible content

**Styling:**
- Background: `bg-primary-orange`
- Text: `text-white`
- Border: `border-4 border-black`
- Shadow: `shadow-[6px_6px_0_0_black]`
- Padding: `px-6 py-3`

**Key Learning:**
- ReactNode vs ReactElement types
- Children prop for flexible composition
- Container components

---

### ✅ 4. Dialog/Modal Component
**Location:** `src/components/ui/dialog/Dialog.tsx`

**Props:**
- `isOpen: boolean` - Controls visibility
- `onClose: () => void` - Close handler
- `children: ReactNode` - Dialog content

**Features:**
- Uses React portals (`createPortal`) to render to document.body
- Backdrop with centering: `fixed inset-0 flex items-center justify-center`
- Pop-in animation using custom `scale-in` keyframe
- State managed by parent component (App.tsx)

**Styling:**
- Backdrop: `bg-transparent z-1000` (no darkening currently)
- Dialog box: Same retro styling as other components
- Animation: `animate-[scale-in_0.2s_ease-out]`

**Custom Animation (in index.css):**
```css
@keyframes scale-in {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
```

**Key Learning:**
- React portals for rendering outside parent DOM
- Boolean props vs function props
- Controlled vs uncontrolled components
- Conditional rendering (`if (!isOpen) return null`)
- State management in parent component
- Z-index and stacking context issues

**Known Issues:**
- Backdrop darkening not working as expected due to CSS stacking context
- #root element in App.css may need `background: transparent`
- Exit animation not yet implemented (planned for Phase 3)

---

## Remaining Components (1/5)

### ⏳ 5. Select/Dropdown Component
**Status:** Not started

**Planned features:**
- Dropdown state management
- Option selection
- Keyboard navigation
- Custom retro styling

---

## Configuration Files

### index.css
- Tailwind v4 import: `@import "tailwindcss";`
- Theme defined with `@theme` directive
- Custom `scale-in` keyframe for dialog animation
- Body styling with flexbox centering
- Custom cursor paths

### App.css
- #root container styling
- May need `background: transparent` added to fix dialog backdrop

### index.html
- Google Fonts link for Pixelify Sans

---

## Current Status: Phase 2 Complete (4/5 Components)

**Completed:**
- ✅ Tailwind CSS v4 setup
- ✅ Theme configuration (colors, fonts)
- ✅ Custom retro cursor implementation
- ✅ Button component with press effect
- ✅ Input component with focus states
- ✅ Card component with flexible content
- ✅ Dialog component with portal and animation

**Next Steps:**
1. Build Select/Dropdown component (final Phase 2 component)
2. Phase 3: Add more CSS animations (hover effects, transitions, loading states)
3. Phase 4: Integrate Framer Motion for advanced animations
4. Phase 5: Polish and documentation

---

## Technical Challenges Solved

### 1. Tailwind v4 Theme Configuration
- Used `@theme` directive instead of tailwind.config.js
- Defined colors with `--color-*` naming convention
- Colors accessible as `bg-primary-red`, `text-primary-orange`

### 2. Custom Cursors
- Loaded .cur files from assets folder
- Applied to body (normal) and buttons/links (pointer)
- Path: `url('src/assets/...')`

### 3. Block Shadow Effect
- Used Tailwind arbitrary values: `shadow-[6px_6px_0_0_black]`
- No blur (0) for hard retro aesthetic
- Combined with active state translation for press effect

### 4. Dialog Backdrop Issues
- Backdrop not overlaying correctly due to CSS stacking context
- body has `display: flex` which affects portal rendering
- #root container may be blocking backdrop transparency
- Tried various z-index and opacity solutions
- Possible fix: Add `background: transparent` to #root in App.css

### 5. Component Prop Typing
- Learned ReactNode vs ReactElement
- Function types: `() => void` for callbacks
- Boolean props for state flags
- Optional props with `?`

---

## Learning Resources Used

### React Fundamentals
- https://react.dev/learn/passing-props-to-a-component
- https://react.dev/learn/responding-to-events
- https://react.dev/reference/react-dom/components/input
- https://react.dev/reference/react-dom/createPortal

### Tailwind CSS
- https://tailwindcss.com/docs/v4-beta
- https://tailwindcss.com/docs/adding-custom-styles
- https://tailwindcss.com/docs/hover-focus-and-other-states
- https://tailwindcss.com/docs/box-shadow

### TypeScript with React
- https://react.dev/learn/typescript
- https://react-typescript-cheatsheet.netlify.app/

### Design Inspiration
- https://fossheim.io/writing/posts/css-brutalist-blog/ (block shadow effect)
- https://dribbble.com/search/retro-game-ui
- https://aleclownes.com/2017/02/01/crt-display.html (CRT effects)

### Modal/Dialog Patterns
- https://flowbite.com/docs/components/modal/
- https://headlessui.com/react/dialog
- https://github.com/facebook/react/issues/26292

---

## Key Decisions Made

1. **Component Approach:** Start simple, iterate later (no complex variant system initially)
2. **Animation Progression:** Static → CSS animations → Framer Motion
3. **Initial Scope:** 5 core components for v1
4. **Color Scheme:** Pastel yellow background + bright red/orange components
5. **Shadow Style:** Hard block shadow (no blur) for retro aesthetic
6. **Cursor Enhancement:** Custom pixel cursors for extra retro feel
7. **Dialog State:** Managed by parent component, not internal to Dialog
8. **Props Simplicity:** Minimal props for initial versions, can expand later

---

## Troubleshooting Notes

### Issue: Button onClick not working
**Cause:** Button component didn't accept onClick prop initially
**Fix:** Added onClick to Button props interface and passed to button element

### Issue: Input showing text between tags
**Cause:** Tried to use input like `<input>text</input>`
**Fix:** Input is self-closing, use placeholder attribute instead

### Issue: TypeScript errors with ReactElement
**Cause:** ReactElement too restrictive for children prop
**Fix:** Use ReactNode instead (accepts any renderable content)

### Issue: Dialog backdrop covering entire screen with solid color
**Cause:** Multiple factors - z-index, body flex context, #root background
**Attempted fixes:** z-index values, opacity adjustments, bg-transparent
**Still investigating:** May need to set #root background to transparent

---

## Notes for Next Session

1. **Complete Select/Dropdown component** to finish Phase 2
2. **Fix dialog backdrop issue** - try adding `background: transparent` to #root
3. Consider adding **exit animations** for dialog (scale-out keyframe)
4. Start thinking about **component variants** (sizes, color schemes)
5. **Accessibility considerations** (ARIA labels, keyboard navigation) for future phases
6. Potential enhancement: Make Button accept optional `variant` prop for orange version

---

## Project Timeline

**Session 1 (Current):**
- Project setup and configuration
- Theme and design tokens
- Built 4/5 core components
- Added custom cursors
- Implemented animations (dialog pop-in)

**Next Session:**
- Complete Select component
- Begin Phase 3: Enhanced CSS animations
- Polish existing components

---

## Important Reminders for Claude

- User is learning - provide guidance, links, explanations, NOT complete code
- User is proficient programmer but new to React/Tailwind
- Review code and suggest improvements when asked
- Point to specific documentation and articles
- Never give full code implementations unless explicitly requested
- Encourage experimentation and learning through doing
