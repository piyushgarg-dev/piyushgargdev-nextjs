import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../UI/ScrollToTop';

const Layout = props => {
	return (
		<Fragment>
			<Header />
			<div>{props.children}</div>
			<div className='center'>
				<ScrollToTop />
			</div>
			<Footer />
		</Fragment>
	);
};

export default Layout;
