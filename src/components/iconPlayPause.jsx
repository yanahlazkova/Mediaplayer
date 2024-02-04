import "../css/styles.css";
export default function IconPlayPause({ onSetIcon, nameClass }) {
  console.log("Change icon ", nameClass);
  return <i className={nameClass} onClick={onSetIcon}></i>;
}
