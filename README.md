# Developer Portfolio

A responsive, interactive portfolio built with React and Vite, designed to showcase my technical skills and featured projects.

## Demo
[View project on Firebase](https://portfolio-project-lnd.web.app)

## RSS Feed
The news page includes a link to RSS feeds on web development and technology.
[View RSS file](https://portfolio-project-lnd.web.app/rss/tech-news.xml)

[RSS Feed](./rss-screenshot-feeder.png)
---

---

## 📥 Import & Export (UT5 Requirements)
This version includes a massive data management system synchronized with Firebase.

### Sample Files for Import
To test the import functionality, use these example files:
* [Download projects.json](./public/examples/projects.json)
* [Download projects.xml](./public/examples/projects.xml)
* [Download projects.csv](./public/examples/projects.csv)

### Features
* **Massive Import:** Supports XML, JSON, and CSV file uploading via `FileReader` and custom parsers.
* **Dynamic Export:** Generates downloadable files in real-time based on the current Firebase database state.

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation
```bash
git clone https://github.com/celesteag/portfolio.git
cd portfolio-project
npm install
npm run dev
```

Open `http://localhost:5173`

---

## 📁 Project Structure
```
portfolio-project/
├── src/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
|   |   ├── (cookies, privacy, terms)/
│   │   └── service-card/
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
|   |   ├── projects/
│   │   └── contact/
|   ├── services/
|   |   └── dataService.js
│   ├── data/
|   |   ├── skills.js
│   │   └── projects.js
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   ├── parseXML.js
│   │   ├── parseCSV.js
│   │   ├── parseJSON.js
│   │   ├── exportXML.js
│   │   ├── exportCSV.js
│   │   └── exportJSON.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── README.md
```

---

## 🎨 Main Features

## Home Page (Skills Showcase)
The landing page features a dynamic grid of technical skills and services.
* **Interactive Toggle (2.5% State Requirement):** Includes a "Show/Hide Skills" button that uses the `useState` hook to manage visibility. This allows users to collapse the skills section, demonstrating React's reactive state management.
* **Service Cards:** Each skill is presented in a custom-styled card with high-quality imagery and descriptions.
* **Responsive Layout:** Built with Flexbox to ensure a seamless experience across mobile, tablet, and desktop devices.

### Projects Page
A dedicated section showcasing my web development work with a focus on functionality and tech stack transparency.
* **Project Filtering:** Includes a filtering system (All, React, Angular, JavaScript) to help users navigate different project categories.
* **Detailed Project Cards:**
    * **RobEurope:** A web page featuring interactive tools and a real-time chatbot connected to Firebase.
    * **RESTful API:** A full-stack application built with Angular, Express, and MongoDB.
    * **React Calculator:** A functional utility highlighting React component logic.
* **Tech Tags:** Each project displays specific technology badges (HTML, CSS, JS, MongoDB, etc.) for quick identification.
* **Direct Links:** Each card includes links to "View on GitHub" for source code and "View Demo" for the live application.

### About Page
Info about TravelWeb's mission and what we offer.

### Contact Page
- Contact form
- Interactive Leaflet map
- Contact cards with Google Maps, email, and WhatsApp links

### 🛠️ Data Architecture (UT5)
* **Centralized Services:** All Firebase interactions (push, update, remove, get) are abstracted into `dataService.js`. This ensures the components remain "lean" and only handle UI logic.
* **Async/Await Flow:** Uses asynchronous programming to handle database requests without blocking the main thread.
* **Real-time Sync:** Uses Firebase `onValue` listeners to reflect imports and edits instantly across all connected clients.

---

## 🛠️ Third-Party Components

### Leaflet
Used for the interactive map on the contact page.
- [React Leaflet Docs](https://react-leaflet.js.org/)
- [Leaflet Quick Start](https://leafletjs.com/examples/quick-start/)

### React Icons
Icons for social media, location, email, and phone.
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 📚 Resources That Helped

1. **React Docs** - [https://react.dev/](https://react.dev/) - Component structure and hooks.

2. **Vite Guide** - [https://vitejs.dev/guide/](https://vitejs.dev/guide/) - Project setup and dev server.

3. **React Router** - [https://reactrouter.com/](https://reactrouter.com/) - Navigation between pages.

4. **CSS Flexbox** - [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Responsive layouts.

5. **Unsplash** - [https://unsplash.com/](https://unsplash.com/) - Free images.

6. **README Template** - [https://github.com/othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template) - Base structure for this file.

---

## 💻 Git Workflow

**Branches:**
- `main` - Production
- `develop` - Development
- `feature/first-delivery` - Development
- `feature/second-delivery` - Development
- `feature/third-delivery` - Development
- `feature/import-and-export` - Merged into develop
```bash
git checkout develop
git add .
git commit -m "your message"
git push origin develop
```

**Merge Flow:**
`feature/import-and-export` ➔ `develop` ➔ `main`

---

## 📱 Responsive Design

Mobile-first with media queries:
```css
/* Mobile (default) */

/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }
```

---

## 📝 Design Inspiration

Based on the Interactive Portfolio Dark Theme Figma template for the UI/UX and color palette, while all featured projects and content are my own original work.

---

## 👤 Author

**Celeste Arbelo García**

- GitHub: [@celesteag](https://github.com/celesteag)
- Email: celeste.ag.2c@gmail.com

---

## Thanks To

- React Icons - Icon library
- Leaflet - Maps
- CSS-Tricks - Guides
- MDN Web Docs - Documentation

---

## License

Educational project - free to use.

---

## Contact

- info@devwebsolutions.com
- Las Palmas

---

## Technical Architecture & Capabilities
This project is structured to address the following core technical concepts:
1. **Centralized Access:** Separation of services and components.
2. **Asynchrony:** Use of `async/await` in data fetching.
3. **Data Parsing:** Implementation of `DOMParser` for XML imports.
4. **State Management:** How React reflects Firebase changes in real-time.
5. **Dynamic Exporting:** How data is transformed from JSON to CSV/XML for the user.