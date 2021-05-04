import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import './Search.css';

function Search(){
    return(
        <div id="Search">
            <AutoComplete
                placeholder="Search Movie..."
                style={{width:300}}
            />
        </div>
    )
}

export default Search;