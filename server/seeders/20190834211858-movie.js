'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const spiderman = await db.title.findOne({ where: {original_name: 'Spider-Man: Far from Home'} }).then(title => title.id);
    // db.title.findOne({ where: {original_name: 'Spider-Man: Far from Home'} }).then(title => title.id);
    const movies = [
      {
        "title_id": await db.title.findOne({ where: {original_name: 'Spider-Man: Far from Home'} }).then(title => title.id),
        "poster_image": "https://static.cinepolis.com/img/peliculas/31676/1/1/31676.jpg",
        "plot_id": await db.plot.findOne({ where: {original_plot: "Following the events of Endgame, Spider-Man must step up to take on new threats in a world that has changed forever."} }).then(plot => plot.id),
        "clasification_id": await db.clasification.findOne({ where: {letter: 'B'} }).then(clasification => clasification.id),
      },
      {
        "title_id": await db.title.findOne({ where: {original_name: 'The Lion King'} }).then(title => title.id),
        "poster_image": "https://static.cinepolis.com/img/peliculas/8034/1/1/8034.jpg",
        "plot_id": await db.plot.findOne({ where: {original_plot: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery."} }).then(plot => plot.id),
        "clasification_id": await db.clasification.findOne({ where: {letter: 'B'} }).then(clasification => clasification.id),
      }
    ];

    return queryInterface.bulkInsert('movies', movies).then(async () => {
      const movie_genre =  [
        {
          "movie_id": await db.movie.findOne({ include: [{ model: db.title, where: {original_name: 'Spider-Man: Far from Home'} }] }).then(movie => movie.id),
          "genre_id": await db.genre.findOne({ where: {original_genre: "Action"} }).then(genre => genre.id)
        },
        {
          "movie_id": await db.movie.findOne({ include: [{ model: db.title, where: {original_name: 'The Lion King'} }] }).then(movie => movie.id),
          "genre_id": await db.genre.findOne({ where: {original_genre: "Action"} }).then(genre => genre.id)
        }
      ];

      return queryInterface.bulkInsert('movie_genre', movie_genre)
    }).then(async () => {
      const movie_actor = [
        {
          "movie_id": await db.movie.findOne({ include: [{ model: db.title, where: {original_name: 'Spider-Man: Far from Home'} }] }).then(movie => movie.id),
          "actor_id": await db.actor.findOne({ where: {artistic_name: "Tom Holland"} }).then(actor => actor.id)
        },
        {
          "movie_id": await db.movie.findOne({ include: [{ model: db.title, where: {original_name: 'Spider-Man: Far from Home'} }] }).then(movie => movie.id),
          "actor_id": await db.actor.findOne({ where: {artistic_name: "Jake Gyllenhaal"} }).then(actor => actor.id)
        },
        {
          "movie_id": await db.movie.findOne({ include: [{ model: db.title, where: {original_name: 'The Lion King'} }] }).then(movie => movie.id),
          "actor_id": await db.actor.findOne({ where: {artistic_name: "Donald Glover"} }).then(actor => actor.id)
        },
        {
          "movie_id": await db.movie.findOne({ include: [{ model: db.title, where: {original_name: 'The Lion King'} }] }).then(movie => movie.id),
          "actor_id": await db.actor.findOne({ where: {artistic_name: "Beyoncé"} }).then(actor => actor.id)
        }
      ];

      return queryInterface.bulkInsert('movie_actor', movie_actor)
    }).then(async () => {
      const movie_director = [
        {
          "movie_id": await db.movie.findOne({ include: [{ model: db.title, where: {original_name: 'Spider-Man: Far from Home'} }] }).then(movie => movie.id),
          "director_id": await db.director.findOne({ where: {director_name: "Jon Watts"} }).then(director => director.id)
        },
        {
          "movie_id": await db.movie.findOne({ include: [{ model: db.title, where: {original_name: 'The Lion King'} }] }).then(movie => movie.id),
          "director_id": await db.director.findOne({ where: {director_name: "Jon Favreau"} }).then(director => director.id)
        }
      ];

      return queryInterface.bulkInsert('movie_director', movie_director)
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
