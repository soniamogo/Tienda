import styled from "styled-components";

export const FlexRowCentrado = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%
`;

export const FlexColumnCentrado = styled(FlexRowCentrado)`
    flex-direction:column;
`;

export const Imagen = styled.img`
    height:${props => props.height ? props.height : "100px"}
    width:auto;
`;