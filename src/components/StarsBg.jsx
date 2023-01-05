import { useEffect, useLayoutEffect, useState, useRef } from "preact/hooks";
import { gsap} from "gsap";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
const Star = ({timeline, width, height}) => {
  const el = useRef(null);
  
  
  useLayoutEffect(() => {
    const startalpha = gsap.utils.random(0,1);

    if (timeline) {
      timeline.set(el.current, {
        x: gsap.utils.random(0.05,0.95) * width,
        y: gsap.utils.random(0.02,0.95) * height / 2,
        autoAlpha: startalpha,
        overwrite: true,
        duration: 0,
      }, 0).to(el.current, {
        autoAlpha: gsap.utils.random(0.2,1),
        scale: gsap.utils.random(0.4,1.3),
        duration: gsap.utils.random(0.5,1),
      }, ">").to(el.current, {
        autoAlpha: gsap.utils.random(0.2,1),
        duration: gsap.utils.random(0.5,1),
      }, ">").to(el.current, {
        autoAlpha: gsap.utils.random(0.2,1),
        scale: gsap.utils.random(0.2,1.6),
        duration: gsap.utils.random(0.5,1),
      }, ">").to(el.current, {
        autoAlpha: startalpha,
        scale: 1,
        duration: gsap.utils.random(0.5,1),
      }, ">");
    }
  }, [timeline, width, height]);
  return <div ref={el} className="absolute w-0.5 h-0.5  md:w-1 md:h-1 bg-white rounded-full"></div>;

}

export const StarsBg = ({numOfStar}) => {
  const [tl, setTl] = useState()
  const {width, height} = useWindowDimensions();

  const createStars = (numOfStar) => {
    const stars = []
    for (let i = 0; i < numOfStar; i++) {
      stars.push(<Star key={i+"stars"} width={width} height={height} timeline={tl}/>)
    }
    return stars; 
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
      });
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute">
      {createStars(numOfStar)}
    </div>
  )
}
