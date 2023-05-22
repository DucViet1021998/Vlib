import { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import { UpToTopIcon } from '~/components/icons';
import Introduce from './Introduce';
import Feature from './Feature';
import Story from './Story/Story';
import News from './News/News';
import Customer from './Customer/Customer';
import Comment from './Comment/Comment';

function Home() {
    const [showUpTopBtn, setShowUpToTopBtn] = useState(false);

    useEffect(() => {
        const HandleScroll = () => setShowUpToTopBtn(window.scrollY >= 4200);
        window.addEventListener('scroll', HandleScroll);
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <Introduce />
            <Feature />
            <Story />
            <News />
            <Customer />
            <Comment />
            {showUpTopBtn && <ScrollToTop component={<UpToTopIcon />} smooth />}
        </div>
    );
}

export default Home;
