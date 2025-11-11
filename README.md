# Portfolio Website - Milinda Prasan De Silva# Portfolio Website



A modern, responsive portfolio website showcasing software and web development work, built with Next.js 14 and TypeScript.A minimalist and elegant portfolio website built with Next.js, Tailwind CSS, and Framer Motion.



## 🌟 About## Features



This portfolio website serves as a digital showcase for Milinda Prasan De Silva's professional work in software and web development. The site features a clean, minimalist design with elegant typography and smooth animations, highlighting various projects across different technologies and domains.- ✨ Clean, minimalist design inspired by professional portfolios

- 🎨 Smooth animations with Framer Motion

## 🚀 Live Demo- 📱 Fully responsive design

- 🖼️ Image zoom effect on hover

Visit the live website: [Your Portfolio URL](https://your-portfolio-url.com)- 📧 Working contact form with email integration

- 🔄 Project navigation with next/previous buttons

## ✨ Features- 🎯 SEO optimized

- ⚡ Fast performance with Next.js

### 🎨 Design & UX

- **Responsive Design** - Optimized for all devices and screen sizes## Tech Stack

- **Custom Typography** - Beautiful font pairing with Orpheus Pro and Adobe Garamond Pro

- **Smooth Animations** - Powered by Framer Motion for delightful interactions- **Framework:** Next.js 14

- **Mobile-First** - Progressive enhancement approach with mobile optimization- **Styling:** Tailwind CSS

- **Animations:** Framer Motion

### 🛠️ Technical Features- **Email:** Nodemailer

- **Next.js 14** - Latest App Router with server-side rendering- **Language:** TypeScript

- **TypeScript** - Type-safe development for better code quality

- **Tailwind CSS** - Utility-first styling with custom design system## Getting Started

- **Video Integration** - YouTube video embedding with Plyr player

- **Image Optimization** - Next.js Image component with remote pattern support### Prerequisites

- **Contact Form** - Functional contact form with Nodemailer integration

- **SEO Optimized** - Meta tags, OpenGraph, and performance optimizations- Node.js 18+ installed

- npm or yarn package manager

### 📱 Pages & Sections

- **Homepage** - Project showcase with grid layout### Installation

- **Individual Project Pages** - Detailed case studies with videos and images

- **About Page** - Professional background and experience1. Clone the repository:

- **Contact Page** - Working contact form with validation```bash

- **404 Page** - Custom error handlinggit clone <your-repo-url>

cd portfolio-website

## 🏗️ Tech Stack```



### Frontend2. Install dependencies:

- **Framework**: Next.js 14.0.4```bash

- **Language**: TypeScriptnpm install

- **Styling**: Tailwind CSS 3.4.18# or

- **Animations**: Framer Motion 12.23.24yarn install

- **Video Player**: Plyr 3.8.3 + Plyr React 5.3.0```



### Backend3. Set up environment variables:

- **API Routes**: Next.js API Routes```bash

- **Email Service**: Nodemailer 6.9.7cp .env.local.example .env.local

- **Analytics**: Vercel Analytics 1.1.1```



### Development Tools4. Configure your email settings in `.env.local`:

- **Package Manager**: npm```

- **Linting**: ESLint with Next.js configEMAIL_USER=your.email@gmail.com

- **Build Tool**: Next.js built-in bundlerEMAIL_PASS=your-app-password

- **PostCSS**: For CSS processing with AutoprefixerEMAIL_TO=your.email@example.com

```

## 📂 Project Structure

**Note:** For Gmail, you need to generate an App Password:

```- Go to [Google Account Settings](https://myaccount.google.com/apppasswords)

portfolio-website/- Generate an app-specific password

├── app/                          # Next.js 14 App Router- Use this password in `EMAIL_PASS`

│   ├── about/                    # About page

│   ├── api/                      # API routes5. Run the development server:

│   │   └── contact/              # Contact form endpoint```bash

│   ├── contact/                  # Contact pagenpm run dev

│   ├── work/                     # Project pages# or

│   │   └── [slug]/               # Dynamic project routesyarn dev

│   ├── globals.css               # Global styles and fonts```

│   ├── layout.tsx                # Root layout component

│   └── page.tsx                  # Homepage6. Open [http://localhost:3000](http://localhost:3000) in your browser

├── components/                   # Reusable React components

│   ├── Footer.tsx                # Site footer## Customization

│   ├── Navbar.tsx                # Navigation header

│   ├── ProjectCard.tsx           # Project preview cards### Personal Information

│   └── VideoPlayer.tsx           # Custom video playerUpdate your personal details in:

├── lib/                          # Utility functions and data- `components/Navbar.js` - Your name in the logo

│   └── portfolioData.ts          # Project data and interfaces- `components/Footer.js` - Your name and social links

├── public/                       # Static assets- `app/about/page.js` - Your bio, skills, and experience

│   └── images/                   # Project images- `app/contact/page.js` - Your contact information

├── next.config.js                # Next.js configuration

├── tailwind.config.js            # Tailwind CSS configuration### Projects

├── postcss.config.js             # PostCSS configurationEdit the portfolio data in `lib/portfolioData.js`:

└── tsconfig.json                 # TypeScript configuration- Add/remove projects

```- Update project details

- Change images and descriptions

## 🚀 Getting Started

### Styling

### Prerequisites- Colors and fonts can be customized in `tailwind.config.js`

- Node.js 18+ - Global styles are in `app/globals.css`

- npm or yarn

## Project Structure

### Installation

```

1. **Clone the repository**portfolio-website/

   ```bash├── app/

   git clone https://github.com/MPDeSilva/portfolio-website.git│   ├── api/

   cd portfolio-website│   │   └── contact/

   ```│   │       └── route.ts        # Email API endpoint

│   ├── about/

2. **Install dependencies**│   │   └── page.tsx            # About page

   ```bash│   ├── contact/

   npm install│   │   └── page.tsx            # Contact page

   ```│   ├── work/

│   │   └── [slug]/

3. **Set up environment variables** (optional, for contact form)│   │       └── page.tsx        # Project detail pages

   ```bash│   ├── globals.css             # Global styles

   cp .env.local.example .env.local│   ├── layout.tsx              # Root layout

   ```│   └── page.tsx                # Home page

   Configure your email service credentials in `.env.local`:├── components/

   ```│   ├── Navbar.tsx              # Navigation component

   EMAIL_USER=your-email@gmail.com│   ├── Footer.tsx              # Footer component

   EMAIL_PASS=your-app-password│   └── ProjectCard.tsx         # Project card component

   EMAIL_TO=your-email@gmail.com├── lib/

   EMAIL_FROM=noreply@yourportfolio.com│   └── portfolioData.ts        # Portfolio content data

   ```├── public/                     # Static assets

├── package.json

4. **Run the development server**├── tsconfig.json               # TypeScript configuration

   ```bash├── next.config.js

   npm run dev├── tailwind.config.js

   ```└── postcss.config.js

```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)## Deployment



### Build for Production### Vercel (Recommended)



```bash1. Push your code to GitHub

npm run build2. Import your repository on [Vercel](https://vercel.com)

npm run start3. Add environment variables in Vercel dashboard

```4. Deploy



## 🎨 Customization### Other Platforms



### Adding New ProjectsThe site can be deployed on any platform that supports Next.js:

Edit `lib/portfolioData.ts` to add new projects:- Netlify

- AWS Amplify

```typescript- Railway

{- Render

  id: 8,

  slug: 'your-project-slug',## Email Configuration Options

  title: 'Your Project Title',

  category: 'Web Development',### Gmail

  image: '/images/your-project/preview.png',Use with an App Password as described above.

  description: 'Brief project description...',

  technologies: ['React', 'Node.js', 'MongoDB'],### SendGrid

  liveLink: 'https://your-project.com',```javascript

  githubLink: 'https://github.com/your-username/project',// In app/api/contact/route.js

  details: {const transporter = nodemailer.createTransport({

    challenge: 'The problem you solved...',  host: 'smtp.sendgrid.net',

    solution: 'How you solved it...',  port: 587,

    features: ['Feature 1', 'Feature 2'],  auth: {

    images: ['/images/your-project/image1.png'],    user: 'apikey',

    video: 'https://youtube.com/watch?v=your-video'    pass: process.env.SENDGRID_API_KEY

  }  }

}});

``````



### Customizing Fonts### Mailgun

The site uses two custom fonts:```javascript

- **Orpheus Pro** - For headings (loaded via @font-face)const transporter = nodemailer.createTransport({

- **Adobe Garamond Pro** - For body text (loaded via Adobe Fonts)  host: 'smtp.mailgun.org',

  port: 587,

Update font configurations in:  auth: {

- `app/globals.css` - Font declarations    user: process.env.MAILGUN_USER,

- `tailwind.config.js` - Font family utilities    pass: process.env.MAILGUN_PASS

  }

### Styling});

Modify `tailwind.config.js` for:```

- Custom colors

- Typography scale## Future Enhancements

- Animation timing

- BreakpointsTo add backend functionality in the future:

- Set up an Express.js server

## 📧 Contact Form Setup- Connect to a database (PostgreSQL/MongoDB)

- Create API endpoints for dynamic content

The contact form uses Nodemailer for email sending. Configure these environment variables:- Implement authentication if needed

- Add a CMS for easier content management

```bash

EMAIL_USER=your-gmail@gmail.com## License

EMAIL_PASS=your-app-specific-password

EMAIL_TO=where-to-send-emails@gmail.comMIT License - feel free to use this project for your own portfolio!

EMAIL_FROM=noreply@yourdomain.com

```## Support



For Gmail, you'll need to:If you have any questions or need help setting up, feel free to open an issue or contact me.

1. Enable 2-factor authentication
2. Generate an app-specific password
3. Use that password in `EMAIL_PASS`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify  
- Railway
- Heroku

## 🔧 Configuration Files

- **`next.config.js`** - Next.js settings, image domains
- **`tailwind.config.js`** - Tailwind CSS customization
- **`tsconfig.json`** - TypeScript compiler options
- **`postcss.config.js`** - PostCSS plugins configuration

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📬 Contact

**Milinda Prasan De Silva**
- Email: [milindapds@hotmail.com](mailto:milindapds@hotmail.com)
- LinkedIn: [milinda-de-silva](https://www.linkedin.com/in/milinda-de-silva/)
- GitHub: [@MPDeSilva](https://github.com/MPDeSilva)
- Work GitHub: [@MiliDS-Lewis](https://github.com/MiliDS-Lewis)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**