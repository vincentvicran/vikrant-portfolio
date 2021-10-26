import React from "react";
import {
  DiCss3,
  DiCssdeck,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider style={{ margin: "6rem 0" }} />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>Experienced with Fullstack development tools.</SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <DiHtml5 size="2rem" />
          <ListParagraph>HTML</ListParagraph>
          <DiCss3 size="2rem" />
          <ListParagraph>CSS</ListParagraph>
          <DiJavascript1 size="2rem" />
          <ListParagraph>JavaScript</ListParagraph>
          <DiCssdeck size="2rem" />
          <ListParagraph>TailWindCSS</ListParagraph>
          <DiReact size="2rem" />
          <ListParagraph>ReactJS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <DiNodejs size="2rem" />
          <ListParagraph>NodeJS</ListParagraph>
          <DiNodejsSmall size="2rem" />
          <ListParagraph>ExpressJS</ListParagraph>
          <DiMongodb size="2rem" />
          <ListParagraph>MongoDB (Atlas)</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
