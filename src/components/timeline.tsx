import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
const timelineData = [
  {
    year: '2022',
    content: [
      'Founded as a pioneering Pakistani digital marketing agency with a vision for innovation.',
      'Established a strong foundation in AI technologies to revolutionize marketing strategies.',
      'Built expertise in social media marketing to effectively serve local businesses.'
    ],
     image: 'https://img.freepik.com/premium-photo/glowing-bulb-with-innovative-concept_713655-14590.jpg?w=996'
  },
  {
    year: '2023',
    content: [
      'Expanded services by integrating AI-driven solutions for enhanced audience targeting.',
      'Secured our first international client, marking the start of our global journey.',
      'Adopted trend-setting marketing approaches to stay ahead in the dynamic digital landscape.'
    ],
    image: 'https://img.freepik.com/free-vector/abstract-vector-red-mesh-background-chaotically-connected-points-polygons-flying-space-flying-debris-futuristic-technology-style-card-lines-points-circles-planes-futuristic-design_1217-696.jpg?t=st=1730029047~exp=1730032647~hmac=89fbcc2ca878941b6e9703e021a0704949a889db48bd35dc8bec1a045410d0d8&w=740' // Image representing AI technology
  },
  {
    year: '2024',
    content: [
      'Achieved exponential growth locally, becoming a leading digital marketing agency in Pakistan.',
      'Launched successful campaigns utilizing AI and trend analysis, setting new industry standards.',
      'Invested in cutting-edge AI tools and staff training to boost our service offerings.'
    ],
   image: 'https://img.freepik.com/free-vector/abstract-mosaic-background-with-standing-success-businessman-silhouetted-vector-illustration-xaxa_460848-11862.jpg?t=st=1730029130~exp=1730032730~hmac=0e65d8ea3eeebbfe5e0a882eae936b0302f123badfca800ed97b8180995da3dc&w=740'
  },
 
  
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
      className="w-full bg-gray-900 text-white font-sans md:px-10"
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
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-red-600 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-white border border-red-300 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-red-200">
                {item.year}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-red-200">
                {item.year}
              </h3>
              <ul className="list-disc list-inside mb-6">
                {item.content.map((point, i) => (
                  <li key={i} className="text-red-100 mb-2">
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
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-red-300 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-500 via-red-300 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;