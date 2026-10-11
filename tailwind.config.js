/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:              '#000000',
        surface:         '#111111',
        'surface-raised':'#1a1a1a',
        border:          '#2a2a2a',
        'border-input':  '#606060',
        text:            '#ffffff',
        muted:           '#a0a0a0',
        accent:          '#ED1C24',
        'on-accent':     '#ffffff',
        success:         '#22c55e',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Oswald', 'Impact', 'sans-serif'],
        sans:    ['Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        xs:      ['11px',  { lineHeight: '16px' }],
        sm:      ['13px',  { lineHeight: '20px' }],
        base:    ['16px',  { lineHeight: '24px' }],
        lg:      ['20px',  { lineHeight: '28px' }],
        xl:      ['28px',  { lineHeight: '34px' }],
        display: ['48px',  { lineHeight: '52px' }],
        hero:    ['72px',  { lineHeight: '76px' }],
      },
      maxWidth: {
        content: '1200px',
      },
      height: {
        nav: '72px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,.8), 0 1px 2px rgba(0,0,0,.6)',
        pop:  '0 16px 48px rgba(0,0,0,.9)',
        glow: '0 0 24px rgba(237,28,36,.35)',
      },
    },
  },
  plugins: [],
}
