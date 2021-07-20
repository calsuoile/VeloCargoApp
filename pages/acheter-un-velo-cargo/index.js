import MarketPlace from "../../sources/view/marketplace/Marketplace";
import axios from "axios";

export default function AdsPage({ adsCard, total }) {
  return <MarketPlace adsCard={adsCard} total={total} />;
}

export async function getStaticProps(props) {
  const adsCard = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}ads`);

  return {
    props: {
      adsCard: adsCard?.data?.data,
      total: adsCard?.data?.metadata?.totalAds,
    },
    revalidate: 60,
  };
}
