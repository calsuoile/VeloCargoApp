import Marketplace from "../sources/view/marketplace/Marketplace";

export default function BuyPage() {
    return <Marketplace />;
  }

  export async function getStaticProps(props) {

  return {
    props: {},
    revalidate: 60,
  };
};
