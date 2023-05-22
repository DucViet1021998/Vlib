import classNames from 'classnames/bind';
import styles from '~/components/styles/Home/Story.module.scss';
import Card from '~/components/Card/Card';

const cx = classNames.bind(styles);

const cardStory = [
    {
        src: '/images/new1.png',
        alt: 'Story-img1',
        title: 'Triển khai thành công eNetViet trong công tác điều hành và kết nối của trường THCS Văn An - Hải Phòng',
        content:
            'Ngôi trường mang tên nhà giáo dục đầu tiên của Việt Nam Trường THCS Chu Văn An, có địa chỉ tại số 69 Chu Văn An, quận Ngô Quyền, thành phố Hải Phòng. Ngôi trường với bề dày lịch sử phát triển...',
    },
    {
        src: '/images/new2.png',
        alt: 'Story-img2',
        title: 'Ứng dụng thành công phần mềm truyền thông eNetViet vào hoạt động điều hành – quản lý của trường THPT Quang Trung',
        content:
            'Trường THPT Quang Trung – Hà Đông – Hà Nội được thành lập từ năm 1985, trải qua 35 năm xây dựng và phát triển, trường THPT Quang Trung Hà Đông đã có nhiều đóng góp lớn trong việc...',
    },
    {
        src: '/images/new3.png',
        alt: 'Story-img3',
        title: 'Thành phố Hồ Chí Minh đón đầu công cuộc chuyển đổi số trong giáo dục (giaoducthoidai.vn)',
        content:
            'GD&TĐ - Những dịch chuyển mang tính bước ngoặt về CNTT đã làm thay đổi đáng kể bộ mặt giáo dục. Trong công cuộc chuyển đổi số, ngành Giáo dục TP. Hồ Chí Minh đã có bước...',
    },
];

function Story() {
    return (
        <section
            style={{ width: '1280px', height: '860px', gap: '63px' }}
            className="d-flex flex-column justify-content-center align-items-center"
        >
            <h1 className={cx('title')}>Câu chuyện thành công</h1>

            <div className="d-inline-flex">
                {cardStory.map((card, i) => (
                    <div key={i}>
                        <Card title={card.title} alt={card.alt} src={card.src} content={card.content} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Story;
