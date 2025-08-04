# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static personal portfolio website for Dr. Hassan Kanso, showcasing his bioengineering research, projects, and the LabVault laboratory management application. The site is built with vanilla HTML, CSS, and JavaScript - no build tools or frameworks required.

## Common Commands

Since this is a static website with no build process:
- **Run locally**: Open `index.html` in a web browser or use a local server like `python -m http.server 8000` or VS Code's Live Server extension
- **Deploy**: Upload files directly to any static hosting service (GitHub Pages, Netlify, etc.)
- **Lint HTML**: Use webhint as configured in `.hintrc`

## Architecture & Structure

### Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript
- **Animation**: P5.js for DNA helix on homepage
- **Design**: Modern glassmorphism with CSS custom properties
- **No Build Process**: Direct deployment of static files

### Key Files
- `index.html` - Main portfolio page with DNA animation and tabbed experience sections
- `projects.html` - Dynamic project showcase with filtering and modals
- `LabVault.html` - Product showcase page for the LabVault application
- `styles.css` - Comprehensive styling with component-based classes
- `database_of_experiences.txt` - Detailed CV/resume content (not in version control)

### JavaScript Architecture
- **Homepage**: P5.js DNA animation, smooth scrolling navigation, tab system
- **Projects**: Dynamic filtering system, modal management, project data stored as JS objects
- **LabVault**: Screenshot gallery with modal preview system

### CSS Architecture
- Mobile-first responsive design with breakpoints at 480px, 768px, 1000px
- Component-based classes with CSS custom properties for theming
- Glassmorphism effects using backdrop-filter
- Consistent spacing and typography scales

### Important Patterns
- All interactive elements use vanilla JavaScript event listeners
- Modals are implemented with fixed positioning and z-index management
- Smooth scrolling uses CSS scroll-behavior and JavaScript scrollIntoView
- Project data is embedded as JavaScript objects in projects.html

## Development Guidelines

When modifying this codebase:
- Maintain the vanilla JavaScript approach - no frameworks or libraries except P5.js
- Follow the existing CSS component patterns and naming conventions
- Ensure all interactive elements have proper keyboard navigation
- Test responsive design at all breakpoints
- Keep the static nature - avoid adding build steps unless absolutely necessary