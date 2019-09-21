import React from "react"
import styled from "@emotion/styled"
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Title = styled.h2`
  font-size: 35px;
  color: dodgerblue;
  margin: 8px 0 10px 0;
`

const Paragraph = styled.p`
  font-size: 20px;
  color: #6e6b73;
  font-weight: 400;
  margin: 0;
`

const AboutMe = styled.div`
  display: flex;
  height: 80vh;
`

const AboutBody = styled.div`
  padding-left: 12px;
  display: flex;
  flex-direction: column;
`

const Socials = styled.div`
  padding-top: 16px;
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: flex-end;
`

const Contact = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 32px;
  margin-right: 12px;
  color: gray;
  &.facebook:hover {
    color: dodgerblue;
  }
  &.twitter:hover {
    color: #38a1f3;
  }
  &.google:hover {
    color: tomato;
  }
  &.phone:hover {
    color: #0f9d58;
  }
  &.github:hover {
    color: #6e5494;
  }
`

const Space = styled.div`
  padding-top: 5px;
`

export default ({ data }) => (
  <AboutMe>
    <AboutBody>
      <Title>About me</Title>
      <Paragraph>
        Hi, I am Thanh Vo.
        <br />
        <Space />I am front-end web developer who is interested in ReactJS. My
        tech has been full-stack web developer such as NodeJS, SASS, ReactJS,
        Redux, Firebase, MongoDB and a little bit of PostgreSQL and GraphQL.
        <br />
        <Space />I have learnt web developer on Udemy and Coders.Tokyo - now is
        CodersX. On Udemy, I took courses online like{" "}
        <a
          href="https://www.udemy.com/advanced-css-and-sass/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Advanced CSS and Sass: Flexbox, Grid, Animations and More!
        </a>
        ;{" "}
        <a
          href="https://www.udemy.com/react-the-complete-guide-incl-redux/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React - The Complete Guide (incl Hooks, React Router, Redux)
        </a>{" "}
        and{" "}
        <a
          href="https://www.udemy.com/the-complete-nodejs-developer-course-2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Complete Node.js Developer Course (3rd Edition)
        </a>{" "}
        . On CodersX, I took courses online from start course to ReactJS course
        <br />
        <Space />I write about programming and daily life activities. Check out
        my blogs and my social medias below.
      </Paragraph>
      <Socials>
        <Contact
          className="facebook"
          href="https://www.facebook.com/thanhvo.apcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </Contact>
        <Contact
          className="twitter"
          href="https://twitter.com/_zero2005"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Contact>
        <Contact
          className="github"
          href="https://github.com/yogathanh99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Contact>
        <Contact className="google" href="mailto:vtthanh99@gmail.com">
          <FontAwesomeIcon icon={faGoogle} />
        </Contact>
        <Contact className="phone" href="tel:0939790646">
          <FontAwesomeIcon icon={faMobileAlt} />
        </Contact>
      </Socials>
    </AboutBody>
  </AboutMe>
)
