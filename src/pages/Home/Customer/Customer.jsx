import { useEffect } from 'react';
import AOS from 'aos';
import { Row, Col, Container, Stack } from 'react-bootstrap';
import classNames from 'classnames/bind';

import styles from '~/components/styles/Home/Customer.module.scss';

const cx = classNames.bind(styles);

const row = [
    {
        src: '/images/logo HN.png',
        alt: 'logo-HN',
        title: 'Sở GD&ĐT TP. Hà Nội',
        miniSrc1: '/images/mini-logo-hn1.png',
        miniSrc2: '/images/mini-logo-hn2.png',
        miniSrc3: '/images/mini-logo-hn3.png',
        miniSrc4: '/images/mini-logo-hn4.png',
        miniSrc5: '/images/mini-logo-hn5.png',
        miniSrc6: '/images/mini-logo-hn6.png',
        miniAlt1: 'mini-logo-hn1',
        miniAlt2: 'mini-logo-hn2',
        miniAlt3: 'mini-logo-hn3',
        miniAlt4: 'mini-logo-hn4',
        miniAlt6: 'mini-logo-hn6',
        miniAlt5: 'mini-logo-hn5',
    },
    {
        src: '/images/logoHCM.png',
        alt: 'logo-HCM',
        title: 'Sở GD&ĐT TP. Hồ chí minh',
        miniSrc1: '/images/mini-logo-hn1.png',
        miniSrc2: '/images/mini-logo-hcm2.png',
        miniSrc3: '/images/mini-logo-hcm3.png',
        miniSrc4: '/images/mini-logo-hcm4.png',
        miniSrc5: '/images/mini-logo-hcm5.png',
        miniSrc6: '/images/mini-logo-hcm6.png',
        miniAlt1: 'mini-logo-hn1',
        miniAlt2: 'mini-logo-hn2',
        miniAlt3: 'mini-logo-hn3',
        miniAlt4: 'mini-logo-hn4',
        miniAlt5: 'mini-logo-hn5',
        miniAlt6: 'mini-logo-hn6',
    },
    {
        src: '/images/logoHP.png',
        alt: 'logo-HP',
        title: 'Sở GD&ĐT tp. Hải phòng',
        miniSrc1: '/images/mini-logo-hp1.png',
        miniSrc2: '/images/mini-logo-hp2.png',
        miniSrc3: '/images/mini-logo-hp3.png',
        miniSrc4: '/images/mini-logo-hp4.png',
        miniSrc5: '/images/mini-logo-hp5.png',
        miniSrc6: '/images/mini-logo-hp6.png',
        miniAlt1: 'mini-logo-hp1',
        miniAlt2: 'mini-logo-hp2',
        miniAlt3: 'mini-logo-hp3',
        miniAlt4: 'mini-logo-hp4',
        miniAlt5: 'mini-logo-hp5',
        miniAlt6: 'mini-logo-hp6',
    },
    {
        src: '/images/logoBG.png',
        alt: 'logo-BG',
        title: 'Sở GD&ĐT tp. Bắc Giang',
        miniSrc1: '/images/mini-logo-bg1.png',
        miniSrc2: '/images/mini-logo-bg2.png',
        miniSrc3: '/images/mini-logo-bg3.png',
        miniSrc4: '/images/mini-logo-bg4.png',
        miniSrc5: '/images/mini-logo-bg5.png',
        miniSrc6: '/images/mini-logo-bg6.png',
        miniAlt1: 'mini-logo-bg1',
        miniAlt2: 'mini-logo-bg2',
        miniAlt3: 'mini-logo-bg3',
        miniAlt4: 'mini-logo-bg4',
        miniAlt5: 'mini-logo-bg5',
        miniAlt6: 'mini-logo-bg6',
    },
    {
        src: '/images/logoBN.png',
        alt: 'logo-HP',
        title: 'Sở GD&ĐT tp. Hải phòng',
        miniSrc1: '/images/mini-logo-bn1.png',
        miniSrc2: '/images/mini-logo-bn2.png',
        miniSrc3: '/images/mini-logo-bn3.png',
        miniSrc4: '/images/mini-logo-bn4.png',
        miniSrc5: '/images/mini-logo-bn5.png',
        miniSrc6: '/images/mini-logo-bn6.png',
        miniAlt1: 'mini-logo-bn1',
        miniAlt2: 'mini-logo-bn2',
        miniAlt3: 'mini-logo-bn3',
        miniAlt4: 'mini-logo-bn4',
        miniAlt5: 'mini-logo-bn5',
        miniAlt6: 'mini-logo-bn6',
    },
    {
        src: '/images/logoHD.png',
        alt: 'logo-HD',
        title: 'Sở GD&ĐT tp. Hải Dương',
        miniSrc1: '/images/mini-logo-hd1.png',
        miniSrc2: '/images/mini-logo-hd2.png',
        miniSrc3: '/images/mini-logo-hd3.png',
        miniSrc4: '/images/mini-logo-hd4.png',
        miniSrc5: '/images/mini-logo-hd5.png',
        miniSrc6: '/images/mini-logo-hd6.png',
        miniAlt1: 'mini-logo-hd1',
        miniAlt2: 'mini-logo-hd2',
        miniAlt3: 'mini-logo-hd3',
        miniAlt4: 'mini-logo-hd4',
        miniAlt5: 'mini-logo-hd5',
        miniAlt6: 'mini-logo-hd6',
    },
];

