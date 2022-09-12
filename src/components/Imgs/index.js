import { useState, forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Imgs.module.scss';
import images from '~/assets/imgs';

function Img({ src, alt, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImg);
    };

    return (
        <img
            {...props}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            onError={handleError}
        />
    );
}

export default forwardRef(Img);
