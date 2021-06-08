import ContactForm from '../sources/view/contactForm/ContactForm'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <ContactForm/>
  </>
  )
}

export default MyApp
