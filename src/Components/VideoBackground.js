import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';
const VideoBackground = ({id}) => {
    const trailerVideos=useSelector(store=>store.movies.trailerVideos)
    useTrailerVideo(id)
  return (
    <div className='absolute w-screen aspect-video md:-mt-12'>
        <iframe 
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerVideos?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0`}
        //  ?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0
        title="YouTube video player"
         frameBorder="0"
          // allow=" autoplay; " 
          allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground