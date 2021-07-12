import AdsTrailer from "../../sources/view/ads/create_ads/components/AdsTrailer";

export default function CreateAdAccessoriePage({}) {
  return <AdsTrailer />;
}

export async function getStaticProps(props) {
  //faire la requête axios
  return {
    props: {},
    revalidate: 60,
  };
}
