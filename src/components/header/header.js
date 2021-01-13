import React from 'react';

import Lang from './lang/lang';
import Main from './main/main';
import Navbar from './navbar/navbar';

function header(){
    return (
        <>
            <Lang/>
            <Main/>
            <Navbar/>
        </>
    );    
}

export default header;