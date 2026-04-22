import React, { useState } from 'react'
import UrlOutput from '../../Components/URL/UrlOutput';
import UrlInput from '../../Components/URL/UrlInput';

export const UrlShortener = () => {
    const [response, setResponse] = useState(null);
    return (
        <div>
            {response ? <UrlOutput response = {response}/>  : <UrlInput setResponse = {setResponse}/>}
        </div>
    )
}

export default UrlShortener;