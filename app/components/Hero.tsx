import { Gallery } from "./hero/Gallery";
import { Typewriter } from "./hero/Typewriter";
import { VideoCarrousel } from "./hero/VideoCarrousel";

const sampleWords = [
  "Fresh flavors daily.",
  "Burgers made right.",
  "Taste the difference.",
  "Fast food redefined.",
  "Hot and juicy bites.",
  "Quality you crave.",
  "Your new favorite spot.",
  "Flavor in every bite.",
  "Always fresh. Always good.",
  "Cravings solved here.",
];

const videos = ["hero-1.mp4", "hero-2.mp4", "hero-3.mp4", "hero-4.mp4"];

export const Hero = () => {
  return (
    <div className="min-h-[90vh] bg-slate-950">
      <div className="hero-grid">
        <Typewriter words={sampleWords} />

        <div className="video min-h-64 md:min-h-96 :max-h-96">
          <VideoCarrousel videos={videos} />
        </div>

        <div className="pics max-h-96">
          {/* <Gallery /> */}
        </div>
      </div>
    </div>
  );
};
