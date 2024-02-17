import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/scene_3.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.082, -0.531, -0.098]} scale={1.031}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.001"]}
          position={[-0.079, 0.188, 0.095]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene_3.glb");