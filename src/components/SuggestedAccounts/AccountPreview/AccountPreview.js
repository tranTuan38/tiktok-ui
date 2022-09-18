import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    alt="img"
                    src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
                />
                <Button primary className={cx('followBtn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>tranTuan38</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Trần Văn Tuấn</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Following</span>

                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Following</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
