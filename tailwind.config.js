module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#0A0A0A", // Deep creative black, professional foundation
        secondary: "#F8F8F8", // Clean canvas white, content backdrop
        accent: "#FF6B35", // Energetic creative spark, call-to-action moments
        
        // Background Colors
        background: "#FAFAFA", // Subtle warmth, extended viewing comfort
        surface: "#EEEEEE", // Gentle elevation, card and modal backgrounds
        
        // Text Colors
        'text-primary': "#1A1A1A", // Strong readability, main content hierarchy
        'text-secondary': "#666666", // Clear supporting information, metadata display
        
        // Status Colors
        success: "#00C851", // Portfolio completion, positive feedback moments
        warning: "#FFB347", // Gentle guidance, incomplete profile alerts
        error: "#FF4444", // Helpful problem solving, upload issues
        
        // Border Colors
        border: "#E5E5E5", // Minimal borders for form inputs and data separation
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], // Headlines and CTAs
        'source-sans': ['Source Sans Pro', 'sans-serif'], // Body text
        'playfair': ['Playfair Display', 'serif'], // Accent text and quotes
      },
      fontWeight: {
        'normal': '400',
        'semibold': '600',
        'bold': '700',
      },
      boxShadow: {
        'subtle': '0 4px 20px rgba(0, 0, 0, 0.1)', // Floating elements
        'gallery': '0 8px 30px rgba(0, 0, 0, 0.15)', // Video thumbnails
      },
      transitionDuration: {
        'fast': '200ms', // Video preview responsiveness
        'standard': '300ms', // Hover states and UI feedback
        'page': '400ms', // Cinematic page transitions
        'loading': '800ms', // Portfolio loading sequences
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}