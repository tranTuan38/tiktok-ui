import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classNames = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button className={classNames} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
