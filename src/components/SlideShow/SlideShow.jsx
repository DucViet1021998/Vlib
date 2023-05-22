import { useEffect } from 'react';
import AOS from 'aos';
import { Carousel } from 'react-responsive-carousel';
import { Row, Col, Container } from 'react-bootstrap';
import classNames from 'classnames/bind';

import styles from '~/components/styles/SlideShow.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const cx = classNames.bind(styles);

const settings = {
    showArrows: false,
    interval: 3500,
    dynamicHeight: false,
    stopOnHover: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 500,
    showThumbs: false,
    showIndicators: true,
    swipeable: true,
    emulateTouch: true,
    autoPlay: false,
};

function SlideShow() {
    useEffect(() => {
        AOS.init({ duration: 900 });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Carousel {...settings}>
                <div className={cx('slide-1')}>
                    <img className={cx('img-1')} height="590px" src="/images/Slide1.png" alt="img1" />
                    <Container style={{ height: '100%', width: '1280px' }}>
                        <Row style={{ height: '100%' }}>
                            <Col>
                                <div className={cx('wrapper-title-on-img1')}>
                                    <span className={cx('name1-on-img1')}>Hệ thống</span>
                                    <span className={cx('name2-on-img1')}>thư viện điện tử trường học</span>
                                    <span className={cx('title-on-img1')}>
                                        Thư viện điện tử hiện đại giúp công tác số hóa trong ngành giáo dục, đã được
                                        triển khai ở các đơn vị, trường học trên toàn quốc.
                                    </span>
                                </div>
                            </Col>
                            <Col className="d-none d-lg-inline-block">
                                <div data-aos="fade-left" className={cx('on-img-1')}>
                                    <article className="background-anim">
                                        <img className="moveUpAnim " src="/images/onSlide1.png" alt="on-img1" />
                                    </article>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={cx('slide-1')}>
                    <img className={cx('img-1')} height="590px" src="/images/Slide2.png" alt="img2" />

                    <Container style={{ height: '100%', width: '1280px' }}>
                        <Row style={{ height: '100%' }}>
                            <Col>
                                <div className={cx('wrapper-title-on-img2')}>
                                    <span className={cx('name1-on-img2')}>Giải pháp</span>
                                    <span className={cx('name2-on-img2')}>Thư viện</span>
                                    <span className={cx('name3-on-img2')}>phổ biến nhất</span>
                                </div>
                            </Col>
                            <Col className="d-none d-lg-inline-block">
                                <div className={cx('on-img-2')}>
                                    <article className="background-anim">
                                        <img className="moveUpAnim " src="/images/onSlide2.png" alt="on-img1" />
                                    </article>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <img height="590px" src="/images/Slide3.png" alt="img3" />
                </div>
                <div>
                    <img height="590px" src="/images/Slide4.png" alt="img4" />
                </div>
                <div>
                    <img height="590px" src="/images/Slide5.png" alt="img5" />
                </div>
                <div>
                    <img height="590px" src="/images/Slide6.jpg" alt="img6" />
                </div>
                <div>
                    <img height="590px" src="/images/Slide7.jpg" alt="img7" />
                </div>
                <div>
                    <img height="590px" src="/images/Slide8.jpg" alt="img8" />
                </div>
            </Carousel>
        </div>
    );
}

export default SlideShow;
