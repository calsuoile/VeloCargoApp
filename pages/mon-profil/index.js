import User from "../../sources/view/user/User";
import UserContext from "../../sources/context/user";
import { useContext } from "react";

const UserPage = () => {
  const { connectedUser } = useContext(UserContext);

  return <User userProfil={connectedUser} />;
};

export async function getStaticProps(props) {
  return {
    props: {},
    revalidate: 60,
  };
}

export default UserPage;
