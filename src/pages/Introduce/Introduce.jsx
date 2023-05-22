import { useEffect, useState } from 'react';
import AOS from 'aos';
import ScrollToTop from 'react-scroll-to-top';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

import styles from '~/components/styles/Introduce/Introduce.module.scss';
import { UpToTopIcon } from '~/components/icons';

const cx = classNames.bind(styles);

const cards = [
    {
        src: '/images/lib-1.png',
        alt: 'img-lib-1',
        number: '01',
        title: 'Lợi ích về mặt nghiệp vụ',
        content:
            'Về mặt nghiệp vụ, Hệ thống quản lý thư viện trường học được xây dựng dựa trên các chuẩn chung của hệ thống thư viện thế giới và sử dụng giao diện Web nên đảm bảo khả năng tương tác, tương thích với các hệ thống khác một cách dễ dàng. Hệ thống quản lý thư viện trường học bao gồm các phân hệ OPAC, Lưu thông, Biên mục, Bổ sung, Ấn phẩm định kỳ, Bạn đọc, Thiết lập hệ thống, và đặc biệt chức năng thống kê, báo cáo hết sức mềm dẻo, thuận tiện và chính xác.',
    },
    {
        src: '/images/lib-2.png',
        alt: 'img-lib-2',
        number: '02',
        title: 'Lợi ích về phía nhà trường',
        content:
            'Về phía nhà trường, ban lãnh đạo có thể tự điều chỉnh việc bổ sung và quản lý hiệu quả nguồn tài liệu, đánh giá chính xác nhu cầu và khả năng thông tin của học sinh, phân tích số liệu và đưa ra báo cáo cần thiết về hoạt động của thư viện.',
    },
    {
        src: '/images/lib-3.png',
        alt: 'img-lib-3',
        number: '03',
        title: 'Lợi ích về phía thư viện, cán bộ thư viện',
        content:
            'Về phía thư viện, cán bộ thư viện có thể quản lý tốt các ấn phẩm, tài sản thư viện và tự động hóa các khâu xử lý nghiệp vụ từ đơn giản đến phức tạp. Bạn đọc cũng dễ dàng tiếp cận, khai thác tối đa nguồn tài nguyên của thư viện phục vụ mục đích học tập và nghiên cứu. Hệ thống quản lý thư viện trường học đã thực sự góp phần chuẩn hoá nghiệp vụ thư viện, nâng cao hiệu quả quản lý thư viện trong trường học.',
    },
];

