import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const timelineData = [
  {
    year: '2019',
    content: [
      'Began setting the foundations of what was about to become an AI Powerhouse.',
      'Work started on building the initial technology base for our debut product in Photo Editing.',
      'Focus on market research, setting up standards and initial tech capabilities'
    ]
  },
  {
    year: '2020',
    content: [
      'Launched our premier photography app focused on Image Backgrounds, which quickly scaled up to trend in Asia & South America.',
      'Began building team & efforts to go deeper within computer vision & mobile technology.',
      'Planning & researching advanced image transformations & building according product use cases.'
    ]
  },
  {
    year: '2024',
    content: [
      'Widening our scope of Generative AI & launching text based Gen AI products providing interactive information on the go.',
      'Establishing groundwork with research and development into emerging forms on Gen AI such as Video & Sound/Music generations.',
      'Focusing on promoting strong principles that would serve as guiding lights as our people grow.',
      'And the year goes on as we keep making magic happen!'
    ]
  }
]

const TimelineItem = ({ item, progress }) => {
  const opacity = useTransform(progress, [0, 0.5, 1], [0, 1, 0])
  const y = useTransform(progress, [0, 0.5, 1], [100, 0, -100])

  return (
    <motion.div
      style={{ opacity, y }}
      className="timeline-item"
    >
      <div className="flex items-start mb-6">
        <div className="text-8xl font-bold mr-4">
          <span className="text-black text-9xl">{item.year.slice(0, 2)}</span><br
          <span className="text-gray-400 text-9xl">{item.year.slice(2)}</span>
        </div>
        <div className="flex-grow pt-4">
          {item.content.map((text, i) => (
            <p key={i} className="mb-4 text-lg">
              {text}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function JourneyTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-16" ref={containerRef}>
      <h1 className="text-6xl font-bold mb-12 text-center">Our Journey</h1>
      <div className="space-y-[100vh]">
        {timelineData.map((item, index) => {
          const start = index / timelineData.length
          const end = (index + 1) / timelineData.length
          const itemProgress = useTransform(smoothProgress, [start, end], [0, 1])

          return (
            <div key={item.year} className="h-screen flex items-center">
              <TimelineItem item={item} progress={itemProgress} />
            </div>
          )
        })}
      </div>
    </div>
  )
}