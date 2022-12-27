import styled from "styled-components";

const HeroElement = styled.div`
    position: relative;
    height: calc(100vh - 154px);
    padding: 32px;
`;

const Image = styled.img`
    position: absolute;
    /* top: 50%; */
    right: -32px;
    /* transform: translate(-50%, 0); */
    height: 280px;
    width: 360px;
`;

const Hero = () => {
    return (
        <HeroElement>
            <Image src="/heroBackground.png" />
        </HeroElement>
    );
}

export default Hero;