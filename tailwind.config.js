// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        'main-100':'#E7ECEC',
        'main-200':'#DDE4E4',
        'main-300':'#CED9D9',
        'main-400':'#C0D0D8',
        'main-500':'#0E8080',

      },
      colors:{
        'main-100':'#E7ECEC',
        'main-200':'#DDE4E4',
        'main-300':'#CED9D9',
        'main-400':'#C0D0D8',
        'main-500':'#0E8080',

      },
      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': ' translateX(-500px);',
            transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left2': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'rotate-center': {
          '0%': {
            '-webkit-transform': 'rotate(0);',
            transform: 'rotate(0);'
          },
          '100%': {
            '-webkit-transform': 'rotate(360deg);',
            transform: 'rotate(360deg);'
          }
        },
        'rotate-center-pause': {
          '0%': {
            '-webkit-transform': 'rotate(0);',
            transform: 'rotate(0);'
          },
          '100%': {
            '-webkit-transform': 'rotate(360deg);',
            transform: 'rotate(360deg);'
          }
        },
      },
      animation: {
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left2': 'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'rotate-center': 'rotate-center 8s linear infinite;',
        'rotate-center-pause': 'rotate-center-pause 3s linear 0 3 both;',
      },

    },
    screens:{
      '1026':'1026px'
    }
  },
  plugins: [],
}
