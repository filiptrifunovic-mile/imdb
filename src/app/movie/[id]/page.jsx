import Image from "next/image";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={300}
          height={300}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="images not found"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
        ></Image>
        <div className="p-2">
          <h2 className="text-2xl mb-3 font-bold text-center mt-3">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mt-10">
            <span className="font-semibold">Genre: </span>
            {movie.genres.map((a, index) => (
              <span className="mr-2" key={index}>
                {a.name}
              </span>
            ))}
          </p>
          <p className="mt-10">
            <span className="font-semibold">Release date: </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mt-10">
            <span className="font-semibold">Rating: </span>
            {movie.vote_average?.toFixed(1)}
          </p>
          <p className="mt-10">
            <span className="font-semibold">Runtime: </span>
            {movie.runtime} min
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
