import Footer from './Footer/Footer';
import Header from './Header';
import SlideShow from '~/components/SlideShow';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <SlideShow />
            <div>{children}</div>
            <Footer />
        </div>
    );
}
export default DefaultLayout;
