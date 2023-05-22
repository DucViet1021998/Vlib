import Nav from 'react-bootstrap/Nav';
import classNames from 'classnames/bind';
import Button from 'react-bootstrap/Button';

import { FacebookIcon, LoginIcon, LogoIcon, YoutubeIcon } from '~/components/icons';
import styles from '~/components/styles/Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
const cx = classNames.bind(styles);

function Header() {
	const location = useLocation();

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<Link to={'/'}>
					<LogoIcon />
				</Link>
				<Nav variant="pills" defaultActiveKey={location.pathname}>
					<span className={cx('wrapper-link')}>
						<Nav.Item>
							<Nav.Link href="/" eventKey="/">
								Trang Chủ
							</Nav.Link>
						</Nav.Item>
					</span>
					<span className={cx('wrapper-link')}>
						<Nav.Item>
							<Nav.Link href="gioithieu" eventKey="/gioithieu">
								Giới thiệu
							</Nav.Link>
						</Nav.Item>
					</span>
					<span className={cx('wrapper-link')}>
						<Nav.Item>
							<Nav.Link href="tinhnang" eventKey="/tinhnang">
								Tính năng
							</Nav.Link>
						</Nav.Item>
					</span>
					<span className={cx('wrapper-link')}>
						<Nav.Item>
							<Nav.Link href="dangky" eventKey="/dangky">
								Đăng ký dùng thử
							</Nav.Link>
						</Nav.Item>
					</span>
					<span className={cx('wrapper-link')}>
						<Nav.Item>
							<Nav.Link href="donvisudung" eventKey="/donvisudung">
								đơn vị sử dụng
							</Nav.Link>
						</Nav.Item>
					</span>
					<span className={cx('wrapper-link')}>
						<Nav.Item>
							<Nav.Link href="tintuc" eventKey="/tintuc">
								Tin tức - sự kiện
							</Nav.Link>
						</Nav.Item>
					</span>
					<span className={cx('wrapper-link')}>
						<Nav.Item>
							<Nav.Link href="cauchuyenthanhcong" eventKey="/cauchuyenthanhcong">
								Câu chuyện thành công
							</Nav.Link>
						</Nav.Item>
					</span>
					{/* <Nav.Item>
                        <Nav.Link eventKey="link-7">Hỗ trợ</Nav.Link>
                    </Nav.Item> */}
				</Nav>
				<span className={cx('social-media')}>
					<FacebookIcon />
					<YoutubeIcon />
					<Button variant="success" size="sm">
						<LoginIcon /> <span className={cx('login')}>Đăng nhập</span>
					</Button>
				</span>
			</div>
		</header>
	);
}

export default Header;
