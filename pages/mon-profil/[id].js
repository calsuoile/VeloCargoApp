import User from "../../sources/view/user/User";
import { useRouter } from "next/router";
import axios from "axios";

const UserPage = ({ userProfil }) => {

  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  return <User userProfil={userProfil} />;
};


export async function getStaticPaths() {
  const res =  await axios.get("http://localhost3030/users");
  const data = await res.data();

  const paths = data.map((users) => {
    return {
      params: { id: users.id.toString()}
    }
  })
  
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(props) {


  // const userProfil = {
  //   id: "1",
  //   firstname: "Michel",
  //   lastname: "Dupont",
  //   phone_number: "06124578963",
  //   email: "michel@gmail.com",
  //   city: "Bordeaux",
  //   photo: "",
  //   password: "xxxxx",
  // };
  return {
    props: {
      userProfil: userProfil,
    },
    revalidate: 60,
  };
}

export default UserPage;
