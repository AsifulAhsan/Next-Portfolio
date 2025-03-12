module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        scrollBehavior: {
          smooth: 'smooth 0.3s ease-in-out', // Add custom smooth scrolling
        },
      },
    },
    plugins: [],
  }