import { styled } from "styled-components";

export const   ProductsArea = styled.div`
display:flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
    margin-top: 30px;
    div {
        heigth: 320px;
        weidth: 230px;
        border: 1px solid rgb(193,193,193);
        display-flex;
        justify-content: space-between;
        flex-direction: column;
        align_itens: center;
        padding: 20px;

        button {
            font-size: 25px;
            background: transparent;
            border: none;
            color: teal;
        }
    } 
`;