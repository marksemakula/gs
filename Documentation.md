# Good Shepherd School - Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Core Components](#core-components)
4. [Routing System](#routing-system)
5. [Styling Approach](#styling-approach)
6. [Animation System](#animation-system)
7. [Debugging Guide](#debugging-guide)
8. [Development Workflow](#development-workflow)

## Project Overview

This is a React-based website for Good Shepherd School, built with:
- Vite as the build tool
- React Router for navigation
- Tailwind CSS for styling
- Framer Motion for animations
- React Icons for vector icons

## File Structure

```
gs/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── admin/         # Admin-specific components
│   │   ├── calendar/      # Calendar and event components
│   │   ├── donation/      # Donation-related components
│   │   └── enrollment/    # Enrollment form components
│   ├── pages/             # Page components
│   ├── App.jsx            # Main app component with routes
│   ├── main.jsx           # React entry point
│   ├── index.css          # Global styles
│   └── App.css            # Tailwind imports
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── tailwind.config.js     # Tailwind configuration
```

## Core Components

### 1. App.jsx
- Sets up HashRouter for client-side routing
- Defines all application routes
- Provides the main layout structure (Navbar + Footer with flex-grow content)

### 2. Page Components (in src/pages/)
Each page follows a similar structure:
- Wrapped in motion animations
- Uses Tailwind for responsive layouts
- Contains page-specific content sections

Key pages:
- **Home**: Hero section, features, STEM portal, event carousels
- **About**: School history, mission/vision, core values
- **Blog**: Filterable blog posts with category tabs
- **Enroll**: Multi-step enrollment form
- **Donate**: Donation options and partnership forms
- **Events**: Interactive calendar and event listing

## Routing System

The app uses `react-router-dom` with HashRouter (for better static file support):

```jsx
<HashRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    {/* Other routes */}
  </Routes>
</HashRouter>
```

Navigation between pages is handled via React Router's Link components.

## Styling Approach

1. **Tailwind CSS**:
   - Utility-first CSS framework
   - Configured in `tailwind.config.js` with custom colors/fonts
   - Imported via `@tailwind` directives in CSS files

2. **Custom Styles**:
   - Global styles in `index.css`
   - Component-specific styles using Tailwind classes

## Animation System

Using **Framer Motion** for animations:
- Page transitions
- Scroll-triggered animations
- Interactive element animations

Example animation pattern:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  {/* Content */}
</motion.div>
```

## Debugging Guide

### Common Issues

1. **Blank Page**
   - Check browser console for errors
   - Verify all components are properly exported/imported
   - Ensure `main.jsx` is correctly mounting to #root

2. **Styles Not Applying**
   - Verify Tailwind is properly configured
   - Check for missing `@tailwind` directives in CSS files
   - Ensure class names are correctly spelled

3. **Routing Issues**
   - Confirm all routes are properly defined in App.jsx
   - Check for correct usage of Link/NavLink components

4. **Animations Not Working**
   - Verify Framer Motion imports
   - Check animation props (initial, animate, etc.)
   - Ensure motion components are properly wrapped

### Debugging Tools

1. **React DevTools**:
   - Inspect component hierarchy
   - Check props and state

2. **Browser DevTools**:
   - Console for JavaScript errors
   - Network tab for failed requests
   - Elements tab for CSS inspection

3. **Vite Error Overlay**:
   - Provides build and runtime errors during development

## Development Workflow

### 1. Setup
```bash
npm install
```

### 2. Running Dev Server
```bash
npm run dev
```
- Starts Vite development server at `http://localhost:5173`

### 3. Building for Production
```bash
npm run build
```
- Creates optimized build in `dist/` folder

### 4. Previewing Production Build
```bash
npm run preview
```
- Locally serves the production build

### 5. Linting
```bash
npm run lint
```
- Runs ESLint to check for code issues

## Key Dependencies

- `react` + `react-dom`: Core React libraries
- `react-router-dom`: Client-side routing
- `framer-motion`: Animation library
- `tailwindcss`: Utility-first CSS framework
- `react-icons`: Icon library
- `vite`: Build tool and dev server

This documentation provides a comprehensive overview of the project structure, functionality, and debugging approaches. For component-specific details, refer to the inline comments in each component file.