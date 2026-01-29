import React, { useEffect, useRef } from 'react';

const ParticleWhirlpool: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Configuration
    const particleCount = 700;
    const centerAvoidance = 50; 
    
    // Colors for Dark Theme (Bright, neon colors)
    const colors = [
        'rgba(56, 189, 248,',  // Cyan-400
        'rgba(96, 165, 250,',  // Blue-400
        'rgba(129, 140, 248,', // Indigo-400
        'rgba(255, 255, 255,'  // White highlights
    ];

    class Particle {
      radius: number;
      angle: number;
      size: number;
      speed: number;
      colorBase: string;
      opacity: number;
      x: number;
      y: number;

      constructor(w: number, h: number) {
        const maxRadius = Math.sqrt(w*w + h*h) / 2;
        this.radius = Math.random() * maxRadius + centerAvoidance;
        this.angle = Math.random() * Math.PI * 2;
        this.size = Math.random() * 2 + 0.5;
        this.speed = (Math.random() * 0.002 + 0.001) + (100 / (this.radius + 100)) * 0.02; 
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.6 + 0.2;
        this.x = 0;
        this.y = 0;
      }

      update(centerX: number, centerY: number, maxRadius: number) {
        this.angle += this.speed;
        this.radius -= (0.2 + (maxRadius / (this.radius + 1)) * 0.15);

        if (this.radius < centerAvoidance) {
            this.radius = maxRadius;
            this.opacity = 0;
        }
        
        if (this.opacity < 0.8) this.opacity += 0.01;

        this.x = centerX + Math.cos(this.angle) * this.radius;
        this.y = centerY + Math.sin(this.angle) * this.radius;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        const finalColor = `${this.colorBase} ${this.opacity})`;
        ctx.fillStyle = finalColor;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
          canvas.width = rect.width;
          canvas.height = rect.height;
      }
      particles = [];
      for(let i = 0; i < particleCount; i++) {
          particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      // Trail Effect: Match the Hero background (#020d24)
      ctx.fillStyle = 'rgba(2, 13, 36, 0.25)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Determine center position based on screen width
      // On wide screens (>1024px), shift center to the right (75% width) to balance composition
      const isWideScreen = canvas.width > 1024;
      const centerX = isWideScreen ? canvas.width * 0.75 : canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.sqrt(canvas.width**2 + canvas.height**2) / 2;

      particles.forEach(p => {
        p.update(centerX, centerY, maxRadius);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(init, 200);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="block w-full h-full" />
        {/* Overlay gradients to blend into the parent background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020d24] via-transparent to-[#020d24] opacity-90 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020d24] via-transparent to-transparent opacity-90 pointer-events-none"></div>
    </div>
  );
};

export default ParticleWhirlpool;