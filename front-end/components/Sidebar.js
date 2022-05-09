import { useState, useEffect } from 'react';
import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEthernet,
	faNetworkWired,
	faGear,
	faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
	const [activeItemStr, setActiveItemStr] = useState();

	useEffect(() => {
		setActiveItemStr(
			window.location.href.split('/')[
				window.location.href.split('/').length - 1
			]
		);
	}, []);

	return (
		<div className={`${styles.sidebar} hide-on-mobile`}>
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
			</ul>
		</div>
	);
}
