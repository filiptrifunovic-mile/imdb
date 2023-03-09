import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="images not found"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        ></Image>
        <div className="p-2">
          <h2 className="truncate text-lg font-bold text-center">
            {result?.title || result.name}
          </h2>
          <p className="line-clamp-2 text-sm mt-5">{result.overview}...</p>
          <p className="flex items-center justify-between mt-5">
            {result.release_date || result.first_air_date}
            <div className="flex items-center">
              <AiFillStar className="h-5 mr-1 ml-3" />{" "}
              {result.vote_average.toFixed(1)}
            </div>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
