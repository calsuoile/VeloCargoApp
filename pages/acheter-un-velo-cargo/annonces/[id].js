import ViewAdCargobike from "../../../src/view/ads/view_ads/ViewAdCargobike";
import ViewAdTrailer from "../../../src/view/ads/view_ads/ViewAdTrailer";
import ViewAdAccessory from "../../../src/view/ads/view_ads/ViewAdAccessory";
import { useRouter } from "next/router";
import axios from "axios";

const AdPage = ({ ads }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  if (ads[0].type == "remorque") {
    return <ViewAdTrailer ads={ads[0]} />;
  } else if (ads[0].type == "accessoire") {
    return <ViewAdAccessory ads={ads[0]} />;
  } else {
    return <ViewAdCargobike ads={ads[0]} />;
  }
};

export async function getStaticPaths() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}ads`);
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
  const ads = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}ads/${props.params.id}`
  );

  return {
    props: {
      ads: ads.data,
    },
    revalidate: 60,
  };
}

export default AdPage;
