import { useState } from "react";
import PlayPause from "./PlayPause";
import { trackList } from "./tracks";
import { useRef } from "react";

export default function Player() {
  // let playTrack = false;
  let curentTrackIndex = 0;
  const audioRef = useRef(new Audio(trackList[0].src));
  const [stateAudio, setStateAudio] = useState(true) //image play
  // const [isPlay, setIsPlay] = useState("fa fa-play");
  
    const PlayTrack = () => {
      const audio = audioRef.current;
    console.log("image play? - ", `${!stateAudio ? "play" : "pause"}`);

      if (stateAudio) {
        audio.play();
        // setIsPlay("fa fa-play");
        setStateAudio(false)
      } else {
        audio.pause();
        setStateAudio(true)
        // setIsPlay("fa fa-pause");
      }
      
      console.log(
          "Curent track",
          curentTrackIndex,
          trackList[curentTrackIndex].title
        );
        
    };

    
  // useEffect(() => {
  //   // PlayTrack();
  //   console.log(stateAudio);
  // }, [stateAudio])
  
  const PlayBackTrack = () => {
    const audio = audioRef.current;
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
    
    // !audio.paused && audio.play();
    console.log("image play? - ", stateAudio);
    if (!audio.paused) {
      PlayTrack(); 
      !stateAudio;
    }
    
  };
  const PlayNextTrack = () => {
    const audio = audioRef.current;
    curentTrackIndex =
      curentTrackIndex == trackList.length - 1 ? 0 : curentTrackIndex + 1;
    audio.src = trackList[curentTrackIndex].src;

    console.log(
      "Next track index",
      curentTrackIndex,
      trackList[curentTrackIndex].title
    );
    // !audio.paused && audio.play();
    if (!audio.paused) {
      PlayTrack(); 
      !stateAudio;
    }
    
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
                  {/* <a href="#" className="list__link"> */}
                    {/* <i
                      className={`fa fa-${iconPlay ? "play" : "pause"}`}
                      onClick={PlayTrack()}
                    ></i> */}
                    <PlayPause nameClass={`fa fa-${stateAudio ? 'play' : 'pause'}`} onSetIcon={PlayTrack} />
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
