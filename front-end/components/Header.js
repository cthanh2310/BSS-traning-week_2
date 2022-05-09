import styles from '../styles/Header.module.css';

export default function Header() {
	return (
		<div className={`${styles.header} hide-on-mobile`}>
			<div className={styles.headerInfo}>
				<i className="fa-solid fa-circle-user"></i>
				<span className={styles.headerInfoName}>Welcome John</span>
			</div>
		</div>
	);
}
