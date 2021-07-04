import CreateArticle from "../../sources/view/articles/create-article/CreateArticle";

export default function CreateArticlePage() {
  return <CreateArticle />;
}

export async function getStaticProps(props) {
  //faire la requête axios
  
  return {
    props: {},
    revalidate: 60,
  };
}
