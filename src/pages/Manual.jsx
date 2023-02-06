import React, { Component } from 'react';
import { BoxManual } from '../components/screen-manual/BoxManual';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';
import { ButtonYoutube } from '../components/universal/ButtonYoutube';

class Manual extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar />
                <BoxManual />
                <ButtonsBar />
                <ButtonYoutube />
            </>
        );
    }
}

export default Manual;