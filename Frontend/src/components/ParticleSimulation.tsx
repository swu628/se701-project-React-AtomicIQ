import React, { useRef, useEffect, useState } from "react";

const ParticleSimulation = ({ state, temperature, pressure }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionStartTime, setTransitionStartTime] = useState(0);
  const [hasTransitionedToSolid, setHasTransitionedToSolid] = useState(false);
  const [occupiedPositions, setOccupiedPositions] = useState([]);

  const resetVelocity = () => {
    particlesRef.current.forEach((particle) => {
      particle.vx = 0;
      particle.vy = 0;
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.parentElement.clientWidth;
    const canvasHeight = canvas.parentElement.clientHeight;
    console.log(canvasHeight)

    // Set the canvas dimensions to match the parent element
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const particleRadius = 7;
    const numParticles = 75;
    let particles = particlesRef.current;

    // Initialize particles if none exist
    if (!particles.length) {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          vx: 0,
          vy: 0,
          color: "blue",
          initialX: 0,
          initialY: 0,
          targetX: 0,
          targetY: 0,
        });
      }
      particlesRef.current = particles;
    }

    const animate = (time) => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const logPressure = Math.log(pressure);
      const logMinPressure = Math.log(100);
      const logMaxPressure = Math.log(25000000);
      
      const normalizedLogPressure = (logPressure - logMinPressure) / (logMaxPressure - logMinPressure);
      const lineHeight = normalizedLogPressure * 0.6 * canvasHeight;
      
      console.log(lineHeight, pressure);
      
      ctx.beginPath();
      ctx.moveTo(0, lineHeight);
      ctx.lineTo(canvasWidth, lineHeight);
      ctx.strokeStyle = "black"; // Set the line color
      ctx.stroke();


      const gravity = 0.9;
      const repulsionForce = (1000000 - pressure) / 2000000;
      const dampeningFactor = 0.9;
      const elapsedTime = time - timeRef.current;
      timeRef.current = time;

      particles.forEach((particle, index) => {
        // Update particle position and velocity based on water state
        switch (state) {
          case "solid":
            // Transition period when state changes to 'solid'
            if (isTransitioning) {
              const transitionDuration = 300; // Transition duration in milliseconds
              const elapsedTransitionTime = time - transitionStartTime;
              const transitionProgress = Math.min(
                elapsedTransitionTime / transitionDuration,
                1
              );

              const gridSize = 20;
              const cols = Math.floor(canvasWidth / gridSize);
              const rows = Math.floor(canvasHeight / gridSize);

              // Find the closest available grid position, filling rows from bottom to top, left to right
let closestRow = rows - 1;
let closestCol = 0;
let foundPosition = false;
for (let row = rows - 1; row >= 0; row--) {
  for (let col = 0; col < cols; col++) {
    const gridX = col * gridSize + gridSize / 2;
    const gridY = canvasHeight - (row + 1) * gridSize + gridSize / 2;
    const distance = Math.sqrt(
      (particle.initialX - gridX) ** 2 +
      (particle.initialY - gridY) ** 2
    );
    if (!occupiedPositions.includes(`${col},${row}`)) {
      closestRow = row;
      closestCol = col;
      foundPosition = true;
      break;
    }
  }
  if (foundPosition) {
    break;
  }
}


              if (foundPosition) {
                particle.targetX = closestCol * gridSize + gridSize / 2;
                particle.targetY =
                  canvasHeight - (closestRow + 1) * gridSize + gridSize / 2;
                occupiedPositions.push(`${closestCol},${closestRow}`);
              }

              const maxVibrationAmplitude = 2 + temperature / 100;
              const vibrationAmplitude =
                maxVibrationAmplitude * Math.sin(time / 500 + index);

              particle.x =
                particle.initialX +
                (particle.targetX + vibrationAmplitude - particle.initialX) *
                  transitionProgress;
              particle.y =
                particle.initialY +
                (particle.targetY + vibrationAmplitude - particle.initialY) *
                  transitionProgress;

              if (transitionProgress === 1) {
                setIsTransitioning(false);
                setHasTransitionedToSolid(true);
              }
            } else if (hasTransitionedToSolid) {
              const gridSize = 20;
              const cols = Math.floor(canvasWidth / gridSize);
              const rows = Math.floor(canvasHeight / gridSize);
              const col = Math.round((particle.x - gridSize / 2) / gridSize);
              const row = Math.round(
                (canvasHeight - particle.y - gridSize / 2) / gridSize
              );
              const gridX = col * gridSize + gridSize / 2;
              const gridY = canvasHeight - (row + 1) * gridSize + gridSize / 2;
              const maxVibrationAmplitude = 2 + temperature / 100;
              const vibrationFrequencyFactor = 1 + temperature / 200;
              const randomnessFactorX = vibrationFrequencyFactor; 
              const randomnessFactorY = vibrationFrequencyFactor; 
              const vibrationAmplitudeX =
                maxVibrationAmplitude *
                  Math.sin((time / 500 + index) * vibrationFrequencyFactor) +
                (Math.random() * randomnessFactorX - randomnessFactorX / 2);
              const vibrationAmplitudeY =
                maxVibrationAmplitude *
                  Math.sin((time / 500 + index) * vibrationFrequencyFactor) +
                (Math.random() * randomnessFactorY - randomnessFactorY / 2);

              particle.x = gridX + vibrationAmplitudeX;
              particle.y = gridY + vibrationAmplitudeY;
            }
            break;
          case "liquid":
            // Particles fall to the bottom and form layers
            particle.vy += gravity;
            particle.x += particle.vx * 0.5;
            particle.y += particle.vy * 0.5;

            // Bounce off canvas edges
            if (
              particle.x - particleRadius < 0 ||
              particle.x + particleRadius > canvasWidth
            ) {
              particle.vx = -particle.vx * dampeningFactor;
            }
            if (particle.y + particleRadius > canvasHeight) {
              particle.y = canvasHeight - particleRadius;
              particle.vy = -particle.vy * dampeningFactor * 0.1; // Strong dampening after bottom contact to prevent crazy bouncing
            }

            // Apply repulsion force between particles
            for (const other of particles) {
              if (other !== particle) {
                const dx = other.x - particle.x;
                const dy = other.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 2 * particleRadius + 10) {
                  const overlapDistance = 2 * particleRadius - distance + 15;
                  const overlapVector = { x: dx / distance, y: dy / distance };
                  particle.x -=
                    overlapVector.x * overlapDistance * repulsionForce;
                  particle.y -=
                    overlapVector.y * overlapDistance * repulsionForce;
                }
              }
            }
            break;

          case "gas":
            // Calculate velocity scaling factor based on temperature
            const temperatureScale = 5; // Adjust this value to control the influence of temperature on velocity
            const velocityScale = temperature * temperatureScale;

            // Particles move randomly, affected by temperature
            const diffusionStrength = (0.005 * temperature) / 200; // Adjust this value to control the strength of diffusion
            const diffusionForceX =
              (Math.random() - 0.5) * diffusionStrength * velocityScale;
            const diffusionForceY =
              (Math.random() - 0.5) * diffusionStrength * velocityScale;

            particle.vx += diffusionForceX;
            particle.vy += diffusionForceY;

            // Apply drag to simulate gas viscosity
            const drag = 0.005; // Adjust this value to control the viscosity
            particle.vx *= 1 - drag;
            particle.vy *= 1 - drag;

            // Update particle position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off canvas edges
            if (
              particle.x - particleRadius < 0 ||
              particle.x + particleRadius > canvasWidth
            ) {
              particle.vx = -particle.vx * dampeningFactor;
            }
            if (
              particle.y - particleRadius < 0 ||
              particle.y + particleRadius > canvasHeight
            ) {
              particle.vy = -particle.vy * dampeningFactor;
            }

            // Apply repulsion force between particles
            for (const other of particles) {
              if (other !== particle) {
                const dx = other.x - particle.x;
                const dy = other.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 2 * particleRadius) {
                  const overlapDistance = 2 * particleRadius - distance;
                  const overlapVector = { x: dx / distance, y: dy / distance };
                  particle.x -=
                    overlapVector.x * overlapDistance * repulsionForce;
                  particle.y -=
                    overlapVector.y * overlapDistance * repulsionForce;
                }
              }
            }
            break;
        }

        if (particle.y - particleRadius < lineHeight) {
          particle.vy = -particle.vy * dampeningFactor; // Reverse vertical velocity
          particle.y = lineHeight + particleRadius; // Adjust particle position to avoid clipping
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleRadius, 0, 2 * Math.PI);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Clean up animation frame on component unmount
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [state, temperature, pressure]);

  useEffect(() => {
    if (state === "solid" && !hasTransitionedToSolid) {
      // Store initial particle positions
      particlesRef.current.forEach((particle) => {
        particle.initialX = particle.x;
        particle.initialY = particle.y;
      });
      setIsTransitioning(true);
      setTransitionStartTime(performance.now());
    }
  }, [state, hasTransitionedToSolid]);

  // Reset occupied positions when state changes from solid
  useEffect(() => {
    resetVelocity();
    if (state !== "solid") {
      setOccupiedPositions([]);
      setHasTransitionedToSolid(false);
    }
  }, [state]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default ParticleSimulation;
