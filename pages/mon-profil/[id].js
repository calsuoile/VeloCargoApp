import User from "../../sources/view/user/User";
import { useRouter } from "next/router";

const UserPage = ({ }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  return (
    <User />
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(props) {
  
  return {
    props: {
      
    },
    revalidate: 60,
  };
}

export default UserPage;
