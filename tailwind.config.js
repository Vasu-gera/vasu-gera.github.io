/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#000000',
                    card: '#141414',
                    hover: '#1f1f1f',
                    border: '#2a2a2a',
                },
                accent: {
                    primary: '#e50914',
                    secondary: '#00d4ff',
                    glow: '#ff006e',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'glow': 'glow 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 110, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(255, 0, 110, 0.6)' },
                },
            },
        },
    },
    plugins: [],
}
