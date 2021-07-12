import CreateAds from "../../sources/view/ads/create_ads/CreateAds";

export default function CreateAdPage({}) {
  return <CreateAds />;
}

export async function getStaticProps(props) {
  //faire la requête axios

  return {
    props: {},
    revalidate: 60,
  };
}
