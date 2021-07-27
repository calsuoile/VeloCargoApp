import Connection from "../../src/view/connexion/Connection";

export default function AProposPage() {
  return <Connection />;
}

export async function getStaticProps(props) {
  //faire la requête axios
  return {
    props: {},
    revalidate: 60,
  };
}
