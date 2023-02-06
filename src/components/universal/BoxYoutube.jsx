import '../../styles/css-universal/BoxYoutube.css'
import YouTube from 'react-youtube';


export const BoxYoutube = (props) => {

    return (
        <div className="box-youtube-div" >
            <YouTube className='box-youtube-button-youtube' videoId={props.youtube}/>
        </div>
    )
}