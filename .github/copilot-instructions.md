# HUD React Dashboard - Copilot Instructions

## Architecture Overview

This is a **React dashboard application** using Vite as the build tool, React Router for navigation, and Bootstrap 5 for styling. The app follows a modular component architecture with a theme-based design system supporting dark/light modes and multiple color themes.

### Key Architectural Patterns

- **Central App State**: Layout configuration is managed through React Context (`AppSettings`) with state setters like `setAppSidebarCollapsed`, `setAppBoxedLayout`
- **Route-Component Mapping**: All routes are centrally defined in `src/config/app-route.jsx` with lazy loading pattern
- **Menu Configuration**: Navigation structure is data-driven via `src/config/app-menu.jsx` with support for nested menus and highlights
- **Card Components**: Reusable card system with arrow decorations in `src/components/card/card.jsx` (Card, CardHeader, CardBody, CardExpandToggler)

## Development Workflow

**Start Development Server:**

```bash
npm run dev  # or npm start - both use Vite
```

**Build for Production:**

```bash
npm run build  # Uses Vite build
```

**Styling System:**

- SCSS files in `src/scss/` with modular imports structure
- Bootstrap 5 customization through `_variables.scss` and `_variables-dark.scss`
- Theme switching handled via CSS classes and CSS custom properties

## Component Patterns

### Page Components

- Located in `src/pages/[category]/[component].jsx`
- Import layout components relatively: `./../../components/card/card.jsx`
- Use AppSettings context for layout configuration: `const context = useContext(AppSettings)`
- Data fetching pattern: `useEffect` + `fetch('/assets/data/[category]/[file].json')`

### Layout Components

- **Sidebar**: `src/components/sidebar/` - Uses PerfectScrollbar for custom scrolling
- **Header**: Standard top header with theme controls
- **Content**: Main content wrapper with dynamic classes
- **Theme Panel**: Live theme switcher component

### Data Integration

- Static JSON data in `public/assets/data/[category]/` structure
- Charts use ApexCharts React wrapper (`react-apexcharts`)
- Tables use DataTables.net with Bootstrap 5 integration
- Form plugins include React Select, React Datepicker, Quill editor

## Key Dependencies & Patterns

**UI Libraries:**

- Bootstrap 5 + Bootstrap Icons for base styling
- ApexCharts + Chart.js for data visualization
- DataTables.net for advanced table features
- FullCalendar for calendar functionality

**State Management:**

- React Context for global app settings (no Redux)
- Local component state with `useState` for page-specific data
- Layout state managed through boolean flags (collapsed, boxed, etc.)

## File Organization Rules

**Import Patterns:**

- Relative imports for internal components: `./../../components/card/card.jsx`
- Absolute imports avoided - use relative paths from component location
- Asset imports from `public/assets/` as absolute URLs

**Component Structure:**

```
src/
├── components/     # Reusable UI components
├── pages/         # Route-specific page components
├── config/        # App configuration (routes, menu, settings)
├── scss/          # Styling system
└── assets/        # Component-specific assets
```

**Data Loading:**

- Page data stored as JSON in `public/assets/data/[page-category]/`
- Fetch data in `useEffect` hooks with error handling
- Use loading states for async operations

## Development Notes

- **Theme System**: Uses CSS custom properties for dynamic theming - check `_root.scss` for theme variables
- **Build Configuration**: Custom Vite config with multiple plugins - check `vite.config.js` for build customizations
- **Mobile Responsiveness**: App has specific mobile sidebar toggle patterns - see sidebar component for implementation
- **Perfect Scrollbar**: Used throughout for consistent cross-browser scrolling behavior

When adding new pages, follow the existing route → menu → component pattern and maintain the relative import structure.
