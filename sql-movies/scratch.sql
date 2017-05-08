-- What are the top 50 worst rated movies? The results should include the movie title and rating and be sorted by the worst rating first.
SELECT title, rating
FROM movies
ORDER BY rating DESC
LIMIT 50;

--What movies do not have a rating? The results should include just the movie titles in sorted order.
SELECT title, rating
FROM movies
WHERE rating IS NULL
ORDER BY title;


--What movies have the word "thrilling" in their synopsis? The results should just include the movie title.
SELECT title
FROM movies
WHERE synopsis LIKE '%thrilling%';

--What were the highest rated 'Science Fiction & Fantasy' movies released in the 80's? The results should include the movie title, the year released, and rating sorted by highest rating first.
SELECT movies.title, movies.year, movies.rating
FROM movies 
  INNER JOIN genres ON (genres.id = movies.genre_id)
WHERE genres.name = 'Science Fiction & Fantasy' 
  AND 1979 < movies.year 
  AND movies.year < 1990
ORDER BY movies.rating DESC;


--What actors have starred as James Bond? The results should include the actor name, movie title, year released, and be sorted by year in ascending order (earliest year appears first).
SELECT actors.name, movies.title, movies.year
FROM cast_members 
  INNER JOIN movies ON (movies.id = cast_members.movie_id) 
  INNER JOIN actors ON (cast_members.actor_id = actors.id)
WHERE character = 'James Bond'
ORDER BY movies.year ASC;

--What movies has Julianne Moore starred in? The results should include the movie title, year released, and name of the genre, sorted by genre first and then movie title.
SELECT movies.title, movies.year, genres.name
FROM movies 
  INNER JOIN cast_members ON (movies.id = cast_members.movie_id) 
  INNER JOIN genres ON (genres.id = movies.genre_id) 
  INNER JOIN actors ON (cast_members.actor_id = actors.id)
WHERE actors.name = 'Julianne Moore'
ORDER BY genres.name, movies.title;


--What were the five earliest horror movies and what studios produced them? Include the movie title, year released, and studio name (if any) in the results sorted by year.
SELECT movies.title, movies.year, studios.name
FROM movies 
  INNER JOIN genres ON (genres.id = movies.genre_id) 
  INNER JOIN studios ON (movies.studio_id = studios.id)
WHERE genres.name = 'Horror'
ORDER BY movies.year ASC
LIMIT 5;