function Customer() {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);
    return (
        <section style={{ width: '1920px', height: '580px' }}>
            <Stack className="justify-content-center align-items-center">
                <h1 className={cx('title')}>Khách hàng tiêu biểu</h1>
                <Container
                    // fluid
                    style={{ width: '1280px', height: '100%' }}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <Row data-aos="zoom-in">
                        {row.map((row, i) => (
                            <Col key={i} style={{ marginRight: '10px' }}>
                                <span className={cx('logo-wrapper')}>
                                    <img src={row.src} alt={row.alt} />
                                    <span className={cx('logo-title')}>{row.title}</span>
                                </span>
                            </Col>
                        ))}
                    </Row>

                    <Row data-aos="zoom-in-up">
                        {row.map((row, i) => (
                            <Col key={i} style={{ marginRight: '10px' }}>
                                <span className={cx('mini-logo-wrapper')}>
                                    <span className={cx('mini-logo')}>
                                        <img src={row.miniSrc1} alt={row.miniAlt1} />
                                    </span>
                                    <span className={cx('mini-logo')}>
                                        <img src={row.miniSrc2} alt={row.miniAlt2} />
                                    </span>
                                </span>
                            </Col>
                        ))}
                    </Row>
                    <Row data-aos="zoom-in-up">
                        {row.map((row, i) => (
                            <Col key={i} style={{ marginRight: '10px' }}>
                                <span className={cx('mini-logo-wrapper')}>
                                    <span className={cx('mini-logo')}>
                                        <img src={row.miniSrc3} alt={row.miniAlt3} />
                                    </span>
                                    <span className={cx('mini-logo')}>
                                        <img src={row.miniSrc4} alt={row.miniAlt4} />
                                    </span>
                                </span>
                            </Col>
                        ))}
                    </Row>
                    <Row data-aos="zoom-in-up">
                        {row.map((row, i) => (
                            <Col key={i} style={{ marginRight: '10px' }}>
                                <span className={cx('mini-logo-wrapper')}>
                                    <span className={cx('mini-logo')}>
                                        <img src={row.miniSrc5} alt={row.miniAlt5} />
                                    </span>
                                    <span className={cx('mini-logo')}>
                                        <img src={row.miniSrc6} alt={row.miniAlt6} />
                                    </span>
                                </span>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Stack>
        </section>
    );
}

export default Customer;
