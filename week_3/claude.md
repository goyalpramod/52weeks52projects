# Week 3: 8-Bit Interactive Portfolio Website

## Project Overview
Building a complete interactive 8-bit style portfolio website where users control a character that explores different "doors" to navigate between pages. Each door leads to a different page/section about you (About, Projects, Skills, Contact, etc.). This is a full website, not a component library.

## Tech Stack
- **Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Fonts**: 8-bit fonts (Press Start 2P or similar from Google Fonts)

## Design Inspiration
The user has visual references showing:
- Zombie Slayer game (pixel art characters and ground)
- Freddy's Sweet Nightmare Pills (retro gaming UI)
- Retro game boy aesthetic
- Character screen layouts
- UI flow diagrams with doors and navigation

## Website Structure

This is a **complete portfolio website** with different pages:

### Page Layout
**Side-scroller format** (like Mario) - character moves left/right through the hub world

### The 4 Doors/Pages:
1. **About Me & Contact** - Personal info and ways to reach out
2. **Projects & Skills** - Portfolio work and technical abilities combined
3. **Fun Page** - Creative/experimental content
4. **Wild Idea** - A surprise/unique concept page

### Interaction Model
- Character has **PNG sprites in different poses** for animation (walk cycle, idle, etc.)
- **Keyboard controls** for character movement (left/right arrow keys or A/D)
- Doors are positioned at different points in the side-scrolling world
- When character is **in front of a door**, user can **click the door** to navigate to that page

## Build Order Suggestion

### Phase 1: Foundation & Navigation
1. **Basic routing setup** - React Router for page navigation
2. **Home/Hub page layout** - The main interactive area
3. **Character sprite** - The player-controlled character
4. **Character movement system** - Keyboard controls
5. **Door components** - Clickable/interactive portals to other pages

### Phase 2: Page Development
6. **Create individual pages** - About, Projects, Skills, Contact
7. **Page layouts** - Design each page with 8-bit styling
8. **Navigation between pages** - Via doors and back buttons
9. **Content population** - Add your actual portfolio content

### Phase 3: Polish & Interactivity
10. **Transitions** - Smooth page transitions with 8-bit effects
11. **Animations** - Character animations, door opening effects
12. **Responsive design** - Make it work on different screen sizes
13. **Additional interactions** - Easter eggs, collectibles, etc.

## Component Building Approach

### Visual Style Guidelines
- Use Tailwind for layout and basic styling
- Create custom Tailwind classes for 8-bit specific effects:
  - Pixelated borders (`border-4`, custom pixel corners)
  - Retro color palettes (define in tailwind.config)
  - Box-shadow layering for depth/3D button effects
- Import 8-bit fonts via Google Fonts or local files

### Suggested Tailwind Customizations
- Custom color palette (NES/Game Boy inspired)
- Pixel-perfect spacing scale
- Custom animation classes for retro effects
- Border utilities for pixelated edges

## Key Considerations

### Character Movement System
- **Side-scroller physics**: Character moves left/right only (like Mario)
- **Sprite animation**: Swap between PNG images to create walk cycle
  - Idle sprite (standing still)
  - Walk frames (2-4 frames that cycle when moving)
  - Consider facing direction (flip sprite when moving left vs. right)
- **Implementation approach**:
  - Keyboard event listeners for arrow keys or A/D
  - Update character X position (horizontal movement)
  - CSS transforms for smooth position updates
  - Track velocity/momentum for more natural movement
  - Boundaries to keep character on screen

### Door Interaction System
- Each door is a component with associated content
- Detect when character overlaps with door hitbox
- Trigger modal/dialog or scene transition
- Content could be: About Me, Projects, Skills, Contact, etc.

### Performance
- Optimize sprite rendering if using multiple frames
- Consider using CSS transforms instead of repositioning for smoother animations
- Lazy load door content until accessed

## Role of Claude
- **Guide & Reviewer**: Provide suggestions, review code structure
- **NO CODE WRITING**: The developer must implement everything themselves
- **Provide direction**: Offer architectural advice, point out potential issues
- **Best practices**: Suggest React patterns, accessibility considerations

## Accessibility Notes
Even with 8-bit styling:
- Ensure keyboard navigation works
- Consider screen reader users (add appropriate ARIA labels)
- Maintain sufficient color contrast where possible
- Provide alternative interaction methods (click doors vs. walking to them)

## Success Criteria
- Interactive character that responds to keyboard input
- Multiple doors that trigger different content sections
- Cohesive 8-bit aesthetic throughout
- Smooth user experience
- Responsive design (consider mobile controls)

## Reference Files
- Inspiration images provided showing various 8-bit UI patterns
- Previous week's retro component library (week_2) for reference

## Development Philosophy
This is about learning by doing. The journey of figuring out CSS tricks for pixel art, implementing game-like interactions in React, and solving problems independently is the goal.
