import { useState, useEffect, useRef } from 'react';
import './css/Logo.scss';

export default function useComponentVisible(initialIsVisible:boolean) {

    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsComponentVisible(!initialIsVisible);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, initialIsVisible);
        return () => {
            document.removeEventListener('click', handleClickOutside, initialIsVisible);
        };
    });
    
    return { ref, isComponentVisible, setIsComponentVisible };
}