function Introduce() {
    const [showUpTopBtn, setShowUpToTopBtn] = useState(false);

    useEffect(() => {
        const HandleScroll = () => setShowUpToTopBtn(window.scrollY >= 4200);
        window.addEventListener('scroll', HandleScroll);
        AOS.init({ duration: 600 });
    }, []);
    return (
        <div className="flex-column center-all">
            <div className={cx('gradient-introduce')}>
                <span className={cx('direction-introduce')}>
                    <Link to={'/home'}>Trang chủ</Link>
                    <span>{'>'}</span>
                    <span>Giới thiệu</span>
                </span>
            </div>
            <section style={{ width: '1280px' }}>
                <Container className={cx('lib-introduce')}>
                    <Row>
                        <Col data-aos="fade-right">
                            <img src="/images/lib-introduce.png" alt="img-lib-introduce" />
                        </Col>
                        <Col data-aos="fade-left" style={{ paddingLeft: '20px' }} className="d-flex flex-column">
                            <span className={cx('lib-introduce-title')}>
                                Giới thiệu sản phẩm và giải pháp thư viện điện tử, thư viện số trong các trường học
                            </span>
                            <span className={cx('lib-introduce-content')}>
                                V-Lib là giải pháp phần mềm Thư viện điện tử – Thư viện số được Quảng Ích xây dựng và
                                phát triển từ năm 2003. Với tính năng ưu việt vượt trội trong quản lý tích hợp nghiệp vụ
                                thư viện truyền thống và thư viện điện tử hiện đại, V-Lib đã được ứng dụng thành công
                                tại hàng nghìn tổ chức, đơn vị, trường học trên toàn quốc.
                            </span>
                            <span className={cx('lib-introduce-content')}>
                                V-Lib được xây dựng trên nền tảng công nghệ điện toán đám mây, người dùng không cần phải
                                cài đặt, chỉ cần có mạng Internet là có thể sử dụng được hệ thống ở bất cứ nơi đâu. Đây
                                là sản phẩm được thiết kế đáp ứng đầy đủ và tốt nhất cho nhu cầu của nhà quản lý trong
                                việc quản lý thư viện. Các chức năng của Hệ thống được thiết kế theo chuẩn thống nhất,
                                đáp ứng đầy đủ nghiệp vụ quản lý thư viện trong các nhà trường. Đặc biệt hệ thống thư
                                viện cung cấp đầy đủ các mẫu biểu báo cáo, phục vụ đắc lực cho ban giám hiệu nhà trường
                                trong quá trình theo dõi và quản lý thư viện.
                            </span>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="center-all" style={{ width: '100%', height: '864px', backgroundColor: '#EEEEEE' }}>
                <section
                    className="d-flex justify-content-between"
                    style={{ height: '100%', width: '1280px', padding: '60px 0' }}
                >
                    {cards.map((card, i) => (
                        <span data-aos="zoom-in-up" key={i} className={cx('lib-card')}>
                            <img src={card.src} alt={card.alt} />
                            <span className={cx('lib-card-header')}>
                                <span className={cx('lib-card-number')}>{card.number}</span>
                                {card.title}
                            </span>

                            <p className={cx('lib-card-content')}>{card.content}</p>
                        </span>
                    ))}
                </section>
            </div>
            <section
                className="d-flex flex-column align-items-center"
                style={{ height: '820px', width: '1280px', paddingTop: '30px', gap: '20px' }}
            >
                <h1 className={cx('tittle-section')}>Phân hệ quản lý Thư viện sách truyền thống</h1>
                <Container>
                    <Row className="d-flex ">
                        <Col data-aos="fade-right">
                            <img src="/images/lib-4.png" alt="img-lib-4" />
                        </Col>
                        <Col data-aos="fade-left" className="d-flex flex-column">
                            <span className={cx('lib-list')}>
                                <span className={cx('lib-list-number')}>01</span>Là hệ thống tích hợp hoàn chỉnh mọi
                                nghiệp vụ hoạt động thư viện truyền thống đã được chuẩn hóa theo quy định của Bộ GD&ĐT,
                                Quản lý sách, biên mục theo chuẩn thư viện Phổ thông.{' '}
                            </span>
                            <span className={cx('lib-list')}>
                                <span className={cx('lib-list-number')}>02</span>Đạt được hiệu quả sử dụng tối ưu nhất
                                cho mọi quy trình nghiệp vụ thư viện, tiết kiệm tối đa nguồn lực tài chính, thời gian và
                                công sức…
                            </span>
                            <span className={cx('lib-list')}>
                                <span className={cx('lib-list-number')}>03</span>Khả năng tùy biến cao, cho phép cập
                                nhật, thay đổi hoặc nâng cấp nội dung, chức năng cũng như công nghệ cho hệ thống.Khả
                                năng tùy biến cao, cho phép cập nhật, thay đổi hoặc nâng cấp nội dung, chức năng cũng
                                như công nghệ cho hệ thống.
                            </span>
                            <span className={cx('lib-list')}>
                                <span className={cx('lib-list-number')}>04</span>Số hóa đầu sách qua thiết bị mã vạch
                                hiện đại, số hóa thẻ thư viện, quản lý phân quyền chặt chẽ.
                            </span>
                            <span className={cx('lib-list')}>
                                <span className={cx('lib-list-number')}>05</span>Chuyển giao và hỗ trợ kỹ thuật, hỗ trợ
                                người dùng tốt.
                            </span>
                            <span className={cx('lib-list')}>
                                <span className={cx('lib-list-number')}>06</span>Quản lý chi tiết hóa đơn của đầu sách
                                nhập về.
                            </span>
                            <span className={cx('lib-list')}>
                                <span className={cx('lib-list-number')}>07</span>Thiết lập mã vạch tự động cho sách và
                                các tài liệu khác trong thư viện phù hợp với kho chứa sách. Đồng thời in mã vạch để dán
                                vào sách hay tài liệu.
                            </span>
                            <span className={cx('lib-list')}>
                                <span className={cx('lib-list-number')}>08</span>Mượn trả sách tự động qua mã vạch
                            </span>
                            <span className={cx('lib-list')}>
                                <span className={cx('lib-list-number')}>09</span>Cập nhật biên mục của từng cuốn sách
                                hay tài liệu.
                            </span>
                            <span className={cx('lib-list')}>
                                <span className={cx('lib-list-number')}>10</span>Thống kê tra cứu đa dạng, chi tiết và
                                trực quan phục vụ mọi nhóm đối tượng.
                            </span>
                            <span className={cx('lib-list')}>
                                <span className={cx('lib-list-number')}>11</span>Có khả năng nhập/xuất dữ liệu.
                            </span>
                            <span className={cx('lib-list')}>
                                <span className={cx('lib-list-number')}>12</span>Hệ thống báo cáo đa chức năng, đáp ứng
                                mọi nghiệp vụ báo cáo thư viện.
                            </span>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="center-all" style={{ width: '100%', height: '617px', backgroundColor: '#EEEEEE' }}>
                <div className="center-all flex-column" style={{ height: '100%', width: '1280px', gap: '56px' }}>
                    <h1 className={cx('tittle-section')}>Hệ thống quản lý Thư viện điện tử</h1>
                    <Container>
                        <Row>
                            <Col data-aos="fade-right" className="d-flex flex-column">
                                <span className={cx('lib-list')}>
                                    <span className={cx('lib-list-number')}>01</span>
                                    Quản lý các tài liệu, bài giảng, hoạt động, hình ảnh của trường thông qua các tài
                                    liệu dạng Video, hình ảnh, audio, e-Learning…
                                </span>
                                <span className={cx('lib-list')}>
                                    <span className={cx('lib-list-number')}>02</span>
                                    Công nghệ số hóa tài nguyên.
                                </span>
                                <span className={cx('lib-list')}>
                                    <span className={cx('lib-list-number')}>03</span>
                                    Tự động dịch tài liệu.
                                </span>
                                <span className={cx('lib-list')}>
                                    <span className={cx('lib-list-number')}>04</span>
                                    Quản lý mượn sách từ hệ thống quản lý thư viện truyền thống.
                                </span>
                                <span className={cx('lib-list')}>
                                    <span className={cx('lib-list-number')}>05</span>
                                    Tra cứu sách trong thư viện, sách điện tử.
                                </span>
                                <span className={cx('lib-list')}>
                                    <span className={cx('lib-list-number')}>06</span>
                                    Phân quyền chức năng sử dụng, download tài liệu của người dùng.
                                </span>
                                <span className={cx('lib-list')}>
                                    <span className={cx('lib-list-number')}>07</span>
                                    Khai thác thư viện qua Website, thiết bị cầm tay…
                                </span>
                            </Col>
                            <Col data-aos="fade-left">
                                <img src="/images/lib-5.png" alt="img-lib-5" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section className="center-all flex-column" style={{ width: '100%', height: '1844px', gap: '27px' }}>
                <h1 className={cx('tittle-section')}>Giao diện phần mềm</h1>
                <img data-aos="fade-down" src="/images/lib-6.png" alt="img-lib-6" />
            </section>
            {showUpTopBtn && <ScrollToTop component={<UpToTopIcon />} smooth />}
        </div>
    );
}

export default Introduce;
