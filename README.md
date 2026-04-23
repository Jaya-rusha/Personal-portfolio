# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS. Features smooth animations, dark theme, and all essential sections for showcasing your work.

## Features

- 🎨 **Modern Design** - Beautiful gradient backgrounds and glassmorphism effects
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🌙 **Dark Theme** - Professional dark color scheme
- 📧 **Contact Form** - Functional contact section
- 🗂️ **Project Showcase** - Featured and regular project sections
- 📊 **Skills Display** - Animated skill bars and categories

## Sections

- **Hero** - Eye-catching introduction with call-to-action
- **About** - Personal story and experience timeline
- **Projects** - Featured projects with filtering and categories
- **Skills** - Technical skills with progress bars
- **Contact** - Contact form and information
- **Footer** - Social links and navigation

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update the job title and description
   - Add your social media links

2. **About Section** (`src/components/About.jsx`):
   - Update your personal story
   - Modify experience timeline
   - Adjust skill highlights

3. **Projects Section** (`src/components/Projects.jsx`):
   - Replace with your actual projects
   - Update project descriptions and technologies
   - Add live demo and GitHub links

4. **Skills Section** (`src/components/Skills.jsx`):
   - Adjust skill levels and categories
   - Add or remove technologies
   - Update tool icons

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update your contact information
   - Add your social media links
   - Configure form submission (currently simulated)

### Styling

The design uses TailwindCSS with custom configurations:

- **Colors**: Purple and blue gradient theme
- **Fonts**: Inter font family
- **Animations**: Custom keyframes for fade-in and slide-up effects

Modify `tailwind.config.js` to customize the theme further.

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if using Git integration

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect and build the project
3. Deploy with one click

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ using React and TailwindCSS**
