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

    &.big {
        font-size: 20px;
        padding: 16px;
        width: 246px;
    }

    &.center {
        justify-self: center;
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