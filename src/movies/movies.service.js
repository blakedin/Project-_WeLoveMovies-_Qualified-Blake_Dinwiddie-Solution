const knex = require("../../src/db/connection");

// SERVICE FUNCTIONS //

function list(is_Showing) {
  if (is_Showing) {
    return knex("movies")
      .join("movies_theaters", "movies.movie_id", "movies_theaters.movie_id")
      .distinct()
      .select("movies.*")
      .where({ is_showing: true });
  }
  return knex("movies").select("*");
}

function read(movieId) {
  return knex("movies").select("*").where({ movie_id: movieId }).first();
}

// EXPORT //

module.exports = {
  list,
  read,
};
