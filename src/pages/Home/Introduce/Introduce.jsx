import { useEffect } from 'react';
import AOS from 'aos';

import classNames from 'classnames/bind';
import styles from '~/components/styles/Home/Introduce.module.scss';
import { TeacherIcon, StudentIcon, StaffIcon } from '~/components/icons';

const cx = classNames.bind(styles);

function Introduce() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className={cx('introduce-wrapper')}>
            <div data-aos="fade-right" className={cx('introduce1')}>
                <img width="620px" height="387.5px" src="/images/demoVideo.png" alt="" />
            </div>
            <div data-aos="fade-left" className={cx('introduce2')}>
                <span className={cx('tittle-introduce2')}>V-Lib là gì?</span>
                <span className={cx('content-introduce2')}>
                    V-Lib là giải pháp phần mềm Thư viện điện tử – Thư viện số được Quảng Ích xây dựng và phát triển từ
                    năm 2003. Với tính năng ưu việt vượt trội trong quản lý tích hợp nghiệp vụ thư viện truyền thống và
                    thư viện điện tử hiện đại, V-Lib đã được ứng dụng thành công tại hàng nghìn tổ chức, đơn vị, trường
                    học trên toàn quốc...
                </span>
                <span className={cx('useFor-introduce2')}>V-Lib dành cho...</span>
                <span className={cx('icons-introduce2')}>
                    <span className={cx('icon-wrapper')}>
                        <TeacherIcon />
                        <span className={cx('name-icon')}>Giáo viên</span>
                    </span>

                    <span className={cx('icon-wrapper')}>
                        <StudentIcon />
                        <span className={cx('name-icon')}>Học sinh</span>
                    </span>

                    <span className={cx('icon-wrapper')}>
                        <StaffIcon />
                        <span className={cx('name-icon')}>Cán bộ thư viện</span>
                    </span>
                </span>
            </div>
        </section>
    );
}

export default Introduce;
