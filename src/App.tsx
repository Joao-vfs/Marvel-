import { ThemeProvider } from "styled-components"
import { ResetCSS } from "./assets/global/styles/resetCSS"
import { THEME } from "./assets/global/styles/theme"

function App() {


  return (
    <ThemeProvider theme={THEME}>
      <ResetCSS />
      <h1>Hello World!!</h1>
    </ThemeProvider>
  )
}

export default App
