# Dashboard Dependency Audit

## Sources Reviewed
- `Nueva carpeta/package.json` (runtime and build dependencies for the Star Admin bundle).
- `Nueva carpeta/src/gulpfile.js` (task runner entry point).
- Assets referenced from `Nueva carpeta/src/index.html` and supporting scripts under `Nueva carpeta/src/assets/**`.

## Core Dependencies in Use
### Build Pipeline
- Gulp 4 is configured as the build runner and loads task definitions from `gulp-tasks` via `require-dir`, with the default task mapped to `serve` for local development.【F:Nueva carpeta/src/gulpfile.js†L1-L13】
- The project relies on a suite of gulp plugins and Sass tooling defined under `devDependencies` (autoprefixer, clean-css, gulp-sass, browser-sync, etc.), indicating that assets are compiled and minified through the gulp pipeline.【F:Nueva carpeta/package.json†L77-L101】

### Vendor Runtime Bundle
- `assets/vendors/js/vendor.bundle.base.js` ships jQuery 3.7.1, Bootstrap 5.3.2, and Perfect Scrollbar 1.5.3, providing the foundational DOM, layout, and custom scrollbar behavior required across the template.【F:Nueva carpeta/src/assets/vendors/js/vendor.bundle.base.js†L1-L12】
- Corresponding base styles are loaded from `assets/vendors/css/vendor.bundle.base.css`, alongside icon font packs (Feather, Material Design Icons, Themify Icons, Font Awesome, Typicons, Simple Line Icons) declared in the page head to render the navigation and UI glyphs.【F:Nueva carpeta/src/index.html†L10-L15】
- Bootstrap Datepicker styles and scripts are included for the navbar date selector widget.【F:Nueva carpeta/src/index.html†L16-L17】【F:Nueva carpeta/src/index.html†L782-L783】

### Dashboard-Specific Assets
- Additional plugin CSS for DataTables and select styling is injected even on the landing dashboard, although the page markup does not instantiate a DataTable component.【F:Nueva carpeta/src/index.html†L19-L24】
- Chart.js (UMD build) and Progressbar.js are loaded specifically for dashboard visualizations, with custom chart setup implemented inside `assets/js/dashboard.js`.【F:Nueva carpeta/src/index.html†L786-L788】【F:Nueva carpeta/src/assets/js/dashboard.js†L1-L120】【F:Nueva carpeta/src/assets/js/dashboard.js†L180-L258】
- Template behavior scripts (`off-canvas.js`, `template.js`, `settings.js`, `hoverable-collapse.js`, `todolist.js`, and `jquery.cookie.js`) provide sidebar toggles, layout adjustments, settings panel interactions, hover menus, todo list widgets, and cookie helpers. These scripts are tightly coupled to jQuery/Bootstrap events and Perfect Scrollbar initialization within the dashboard shell.【F:Nueva carpeta/src/index.html†L790-L798】【F:Nueva carpeta/src/assets/js/template.js†L1-L143】【F:Nueva carpeta/src/assets/js/settings.js†L1-L108】【F:Nueva carpeta/src/assets/js/hoverable-collapse.js†L1-L25】【F:Nueva carpeta/src/assets/js/todolist.js†L1-L34】

## Inventory of Available Vendor Assets
- The bundled `assets/vendors` directory currently includes icon fonts, Select2, Bootstrap Maxlength, Progressbar.js, DataTables, Chart.js, Bootstrap Datepicker, Flag Icon CSS, Font Awesome, and Typeahead integrations—matching only a subset of the packages declared in `package.json`.【F:Nueva carpeta/package.json†L7-L75】【f0e266†L1-L21】

## Optional or Replaceable Dependencies
- Numerous jQuery-era plugins remain in `package.json` (Ace, CodeMirror, C3/D3, Chartist, Dragula, Dropify, Dropzone, FullCalendar, jVectorMap, jsGrid, LightGallery, Morris.js, Quill, Summernote, SweetAlert, TinyMCE, Typeahead, X-editable, etc.) but are not present in the checked-in `assets/vendors` directory or referenced by the dashboard entry point. These can be deferred until specific features require them.【F:Nueva carpeta/package.json†L7-L75】【f0e266†L1-L21】
- Where React-friendly alternatives are desired:
  - Replace DataTables with `react-table` or `MUI Data Grid` to avoid direct jQuery dependency while providing advanced table interactions.【F:Nueva carpeta/src/index.html†L19-L20】
  - Swap Select2 for `react-select` to integrate autocomplete dropdowns natively with React state management.【F:Nueva carpeta/package.json†L63-L64】
  - Use `react-chartjs-2` as a thin React wrapper around Chart.js, enabling declarative chart configuration within components.【F:Nueva carpeta/src/index.html†L786-L788】
  - Prefer `react-datepicker` or MUI pickers over Bootstrap Datepicker for controlled date inputs.【F:Nueva carpeta/src/index.html†L16-L17】【F:Nueva carpeta/src/index.html†L782-L783】
  - Migrate Perfect Scrollbar usages to `react-perfect-scrollbar` or `simplebar-react` for lifecycle-managed scroll areas in React layouts.【F:Nueva carpeta/src/assets/js/template.js†L60-L74】
  - Reimplement todo widgets and UI toggles using React state instead of `todolist.js`/jQuery handlers to reduce reliance on imperative DOM manipulation.【F:Nueva carpeta/src/assets/js/todolist.js†L1-L34】

## Next Steps
- Validate which optional dependencies are truly needed by other pages before pruning them from `package.json`.
- Plan incremental replacements of jQuery-based behaviors with React components to simplify state management and bundle size.
