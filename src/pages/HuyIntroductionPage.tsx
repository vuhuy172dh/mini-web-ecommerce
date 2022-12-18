import '../styles/animation-bg.scss';
import HuyImage from '../assets/hone.jpg';
import useWindowSize from '../hooks/useWindowSize';
import { useEffect, useState } from 'react';

function HuyIntroductionPage() {
  const { width: windowWidth } = useWindowSize();
  const [bubblesDur, setBubblesDur] = useState<number[]>([]);

  useEffect(() => {
    function createDur() {
      const bubbleNum = Math.floor(windowWidth / 38);
      const durations: number[] = [];
      for (let i = 0; i < bubbleNum; i++) {
        const iRandom = Math.floor(Math.random() * bubbleNum);
        const duration = Math.floor(120 / (iRandom + 1));
        durations.push(duration);
      }
      setBubblesDur(durations);
    }
    createDur();
  }, [windowWidth]);

  return (
    <div className="w-full h-screen overflow-hidden bg-blue flex justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="bubbles">
          {bubblesDur.map((duration: number, index: number) => (
            <span
              style={{ animationDuration: duration.toString() + 's' }}
              key={index}
            ></span>
          ))}
        </div>
      </div>
      <div className="text-white text-[30px] relative z-20">
        <p>
          Hello!!!! My name is <span>Hone</span>
        </p>
        <p>
          I&apos;m a <span>Front-end Developer</span>
        </p>
        <p>
          I&apos;m in <span>VietNam</span>
        </p>
      </div>
      <div className="w-[300px] h-[300px] rounded-full overflow-hidden relative z-20">
        <img
          src={HuyImage}
          alt="Hone Personal Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default HuyIntroductionPage;
