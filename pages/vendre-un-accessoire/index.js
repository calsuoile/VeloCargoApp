import AdsAccessorie from "../../sources/view/ads/create_ads/components/AdsAccessorie";

export default function CreateAdAccessoriePage({}) {
  return <AdsAccessorie />;
}

export async function getStaticProps(props) {
  //faire la requête axios
  return {
    props: {},
    revalidate: 60,
  };
}
