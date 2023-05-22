import { useEffect } from 'react';
import AOS from 'aos';
import { Container, Stack, Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';

import styles from '~/components/styles/Home/Comment.module.scss';

const cx = classNames.bind(styles);

const users = [
    {
        avatarSrc: '/images/comment-avatar1.png',
        avatarAlt: 'comment-avatar1',
        comment:
            '"Trường con mình là trường công không có hệ thống camera, phụ huynh rất muốn biết các hoạt động trên lớp của con. Với eNetViet, các khoảnh khắc đáng nhớ của con được lưu giữ lại và tôi có thể xem lại được dòng thời gian rất tiện lợi"',
        userDuty: 'Hiệu trưởng trường TH Nguyễn Đình Chiểu - Hồ Chí Minh',
        userName: 'Thầy Đặng Duy Phước',
    },
    {
        avatarSrc: '/images/comment-avatar2.png',
        avatarAlt: 'comment-avatar2',
        comment:
            '“eNetViet hỗ trợ công tác quản lý, kết nối của nhà trường rất nhiều. Phần mềm hỗ trợ chi tiết từ quản lý số liệu thống kê, đến chuyên môn và các hoạt động của toàn trường"',
        userDuty: 'Phó Hiệu trưởng Trường THPT An Lão - Hải Phòng',
        userName: 'Thầy Vũ Văn Đạt',
    },
    {
        avatarSrc: '/images/comment-avatar3.png',
        avatarAlt: 'comment-avatar3',
        comment:
            '"Tôi là một phụ huynh thường xuyên đi công tác xa nhà. Sử dụng eNetViet, giúp tôi dễ dàng cập nhật thông tin học tập của con, giữa hai ba con có sự thấu hiểu và đồng hành cùng con dù ở khá xa nhau"',
        userDuty: 'Phụ huynh trường TH Thanh Liệt - Hà Nội',
        userName: 'Ông Vũ Văn Cường',
    },
];

function Comment() {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);
    return (
        <div
            className="d-flex justify-content-center"
            style={{ width: '100%', height: '732px', backgroundColor: '#F6F6F6' }}
        >
            <section style={{ width: '1920px', height: '100%' }}>
                <Stack className="justify-content-center align-items-center">
                    <h1 className={cx('title')}>Ý kiến khách hàng</h1>
                    <Container>
                        <Row data-aos="zoom-in-up">
                            {users.map((user, i) => (
                                <Col key={i}>
                                    <div style={{ width: '400px' }}>
                                        <p className={cx('comment-content')}>{user.comment}</p>

                                        <Stack
                                            style={{ paddingTop: '26px' }}
                                            className="justify-content-center align-items-center"
                                        >
                                            <img src={user.avatarSrc} alt={user.avatarAlt} />
                                            <span className={cx('comment-username')}>{user.userName}</span>
                                            <span className={cx('comment-userDuty')}>{user.userDuty}</span>
                                        </Stack>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Stack>
            </section>
        </div>
    );
}

export default Comment;
