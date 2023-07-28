import YouTube from 'react-youtube';
import './Media.scss'

export default function Media(){

  const featuredOpts = {
    height: '580',
    width: '1100',
    playerVars: {
      autoplay: 1,
      start: 3,
      end: 0
    }
  };

  const opts = {
    height: '480',
    width: '900',
    playerVars: {
      autoplay: 0,
      start: 0,
      end: 0
    }
  };

  return (
    <div className="mediaContainer">
      <YouTube videoId={'VNx2dWbYsnM'} opts={featuredOpts}/>
      <YouTube videoId={'yzVzNduzhnw'} opts={opts} />
      <YouTube videoId={'_AgJLTc_83Y'} opts={opts} />
    </div>
  );
};