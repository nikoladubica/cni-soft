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
    padding-bottom: calc(96px);
`;

const HeroWrapper = styled.div`
    height: calc(auto + 64px);
`;

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 280px;
`;

const Image = styled.img`
    position: absolute;
    top: 50%;
    left: calc((100vw - 246px - 64px)/2);
    transform: translateY(-50%);
    height: 280px;
    width: 360px;
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
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 64px;
    margin-bottom: 48px;
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