import { useSelector } from 'react-redux';
import useVideo from '../hooks/useVideo';
const Video = ({id}) => {
    const trailerVideos=useSelector(store=>store.movies.videos)
    useVideo(id)
  return (
    <div className=' md:w-full    '>
        <iframe 
        className='w-full md:h-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerVideos?.key}?mute=1&modestbranding=1&showinfo=0`}
        //  ?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0
        title="YouTube video player"
         frameBorder="0"
          // allow=" autoplay; " 
          allowFullScreen></iframe>
    </div>
  )
}

export default Video