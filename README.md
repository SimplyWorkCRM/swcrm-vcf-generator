# iOS Contact Card Generator

A modern web application for generating professional VCF (vCard) contact files with a beautiful iOS-style contact preview.

## Features

- **Real-time iOS Contact Preview**: See exactly how your contact will look on an iPhone
- **Professional VCF Generation**: Create standard vCard files compatible with all major contact applications
- **Clean, Modern UI**: Built with React and Tailwind CSS for a responsive, beautiful interface
- **Cross-Platform Compatible**: Works with iPhone, Android, and all major contact management systems
- **Multiple Contact Fields**: Support for phone numbers, emails, addresses, websites, and more

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ios-contact-card-gen.git
cd ios-contact-card-gen
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`.

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── ...            # Feature components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── types/             # TypeScript type definitions
└── main.tsx           # Application entry point
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.