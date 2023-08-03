/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-image':"url('/assets/home/footer.png')",
        'footer':"url('/assets/home/footer1.jpg')",
        "back-prime":"url('/assets/background/b1')",
        "bg":"url('/assets/background/b1')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
      },
      fontSize:{
          lg:['19px']
      },
      filter:{
        grayscale : 'grayscale(1)'
      }
    },
  },
  variants: {
    extend: {
      filter: ['group-hover'],
    },
  },
  plugins: [],
}
