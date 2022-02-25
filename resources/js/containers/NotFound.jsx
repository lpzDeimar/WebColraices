import React, { useEffect } from 'react'
import { titleReact } from '../titleReact';

export const NotFound = () => {
    useEffect(() => {
        titleReact('Not Found 404 - Colraices');
    }, [])

    return (
        <div>
            <h1>404</h1>
        </div>
    )
}
