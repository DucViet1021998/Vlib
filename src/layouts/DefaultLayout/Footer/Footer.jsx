import classNames from 'classnames/bind';
import {
    AddressIcon,
    ArrowIcon,
    FacebookFooterIcon,
    MailIcon,
    PhoneIcon,
    WebsiteIcon,
    WifiIcon,
    YoutubeFooterIcon,
} from '~/components/icons';
import styles from '~/components/styles/Footer.module.scss';

const cx = classNames.bind(styles);

const list = [
    {
        title: 'Giới thiệu',
    },
    {
        title: 'Tính năng',
    },
    {
        title: 'Đăng ký dùng thử',
    },
    {
        title: 'Đơn vị sử dụng',
    },
    {
        title: 'Tin tức - Sự kiện',
    },
    {
        title: 'Câu chuyện thành công',
    },
    {
        title: 'Hỗ trợ',
    },
];

function Footer() {
    return (
        <footer className="d-flex flex-column justify-content-center align-items-center">
            <div className={cx('gradient-footer')}></div>
            <div className={cx('background-footer')}>
                <section className={cx('wrapper-footer')}>
                    <span className={cx('col-footer')}>
                        <h3 className={cx('title-footer')}>truy cập nhanh</h3>
                        <span className={cx('title-li')}>
                            <ArrowIcon />
                            Bộ phận hỗ trợ
                        </span>
                        <span className={cx('title-li')}>
                            <ArrowIcon />
                            Hướng dẫn sử dụng
                        </span>

                        <span className={cx('title-access')}>
                            <WifiIcon />
                            RSS | Kết nối với chúng tôi
                            <FacebookFooterIcon />
                            <YoutubeFooterIcon />
                        </span>

                        <span className={cx('title-copy-right')}>Copyright © 2022 V-Lib. All Rights Rerverved</span>
                    </span>
                    <span className={cx('col-footer')}>
                        <h3 className={cx('title-footer')}>Danh mục</h3>
                        {list.map((li, i) => (
                            <span key={i} className={cx('title-li')}>
                                <ArrowIcon />
                                {li.title}
                            </span>
                        ))}
                    </span>
                    <span className={cx('col-footer')}>
                        <h3 className={cx('title-footer')}>Liên hệ với chúng tôi</h3>
                        <span className={cx('title-connect')}>
                            <AddressIcon />
                            Địa chỉ : TTTM LePARC, P. Yên Sở, Q. Hoàng Mai, Hà Nội
                        </span>
                        <span className={cx('title-connect')}>
                            <MailIcon />
                            Email: hotro@v-lib.com
                        </span>
                        <span className={cx('title-connect')}>
                            <WebsiteIcon />
                            Website: www.v-lib.com.vn
                        </span>
                        <span className={cx('title-phone')}>
                            <PhoneIcon />
                            1900 4740
                        </span>
                        <span className={cx('title-time')}>(Từ 8h00 đến 17h30 từ thứ 2 đến hết sáng thứ 7)</span>
                    </span>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
