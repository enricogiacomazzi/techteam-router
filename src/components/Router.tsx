import React from "react";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import { Page3 } from "../pages/Page3";

interface RouterProps {
    current: string;
}

export const Router: React.FC<RouterProps> = ({current}) => {
    console.log(current);

    switch(current) {
        case 'pag1':
            return <Page1/>
        case 'pag2':
            return <Page2/>
        case 'pag3':
            return <Page3/>
            default:
                return <div></div>
    }
}