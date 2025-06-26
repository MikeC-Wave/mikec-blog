/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Custom color scheme matching the current design
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
        // Override default grays with our custom scheme
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        // Atkinson font family - updated to match our font-face declaration
        'atkinson': ['Atkinson', 'system-ui', 'sans-serif'],
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
        'content': '800px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      // Enhanced typography configuration for v4
      typography: () => ({
        DEFAULT: {
          css: {
            // Base typography styles
            '--tw-prose-body': '#374151',
            '--tw-prose-headings': '#111827',
            '--tw-prose-lead': '#4b5563',
            '--tw-prose-links': '#2563eb',
            '--tw-prose-bold': '#111827',
            '--tw-prose-counters': '#6b7280',
            '--tw-prose-bullets': '#9ca3af',
            '--tw-prose-hr': '#e5e7eb',
            '--tw-prose-quotes': '#111827',
            '--tw-prose-quote-borders': '#e5e7eb',
            '--tw-prose-captions': '#6b7280',
            '--tw-prose-code': '#db2777',
            '--tw-prose-pre-code': '#e5e7eb',
            '--tw-prose-pre-bg': '#1f2937',
            '--tw-prose-th-borders': '#d1d5db',
            '--tw-prose-td-borders': '#e5e7eb',
            
            // Enhanced element styling
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: 'Atkinson, system-ui, sans-serif',
              scrollMarginTop: '5rem',
            },
            'h1': {
              fontSize: '2.25rem',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              lineHeight: '1.1',
            },
            'h2': {
              fontSize: '1.875rem',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              lineHeight: '1.2',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '0.75rem',
            },
            'h3': {
              fontSize: '1.5rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
              lineHeight: '1.3',
            },
            'h4': {
              fontSize: '1.25rem',
              fontWeight: '600',
              lineHeight: '1.4',
            },
            'p': {
              color: '#374151',
              lineHeight: '1.7',
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'a': {
              color: '#2563eb',
              fontWeight: '500',
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: '#1d4ed8',
                borderBottomColor: '#2563eb',
              },
            },
            'strong': {
              color: '#111827',
              fontWeight: '700',
            },
            'em': {
              color: '#374151',
              fontStyle: 'italic',
            },
            'code': {
              color: '#db2777',
              backgroundColor: '#fdf2f8',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.375rem',
              border: '1px solid #fce7f3',
              fontWeight: '500',
              fontSize: '0.875rem',
              '&::before': { content: '""' },
              '&::after': { content: '""' },
            },
            'pre': {
              backgroundColor: '#1f2937',
              color: '#e5e7eb',
              border: '1px solid #374151',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              overflow: 'auto',
            },
            'blockquote': {
              borderLeft: '4px solid #3b82f6',
              backgroundColor: '#eff6ff',
              fontStyle: 'italic',
              color: '#374151',
              borderTopRightRadius: '0.5rem',
              borderBottomRightRadius: '0.5rem',
              padding: '1rem 1.5rem',
              margin: '2rem 0',
            },
            'ul, ol': {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              paddingLeft: '1.5rem',
            },
            'li': {
              color: '#374151',
              lineHeight: '1.7',
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'li::marker': {
              color: '#2563eb',
              fontWeight: '600',
            },
            'img': {
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
            },
            'table': {
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            },
            'thead': {
              backgroundColor: '#f9fafb',
            },
            'th': {
              borderBottom: '1px solid #e5e7eb',
              textAlign: 'left',
              fontWeight: '600',
              color: '#111827',
              padding: '0.75rem 1rem',
            },
            'td': {
              borderBottom: '1px solid #e5e7eb',
              padding: '0.75rem 1rem',
              color: '#374151',
            },
            'tr:hover': {
              backgroundColor: '#f9fafb',
            },
            'hr': {
              borderColor: '#d1d5db',
              borderTopWidth: '2px',
              margin: '3rem 0',
            },
            'figure': {
              margin: '2rem auto',
              textAlign: 'center',
            },
            'figcaption': {
              textAlign: 'center',
              color: '#6b7280',
              fontSize: '0.875rem',
              fontStyle: 'italic',
              marginTop: '0.5rem',
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.7',
            'h1': { fontSize: '2.625rem' },
            'h2': { fontSize: '2.125rem' },
            'h3': { fontSize: '1.75rem' },
            'h4': { fontSize: '1.375rem' },
          },
        },
        xl: {
          css: {
            fontSize: '1.25rem',
            lineHeight: '1.8',
            'h1': { fontSize: '3rem' },
            'h2': { fontSize: '2.375rem' },
            'h3': { fontSize: '1.875rem' },
            'h4': { fontSize: '1.5rem' },
          },
        },
      }),
    },
  },
} 