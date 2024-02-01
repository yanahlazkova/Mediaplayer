import ListTracks from "./track/ListTracks";
import { useState } from "react";

/* Компоненты всегда нужно называть с большой буквы. Не player, а Player */

/* Это js-стайл, работать на реакте он таким образом не будет. Лучше удалить */
// const navicon = document.querySelector(".fa.fa-bars");
// navicon.addEventListener("click", () => alert("sfasfs"));
export default function Player() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Назначаем событие на кнопку Бургер-меню
  const navicon = document.querySelector(".fa.fa-ellipsis-h");
  navicon ? navicon.addEventListener("click", showListTracks) : console.error(`Элемент с классом ".fa.fa-ellipsis-h" не найден`);
    // }

    // // Очистка обработчика события при размонтировании компонента
    // return () => {
    //   if (navicon) {
    //     navicon.removeEventListener("click", showListTracks);
    //   }
    // };
  // navicon.addEventListener("click", {showListTracks});
  // // Выводим окно со списком треков
  function showListTracks() {
     console.log("showListTracks");
     setIsDropdownOpen(!isDropdownOpen);
  }

  return (
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
                  <i className="fa fa-step-backward"></i>
                </a>
              </li>

              <li>
                <a href="#" className="list__link">
                  <i className="fa fa-play"></i>
                </a>
              </li>

              <li>
                <a href="#" className="list__link">
                  <i className="fa fa-step-forward"></i>
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
  );
  
  
}
