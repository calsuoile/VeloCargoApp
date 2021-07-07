import ViewAd from "../../../sources/view/ads/view_ads/ViewAd";
import { useRouter } from "next/router";

const AdPage = ({ ads, user }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  return <ViewAd ads={ads} user={user} />;
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking"
  };
}

export async function getStaticProps(props) {
  const ads = {
    id: 1,
    date: "25 mai 2021",
    price: "2000",
    category: "Triporteur",
    model: "560x",
    guarantee: "Oui",
    bicycode: "2340",
    brand: "Peugeot",
    country: "France",
    dep: "Gironde",
    general_state: "Bon",
    electric: "Oui",
    frame_size: "50",
    length: "200",
    kms: "20",
    volume_box: "100",
    mecanic_state: "bon",
    esthetic_state: "bon",
    engin_power: "25",
    batterie_wolt: "50",
  };

  const user = {
    firstname: "Michel",
    lastname: "Dupont",
    phone_number: "06 88 27 55 32",
    email: "michel.dupont@gmail.com",
  };

  return {
    props: {
      ads: ads,
      user: user,
    },
    revalidate: 60,
  };
}

export default AdPage;
