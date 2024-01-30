import ListTracks from "./track/ListTracks";
import { useState } from "react";

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
    <div>
      {navicon ? navicon.addEventListener("click", showListTracks) : console.error(`Элемент с классом ".fa.fa-ellipsis-h" не найден`)}
      {isDropdownOpen && (
        <ul>
          <li>Track 1</li>
          <li>Track 2</li>
          <li>Track 3</li>
          {/* Здесь могут быть другие треки */}
        </ul>
      )}
      
    </div>
  )
}
