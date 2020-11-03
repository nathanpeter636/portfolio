import React from 'react'

import styled from "styled-components";


const MainGrid = styled.div`

display: grid;
color: black;
font-size: 3em;
position: fixed;
top: 105px;
left: calc(50% - 250px);
`;

export function Main() {
    return (
<MainGrid>
    Kia Ora
</MainGrid>
    )
}
