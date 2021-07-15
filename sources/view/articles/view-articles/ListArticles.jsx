import { makeStyles, Typography } from "@material-ui/core";
import ArticleCard from "./components/ArticleCard";
import Search from "./components/Search";
import PaginationPage from "../../marketplace/components/PaginationPage";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

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

const ListArticles = ({ articles: initialArticles }) => {
  const classes = useStyles();

  const [articles, setArticles] = useState(initialArticles);
  const [keyWord, setKeyWord] = useState("");

  useEffect(() => {
    if (keyWord) {
      axios
        .get(`http://localhost:3030/articles?title=${keyWord}`)
        .then((response) => {
          setArticles(response.data);
        });
    }
  }, [keyWord]);

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
      <PaginationPage />
    </>
  );
};

export default ListArticles;
