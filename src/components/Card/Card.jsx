import { useEffect } from 'react';
import AOS from 'aos';
import classNames from 'classnames/bind';
import styles from '~/components/styles/Card.module.scss';

const cx = classNames.bind(styles);

function Card({ title, src, alt, content }) {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);
    return (
        <div data-aos="zoom-in" className={cx('card-container')}>
            <span className={cx('card-wrapper')}>
                <span className={cx('card-img')}>
                    <img className={cx('card-img1')} width={'100%'} height={'100%'} src={src} alt={alt} />
                </span>
                <span className={cx('card-title')}>{title}</span>
                <span className={cx('card-content')}>{content}</span>
                <span className={cx('card-btn')}>Xem chi tiết</span>
            </span>
        </div>
    );
}

export default Card;
