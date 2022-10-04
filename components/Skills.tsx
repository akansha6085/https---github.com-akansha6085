import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h1>Skills</h1>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for current proficiency</h3>
        </motion.div>
  )
}