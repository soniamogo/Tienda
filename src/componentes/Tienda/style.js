import styled from "styled-components";
import { FlexColumnCentrado, FlexRowCentrado } from "../../styles/style";

export const Catalogo = styled(FlexRowCentrado)`
    width:90%;
    flex-wrap:wrap;
`;

export const CervezaWrapper = styled(FlexColumnCentrado)`
    height:220px;
    width:120px;
    margin:10px;
    border:1px solid white;
    color:black;
    font-size:15px;
    text-decoration:none;
    background-color:darkgray;
`;