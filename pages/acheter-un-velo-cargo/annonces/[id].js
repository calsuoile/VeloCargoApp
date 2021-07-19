import ViewAd from "../../../sources/view/ads/view_ads/ViewAd";
import { useRouter } from "next/router";
import axios from "axios";

const AdPage = ({ ads }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return <ViewAd ads={ads[0]} />;
};

export async function getStaticPaths() {
  const res = await axios.get("http://localhost:3030/ads");
  const data = await res?.data?.data;

  const paths = data.map((ads) => {
    return {
      params: { id: ads.ads_id.toString() },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(props) {
  const ads = await axios.get(`http://localhost:3030/ads/${props.params.id}`);

  return {
    props: {
      ads: ads.data,
    },
    revalidate: 60,
  };
}

export default AdPage;
