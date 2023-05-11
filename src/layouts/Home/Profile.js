import profileKatakana from 'assets/katakana-profile.svg?url';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';
import profileImg1 from 'assets/aboutMe.jpg';


const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Hey there, world! I&apos;m Nika Germanishvili 22-year-old - Junior Front-End Developer. living life to the fullest in the vibrant Country Georgia, Tbilisi. Passionate, driven, and brimming with potential, I&apos;m on a mission to make my mark in the world of web development.

      I&apos;ve certificate in front-end technologies from the esteemed Academy of Digital Industry. But that&apos;s just the beginning of my journey. I&apos;ve taken it upon myself to dive headfirst into the vast ocean of knowledge, exploring the depths of React through platforms like Udemy.

      Right now, I&apos;m busy conquering the realm of three.js, unlocking the power to create mind-blowing 3D graphics on the web.  I&apos;ve harnessed the mighty Next.js, an unstoppable framework that brings my web applications to life with server-side rendering, automatic code splitting, and seamless deployment. It&apos;s like magic, but with lines of code.


    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I&apos;m a motivated, hardworking team player who thrives on challenges. I fearlessly embrace each hurdle that comes my way, turning them into stepping stones to success. There&apos;s no peak too high for me to conquer, no project too daunting for my unstoppable spirit.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">

      So, if you&apos;re ready to join forces and witness the extraordinary. I&apos;m here to bring your web development dreams to life, one pixel at a time.

      Contact Me - nikagermanishvili5@gmail.com
    </Text>

  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImg1}
                  srcSet={[profileImg1, profileImg1]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
