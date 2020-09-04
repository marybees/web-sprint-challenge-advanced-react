import { useEffect } from 'react';

export default function useBackgroundColor() {
    useEffect(() => {
        const handler = e => {
            if (e.key === 'g') {
                document.body.style.backgroundColor = 'green'
            } else {
                document.body.style.backgroundColor = 'black';
            }
        };

        window.addEventListener('keyup', handler);
        return () => {
            window.removeEventListener('keyup', handler);
            document.body.style.backgroundColor = 'black';
        };
    }, []);
}