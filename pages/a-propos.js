import About from '../sources/view/about/About';

export default function AProposPage() {
    return <About/>;
};

export async function getStaticProps(props) {
      //faire la requête axios
    return {
        props: {},
        revalidate: 60,
      };
    }

