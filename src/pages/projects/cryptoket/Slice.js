import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceBackgroundLarge from 'assets/cryptodesk.png';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import eccomerceStripe from 'assets/cryptodesk.png';
import ecommerceMob from 'assets/cryptomob.png';
import ecommerceMob2 from 'assets/cryptomob.png';
import ecommerceBag from 'assets/cryptodesk2.png';
import ecommerce1 from 'assets/cryptodeskmn.png';

import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';

const title = 'Cryptoket Ecommerce Website';
const description = 'CryptoKet is an innovative NFT marketplace that harnesses the power of blockchain technology to provide a secure and seamless platform for buying, selling, and discovering unique digital assets. Built on the Ethereum blockchain, CryptoKet ensures the authenticity and ownership of NFTs, giving artists the confidence to showcase their work and collectors the ability to verify the rarity and provenance of the NFTs they acquire. With a user-friendly interface, a diverse range of NFTs, and a vibrant community, CryptoKet offers an immersive experience for both creators and enthusiasts in the exciting world of non-fungible tokens.';

const roles = ['Solidity', 'UX Design',  'Next.js', 'React', 'Tailwind CSS', 'Metamask',];
// asd
export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://cryptoket.vercel.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectSectionHeading>About This Project</ProjectSectionHeading>
            <ProjectSectionText>
              I had a great experience using Solidity, MetaMask, and working with various APIs. Solidity provided a reliable and efficient programming language for developing smart contracts on the Ethereum blockchain. MetaMask offered a seamless and secure interface for interacting with decentralized applications and managing cryptocurrency transactions. Integrating different APIs enhanced the functionality and versatility of my projects, allowing me to create innovative and interactive blockchain applications. Overall, the combination of Solidity, MetaMask, and APIs contributed to a positive and rewarding development experience in the world of blockchain technology.
            </ProjectSectionText>

            <ProjectImage
              srcSet={[ecommerce1, ecommerce1]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
                In the exciting realm of non-fungible tokens (NFTs), CryptoKet stands as a revolutionary marketplace that brings together creators, collectors, and enthusiasts from across the globe. Built on the power of blockchain technology, CryptoKet offers a seamless and secure platform to buy, sell, and discover unique digital assets.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[ecommerceMob2, ecommerceMob2]}
                placeholder={ecommerceMob2}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[ecommerceMob, ecommerceMob]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>

            <ProjectSectionHeading>Why Next.js, Sanity Studio, and Stripe</ProjectSectionHeading>
            <ProjectSectionText>
              Next.js, Sanity Studio, and Stripe are all powerful tools that make development faster, more efficient, and more secure. Next.js offers server-side rendering, which improves performance and SEO, and also provides automatic code splitting, which reduces load times. Meanwhile, Sanity Studio is a flexible and customizable CMS that makes it easy to manage content and collaborate in real-time. Stripe payment system offers easy-to-use APIs that allow developers to securely integrate payment functionality into their websites and applications.
            </ProjectSectionText>

            <Image
              srcSet={[ecommerceBag]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />

            <ProjectSectionHeading>Stripe API Experience</ProjectSectionHeading>
            <ProjectSectionText>
              Furthermore, our project integrates Payment System APIs to provide a smooth and secure transaction experience for our users. Working with Payment System APIs has been a delightful experience, as they offer a reliable and comprehensive set of tools and functionalities. These APIs allow us to seamlessly handle payment processing, securely manage transactions, and provide a hassle-free payment experience for our users.
            </ProjectSectionText>

            <Image
              srcSet={[eccomerceStripe]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>

              Cryptoket Blochain BETA (NIKA GERMANISHVILI)
            </ProjectTextRow>

          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
