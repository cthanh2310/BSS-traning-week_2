import { useState } from 'react';
import styles from '../styles/DeleteModal.module.css';

export default function DeleteModal(props) {
	const { onConfirm, onClose } = props;

	return (
		<>
			<div className={styles.overlay}></div>
			<div className={styles.popup}>
				<h3 className={styles.popupTile}>Bạn chắc chắn?</h3>
				<p className={styles.popupDescription}>Bạn muốn xóa dịch vụ này</p>
				<div className={styles.popupButton}>
					<a className={styles.popupButtonExit} onClick={onClose}>
						Thoát
					</a>
					<button className={styles.popupButtonOk} onClick={onConfirm}>
						Đồng ý
					</button>
				</div>
			</div>
		</>
	);
}
