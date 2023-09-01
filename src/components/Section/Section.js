import styled from "styled-components";
import SwiperComponent from "./SwiperComponent";

const SectionElement = styled.section`
    padding: 0 32px;
    margin: 32px 0;

    @media screen and (min-width: 768px) {
        padding: 0;
        margin: 64px auto;
        width: 960px;
    }
`;

const Title = styled.h2`
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 16px;

    @media screen and (min-width: 768px) {
        font-size: 32px;
    }
`;

const Description = styled.p`
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #636363;
    margin-bottom: 16px;

    @media screen and (min-width: 768px) {
        font-size: 20px;
        margin-bottom: 32px;
    }
`;

const Section = props => {
    return (
        <SectionElement>
            <Title>{props.title}</Title>
            {props.description && <Description>{props.description}</Description>}

            <SwiperComponent />
        </SectionElement>
    );
}

export default Section;