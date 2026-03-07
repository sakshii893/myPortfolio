# Sakshi Pawar - Portfolio

A modern, interactive portfolio website showcasing my work as a Software Engineer.

## 🌐 Live Demo

Visit the live site: [https://sakshii893.github.io/myPortfolio/](https://sakshii893.github.io/myPortfolio/)

## ✨ Features

- **Interactive Loading Screen** - 5-second animated loading with panda mascot
- **Custom Cursor** - Animated target cursor with corner effects
- **3D Tilt Profile Card** - Holographic card with mouse-following effects
- **Mac-style Dock Navigation** - Magnifying dock with smooth animations
- **Dynamic GitHub Projects** - Automatically fetches and displays repositories
- **Tech Stack Showcase** - Animated logo carousel of technologies
- **Spotlight Cards** - Interactive project cards with mouse-following spotlight
- **Laser Flow Footer** - WebGL-powered animated footer
- **Responsive Design** - Works seamlessly on all devices

## 🛠️ Technologies Used

### Frontend
- React 19
- TypeScript
- Vite
- Framer Motion
- GSAP (GreenSock Animation Platform)

### 3D & Graphics
- Three.js
- @react-three/fiber
- @react-three/drei

### Styling
- CSS3 with custom animations
- Glassmorphism effects
- Gradient designs

### APIs
- GitHub REST API (for dynamic project fetching)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sakshii893/myPortfolio.git
cd myPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_GITHUB_USERNAME=your_github_username
VITE_GITHUB_TOKEN=your_github_token
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 🚢 Deployment

This project is configured for GitHub Pages deployment.

To deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
myPortfolio/
├── public/
│   ├── panda.webp          # Mascot image
│   └── lazy-panda/         # 3D model assets
├── src/
│   ├── components/
│   │   ├── Login.tsx       # Loading screen
│   │   ├── Home.tsx        # Home page
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Contact.tsx     # Contact form
│   │   ├── ProfileCard.tsx # 3D tilt card
│   │   ├── Dock.tsx        # Navigation dock
│   │   ├── LogoLoop.tsx    # Tech stack carousel
│   │   ├── Footer.tsx      # Footer with laser flow
│   │   ├── TargetCursor.tsx # Custom cursor
│   │   └── SpotlightCard.tsx # Interactive cards
│   ├── App.tsx             # Main app component
│   ├── App.css             # Global styles
│   └── main.tsx            # Entry point
├── .env                    # Environment variables (not committed)
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🎨 Key Components

### ProfileCard
- 3D tilt effect following mouse movement
- Holographic gradient background
- Smooth animations with Framer Motion

### Dock Navigation
- Mac-style magnification effect
- Smooth transitions between sections
- Active state indicators

### SpotlightCard
- Mouse-following spotlight effect
- Used for project cards
- Smooth gradient animations

### TargetCursor
- Custom animated cursor
- Corner effects that snap to interactive elements
- Spinning animation when idle

### LogoLoop
- Infinite horizontal scroll
- Hover to pause
- Displays tech stack icons

## 🔒 Security

- Environment variables are stored in `.env` (excluded from git)
- GitHub token is never exposed in the codebase
- All sensitive data is properly secured

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sakshi Pawar**
- GitHub: [@sakshii893](https://github.com/sakshii893)
- Email: sakshiiipawar10@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- 3D models and animations powered by Three.js
- Animations by Framer Motion and GSAP

---

Made with ❤️ by Sakshi Pawar
