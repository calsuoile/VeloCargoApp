import { makeStyles, Typography } from "@material-ui/core";
import ArticleCard from "./components/ArticleCard";
import Search from "./components/Search";
import PaginationPage from "../../marketplace/components/PaginationPage";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
    paddingTop: "20px",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
}));

const ListArticles = ({
  articles: initialArticles,
  total,
  page: initialPage = 1,
}) => {
  const classes = useStyles();
  const router = useRouter();

  const [articles, setArticles] = useState(initialArticles);
  const [keyWord, setKeyWord] = useState("");
  const [page, setPage] = useState(initialPage);

  const pageChange = (e, page) => {
    setPage(page);
    router.push(`/articles/page/${page}`);
  };

  useEffect(() => {
    if (keyWord) {
      axios
        .get(`http://localhost:3030/articles?title=${keyWord}`)
        .then((response) => {
          setArticles(response.data.data);
        });
      setPage(1);
    }
  }, [keyWord]);

  useEffect(() => {
    setArticles(initialArticles);
  }, [initialArticles]);

  return (
    <>
      <Typography className={classes.title} variant="h5">
        ARTICLES & ASTUCES
      </Typography>
      <Search keyWord={keyWord} onChange={(e) => setKeyWord(e.target.value)} />

      {/* map pour afficher tous les articles  */}
      <div className={classes.cards}>
        {articles?.map((article) => (
          <Link href={"/articles/" + article.id} key={article.id}>
            <a style={{ textDecoration: "none", color: "inherit" }}>
              <ArticleCard key={article.id} {...article} />
            </a>
          </Link>
        ))}
      </div>
      <PaginationPage total={total} onChange={pageChange} page={page} />
    </>
  );
};

export default ListArticles;
