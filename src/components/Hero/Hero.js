import styled from "styled-components";
import Button from "../UI/Button";

const imagePosition = (window.innerWidth - 246 -64)/2 + 'px';

const HeroElement = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 218px);
    padding: 32px;
    padding-bottom: 96px;

    @media screen and (min-width: 768px) {
        padding: 32px 0;
        padding-bottom: 96px;
        height: unset;
        width: 960px;
        margin: 0 auto;
    }
`;

const HeroWrapper = styled.div`
    height: calc(auto + 64px);

    @media screen and (min-width: 768px) {
        height: unset;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 280px;

    @media screen and (min-width: 768px) {
        height: 390px;
    }
`;

const Image = styled.img`
    position: absolute;
    top: 50%;
    left: calc((100vw - 246px - 64px)/2);
    transform: translateY(-50%);
    height: 280px;
    width: 360px;

    @media screen and (min-width: 768px) {
        top: 0;
        left: unset;
        right: 0;
        transform: unset;
        height: 390px;
        width: 500px;
    }
`;

const SeeMore = styled.div`
    position: absolute;
    width: 64px;
    border-top: 3px solid #000000;
    font-family: 'Anton';
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    transform: rotate(-90deg);
    transform-origin: left top;
    top: calc(100% - 32px);
    left: 32px;

    @media screen and (min-width: 768px) {
        left: 0;
    }
`;

const Title = styled.h1`
    position: relative;
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 90%;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    margin-top: 0;
    margin-bottom: 32px;
    z-index: 10;

    span {
        color: #F75AFF;
    }

    @media screen and (min-width: 768px) {
        font-size: 72px;
        margin-bottom: 0;
        margin-right: 575px;
    }
`;

const Tagline = styled.p`
    position: relative;
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 95%;
    text-align: center;
    color: #636363;
    margin-top: 0;
    margin-bottom: 0;
    z-index: 10;
    
    @media screen and (min-width: 768px) {
        font-size: 20px;
        position: absolute;
        width: 326px;
        right: 87px;
        margin-bottom: 105px;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 64px;
    margin-bottom: 48px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const Hero = () => {
    return (
        <HeroElement>
            <HeroWrapper>
                <ImageWrapper>
                    <Image src="/heroBackground.png" />

                    <Title>
                        We make<br /><span>the web</span><br />faster
                    </Title>

                    <Tagline>
                        Take a look at the projects we've created and see what we can do for you.
                    </Tagline>

                    <Button value='Explore your options' className='desktop main big center' />
                </ImageWrapper>

                <ButtonWrapper>
                    <Button value='Explore your options' className='big center' />
                </ButtonWrapper>
            </HeroWrapper>

            <SeeMore>See More</SeeMore>
        </HeroElement>
    );
}

export default Hero;