import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Imgs.module.scss';
import images from '~/assets/imgs';

const Img = forwardRef(({ src, alt, className, fallback: customFallback = images.noImg, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
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
});

Img.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Img;
