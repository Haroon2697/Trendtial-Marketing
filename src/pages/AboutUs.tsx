import React from 'react';
import Timeline from '../components/timeline'
import Founders from '../components/founder'
import ContactUs from '../components/contactpage'


const timelineData = [
  {
    year: '2019',
    content: [
      'Began setting the foundations of what was about to become an AI Powerhouse.',
      'Work started on building the initial technology base for our debut product in Photo Editing.',
      'Focus on market research, setting up standards and initial tech capabilities.'
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
      'Widening our scope of Generative AI & launching text-based Gen AI products providing interactive information on the go.',
      'Establishing groundwork with research and development into emerging forms on Gen AI such as Video & Sound/Music generations.',
      'Focusing on promoting strong principles that would serve as guiding lights as our people grow.',
      'And the year goes on as we keep making magic happen!'
    ]
  }
];

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">About Trendtial</h1>
      <Founders />
      <Timeline data={timelineData} />
      <ContactUs />
      {/* <AboutSection /> */}
    </div>
  );
};

export default About;