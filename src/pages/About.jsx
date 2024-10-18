import React from 'react';
import Timeline from '../components/ui/Timeline';
import Founders from '../components/Founders';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';

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

const About = () => {
  return (
    <div>

      <main>
        <div>
            <Founders />
            <Timeline data={timelineData} />
          <ContactUs />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default About;
