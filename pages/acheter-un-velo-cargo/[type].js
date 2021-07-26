import MarketPlace from "../../src/view/marketplace/Marketplace";
import axios from "axios";

export default function AdsPage({ adsCard, total, type }) {
  return <MarketPlace adsCard={adsCard} total={total} type={type} />;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: "triporteur" } },
      { params: { type: "biporteur" } },
      { params: { type: "tricycle" } },
      { params: { type: "longtail" } },
      { params: { type: "remorque" } },
      { params: { type: "accessoire" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(props) {
  const adsCard = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}ads?type=${props.params.type}`
  );

  return {
    props: {
      adsCard: adsCard?.data?.data,
      total: adsCard?.data?.metadata?.totalAds,
      type: props.params.type,
    },
    revalidate: 60,
  };
}
