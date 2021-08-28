import React from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import Error from "../UI/Error";
import FilmItem from "../FilmItem";
import Paginationv2 from "../Paginationv2";

import useGetID from "../../hooks/useGetID";
import useFetchStarWars from "../../hooks/useFetchStarWars";

const Films = (props) => {
  const getFilmID = useGetID();
  const {
    loading: filmLoading,
    error,
    resourceData: films,
    resourceCount: filmsCount,
  } = useFetchStarWars(props, "films");

  const filmContent = filmLoading ? (
    <div className="col-12 text-center fa-3x">
      <i className="fas fa-cog fa-spin"></i>
    </div>
  ) : (
    films.map((film) => {
      return (
        <FilmItem
          key={film.title}
          filmTitle={film.title}
          filmEpisode={film.episode_id}
          filmDirector={film.director}
          filmReleaseDate={film.release_date}
          to={getFilmID(film.url)}
        />
      );
    })
  );

  return (
    <React.Fragment>
      <Hero title="Star Wars Films" subText="All Star Wars Films" />
      <Section>
        {!error ? (
          <div>
            <h1 className="heading text-center p-4 mb-2">{filmsCount} Total Films</h1>
            <div className="row">{filmContent}</div>
            <div className="col-md-12">
              <Paginationv2
                total={filmsCount}
                page={props.history.location.search}
                resource="films"
              />
            </div>
          </div>
        ) : (
          <Error errorMessage={error.message} />
        )}
      </Section>
    </React.Fragment>
  );
};

export default Films;
