import Footer from "../../sources/layout/footer/Footer";

export default function Contact() {
  return <Footer />;
}

export async function getStaticProps(props) {
  //faire la requête axios
  return {
    props: {},
    revalidate: 60,
  };
}
