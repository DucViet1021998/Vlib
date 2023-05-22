import classNames from 'classnames/bind';
import styles from '~/components/styles/Home/News.module.scss';
import Card from '~/components/Card/Card';

const cx = classNames.bind(styles);

const cardNews = [
    {
        src: '/images/new4.png',
        alt: 'News-img4',
        title: 'Top 9 công cụ dạy học trực tuyến miễn phí tốt nhất hiện nay',
        content:
            'Trong bài viết sau, mời bạn cùng Quantrimang tìm hiểu những phần mềm, ứng dụng, công cụ dạy học trực tuyến miễn phí có thể hỗ trợ thầy cô thực hiện bài giảng trên nền tảng online tốt nhất hiện nay.',
    },
    {
        src: '/images/new5.png',
        alt: 'News-img5',
        title: 'Chia sẻ 10 trang web học trực tuyến miễn phí, hiệu quả nhất hiện nay',
        content:
            'Nhu cầu học tập trực tuyến ngày càng cao, sự ra đời của các trang web trực tuyến miễn phí là điều tất yếu. Vậy có các trang web học trực tuyến miễn phí, hiệu quả nào.',
    },
    {
        src: '/images/new6.png',
        alt: 'News-img6',
        title: 'Vai trò của Giáo dục điện tử trong Chuyển đổi số ngành Giáo dục',
        content:
            'Giáo dục điện tử là một hình thức giáo dục, học tập dựa trên sự kết nối của công nghệ, giáo dục điện tử hà nội hiện đang dẫn đầu toàn quốc về số hóa trong ngành giáo dục.',
    },
];

function News() {
    return (
        <div
            className="d-flex justify-content-center"
            style={{ width: '100%', height: '860px', backgroundColor: '#F6F6F6' }}
        >
            <section
                style={{ width: '1280px', height: '860px', gap: '63px' }}
                className="d-flex flex-column justify-content-center align-items-center"
            >
                <h1 className={cx('title')}>tin tức sự kiện</h1>

                <div className="d-inline-flex">
                    {cardNews.map((card, i) => (
                        <div key={i}>
                            <Card title={card.title} alt={card.alt} src={card.src} content={card.content} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default News;
