import { useState } from "react";

export default function Player() {
  const [curentTrackIndex, setCurentTrackIndex] = useState(0);
  // const [curentTrack, setCurentTrack] = useState(trackList[0]);

  const PlayTrack = () => {
    // play track
    console.log("Curent track", curentTrackIndex);
  };
  const PlayBackTrack = () => {
    console.log("curent track index", curentTrackIndex);
    if (curentTrackIndex == 0) {
      setCurentTrackIndex(12);
      console.log("working if");
    } else {
      setCurentTrackIndex(curentTrackIndex - 1);
      console.log("working else");
    }
    // curentTrackIndex == 0
    //   ? setCurentTrackIndex(trackList.length - 1)
    //   : setCurentTrackIndex(curentTrackIndex - 1);
    PlayTrack();
    console.log("curent track index", curentTrackIndex);
  };
  const PlayNextTrack = () => {};

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
                    <i className="fa fa-play" onClick={PlayTrack}></i>
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
