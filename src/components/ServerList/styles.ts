import React from 'react';

import { Container } from './styles'

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome />
            <Separator/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
        </Container>
    )
};


export default ServerList