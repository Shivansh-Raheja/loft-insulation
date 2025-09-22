# Loft Insulation Services Website

A modern, responsive Next.js 14 application for a professional loft insulation services company. Built with TypeScript, Tailwind CSS, and featuring a comprehensive set of components and sections.

## Features

### 🏠 **Complete Homepage**
- **Hero Section** with video container and compelling CTAs
- **Services Section** showcasing all insulation services
- **Sectors Section** for different customer types
- **Insulation Types** with detailed accordion interface
- **Why Choose Us** with feature highlights
- **Customer Testimonials** with carousel functionality
- **Blog Preview** section
- **Call-to-Action Banner** for lead generation
- **FAQ Section** with expandable Q&A

### 🎨 **Modern Design**
- Clean, professional aesthetic with Tailwind CSS
- Fully responsive design for all devices
- Smooth animations and hover effects
- Accessible navigation and interactions
- SEO-optimized structure

### 🧩 **Reusable Components**
- `Header` - Sticky navigation with dropdown menus
- `Footer` - Comprehensive footer with links and contact info
- `Hero` - Eye-catching hero section with video
- `ServicesSection` - Service cards with icons
- `SectorsSection` - Sector-specific offerings
- `InsulationTypesSection` - Accordion-style insulation types
- `WhyChooseUsSection` - Feature highlights
- `TestimonialsSection` - Customer testimonials carousel
- `BlogPreviewSection` - Latest blog posts
- `CTABanner` - Lead generation banner
- `FAQSection` - Frequently asked questions

### 📱 **Responsive Features**
- Mobile-first design approach
- Collapsible navigation menu
- Touch-friendly interactions
- Optimized layouts for all screen sizes

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd loft-insulation-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section
│   ├── ServicesSection.tsx  # Services showcase
│   ├── SectorsSection.tsx   # Sectors showcase
│   ├── InsulationTypesSection.tsx # Insulation types
│   ├── WhyChooseUsSection.tsx # Why choose us
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── BlogPreviewSection.tsx # Blog preview
│   ├── CTABanner.tsx        # Call-to-action banner
│   └── FAQSection.tsx       # FAQ section
├── data/
│   └── content.ts           # Content data
├── lib/
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # TypeScript types
```

## Content Management

All content is managed through the `src/data/content.ts` file, making it easy to update:
- Services
- Sectors
- Insulation types
- Testimonials
- Blog posts
- FAQ items

## Customization

### Colors
The design uses a blue and green color scheme that can be easily customized in the Tailwind configuration.

### Content
Update the content in `src/data/content.ts` to match your specific services and information.

### Styling
Modify components in the `src/components/` directory to adjust the design and layout.

## SEO Features

- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Meta tags and Open Graph data
- Structured data ready
- Mobile-friendly design
- Fast loading performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

The application is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## License

This project is proprietary and confidential.

## Support

For technical support or questions about this application, please contact the development team.