# Global Education Institute Website

A modern, responsive, multi-language website for an educational institution built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Multi-language Support**: English, French, and Arabic with RTL support
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Course Management**: Browse courses, view detailed course information
- **Authentication System**: User login and registration functionality
- **Interactive Components**: Testimonials carousel, statistics counters, and more

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Internationalization**: Custom language context
- **Deployment**: Ready for deployment on Vercel, Netlify, or other platforms

## Project Structure

```
/src
  /app                  # Next.js App Router
    /about              # About page
    /contact            # Contact page
    /courses            # Courses pages
      /[id]             # Course detail page
    /login              # Authentication pages
    /components         # Reusable UI components
    /contexts           # React contexts (including LanguageContext)
    /styles             # Global styles
  /components           # Shared components
    /courses            # Course-related components
    /ui                 # UI components
  /public               # Static assets
    /images             # Image assets
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/global-education-institute.git
   cd global-education-institute
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Customization

### Adding New Languages

1. Edit the `src/app/contexts/LanguageContext.tsx` file
2. Add your new language to the `Language` type
3. Add translations for all keys in the `translations` object

### Adding New Pages

1. Create a new directory in the `src/app` folder with the page name
2. Create a `page.tsx` file within that directory
3. Import the `useLanguage` hook for multi-language support

### Modifying Styles

- Global styles are in `src/app/globals.css`
- Tailwind configuration is in `tailwind.config.js`

## Deployment

This application can be easily deployed to Vercel with zero configuration:

```bash
npm run build
# or
vercel deploy
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Design inspiration from various educational platforms
