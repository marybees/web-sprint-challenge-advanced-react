import { useState, useEffect } from 'react';

export default function useBackgroundColor() {
    useEffect(() => {
        const handler = e => {
            if (e.key == 'g') {
                document.body.style.backgroundColor = 'gray';
            } else {
                document.body.style.backgroundColor = '#0e101c';
            }
        };

        window.addEventListener('keyup', handler);
        return () => {
            window.removeEventListener('keyup', handler);
            document.body.style.backgroundColor = '#0e101c';
        };
    }, []);
}