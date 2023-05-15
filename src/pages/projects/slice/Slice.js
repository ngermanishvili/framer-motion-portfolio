import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/slice-background-bar.jpg';
import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import ecommerce1 from 'assets/ecommerce.png';
import ecommerceMob from 'assets/ecommerce-mob.png';
import ecommerceMob2 from 'assets/ecommerce-mob2.png';
import ecommerceBag from 'assets/ecommerce-3.png';
import eccomerceStripe from 'assets/ecommerce-4.png';
import payPage from 'assets/ecommerce-2.png';
import Succesfull from 'assets/ecommerce-5.png';
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

const title = 'Vetemens Ecommerce Website';
const description = ' This project is a cutting-edge web application developed using Next.js, an acclaimed React framework known for its server-side rendering capabilities and automatic code splitting. By leveraging these features, our application delivers exceptional speed and efficiency, ensuring a seamless user experience. To efficiently manage and organize content, we have integrated Sanity Studio, a powerful and flexible CMS (Content Management System). With Sanity Studio, our team can easily collaborate in real-time, making content updates and modifications a breeze. Moreover, the CMS allows for effortless customization, enabling us to tailor the application to our specific needs.';

const roles = ['Sanity  Backend', 'UX Design', 'Stripe', 'Next.js', 'React', 'Tailwind CSS', 'Vercel'];
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
          url="https://ngermanishvilii.vercel.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectSectionHeading>About This Project</ProjectSectionHeading>
            <ProjectSectionText>
              The combination of Next.js and Sanity Studio empowers us to build a high-performance web application that not only delivers content swiftly but also offers a smooth and intuitive content management experience. We strive to provide our users with an exceptional platform that seamlessly integrates efficient content management with an engaging and responsive user interface.
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
                In addition to being a robust and efficient web application, our project is also designed to be mobile-responsive friendly. We understand the importance of providing a seamless experience across various devices and screen sizes. By implementing responsive design principles and leveraging the capabilities of Next.js, our application adapts seamlessly to mobile devices, ensuring an optimal user experience regardless of the device being used.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow users to be invited to a layer, where they can
                see others’ annotations and make their own.
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
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[payPage, payPage]}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
              <ProjectSectionText>
                With a focus on speed, efficiency, and user experience, our e-commerce website is poised to revolutionize online shopping. Whether on desktop or mobile, customers can expect a seamless shopping journey with a wide range of products and secure payment options.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Thanks For Your Order !</ProjectSectionHeading>


            </ProjectTextRow>
            <Image
              src={Succesfull}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
