# Modern Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases your skills, projects, and experience in a clean and professional manner.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🌓 Dark mode support
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📝 Contact form with EmailJS integration
- 🔍 SEO friendly
- 🎯 Intersection Observer for scroll animations

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Hook Form
- EmailJS
- React Intersection Observer

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Customization

1. Update personal information in the components:
   - `Hero.tsx`: Update name, title, and description
   - `About.tsx`: Update bio and certifications
   - `Skills.tsx`: Modify skills and proficiency levels
   - `Projects.tsx`: Add your projects
   - `Contact.tsx`: Update contact information and social links

2. Customize colors in `tailwind.config.js`

3. Add your own images and assets in the `src/assets` directory

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
