/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#000000',
            h1: {
              marginTop: 0,
              marginBottom: 0,
              fontWeight: 500,
            },
            h2: {
              marginTop: 0,
              marginBottom: 0,
              fontWeight: 500,
            },
            h3: {
              marginTop: 0,
              marginBottom: 0,
              fontWeight: 500,
            },
            h4: {
              marginTop: 0,
              marginBottom: 0,
              fontWeight: 500,
            },
            h5: {
              marginTop: 0,
              marginBottom: 0,
              fontWeight: 500,
            },
            h6: {
              marginTop: 0,
              marginBottom: 0,
              fontWeight: 500,
            },
            p: {
              marginTop: 0,
              marginBottom: '1rem',
            },
            b: {
              fontWeight: 700,
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
