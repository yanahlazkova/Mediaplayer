import './stylesOfList.css'
import { trackList } from './tracks';
import Column from "./Column";
import Container from "./Container";
import Row from './Row'

export default function List () {
    
    const listTracks = trackList.map((track) => 
    <Row>
        {/* <Column>{track.id}</Column> */}
        <Column width='width-preview'><img className='preview' src={track.preview} /></Column>
        <Column>{track.artists}</Column>
        <Column>{track.title}</Column>
    </Row>
    )
    return (<Container>{listTracks}</Container>
                
    )
}