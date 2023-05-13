import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';

import sliceBackgroundLarge from 'assets/orderapp3.png';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/orderapp3.png';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';

import orderAppMobile from 'assets/orderapp3-mobile.png';
import orderAppMobile2 from 'assets/orderapp3-mob2.png';

import deskOrder from 'assets/mobfriendl.png';
import deskOrder2 from 'assets/mobfriendl2.png';
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

const title = 'Food Order App';
const description = 'Through my food order app project, I gained valuable experience in integrating Firebase as the backend, utilizing its real-time database, user authentication, and cloud storage features. Developing the responsive UI with React and CSS, I was able to create a seamless user experience. This project not only enhanced my web development skills but also provided me with a deep understanding of Firebase and its capabilities, setting me up for success in future projects.'

const roles = ['Firebase', 'CSS', 'React'];
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
          url="https://firebase-food-order.netlify.app"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectSectionHeading>About This Project</ProjectSectionHeading>
            <ProjectSectionText>
              Throughout the project, I had the opportunity to learn about Firebase's documentation, SDK integration, and API usage. I gained hands-on experience in setting up Firebase projects, managing collections and documents in the database, and handling user authentication flows. It was an enlightening journey that provided me with a solid foundation in using Firebase for future projects, and I look forward to exploring more of its capabilities.
            </ProjectSectionText>

            <ProjectImage
              srcSet={[sliceBackground]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Mobile Friendly</ProjectSectionHeading>
              <ProjectSectionText>
                My food order app is designed to be mobile-friendly, prioritizing a seamless experience for users on their mobile devices. While ensuring mobile responsiveness, the main focus of the app was to create dynamic functionality using Firebase. As I am currently working on multiple projects, I plan to further enhance the responsiveness of the app as soon as possible. This will involve optimizing the user interface to adapt to different screen sizes and improving overall responsiveness for a smooth and enjoyable user experience. Rest assured, I am committed to making continuous improvements to make the app more responsive and user-friendly in the near future.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow users to be invited to a layer, where they can
                see others’ annotations and make their own.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[orderAppMobile2]}
                placeholder={orderAppMobile}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[orderAppMobile]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>

            <ProjectSectionHeading>Add Items to Cart</ProjectSectionHeading>
            <ProjectSectionText>
              To implement this feature, I have created a user interface that displays various products along with their details and an "Add to Cart" button. When a user selects a product, the system automatically adds it to the cart without requiring any manual input from the user.
              Behind the scenes, I have implemented the necessary logic to handle the product selection and cart management. This includes updating the cart data, calculating the total price, and ensuring the cart remains synchronized across different pages or sessions
            </ProjectSectionText>

            <Image
              srcSet={[deskOrder]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />

            <ProjectSectionHeading>How Can i order?</ProjectSectionHeading>
            <ProjectSectionText>
              Our food order app simplifies the process of satisfying your cravings. With just a few clicks, you can choose from a wide range of delicious options and have them conveniently delivered to your doorstep. Browse through our extensive menu, select your preferred items, and watch as they are automatically added to your cart. To complete your order, simply provide your name, street address, postal code, and city. Our team will ensure that your order is promptly processed and delivered with care. Enjoy a hassle-free and delightful food ordering experience with our app!"
            </ProjectSectionText>

            <Image
              srcSet={[deskOrder2]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
