import React, { forwardRef } from "react";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/assets/models/Soda-can.gltf");

const flavorTextures = {
  lemonLime: "/assets/labels/lemon-lime.png",
  grape: "/assets/labels/grape.png",
  blackCherry: "/assets/labels/cherry.png",
  strawberryLemonade: "/assets/labels/strawberry.png",
  watermelon: "/assets/labels/watermelon.png",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0,
  metalness: 1,
  color: "#bbbbbb",
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export const SodaCan = forwardRef<THREE.Mesh, SodaCanProps>(
  ({ flavor = "blackCherry", scale = 2, ...props }, ref) => {
    const { nodes } = useGLTF("/assets/models/Soda-can.gltf");
    const labels = useTexture(flavorTextures);

    // Fixes upside down labels
    Object.values(labels).forEach((label) => (label.flipY = false));

    const label = labels[flavor];

    return (
      <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
        <mesh
          ref={ref} // Applying ref to mesh
          castShadow
          receiveShadow
          geometry={(nodes.cylinder as THREE.Mesh).geometry}
          material={metalMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
        >
          <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Tab as THREE.Mesh).geometry}
          material={metalMaterial}
        />
        
      </group>
    );
  }
);
