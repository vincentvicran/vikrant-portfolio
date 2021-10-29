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
import Tilt from 'react-tilt';

const style = {
    border: '1px dotted gray',
    borderRadius: '7px 0 7px 7px',
};

const options = {
    reverse: false, // reverse the tilt direction
    max: 25, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
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
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem>
                            <DiHtml5 size="2rem" />
                            <ListParagraph>HTML</ListParagraph>
                        </SubListItem>
                    </Tilt>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem>
                            <DiCss3 size="2rem" />
                            <ListParagraph>CSS</ListParagraph>
                        </SubListItem>
                    </Tilt>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem>
                            <DiJavascript1 size="2rem" />
                            <ListParagraph>JavaScript</ListParagraph>
                        </SubListItem>
                    </Tilt>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem>
                            <DiBootstrap size="2rem" />
                            <ListParagraph>Bootstrap</ListParagraph>
                        </SubListItem>
                    </Tilt>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem>
                            <DiCssdeck size="2rem" />
                            <ListParagraph>TailWindCSS</ListParagraph>
                        </SubListItem>
                    </Tilt>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem>
                            <DiReact size="2rem" />
                            <ListParagraph>ReactJS</ListParagraph>
                        </SubListItem>
                    </Tilt>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem style={style}>
                            <SiNextdotjs size="2rem" />
                            <ListParagraph>NextJS</ListParagraph>
                        </SubListItem>
                    </Tilt>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem style={style}>
                            <SiStyledcomponents size="2rem" />
                            <ListParagraph>Styled</ListParagraph>
                        </SubListItem>
                    </Tilt>
                </SubList>
            </ListItem>
            <ListItem>
                <ListTitle>Back-End</ListTitle>
                <SubList>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem style={style}>
                            <DiNodejs size="2rem" />
                            <ListParagraph>NodeJS</ListParagraph>
                        </SubListItem>
                    </Tilt>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem style={style}>
                            <DiNodejsSmall size="2rem" />
                            <ListParagraph>ExpressJS</ListParagraph>
                        </SubListItem>
                    </Tilt>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem>
                            <DiMongodb size="2rem" />
                            <ListParagraph>MongoDB (Atlas)</ListParagraph>
                        </SubListItem>
                    </Tilt>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem style={style}>
                            <IoMailOutline size="2rem" />
                            <ListParagraph>NodeMailer</ListParagraph>
                        </SubListItem>
                    </Tilt>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem>
                            <SiDotnet size="2rem" />
                            <ListParagraph>ASP.NET</ListParagraph>
                        </SubListItem>
                    </Tilt>
                    <Tilt style={{ zIndex: '5' }} options={options}>
                        <SubListItem>
                            <SiMysql size="2rem" />
                            <ListParagraph>MySQL</ListParagraph>
                        </SubListItem>
                    </Tilt>
                </SubList>
            </ListItem>
        </List>

        <TechSubText>The bordered tools in the above stack are used to sculpt the portfolio!</TechSubText>
    </Section>
);

export default Technologies;
