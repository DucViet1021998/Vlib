import { useEffect } from 'react';
import AOS from 'aos';
import classNames from 'classnames/bind';

import styles from '~/components/styles/Home/Feature.module.scss';
import { BachelorHatIcon, CadresIcon, UniversityIcon } from '~/components/icons';

const cx = classNames.bind(styles);

function Feature() {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    return (
        <section className={cx('container')}>
            <div className={cx('img-wrapper')}>
                <span className={cx('background-1')}></span>
                <img className={cx('background-2')} height="745px" src="/images/feature.png" alt="img2" />
            </div>
            <div className={cx('feature-container')}>
                <div className={cx('feature-wrapper')}>
                    <span className={cx('feature-title')}> TÍNH NĂNG NỔI BẬT</span>
                    <span>
                        <span data-aos="fade-right" className={cx('content-wrapper')}>
                            <span>
                                <span className={cx('content-number')}>01</span>
                                <span className={cx('content-title')}>lợi ích về mặt nghiệp vụ</span>
                            </span>
                            <span className={cx('content')}>
                                Hệ thống quản lý thư viện trường học được xây dựng dựa trên các chuẩn chung của hệ thống
                                thư viện thế giới và sử dụng giao diện Web nên đảm bảo khả năng tương tác, tương thích
                                với các hệ thống khác một cách dễ dàng.
                            </span>
                        </span>
                        <span data-aos="fade-right" className={cx('content-wrapper')}>
                            <span>
                                <span className={cx('content-number')}>02</span>
                                <span className={cx('content-title')}>Lợi ích về phía nhà trường</span>
                            </span>
                            <span className={cx('content')}>
                                Về phía nhà trường, ban lãnh đạo có thể tự điều chỉnh việc bổ sung và quản lý hiệu quả
                                nguồn tài liệu, đánh giá chính xác nhu cầu và khả năng thông tin của học sinh, phân tích
                                số liệu và đưa ra báo cáo cần thiết về hoạt động của thư viện.
                            </span>
                        </span>
                        <span data-aos="fade-right" className={cx('content-wrapper')}>
                            <span>
                                <span className={cx('content-number')}>03</span>
                                <span className={cx('content-title')}>Lợi ích về phía thư viện, cán bộ thư viện</span>
                            </span>
                            <span className={cx('content')}>
                                Cán bộ thư viện có thể quản lý tốt các ấn phẩm, tài sản thư viện và tự động hóa các khâu
                                xử lý nghiệp vụ từ đơn giản đến phức tạp. <br /> Bạn đọc cũng dễ dàng tiếp cận, khai
                                thác tối đa nguồn tài nguyên của thư viện phục vụ mục đích học tập và nghiên cứu.
                            </span>
                        </span>
                    </span>
                </div>
            </div>
            <span data-aos="fade-down-right" className={cx('BachelorHat-icon')}>
                <BachelorHatIcon />
            </span>
            <span data-aos="fade-down-right" className={cx('University-icon')}>
                <UniversityIcon />
            </span>
            <span data-aos="fade-down-right" className={cx('Cadres-icon')}>
                <CadresIcon />
            </span>
        </section>
    );
}

export default Feature;
