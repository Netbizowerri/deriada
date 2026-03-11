# Deriada Global Resources Limited - Project Plan

## Project Overview
- **Project Name**: Deriada Global Resources Limited Website
- **Type**: React 19 Business Web App
- **Framework**: React 19 + Vite 6 + TypeScript
- **Styling**: TailwindCSS (via CDN)
- **Routing**: React Router DOM 7
- **State Management**: React Context API
- **Deployment Ready**: Yes
- **Responsive**: Yes
- **SEO Optimized**: Yes

---

## Brand Identity

### Company Information
- **Company Name**: Deriada Global Resources Limited
- **Tagline**: "Elevating Exports, Expanding Horizons"
- **Industry**: Export, Import & Logistics
- **Location**: West Africa, Nigeria

### Brand Colors (TailwindCSS Config)
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary | #0F5132 | Main brand color, headers |
| Secondary | #198754 | Accents, buttons |
| Accent (Gold) | #D4A017 | Highlights, CTAs, premium elements |
| Dark | #1B1B1B | Text, dark backgrounds |
| Light | #F8F9FA | Light backgrounds |

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Usage**: All headings and body text

---

## Page Structure

### Navigation (7 Pages)
1. Home
2. About
3. Services
4. Export Products
5. Import Services
6. Logistics
7. Contact

---

## Page Details

### 1. Home Page Sections
- **Hero Section**: Large banner with company tagline, subtitle, CTAs
- **About Preview**: Brief company introduction with "Who We Are"
- **Services Summary**: 3 core services cards (Export, Import, Logistics)
- **Featured Products**: Grid of 18 export products
- **Why Choose Us**: 5 key selling points
- **CTA Banner**: Call-to-action for requesting quotes

### 2. About Page
- Company history and background
- Mission and Vision
- Certifications (NEPC certified)
- Team/Leadership section

### 3. Services Page
- Export Services detailed section
- Import Services detailed section
- Logistics Services detailed section

### 4. Export Products Page
- Product grid with categories:
  - Charcoal (Restaurant, BBQ, Ayin, Acacia, Coconut Shell)
  - Spices (Fresh/Dry Ginger, Garlic, Turmeric, Chilli, Black Pepper)
  - Agricultural (Soybeans, Hibiscus, Cashew Nuts)
  - Powdered forms

### 5. Import Services Page
- Import process explanation
- Customs compliance
- Documentation handling
- Global sourcing

### 6. Logistics Page
- Freight forwarding services
- Clearing & forwarding
- Cargo handling
- Shipment tracking

### 7. Contact Page
- Company contact information
- Contact form (Formspree integration)
- Form fields: Full Name, Company Name, Email, Phone, Service Required, Message

---

## Components Required

### Layout Components
1. **Navbar**: Responsive navigation with mobile menu
2. **Footer**: Quick links, contact info, social media
3. **Layout**: Wrapper component with SEO meta tags

### UI Components
1. **Button**: Primary, Secondary, Outline variants
2. **ServiceCard**: Icon, title, description
3. **ProductCard**: Image placeholder, name, category
4. **ContactForm**: React Hook Form with validation
5. **SectionHeading**: Consistent section titles
6. **Container**: Max-width wrapper

### Animation Components
1. **Disintegrate**: Text/element breaks apart effect
2. **Assemble**: Elements come together effect
3. **Float**: Gentle floating motion

---

## Technical Configuration

### Dependencies (package.json)
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.1.0",
    "react-helmet-async": "^2.0.5",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.53.0",
    "lucide-react": "^0.460.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "typescript": "^5.6.0",
    "vite": "^6.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### TailwindCSS Configuration
- Custom colors matching brand
- Poppins font family
- Responsive breakpoints
- Animation utilities

### Vite Configuration
- React plugin
- TypeScript support
- Production optimization

---

## SEO Strategy

### Meta Title Format
`Page Name | Deriada Global Resources Limited`

### Target Keywords
- West Africa Export Company
- Hardwood Charcoal Exporter
- Ginger Export Nigeria
- Import Services West Africa
- Freight Forwarding Nigeria
- Clearing and Forwarding Services

---

## Formspree Integration
- Form ID: To be provided by user
- Endpoint: `https://formspree.io/f/{form_id}`
- Validation: React Hook Form with required fields

---

## Performance Optimizations
- Lazy loading for route components
- Image optimization
- Code splitting
- Optimized assets

---

## File Structure
```
deriada-website/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   └── SectionHeading.tsx
│   │   ├── forms/
│   │   │   └── ContactForm.tsx
│   │   └── animations/
│   │       └── AnimationWrapper.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── ExportProducts.tsx
│   │   ├── ImportServices.tsx
│   │   ├── Logistics.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   ├── products.ts
│   │   └── company.ts
│   ├── styles/
│   │   └── animations.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

---

## Implementation Priority

### Phase 1: Project Setup
1. Initialize Vite + React 19 + TypeScript
2. Configure TailwindCSS
3. Set up project structure

### Phase 2: Core Components
4. Create layout components (Navbar, Footer)
5. Build UI components (Button, Cards)
6. Implement animations

### Phase 3: Pages
7. Build Home page
8. Build About page
9. Build Services page
10. Build Export Products page
11. Build Import Services page
12. Build Logistics page
13. Build Contact page

### Phase 4: Finalization
14. Add SEO meta tags
15. Test and verify
16. Production build

---

## Notes
- All forms submit to Formspree
- No database required
- Static content only
- Formspree form ID needs to be configured by user
