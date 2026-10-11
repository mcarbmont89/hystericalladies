/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:             '#000000',
        surface:        '#111111',
        'surface-raised':'#1a1a1a',
        border:         '#2a2a2a',
        'border-input': '#606060',
        text:           '#ffffff',
        muted:          '#a0a0a0',
        accent:         '#ED1C24',
        'on-accent':    '#ffffff',
        success:        '#22c55e',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'Oswald', 'Impact', 'sans-serif'],
        sans:    ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        xs:      ['11px',  { lineHeight: '16px', fontWeight: '500'  }],
        sm:      ['13px',  { lineHeight: '20px', fontWeight: '400'  }],
        base:    ['16px',  { lineHeight: '24px', fontWeight: '400'  }],
        lg:      ['20px',  { lineHeight: '28px', fontWeight: '600'  }],
        xl:      ['28px',  { lineHeight: '34px', fontWeight: '700'  }],
        display: ['48px',  { lineHeight: '52px', fontWeight: '800'  }],
        hero:    ['72px',  { lineHeight: '76px', fontWeight: '900'  }],
      },
      spacing: {
        '18': '72px',   // nav-height
        '20': '80px',   // section-pad-y
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        sm:   '4px',
        md:   '8px',
        lg:   '12px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,.8), 0 1px 2px rgba(0,0,0,.6)',
        pop:  '0 16px 48px rgba(0,0,0,.9)',
        glow: '0 0 24px rgba(237,28,36,.35)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.2,.8,.2,1)',
      },
      transitionDuration: {
        fast: '120ms',
        base: '200ms',
        slow: '350ms',
      },
    },
  },
  plugins: [],
}
