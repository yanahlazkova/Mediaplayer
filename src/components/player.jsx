import { useState } from "react";
import IconPlayPause from "./iconPlayPause";
import { trackList } from "./tracks";

export default function Player() {
  let playTrack = false;
  let curentTrackIndex = 0;
  const audio = new Audio(trackList[curentTrackIndex].src);
  let [isPlay, setIsPlay] = useState("fa fa-play");

  const PlayTrack = () => {
    console.log(audio);
    console.log("OnClick!!!");
    //если трек проигрывается, то останавливаем его (и наоборот), меняем иконку
    playTrack = !playTrack;
    // isPlay = playTrack ? "fa fa-pause" : "fa fa-play";
    // setIsPlay(isPlay);
    playTrack ? audio.play() : audio.pause();

    console.log(
      "Curent track",
      curentTrackIndex,
      trackList[curentTrackIndex].title
    );
    console.log("isPlay", isPlay);
  };
  const PlayBackTrack = () => {
    curentTrackIndex == 0
      ? (curentTrackIndex = trackList.length - 1)
      : (curentTrackIndex = curentTrackIndex - 1);
    // меняем url текущего трека
    audio.src = trackList[curentTrackIndex].src;
    console.log(
      "Back track index",
      curentTrackIndex,
      trackList[curentTrackIndex].title
    );
    playTrack && audio.play();
  };
  const PlayNextTrack = () => {
    curentTrackIndex =
      curentTrackIndex == trackList.length - 1 ? 0 : curentTrackIndex + 1;
    audio.src = trackList[curentTrackIndex].src;

    console.log(
      "Next track index",
      curentTrackIndex,
      trackList[curentTrackIndex].title
    );
    playTrack && audio.play();
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
              <div className="info__album">The Hunting Party</div>

              <div className="info__song">Final Masquerade</div>

              <div className="info__artist">Linkin Park</div>
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
                  <a href="#" className="list__link">
                    {/* <i
                      className={`fa fa-${iconPlay ? "play" : "pause"}`}
                      onClick={PlayTrack()}
                    ></i> */}
                    <IconPlayPause nameClass={isPlay} onSetIcon={PlayTrack} />
                  </a>
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
