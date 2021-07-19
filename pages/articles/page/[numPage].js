import axios from "axios";
import ListArticles from "../../../sources/view/articles/view-articles/ListArticles";
import { useRouter } from "next/router";

export default function ArticlesPage({ articles, total, page }) {
  return <ListArticles articles={articles} total={total} page={page} />;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  //faire la requête axios

  const articles = await axios.get(
    `http://localhost:3030/articles?page=${params.numPage}`
  );

  return {
    props: {
      articles: articles.data?.data,
      total: articles.data?.metadata?.totalArticle,
      page: parseInt(params.numPage),
    },
    revalidate: 60,
  };
}
