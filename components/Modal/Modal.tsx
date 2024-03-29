import React, { useEffect, useState } from "react";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/atoms/modalAtoms";
import { Element, Genre, Movie } from "@/typings";
import ReactPlayer from "react-player/lazy";
import { FaPlay } from "react-icons/fa";
import {
 CheckIcon,
 PlusIcon,
 HandThumbUpIcon,
 XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";

const Modal = () => {
 const [showModal, setShowModal] = useRecoilState(modalState);
 const [movie, setMovie] = useRecoilState(movieState);
 const [trailer, setTrailer] = useState("");
 const [genres, setGenres] = useState<Genre | null>(null);
 const [muted, setMuted] = useState(false);

 useEffect(() => {
  if (!movie) return;

  async function fetchMovie() {
   const data = await fetch(
    `https://api.themoviedb.org/3/${
     movie?.media_type === "tv" ? "tv" : "movie"
    }/${movie?.id}?api_key=${
     process.env.NEXT_PUBLIC_TMDB_API_KEY
    }&language=en-US&append_to_response=videos`
   )
    .then((response) => response.json())
    .catch((err) => console.log(err.message));

   if (data?.videos) {
    const index = data.videos.results.findIndex(
     (element: Element) => element.type === "Trailer"
    );
    setTrailer(data.videos?.results[index]?.key);
   }
   if (data?.genres) {
    setGenres(data.genres);
   }
  }

  fetchMovie();
 }, [movie]);

 const handleClose = () => {
  setShowModal(false);
 };

 console.log(trailer);

 return (
  <MuiModal open={showModal} onClose={handleClose}>
   <>
    <button
     onClick={handleClose}
     className="modalButton absolute right-5 top-5 !z-48 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
    >
     <XMarkIcon className="h-6 w-6" />
    </button>

    <div className="relative pt-[56.25%]">
     <ReactPlayer
      url={`https://www.youtube.com/watch?v=${trailer}`}
      width="100%"
      height="100%"
      style={{ position: "absolute", top: "0", left: "0" }}
      playing
      muted={muted}
     />
     <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
      <div>
       <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
        <FaPlay className="h-7 w-7 text-black" />
       </button>
       <button className="modalButton">
        <PlusIcon className="h-7 w-7" />
       </button>

       <button className="modalButton">
        <HandThumbUpIcon className="h-7 w-7" />
       </button>
      </div>
      <button>{muted ? <FaVolumeOff /> : <FaVolumeUp />}</button>
     </div>
    </div>
   </>
  </MuiModal>
 );
};

export default Modal;
