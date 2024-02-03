import Track from "./Track";
import { trackList } from "./tracks";

export default function List() {
  const rowList = trackList.map((track) => (
    <div>
      <Track {...track} />
    </div>
  ));
  return <div>{rowList}</div>;
}
