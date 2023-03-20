import { Movie } from "@/typings";
import Image from "next/image";
import { imgBaseUrl } from "@/constants/movie";

export interface Props {
 movie: Movie;
}
const Thumbnail = ({ movie }: Props) => {
 return (
  <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
   <Image
    src={`${imgBaseUrl}${movie?.backdrop_path || movie?.poster_path}`}
    className="rounded-sm object-cover md:rounded"
    fill
    alt="movie poster"
   />
  </div>
 );
};
export default Thumbnail;
