import axios from "axios";
import ListArticles from "../../sources/view/articles/view-articles/ListArticles";

export default function ArticlesPage({ articles }) {
  return <ListArticles articles={articles} />;
}

export async function getStaticProps(props) {
  //faire la requête axios

  const articles = await axios.get("http://localhost:3030/articles");

 

  return {
    props: {
      articles: articles.data,
    },
    revalidate: 60,
  };
}
