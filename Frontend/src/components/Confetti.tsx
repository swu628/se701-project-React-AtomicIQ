import React, { useCallback, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';


const ConfettiComponent = () => {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={{ position: 'fixed', pointerEvents: 'none', width: '100%', height: '100%' }} />
      <button onClick={fire} className="mt-4 m-2 ml-7 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Fire Confetti
      </button>
    </>
  );
};

export default ConfettiComponent;
