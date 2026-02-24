"use client"

import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Timeline from "@/components/Timeline"
import Contact from "@/components/Contact"
import Certification from "../components/Certification"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Certification />
      <Contact />
    </>
  );
}
