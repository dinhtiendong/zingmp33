/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      backgroundColor:{
        'main-100':'#e7ecec',
        'main-200':'#dde4e4',
        'main-300':'#ced9d9',
        'main-400':'#c0d8d8',
        'main-500':'#0E8080',

      },
      colors:{
        'main-100':'#e7ecec',
        'main-200':'#dde4e4',
        'main-300':'#ced9d9',
        'main-400':'#c0d8d8',
        'main-500':'#0E8080',

      },
      keyframes:{
        // Tiền tố -webkit khi vào chrome thì nó sẽ ăn

        'slide-right': {
          '0%': {
            '-webkit-transform': 'translateX(-500px);',
                    transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
                    transform: 'translateX(0);'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
                    transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
                    transform: 'translateX(0);'
          }
        },
        'slide-left2': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
                    transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
                    transform: 'translateX(0);'
          }
        },
        
      },
      animation:{
        'slide-right':'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left':'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left2':'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'

    //  slide-right là tên của keyframes, 0.5s là thời gian thực hiện cài animation này
    // cubic-bezier: độ cong tức là trong time là 0.5s thì nó biểu diễn theo độ cong này
    // both là tất cả chiều dài và rộng
      },
      flex:{
        '4':'4 4 0%'
        // '4 4 0%' 3 thằng này kết hợp liên quan đến grown sink basic của flexbox
      }
    },
    screens:{
      '1300':'1300px'
    }
  },
  plugins: [],
}