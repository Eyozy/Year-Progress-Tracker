# Year Progress Tracker

[中文版](README.md) | [English Version](README_EN.md)

An elegant website that displays the progress of the current year, including elapsed and remaining days. Supports dark mode and internationalization.

## ✨ Features

- 📊 Shows current year progress percentage
- 📅 Displays current date and time
- 🔢 Shows elapsed and remaining days
- 🌓 Dark mode support
- 🌐 Internationalization (English/Chinese)
- 📱 Responsive design for all devices
- 🎨 Smooth animations and transitions
- ⚡ Real-time auto-updating progress
- 🔄 Manual theme and language switching

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Modern static site builder
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- Pure JavaScript, no additional frontend frameworks
- CSS animations for smooth visual effects
- Browser localStorage for user preferences

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Development server will start at [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 🎨 Customizing Themes

1. Modify color variables in `tailwind.config.js`
2. Adjust progress bar styles in `src/components/ProgressBar.astro`
3. Update theme switching logic in `src/layouts/MainLayout.astro`

## 🌐 Adding More Languages

1. Add translations in `src/utils/i18n.js`
2. Update language switching logic
3. Add corresponding language identifiers

## 🤝 Contributing

### Development Workflow
1. Fork the project
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a Pull Request

### Code Standards
- Use Prettier for code formatting
- PascalCase for component names
- camelCase for variables
- Add necessary comments

## 📜 License

MIT License - See [LICENSE](LICENSE) for details
