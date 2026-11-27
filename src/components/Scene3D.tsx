import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, type MutableRefObject } from "react";
import { ExtrudeGeometry, Shape, type Group } from "three";
import points from "../assets/logoShape.json";
import { cn } from "../utils/cn";

function Mark({ drag }: { drag: MutableRefObject<{ x: number; y: number; on: boolean }> }) {
  const ref = useRef<Group>(null);
  const geo = useMemo(() => {
    const shape = new Shape();
    points.forEach(([x, y], i) => {
      const X = x * 2.4;
      const Y = y * 2.4;
      if (i === 0) shape.moveTo(X, Y);
      else shape.lineTo(X, Y);
    });
    shape.closePath();
    const extruded = new ExtrudeGeometry(shape, {
      depth: 0.32,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.04,
      bevelSegments: 2,
    });
    extruded.center();
    return extruded;
  }, []);

  useFrame((_, dt) => {
    const group = ref.current;
    if (!group) return;
    if (!drag.current.on) drag.current.y += dt * 0.35;
    group.rotation.y = drag.current.y;
    group.rotation.x = drag.current.x;
  });

  return (
    <group ref={ref}>
      <mesh geometry={geo}>
        <meshStandardMaterial color="#04b5ff" metalness={0.45} roughness={0.28} />
      </mesh>
    </group>
  );
}

export default function Scene3D({ className }: { className?: string }) {
  const drag = useRef({ x: 0.35, y: 0.6, on: false });
  const last = useRef({ x: 0, y: 0 });

  return (
    <div
      className={cn("cursor-grab touch-none active:cursor-grabbing", className)}
      onPointerDown={(event) => {
        drag.current.on = true;
        last.current = { x: event.clientX, y: event.clientY };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerUp={() => {
        drag.current.on = false;
      }}
      onPointerLeave={() => {
        drag.current.on = false;
      }}
      onPointerMove={(event) => {
        if (!drag.current.on) return;
        drag.current.y += (event.clientX - last.current.x) * 0.01;
        drag.current.x += (event.clientY - last.current.y) * 0.01;
        last.current = { x: event.clientX, y: event.clientY };
      }}
    >
      <Canvas camera={{ position: [0, 0, 3.2], fov: 40 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <directionalLight position={[-3, -2, 2]} intensity={0.6} color="#0474ff" />
        <Mark drag={drag} />
      </Canvas>
    </div>
  );
}
