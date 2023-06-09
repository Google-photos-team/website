import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        darkBlue: string
        lightBlue: string
        semiBlack: string
        semiWhite: string
        gray: string,
        lightRed: string,
        skyBlue: string, 
        skyBlueHover: string,
        orange:string,
        lightGrey:string
      }
      shades: {
        white: string
        black: string
      }
    }
  }
}