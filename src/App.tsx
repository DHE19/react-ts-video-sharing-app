import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import { Container, Main, Wrapper } from "./helpers/styledComponents"
import { darkTheme, lightTheme } from "./utils/Theme"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import Video from "./pages/Video"





function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const handleTheme  = (): void => {
    console.log('cambiando de color');
    
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu handleTheme={handleTheme}/>
          <Main>
            <Navbar/>
            <Wrapper>
              <Routes >
                //dentro de esta ruta
                <Route path ='/'>
                  {/* // se rendeirizará  Home */}
                  <Route index element={<Home/>}/>
                  {/* // dentro de esta ruta (y la que la presede).... */}
                  <Route path = "video">
                    {/* //dentro de esta ruta ya la que le prese se instciara video */}
                    <Route path=":id" element={<Video/>}/>
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
