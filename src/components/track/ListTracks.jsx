import './styles.css'
import { trackList } from './tracks';
export default function ListTracks () {
    console.log("ListTracks");
    
    const tracks = trackList.map((track, index) => <li key={index + 1}>{track.title}</li>)
    return <ul className='dropdown-list'>{tracks}</ul>
}