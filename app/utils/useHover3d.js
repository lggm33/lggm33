import { useEffect, useState } from "react";

export default function useHover3d(ref, { x = 0, y = 0, z = 0 }) {
  const [coords, setCoords] = useState(null);
  const [isHovering, setIsHovering] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouseMove = ((e) => {
    const { offsetWidth: width, offsetHeight: height } = ref.current;
    const { clientX, clientY } = e;

    const x = (clientX - width / 2) / width;
    const y = (clientY - height / 2) / height;

    setCoords({ x, y });
  });

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener("mousemove", handleMouseMove);
      ref.current.addEventListener("mouseenter", handleMouseEnter);
      ref.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        ref.current?.removeEventListener("mousemove", handleMouseMove);
        ref.current?.removeEventListener("mouseenter", handleMouseEnter);
        ref.current?.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [handleMouseMove, ref]);

  const { x: xCoord, y: yCoord } = coords || { x: 0, y: 0 };

  const xTransform = isHovering ? xCoord * x : 0;
  const yTransform = isHovering ? yCoord * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHovering ? "none" : "all 0.5s ease";

  return { transform, transition };
}
