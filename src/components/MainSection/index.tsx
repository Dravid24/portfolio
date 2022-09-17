import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Header from "./Header";
import Projects from "./Projects";

const SectionWrapper = styled.div`
  padding: 0px 150px;
  margin: 0px auto;

  @media (max-width: 1080px) {
    padding: 0px 100px;
  }

  @media (max-width: 768px) {
    padding: 0px 50px;
  }
`;

const Section = () => {
  return (
    <SectionWrapper>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </SectionWrapper>
  );
};

export default Section;
