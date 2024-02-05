import "../css/styles.css";
export default function PlayPause({ onSetIcon, nameClass }) {
  console.log("Change icon ", nameClass);
  return <a href="#" className="list__link"><i className={nameClass} onClick={onSetIcon}></i></a>;
}
