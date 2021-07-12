import AdsBike from "../../sources/view/ads/create_ads/components/AdsBike";

export default function CreateAdCargoBikePage() {
  return <AdsBike />;
}

export async function getStaticProps(props) {
  //faire la requête axios
  
  return {
    props: {},
    revalidate: 60,
  };
}
