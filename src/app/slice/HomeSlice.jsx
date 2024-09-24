"use client";
import { Bounded } from "@/components/Bounded";
import React from "react";
import Image from "next/image";
import cansBunchded from "../../../public/assets/all-cans-bunched.png";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import Scene from "./Scene.jsx";
import { Bubbles } from "@/components/Bubble";
import useStore from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const HomeSlice = () => {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width:768px)", true);
  useGSAP(
    () => {
      if (!ready & isDesktop) return;
      const introTimeline = gsap.timeline();
      introTimeline
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(".hero-subheading", { opacity: 0, y: 30 }, "+=.8")
        .from(".hero-body", { opacity: 0, y: 10 })
        .from(".hero-button", { opacity: 0, y: 10, duration: 0.6 });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          // markers: true,
        },
      });
      scrollTl
        .fromTo(
          "body",
          { backgroundColor: "#FDE047" },
          { backgroundColor: "#D9F99D", overwrite: "auto" },
          1,
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 1,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] },
  );
  return (
    <Bounded className="hero opacity-0">
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
          <Scene />
          <Bubbles count={300} />
        </View>
      )}
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]">
              <TextSplitter
                wordDisplayStyle="block"
                className="hero-header-word"
                text="Live gutsy"
              />
            </h1>
            <h2 className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              Soda perfected
            </h2>
            <div className="hero-body text-2xl font-normal text-sky-950">
              <p>3-5g sugar, 9g fiber,5g delicious flavors.</p>
            </div>
            <Button
              buttonLink={"#"}
              buttonText={"Shop Now"}
              className={"hero-button mt-12"}
            />
          </div>
        </div>
        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <Image
            className="w-full md:hidden"
            src={cansBunchded}
            width={400}
            height={400}
          />
          <div>
            <h2 className="text-side-heading text-balance text-4xl font-black uppercase text-sky-950 lg:text-8xl">
              <TextSplitter className="text-7xl" text="Try all five flavours" />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                excepturi pariatur modi autem sapiente libero recusandae
                temporibus accusamus laudantium neque.
              </p>
            </div>
          </div>
          {/* <div>
            <a href="#">Shop Now</a>
          </div> */}
        </div>
      </div>
    </Bounded>
  );
};

export default HomeSlice;
