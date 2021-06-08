import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import ContactForm from '../sources/view/contactForm/ContactForm'
import '../styles/globals.css'
import theme from '../sources/theme'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <ThemeProvider theme={theme}>
    <CssBaseline />
  <Component {...pageProps} />
  <ContactForm/>
  </ThemeProvider>
  </>
  )
}

export default MyApp
