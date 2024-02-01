import { trackList } from "./tracks"
export default function ListTracks(){
    const track = trackList.map(track => <div><img className="preview" src={track.preview}/><div>{track.artists}</div><div>{track.title}</div></div>)
    return (
    <>
        <div>
            {track}
        </div>       
            </>
    )
}