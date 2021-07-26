import User from "../../sources/view/user/User";
import UserContext from "../../sources/context/user";
import { useContext } from "react";
// import useSWR from 'swr';

const UserPage = () => {
  const { connectedUser } = useContext(UserContext);
  // const { data } = useSWR('/api/posts', fetcher, { initialData: props.posts })

  return <User userProfil={connectedUser} />;
};

export async function getStaticProps(props) {
  // const posts = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}me`)

  return {
    props: {},
    revalidate: 60,
  };
}

export default UserPage;