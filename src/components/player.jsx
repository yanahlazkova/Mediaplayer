import { useEffect, useRef, useState } from "react";
import PlayPause from "./PlayPause";
import { trackList } from "./tracks";

export default function Player() {
  const [curentTrackIndex, setCurentTrackIndex] = useState(0);
  const audioRef = useRef(new Audio(trackList[0].src));
  const [stateAudio, setStateAudio] = useState(true); //image play, track is stoping
  const [dateCurentTrack, setDateCurentTrack] = useState({});

  useEffect(
    () => {
      setDateCurentTrack({
        title: trackList[curentTrackIndex].title,
        artists: trackList[curentTrackIndex].artists,
      });
      // setCurentTrackIndex(0);
    },
    [curentTrackIndex]
    // [dateCurentTrack]
  );

  const PlayTrack = () => {
    const audio = audioRef.current;
    console.log("image play? - ", `${!stateAudio ? "play" : "pause"}`);

    if (audio.paused) {
      audio.play();
      setStateAudio(false);
    } else {
      audio.pause();
      setStateAudio(true);
    }

    console.log(
      "Curent track",
      curentTrackIndex,
      trackList[curentTrackIndex].title
    );
  };

  const PlayBackTrack = () => {
    const audio = audioRef.current;
    const newIndex =
      curentTrackIndex == 0 ? trackList.length - 1 : curentTrackIndex - 1;
    setCurentTrackIndex(newIndex);
    // вывод данных трека
    const dataTrack = {
      title: trackList[curentTrackIndex].title,
      artists: trackList[curentTrackIndex].artists,
    };
    setDateCurentTrack(dataTrack);

    console.log("useState - ", dateCurentTrack);

    console.log("image play? - ", stateAudio);
    if (!audio.paused) {
      // меняем url текущего трека
      audio.src = trackList[curentTrackIndex].src;
      console.log("проигрывается");
      PlayTrack();
    }
    console.log(
      "Back track index",
      curentTrackIndex,
      trackList[curentTrackIndex].title
    );
  };
  const PlayNextTrack = () => {
    const audio = audioRef.current;
    curentTrackIndex =
      curentTrackIndex == trackList.length - 1 ? 0 : curentTrackIndex + 1;

    // вывод данных трека
    setDateCurentTrack({
      title: trackList[curentTrackIndex].title,
      artists: trackList[curentTrackIndex].artists,
    });

    console.log("image play? - ", stateAudio);
    if (!audio.paused) {
      // меняем url текущего трека
      audio.src = trackList[curentTrackIndex].src;
      console.log("проигрывается");
      PlayTrack();
    }
    console.log(
      "Next track index",
      curentTrackIndex,
      trackList[curentTrackIndex].title
    );
  };

  return (
    <>
      <div className="wrapper">
        <div className="player__container">
          <div className="player__body">
            <div className="body__cover">
              <ul className="list list--cover">
                <li>
                  <a className="list__link" href="">
                    <i className="fa fa-bars"></i>
                  </a>
                </li>

                <li>
                  <a className="list__link" href=""></a>
                </li>

                <li>
                  <a className="list__link" href="">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
              </ul>

              <img
                src="http://ecx.images-amazon.com/images/I/51XSHShbPiL.jpg"
                alt="Album cover"
              />

              <div className="range"></div>
            </div>

            <div className="body__info">
              {/* <TreckDate /> */}
              <div className="info__album">The Hunting Party</div>

              <div className="info__song">{dateCurentTrack.title}</div>

              <div className="info__artist">{dateCurentTrack.artists}</div>
            </div>

            <div className="body__buttons">
              <ul className="list list--buttons">
                <li>
                  <a href="#" className="list__link">
                    <i
                      className="fa fa-step-backward"
                      onClick={PlayBackTrack}
                    ></i>
                  </a>
                </li>

                <li>
                  <PlayPause
                    nameClass={`fa fa-${stateAudio ? "play" : "pause"}`}
                    onSetIcon={PlayTrack}
                  />
                  {/* </a> */}
                </li>

                <li>
                  <a href="#" className="list__link">
                    <i
                      className="fa fa-step-forward"
                      onClick={PlayNextTrack}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="player__footer">
            <ul className="list list--footer">
              <li>
                <a href="#" className="list__link">
                  <i className="far fa-heart"></i>
                </a>
              </li>

              <li>
                <a href="#" className="list__link">
                  <i className="fa fa-random"></i>
                </a>
              </li>

              <li>
                <a href="#" className="list__link">
                  <i className="fa fa-undo"></i>
                </a>
              </li>

              <li>
                <a href="#" className="list__link">
                  <i className="fa fa-ellipsis-h"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
