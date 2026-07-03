/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        void: '#000000',
        panel: '#050505',
        charcoal: {
          DEFAULT: '#141416',
          light: '#1C1C1F',
          border: '#2A2A2D',
        },
        bone: '#F2F0EA',
        muted: '#8C8A85',
        gold: {
          DEFAULT: '#C9A15A',
          dim: '#8A733D',
          bright: '#E7C583',
        },
        crimson: {
          DEFAULT: '#7A2E2E',
          bright: '#B84A3E',
        },
      },
      fontFamily: {
        display: ['"Archivo"', '"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.35em',
        tightest: '-0.04em',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        'grid-lines': "linear-gradient(rgba(242,240,234,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(242,240,234,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        goldGlow: '0 0 60px -12px rgba(201, 161, 90, 0.3)',
      },
    },
  },
  plugins: [],
};
