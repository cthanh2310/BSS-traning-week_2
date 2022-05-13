import { useState, useEffect } from 'react';
import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEthernet,
	faNetworkWired,
	faDeleteLeft,
	faGear,
	faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default React.forwardRef(function Sidebar(props, ref) {
	const [activeItemStr, setActiveItemStr] = useState();

	const handleHideSidebar = () => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		if (mediaQuery.matches) {
			ref.current.style.width = 0;
		}
	};

	useEffect(() => {
		setActiveItemStr(
			window.location.href.split('/')[
				window.location.href.split('/').length - 1
			]
		);
	}, []);

	return (
		<div ref={ref} className={`${styles.sidebar}`}>
			<ul className={styles.sidebarList}>
				<li className={styles.sidebarListItem}>
					<Link href="/">
						<a href="#" className={styles.sidebarListItemLink}>
							<span className={styles.sidebarListItemIcon}>
								<FontAwesomeIcon icon={faEthernet} />
							</span>
							<span
								className={
									(styles.sidebarListItemTitle,
									activeItemStr === '' ? styles.activeSidebar : '')
								}
							>
								Device Manager
							</span>
						</a>
					</Link>
				</li>
				<li className={styles.sidebarListItem}>
					<Link href="/dashboard">
						<a className={styles.sidebarListItemLink}>
							<span className={styles.sidebarListItemIcon}>
								<FontAwesomeIcon icon={faNetworkWired} />
							</span>
							<span
								className={
									(styles.sidebarListItemTitle,
									activeItemStr === 'dashboard' ? styles.activeSidebar : '')
								}
							>
								Dashboard
							</span>
						</a>
					</Link>
				</li>
				<li className={styles.sidebarListItem}>
					<Link href="/logs" scroll>
						<a className={styles.sidebarListItemLink}>
							<span className={styles.sidebarListItemIcon}>
								<FontAwesomeIcon icon={faClockRotateLeft} />
							</span>
							<span
								className={
									(styles.sidebarListItemTitle,
									activeItemStr === 'logs' ? styles.activeSidebar : '')
								}
							>
								Logs
							</span>
						</a>
					</Link>
				</li>
				<li className={styles.sidebarListItem}>
					<Link href="/settings">
						<a className={styles.sidebarListItemLink}>
							<span className={styles.sidebarListItemIcon}>
								<FontAwesomeIcon icon={faGear} />
							</span>
							<span
								className={
									(styles.sidebarListItemTitle,
									activeItemStr === 'settings' ? styles.activeSidebar : '')
								}
							>
								Settings
							</span>
						</a>
					</Link>
				</li>
				<li
					className={`${styles.sidebarListItem} hide-on-tablet-pc`}
					onClick={handleHideSidebar}
				>
					<a className={styles.sidebarListItemLink}>
						<span className={styles.sidebarListItemIcon}>
							<FontAwesomeIcon icon={faDeleteLeft} />
						</span>
						<span className={styles.sidebarListItemTitle}>Exit</span>
					</a>
				</li>
			</ul>
		</div>
	);
});
