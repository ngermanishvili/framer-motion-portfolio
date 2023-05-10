import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/capture.png';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import summarizerDesk from 'assets/summarizer-desk.jpg';
import summarizerMobile from 'assets/summarizer-portfolio-mobile.png';
import ecommerceDesk from 'assets/ecommerce.png'
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/onyx.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';


const disciplines = ['REACT.JS', 'NEXT.JS', 'JAVASCRIPT', 'NODE.JS', 'TAILWINDCSS', 'SASS', 'BOOTSTRAP', 'MATERIALUI', 'CHAKRAUI', 'MONGODB', 'FIREBASE'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const details = useRef();
  

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Front-End + Developer"
        description="Design portfolio of Nika Germanishvili — working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Onyx Elite: Elevate Your Performance"
        description="Elevate your fitness performance to elite status with Onyx. Our exclusive training program is designed for athletes, fitness enthusiasts, and anyone seeking top-tier results. Unleash your competitive edge and rise to the pinnacle of your physical capabilities."
        buttonText="View project"
        buttonLink="https://gamestack.hamishw.com"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTexture],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectOne.current)}
        index={2}
        title="CHAGPT AI Summarizer: Summarize with Ease"
        description="This web application is powered by the revolutionary OpenAI GPT-4 artificial intelligence system, which employs state-of-the-art language processing and machine learning techniques to provide the most accurate and insightful article summaries possible. Its cutting-edge capabilities enable it to accurately capture the essence of any article, regardless of complexity or subject matter, and present it in a clear and concise manner. To ensure the best possible experience for users, we recommend testing this application on reputable article sites like medium.com, where the quality and diversity of content is sure to put our AI to the test!"
        buttonText="View Project"
        buttonLink="https://ai-summarize1337.netlify.app/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [summarizerDesk, summarizerDesk],
              placeholder: summarizerDesk,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectOne.current)}
        index={3}
        title="Onyx Elite: Elevate Your Performance"
        description="Elevate your fitness performance to elite status with Onyx. Our exclusive training program is designed for athletes, fitness enthusiasts, and anyone seeking top-tier results. Unleash your competitive edge and rise to the pinnacle of your physical capabilities."
        buttonText="View project"
        buttonLink="/projects/slice"      

        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [ecommerceDesk, ecommerceDesk],
              placeholder: ecommerceDesk,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectTwo.current)}
        index={4}
        title="CHAGPT AI Summarizer: Summarize with Ease (Mobile)"
        description="Openai Summarizer Mobile App"
        buttonText="View website"
        buttonLink="https://ai-summarize1337.netlify.app/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [summarizerMobile, summarizerMobile],
              placeholder: summarizerMobile,
            },
            {
              srcSet: [summarizerMobile, summarizerMobile],
              placeholder: summarizerMobile,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectThree.current)}
        index={5}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"

        buttonText="View website"
        buttonLink="https://gamestack.hamishw.com"
        model={{
          type: 'laptop',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTexture],
              placeholder: gamestackTexture,
            },
            {
              srcSet: [gamestackTexture, gamestackTexture],
              placeholder: gamestackTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectTwo.current)}
        index={6}
        title="Video game progress tracking"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View website"
        buttonLink="https://gamestack.hamishw.com"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectThree.current)}
        index={7}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
