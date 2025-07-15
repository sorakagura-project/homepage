"use client"

import React, { useRef, useEffect } from 'react';

const NoaVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width;
    let height = canvas.height;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let frame = 0;

    interface Position { x: number; y: number; }
    interface Element {
      x: number; y: number;
      originX: number; originY: number;
      opacity: number; targetOpacity: number;
      text: string;
      alwaysVisible?: boolean;
    }
    interface Connection {
      from: string; to: string;
      color: string;
      strength: number; targetStrength: number;
    }
    interface Pulse {
      from: Position; to: Position;
      progress: number; speed: number; color: string;
    }

    class Particle {
      x: number; y: number;
      vx: number; vy: number;
      life: number; maxLife: number;
      size: number; color: string;

      constructor(x: number, y: number, color: string) {
        this.x = x; this.y = y;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
        this.maxLife = this.life = Math.random() * 80 + 40;
        this.size = Math.random() * 2.5 + 1;
        this.color = color;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.97;
        this.vy *= 0.97;
        this.life -= 1;
      }

      draw(context: CanvasRenderingContext2D) {
        const opacity = Math.max(0, this.life / this.maxLife);
        context.fillStyle = `rgba(${this.color}, ${opacity})`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    const elements: Record<string, Element> = {
      'jinkoubutsu': { x: 0, y: 0, originX: 0, originY: 0, opacity: 0.8, targetOpacity: 0.8, text: '人工物', alwaysVisible: true },
      'shizenbutsu': { x: 0, y: 0, originX: 0, originY: 0, opacity: 0.8, targetOpacity: 0.8, text: '自然物', alwaysVisible: true },
      'hito': { x: 0, y: 0, originX: 0, originY: 0, opacity: 0.8, targetOpacity: 0.8, text: '人', alwaysVisible: true },
      'asobi': { x: 0, y: 0, originX: 0, originY: 0, opacity: 0, targetOpacity: 0, text: '遊び' },
      'geijutsu': { x: 0, y: 0, originX: 0, originY: 0, opacity: 0, targetOpacity: 0, text: '芸術' },
      'game': { x: 0, y: 0, originX: 0, originY: 0, opacity: 0, targetOpacity: 0, text: 'ゲーム' },
      'monogatari': { x: 0, y: 0, originX: 0, originY: 0, opacity: 0, targetOpacity: 0, text: '物語' },
      'keisangijutsu': { x: 0, y: 0, originX: 0, originY: 0, opacity: 0.5, targetOpacity: 0.5, text: '計算技術' },
    };

    const connections: Connection[] = [
      { from: 'hito', to: 'jinkoubutsu', color: '44, 188, 225', strength: 0, targetStrength: 0 },
      { from: 'hito', to: 'shizenbutsu', color: '44, 188, 225', strength: 0, targetStrength: 0 },
      { from: 'jinkoubutsu', to: 'shizenbutsu', color: '44, 188, 225', strength: 0, targetStrength: 0 },
      { from: 'hito', to: 'asobi', color: '255, 0, 150', strength: 0, targetStrength: 0 },
      { from: 'hito', to: 'geijutsu', color: '255, 0, 150', strength: 0, targetStrength: 0 },
      { from: 'hito', to: 'game', color: '255, 0, 150', strength: 0, targetStrength: 0 },
      { from: 'hito', to: 'monogatari', color: '255, 0, 150', strength: 0, targetStrength: 0 },
      { from: 'keisangijutsu', to: 'hito', color: '100, 100, 255', strength: 0.5, targetStrength: 0.5 },
    ];
    
    const particles: Particle[] = [];
    const pulses: Pulse[] = [];

    const updateElementPositions = () => {
      const setPos = (key: string, x: number, y: number) => {
        elements[key].originX = x;
        elements[key].originY = y;
      };
      setPos('jinkoubutsu', width * 0.35, height * 0.30);
      setPos('shizenbutsu', width * 0.65, height * 0.30);
      setPos('hito', width * 0.50, height * 0.70);
      setPos('asobi', width * 0.38, height * 0.60);
      setPos('geijutsu', width * 0.62, height * 0.60);
      setPos('game', width * 0.43, height * 0.80);
      setPos('monogatari', width * 0.57, height * 0.80);
      setPos('keisangijutsu', width * 0.50, height * 0.90);
    };

    const animateElements = () => {
        Object.values(elements).forEach(el => {
            const hash = el.text.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
            el.x = el.originX + Math.sin(frame * 0.005 + hash) * 5;
            el.y = el.originY + Math.cos(frame * 0.005 + hash) * 5;
        });
    };

    const checkHovers = () => {
      let hoveredCreativeNode = null;
      for (const key in elements) {
        const el = elements[key];
        if (el.alwaysVisible) continue;
        const dist = Math.hypot(el.x - mouseX, el.y - mouseY);
        if (dist < 80) {
          el.targetOpacity = 0.9;
          if (['asobi', 'geijutsu', 'game', 'monogatari'].includes(key)) {
            hoveredCreativeNode = el;
          }
        } else {
          el.targetOpacity = 0;
        }
      }
      
      const isCreativeHovered = !!hoveredCreativeNode;

      connections.forEach(c => {
          if (c.color.includes('255, 0, 150')) { // Magenta (creative) connections
              const toEl = elements[c.to];
              const dist = Math.hypot(toEl.x - mouseX, toEl.y - mouseY);
              const newStrength = dist < 80 ? 0.9 : 0;
              if (newStrength > c.strength && Math.random() < 0.1) {
                  pulses.push({ from: elements[c.from], to: toEl, progress: 0, speed: 0.01, color: c.color });
              }
              c.targetStrength = newStrength;
          } else if (c.color.includes('44, 188, 225')) { // Cyan (coexistence) connections
              c.targetStrength = isCreativeHovered ? 0.8 : 0;
          }
      });

      if (hoveredCreativeNode && particles.length < 50 && Math.random() < 0.5) {
          particles.push(new Particle(hoveredCreativeNode.x, hoveredCreativeNode.y, '255, 0, 150'));
      }
    };

    const updateStates = () => {
      for (const key in elements) {
        elements[key].opacity += (elements[key].targetOpacity - elements[key].opacity) * 0.02;
      }
       connections.forEach(c => {
        c.strength += (c.targetStrength - c.strength) * 0.02;
      });
    };

    const drawBackground = () => {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);
    };

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }
    };

    const drawText = (el: Element) => {
      if (el.opacity < 0.01) return;
      ctx.font = '18px "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif';
      ctx.fillStyle = `rgba(255, 255, 255, ${el.opacity})`;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
      ctx.shadowBlur = 10;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(el.text, el.x, el.y);
      ctx.shadowBlur = 0;
    };

    const drawConnections = () => {
      connections.forEach(c => {
        if (c.strength < 0.01) return;
        const from = elements[c.from];
        const to = elements[c.to];
        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        gradient.addColorStop(0.2, `rgba(${c.color}, 0)`);
        gradient.addColorStop(0.5, `rgba(${c.color}, ${c.strength * 0.7})`);
        gradient.addColorStop(0.8, `rgba(${c.color}, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      });
    };

    const drawPulses = () => {
        pulses.forEach((p, index) => {
            p.progress += p.speed;
            if (p.progress >= 1) {
                pulses.splice(index, 1);
                return;
            }
            const x = p.from.x + (p.to.x - p.from.x) * p.progress;
            const y = p.from.y + (p.to.y - p.from.y) * p.progress;
            
            const glow = ctx.createRadialGradient(x, y, 0, x, y, 12);
            const opacity = Math.sin(p.progress * Math.PI) * 0.8;
            glow.addColorStop(0, `rgba(${p.color}, ${opacity})`);
            glow.addColorStop(1, `rgba(${p.color}, 0)`);

            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(x, y, 12, 0, Math.PI * 2);
            ctx.fill();
        });
    };

    const drawParticles = () => {
      particles.forEach((p, index) => {
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
          particles.splice(index, 1);
        }
      });
    };

    const animate = () => {
      drawBackground();
      drawGrid();
      
      animateElements();
      checkHovers();
      updateStates();
      
      drawConnections();
      drawPulses();
      Object.values(elements).forEach(drawText);
      drawParticles();
      
      frame++;
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleClick = () => {
        for (let i = 0; i < 30; i++) {
            particles.push(new Particle(mouseX, mouseY, '255, 255, 255'));
        }
    };

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = 500;
      updateElementPositions();
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ backgroundColor: '#000', width: '100%', height: '500px', cursor: 'pointer', margin: '2rem 0', borderRadius: '8px' }} />;
};

export default NoaVisualization;