import styled from "styled-components";

const ButtonElement = styled.button`
    font-family: 'League Spartan';
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
    background: linear-gradient(55.42deg, #3092ED 17.49%, #F75AFF 100.67%);
    border-radius: 8px;
    outline: none;
    border: none;
    color: #FFFFFF;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s ease;

    &.big {
        font-size: 20px;
        padding: 16px;
        width: 246px;
    }

    &.center {
        justify-self: center;
    }

    &.desktop {
        display: none;
    }

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (min-width: 768px) {
        &.desktop {
            display: block;

            &.main {
                position: absolute;
                right: 127px;
                margin-top: 99px;
            }
        }
    }
`;

const Button = (props) => {
    return (
        <ButtonElement className={props.className}>
            {props.value}
        </ButtonElement>
    );
}

export default Button;