import './HeroSection.css';

const HeroSection: React.FC = () => {
  const sentence =
    'Imagine a haven of serenity where time stands still and noise fades away to birdsong. A dreamland where you can stroll around an elegant medieval hamlet as you pass enchanting stone cottages that whisper stories of long ago.';

  return (
    <div className="hero-section">
      <div className="section-sticky">
        <div
          data-w-id="603d839b-89e4-cd26-f4cd-259c1283167a"
          className="background-img"
          id="back-img-id"
        ></div>
        <div className="hero-cover"></div>
        <div className="hero-container">
          <h1 className="heading center">
            Our timeless dreamland, your piece of heaven immersed in the Minis
            hills.
          </h1>
        </div>
      </div>
      <div
        data-w-id="fc68d457-3e92-d331-4404-896527490145"
        className="overlay-section---text master-villa"
        id="overlay-section-id"
      >
        <div className="video-circle-container">
          <div
            data-poster-url="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-poster-00001.jpg"
            data-video-urls="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-transcode.mp4,https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            className="background-video-2 w-background-video w-background-video-atom"
          >
            <video
              id="video-id"
              autoPlay
              loop
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-transcode.mp4"
                data-wf-ignore="true"
              />
              <source
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-transcode.webm"
                data-wf-ignore="true"
              />
            </video>
          </div>
          <div className="play-button">
            <img
              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d8886f3af7447dcb00e78d_play_12751645.png"
              loading="lazy"
              alt=""
              className="icon big"
            />
          </div>
        </div>
        <div className="container">
          <div className="text-container">
            {/* TO ADD READING EFFECT */}
            <h2 className="heading-2">{sentence}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
