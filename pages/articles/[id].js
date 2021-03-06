import ViewArticle from "../../src/view/articles/view-articles/ViewArticle";
import { useRouter } from "next/router";
import axios from "axios";

const ArticlePage = ({ articleView, otherArticles }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  return (
    <ViewArticle articleView={articleView} otherArticles={otherArticles} />
  );
};

export async function getStaticPaths() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}articles`);
  const data = await res.data?.data;

  const paths = data.map((articleView) => {
    return {
      params: { id: articleView.id.toString() },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(props) {
  const articleView = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}articles/${props.params.id}`
  );

  const otherArticles = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}articles?limit=4`
  );

  return {
    props: {
      articleView: articleView.data,
      otherArticles: otherArticles.data?.data,
    },
    revalidate: 60,
  };
}

export default ArticlePage;
