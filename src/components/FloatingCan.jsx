import React, { forwardRef } from "react";
import { Float, OrbitControls } from "@react-three/drei";
import { SodaCan } from "./SodaCan.tsx";

const FloatingCan = forwardRef(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
          // Forwarding ref to the Float component
        >
          {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);
FloatingCan.displayName = "FloatingCan";    
export default FloatingCan;
