export default function Track(track) {
  const { id, src, preview, duration, title, artists } = track;
  return (
    <div>
      <img src={preview} alt="" />
      <div>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
    </div>
  );
}
