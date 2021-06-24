import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../sources/theme";
import Header from "../sources/layout/Header/Header";
import Home from "../sources/view/home/Home";
import Footer from "../sources/layout/Header/Header";
import CreationArticle from "../sources/view/articles/create-article/CreateArticle"
import Loading from "../sources/common/components/Loading";


export default function VeloCargo({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* <Home /> */}
      {/* <CreationArticle /> */}
      <Loading />
      {/* <Footer /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
