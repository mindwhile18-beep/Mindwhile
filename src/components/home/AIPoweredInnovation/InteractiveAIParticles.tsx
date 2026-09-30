import React, { useEffect, useRef } from 'react';

export const InteractiveAIParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize by making canvas opaque
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Support high DPI displays
    const dpr = window.devicePixelRatio || 1;
    
    const setCanvasSize = () => {
      width = window.innerWidth;
      // Get the height of the parent section, but for simplicity we bind to window or a massive height.
      // Usually, the background covers the whole section. Let's make it cover the parent.
      const parent = canvas.parentElement;
      if (parent) {
        height = parent.clientHeight;
      } else {
        height = window.innerHeight * 2; // fallback
      }
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    setCanvasSize();

    // Resize observer for the parent container
    const resizeObserver = new ResizeObserver(() => {
      setCanvasSize();
      initParticles();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    } else {
      window.addEventListener('resize', () => {
        setCanvasSize();
        initParticles();
      });
    }

    // Determine particle count based on screen width
    const getParticleCount = () => {
      if (width > 1024) return 800;
      if (width > 768) return 500;
      return 250;
    };

    // State Variables
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000, vx: 0, vy: 0, isMoving: false };
    let lastMouse = { x: -1000, y: -1000 };
    let time = 0;
    let energyWaves: EnergyWave[] = [];
    let signals: Signal[] = [];
    let dataStreams: DataStream[] = [];
    let isVisible = true;
    let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Listeners
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.vx = mouse.x - lastMouse.x;
      mouse.vy = mouse.y - lastMouse.y;
      mouse.isMoving = true;
      
      // Reset isMoving after a short delay
      clearTimeout((mouse as any).timeout);
      (mouse as any).timeout = setTimeout(() => {
        mouse.isMoving = false;
        mouse.vx = 0;
        mouse.vy = 0;
      }, 100);
    };
    window.addEventListener('mousemove', onMouseMove);

    // Visibility & Pause Logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
      });
    });
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    document.addEventListener("visibilitychange", () => {
      isVisible = document.visibilityState === "visible";
    });

    // Color Palette
    const colors = {
      blue: '#2C95F1',
      cyan: '#00FFFF',
      purple: '#A855F7',
      indigo: '#6366F1',
      white: '#FFFFFF'
    };

    // Spatial Partitioning Grid
    const CELL_SIZE = 100; // max connection distance
    let grid: Map<string, Particle[]> = new Map();

    const getGridKey = (x: number, y: number) => {
      return `${Math.floor(x / CELL_SIZE)},${Math.floor(y / CELL_SIZE)}`;
    };

    // Particle Classes
    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      type: 'node' | 'packet' | 'spark' | 'fragment';
      size: number;
      color: string;
      alpha: number;
      baseAlpha: number;
      layer: number; // 1: bg, 2: mid, 3: fg
      angle: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.angle = Math.random() * Math.PI * 2;
        
        const rand = Math.random();
        if (rand < 0.3) {
          this.type = 'node';
          this.size = Math.random() * 3 + 3;
          this.color = Math.random() > 0.5 ? colors.cyan : colors.blue;
          this.layer = 3;
          this.baseAlpha = 0.5 + Math.random() * 0.5;
        } else if (rand < 0.6) {
          this.type = 'packet';
          this.size = Math.random() * 2 + 2;
          this.color = colors.white;
          this.layer = 2;
          this.baseAlpha = 0.3 + Math.random() * 0.3;
          this.vx *= 2; // move faster
        } else if (rand < 0.8) {
          this.type = 'spark';
          this.size = Math.random() * 1.5 + 1;
          this.color = colors.purple;
          this.layer = 3;
          this.baseAlpha = 0.6 + Math.random() * 0.4;
        } else {
          this.type = 'fragment';
          this.size = Math.random() * 4 + 2;
          this.color = colors.indigo;
          this.layer = 1;
          this.baseAlpha = 0.1 + Math.random() * 0.2;
        }
        
        this.alpha = this.baseAlpha;
      }

      update(mouseDist: number, mouseAngle: number) {
        if (!prefersReducedMotion) {
          // Spring physics
          const k = 0.01; // Spring constant
          const damp = 0.9; // Damping
          
          let forceX = (this.baseX - this.x) * k;
          let forceY = (this.baseY - this.y) * k;

          // Mouse Interaction
          if (mouseDist < 200 && this.layer !== 1) {
            // Repel
            const pushFactor = (200 - mouseDist) / 200;
            const force = pushFactor * 0.5 * this.layer; // FG moves more
            
            if (mouse.isMoving) {
              forceX -= Math.cos(mouseAngle) * force;
              forceY -= Math.sin(mouseAngle) * force;
              
              // Orbit effect
              if (mouseDist > 100) {
                 forceX += Math.cos(mouseAngle + Math.PI/2) * force * 0.5;
                 forceY += Math.sin(mouseAngle + Math.PI/2) * force * 0.5;
              }
            } else {
              // Attract slightly on stop
              forceX += Math.cos(mouseAngle) * force * 0.2;
              forceY += Math.sin(mouseAngle) * force * 0.2;
            }
          }

          this.vx += forceX;
          this.vy += forceY;
          this.vx *= damp;
          this.vy *= damp;
          
          this.x += this.vx;
          this.y += this.vy;
          
          // Wander base position slowly
          this.baseX += (Math.random() - 0.5) * 0.2;
          this.baseY += (Math.random() - 0.5) * 0.2;
        } else {
          // Reduced motion: Just drift slowly
          this.x += (Math.random() - 0.5) * 0.2;
          this.y += (Math.random() - 0.5) * 0.2;
        }

        // Wrap around screen
        if (this.baseX < 0) this.baseX = width;
        if (this.baseX > width) this.baseX = 0;
        if (this.baseY < 0) this.baseY = height;
        if (this.baseY > height) this.baseY = 0;

        // Breathing alpha
        this.alpha = this.baseAlpha + Math.sin(time * 0.002 + this.x) * 0.2;
        if (this.alpha < 0) this.alpha = 0;
        
        // Energy wave interaction
        for (const wave of energyWaves) {
          const dx = this.x - wave.x;
          const dy = this.y - wave.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - wave.radius) < 20) {
            this.alpha = Math.min(1, this.alpha + wave.intensity);
            if (!prefersReducedMotion) {
              this.vx += (dx / dist) * wave.intensity * 2;
              this.vy += (dy / dist) * wave.intensity * 2;
            }
          }
        }
        
        // Rotation for fragments
        if (this.type === 'fragment') {
           this.angle += 0.01;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        
        if (this.type === 'node') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 'packet') {
          ctx.beginPath();
          ctx.roundRect(this.x - this.size, this.y - this.size/2, this.size * 2, this.size, 2);
          ctx.fill();
        } else if (this.type === 'spark') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 'fragment') {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle);
          ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
          ctx.restore();
        }
      }
    }

    class EnergyWave {
      x: number;
      y: number;
      radius: number;
      intensity: number;
      active: boolean;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.intensity = 1.0;
        this.active = true;
      }

      update() {
        this.radius += 3;
        this.intensity -= 0.005;
        if (this.intensity <= 0) this.active = false;
      }
    }

    class Signal {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      progress: number;
      active: boolean;
      
      constructor(p1: Particle, p2: Particle) {
        this.x = p1.x;
        this.y = p1.y;
        this.targetX = p2.x;
        this.targetY = p2.y;
        this.progress = 0;
        this.active = true;
      }

      update() {
        this.progress += 0.02;
        if (this.progress >= 1) this.active = false;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const currX = this.x + (this.targetX - this.x) * this.progress;
        const currY = this.y + (this.targetY - this.y) * this.progress;
        
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = colors.cyan;
        ctx.beginPath();
        ctx.arc(currX, currY, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Trail
        ctx.strokeStyle = colors.cyan;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.moveTo(this.x + (this.targetX - this.x) * Math.max(0, this.progress - 0.2), 
                   this.y + (this.targetY - this.y) * Math.max(0, this.progress - 0.2));
        ctx.lineTo(currX, currY);
        ctx.stroke();
      }
    }

    class DataStream {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = -Math.random() * height;
        this.length = Math.random() * 200 + 100;
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.1 + 0.02;
      }

      update() {
        this.x += this.speed * 0.5;
        this.y += this.speed;
        if (this.y - this.length > height) {
          this.y = -this.length;
          this.x = Math.random() * width;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x - this.length*0.5, this.y - this.length);
        gradient.addColorStop(0, `rgba(56, 189, 248, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.length*0.5, this.y - this.length);
        ctx.stroke();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
      
      dataStreams = [];
      for (let i = 0; i < 20; i++) {
        dataStreams.push(new DataStream());
      }
    };
    initParticles();

    // Aurora Gradient Rendering
    const drawAurora = () => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      // Animated color blending
      const offset1 = Math.sin(time * 0.0005) * 0.5 + 0.5;
      const offset2 = Math.cos(time * 0.0007) * 0.5 + 0.5;
      
      gradient.addColorStop(0, '#020617'); // slate-950 base
      gradient.addColorStop(offset1 * 0.3 + 0.2, 'rgba(30, 58, 138, 0.4)'); // deep navy
      gradient.addColorStop(offset2 * 0.4 + 0.4, 'rgba(79, 70, 229, 0.2)'); // indigo
      gradient.addColorStop(1, '#020617');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Blur blobs
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = 'rgba(56, 189, 248, 0.1)';
      ctx.beginPath();
      ctx.arc(width * offset1, height * offset2, 400, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawMatrix = () => {
      ctx.globalAlpha = 0.03;
      ctx.fillStyle = colors.cyan;
      ctx.font = '10px monospace';
      
      // Just draw a few random binary strings for performance
      for (let i = 0; i < 50; i++) {
        const x = ((Math.sin(i + time * 0.0001) + 1) / 2) * width;
        const y = ((Math.cos(i + time * 0.0002) + 1) / 2) * height;
        ctx.fillText(Math.random() > 0.5 ? '1' : '0', x, y);
      }
    };

    const render = (timestamp: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      
      time = timestamp;
      
      // 1. Draw Aurora Base (Opaque to clear canvas)
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1.0;
      drawAurora();
      
      // 2. AI Computation Effects
      drawMatrix();

      // 3. Data Streams
      dataStreams.forEach(stream => {
        stream.update();
        stream.draw(ctx);
      });

      // Populate Grid for Spatial Partitioning
      grid.clear();
      particles.forEach(p => {
        const key = getGridKey(p.x, p.y);
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key)!.push(p);
      });

      // Spawn energy wave occasionally
      if (Math.random() < 0.005) {
        energyWaves.push(new EnergyWave(Math.random() * width, Math.random() * height));
      }

      // Update & Draw Energy Waves
      energyWaves = energyWaves.filter(w => w.active);
      energyWaves.forEach(w => w.update());

      // 4. Update Particles & Draw Connections
      ctx.lineWidth = 0.5;
      
      particles.forEach(p => {
        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const mouseDist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        const mouseAngle = Math.atan2(dyMouse, dxMouse);

        p.update(mouseDist, mouseAngle);

        // Network connections (only for nodes and packets in layers 2/3)
        if (p.layer > 1 && (p.type === 'node' || p.type === 'packet')) {
          const keyX = Math.floor(p.x / CELL_SIZE);
          const keyY = Math.floor(p.y / CELL_SIZE);
          
          // Check adjacent cells
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const neighbors = grid.get(`${keyX + i},${keyY + j}`);
              if (neighbors) {
                neighbors.forEach(n => {
                  if (n === p || n.layer === 1) return;
                  
                  const dx = p.x - n.x;
                  const dy = p.y - n.y;
                  const dist = dx * dx + dy * dy; // squared dist for perf
                  
                  if (dist < 10000) { // 100px dist
                     const opacity = (1 - Math.sqrt(dist) / 100) * 0.3;
                     
                     // Brighten near cursor
                     const distToCursor = Math.min(
                       Math.sqrt(Math.pow(p.x - mouse.x, 2) + Math.pow(p.y - mouse.y, 2)),
                       Math.sqrt(Math.pow(n.x - mouse.x, 2) + Math.pow(n.y - mouse.y, 2))
                     );
                     
                     let brightness = opacity;
                     if (distToCursor < 200) {
                       brightness += (200 - distToCursor) / 200 * 0.5;
                     }
                     
                     ctx.globalAlpha = brightness;
                     ctx.strokeStyle = colors.blue;
                     ctx.beginPath();
                     ctx.moveTo(p.x, p.y);
                     ctx.lineTo(n.x, n.y);
                     ctx.stroke();

                     // Randomly spawn signals
                     if (Math.random() < 0.0001) {
                       signals.push(new Signal(p, n));
                     }
                  }
                });
              }
            }
          }
        }
      });

      // 5. Draw Signals
      signals = signals.filter(s => s.active);
      signals.forEach(s => {
        s.update();
        s.draw(ctx);
      });

      // 6. Draw Particles
      particles.forEach(p => p.draw(ctx));

      // 7. Cursor Spotlight
      if (!prefersReducedMotion && mouse.x > 0 && mouse.y > 0) {
        ctx.globalCompositeOperation = 'screen';
        const spotlight = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 250);
        spotlight.addColorStop(0, 'rgba(56, 189, 248, 0.15)');
        spotlight.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = spotlight;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
