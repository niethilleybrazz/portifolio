import React, { useEffect, useRef } from "react";

const maskClasses = {
  "fade-center":
    "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,var(--background)_90%)]",
  "fade-edges":
    "[mask-image:radial-gradient(ellipse_at_center,var(--background)_20%,transparent_90%)]",
  none: "",
};

const BGPattern = ({
  variant = "dots",
  mask = "fade-center",
  size = 20,
  fill = "#333333",
  className,
  style,
  ...props
}) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    };

    const initDots = () => {
      const dots = [];
      const rows = Math.ceil(canvas.height / size) + 1;
      const cols = Math.ceil(canvas.width / size) + 1;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          dots.push({
            baseX: j * size,
            baseY: i * size,
            x: j * size,
            y: i * size,
            vx: 0,
            vy: 0,
          });
        }
      }
      dotsRef.current = dots;
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = fill;

      const mouse = mouseRef.current;
      const dots = dotsRef.current;
      const repelRadius = 100;
      const forceMultiplier = 150;
      const returnStrength = 0.05;
      const friction = 0.9;

      for (let dot of dots) {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < repelRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (repelRadius - distance) / repelRadius;

          dot.vx -= Math.cos(angle) * force * forceMultiplier * 0.1;
          dot.vy -= Math.sin(angle) * force * forceMultiplier * 0.1;
        }

        // Força de retorno à posição original
        const dxBase = dot.baseX - dot.x;
        const dyBase = dot.baseY - dot.y;
        dot.vx += dxBase * returnStrength;
        dot.vy += dyBase * returnStrength;

        // Atrito
        dot.vx *= friction;
        dot.vy *= friction;

        // Atualiza posição
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Desenha o ponto
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [size, fill]);

  return (
    <div
      className={`fixed inset-0 z-[-1] size-full pointer-events-none ${maskClasses[mask] || ""} ${className || ""}`}
      style={style}
      {...props}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export { BGPattern };
