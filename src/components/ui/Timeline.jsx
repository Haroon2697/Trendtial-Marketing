import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    year: '2019',
    content: [
      'Began setting the foundations of what was about to become an AI Powerhouse.',
      'Work started on building the initial technology base for our debut product in Photo Editing.',
      'Focus on market research, setting up standards and initial tech capabilities'
    ],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMGZvdW5kYXRpb258ZW58MHx8MHx8fDA%3D'
  },
  {
    year: '2020',
    content: [
      'Launched our premier photography app focused on Image Backgrounds, which quickly scaled up to trend in Asia & South America.',
      'Began building team & efforts to go deeper within computer vision & mobile technology.',
      'Planning & researching advanced image transformations & building according product use cases.'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFpaHklMjBhcHB8ZW58MHx8MHx8fDA%3D'
  },
  {
    year: '2024',
    content: [
      'Widening our scope of Generative AI & launching text based Gen AI products providing interactive information on the go.',
      'Establishing groundwork with research and development into emerging forms on Gen AI such as Video & Sound/Music generations.',
      'Focusing on promoting strong principles that would serve as guiding lights as our people grow.',
      'And the year goes on as we keep making magic happen!'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VuZXJhdGl2ZSUyMGFpfGVufDB8fDB8fHww'
  }
];

const Timeline = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-t from-black via-gray-900 to-red-900/5 text-white font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Timeline of Our Journey
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-800 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-700 border border-neutral-600 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-400">
                {item.year}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-400">
                {item.year}
              </h3>
              <ul className="list-disc list-inside mb-6">
                {item.content.map((point, i) => (
                  <li key={i} className="text-neutral-300 mb-2">
                    {point}
                  </li>
                ))}
              </ul>
              <img 
                src={item.image} 
                alt={`Image representing our journey in ${item.year}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
