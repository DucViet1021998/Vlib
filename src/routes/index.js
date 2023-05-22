// Pages
import Home from '~/pages/Home';
import Introduce from '~/pages/Introduce';
import Feature from '~/pages/Feature';
import Register from '~/pages/Register';
import Customer from '~/pages/Customer';
import News from '~/pages/News';
import Story from '~/pages/Story';

// Public routes
const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/gioithieu', component: Introduce },
	{ path: '/tinhnang', component: Feature },
	{ path: '/dangky', component: Register },
	{ path: '/donvisudung', component: Customer },
	{ path: '/tintuc', component: News },
	{ path: '/cauchuyenthanhcong', component: Story },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
