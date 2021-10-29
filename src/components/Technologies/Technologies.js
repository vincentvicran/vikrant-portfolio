import React from 'react';
import {
    DiBootstrap,
    DiCss3,
    DiCssdeck,
    DiHtml5,
    DiJavascript1,
    DiMongodb,
    DiNodejs,
    DiNodejsSmall,
    DiReact,
} from 'react-icons/di';
import { IoMailOutline } from 'react-icons/io5';
import { SiDotnet, SiMysql, SiNextdotjs, SiStyledcomponents } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, SubList, ListItem, TechSubText, SubListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const style = {
    border: '1px dotted gray',
    borderRadius: '7px 0 7px 7px',
};

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            Experienced with Fullstack development tools.
            <br />
            Decency towards JavaScript.
        </SectionText>
        <List>
            <ListItem>
                <ListTitle>Front-End</ListTitle>
                <SubList>
                    <SubListItem>
                        <DiHtml5 size="2rem" />
                        <ListParagraph>HTML</ListParagraph>
                    </SubListItem>
                    <SubListItem>
                        <DiCss3 size="2rem" />
                        <ListParagraph>CSS</ListParagraph>
                    </SubListItem>
                    <SubListItem>
                        <DiJavascript1 size="2rem" />
                        <ListParagraph>JavaScript</ListParagraph>
                    </SubListItem>
                    <SubListItem>
                        <DiBootstrap size="2rem" />
                        <ListParagraph>Bootstrap</ListParagraph>
                    </SubListItem>
                    <SubListItem>
                        <DiCssdeck size="2rem" />
                        <ListParagraph>TailWindCSS</ListParagraph>
                    </SubListItem>
                    <SubListItem>
                        <DiReact size="2rem" />
                        <ListParagraph>ReactJS</ListParagraph>
                    </SubListItem>
                    <SubListItem style={style}>
                        <SiNextdotjs size="2rem" />
                        <ListParagraph>NextJS</ListParagraph>
                    </SubListItem>
                    <SubListItem style={style}>
                        <SiStyledcomponents size="2rem" />
                        <ListParagraph>Styled</ListParagraph>
                    </SubListItem>
                </SubList>
            </ListItem>
            <ListItem>
                <ListTitle>Back-End</ListTitle>
                <SubList>
                    <SubListItem style={style}>
                        <DiNodejs size="2rem" />
                        <ListParagraph>NodeJS</ListParagraph>
                    </SubListItem>
                    <SubListItem style={style}>
                        <DiNodejsSmall size="2rem" />
                        <ListParagraph>ExpressJS</ListParagraph>
                    </SubListItem>
                    <SubListItem>
                        <DiMongodb size="2rem" />
                        <ListParagraph>MongoDB (Atlas)</ListParagraph>
                    </SubListItem>
                    <SubListItem style={style}>
                        <IoMailOutline size="2rem" />
                        <ListParagraph>NodeMailer</ListParagraph>
                    </SubListItem>
                    <SubListItem>
                        <SiDotnet size="2rem" />
                        <ListParagraph>ASP.NET</ListParagraph>
                    </SubListItem>
                    <SubListItem>
                        <SiMysql size="2rem" />
                        <ListParagraph>MySQL</ListParagraph>
                    </SubListItem>
                </SubList>
            </ListItem>
        </List>

        <TechSubText>The bordered tools in the above stack are used to sculpt the portfolio!</TechSubText>
    </Section>
);

export default Technologies;
