"use client";
import { Bounded } from "@/components/Bounded";
import { View } from "@react-three/drei";
import Scene from "./Scene";

const SkyDive = () => {
  return (
    <Bounded className="skydive h-screen w-full">
      <h2 className="sr-only">Dive Into Better Health</h2>
      <View className="h-screen w-[150%]">
        <Scene flavor={"watermelon"} sentence={"Dive Into Better Health"} />
      </View>
    </Bounded>
  );
};
export default SkyDive;
