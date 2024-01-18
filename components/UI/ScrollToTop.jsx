import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button
			className='btn-scrollTop'
			style={{ display: isVisible ? 'block' : 'none' }}
			onClick={goToTop}
		>
			<FaArrowCircleUp />
		</button>
	);
};

export default ScrollToTop;
