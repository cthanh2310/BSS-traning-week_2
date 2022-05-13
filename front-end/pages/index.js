import styles from '../styles/Login.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();
	const [account, setAccount] = useState({});
	const handleLogin = async () => {
		try {
			console.log(account);
			const response = await fetch('http://localhost:5500/login', {
				method: 'POST',
				body: JSON.stringify(account),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			})
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					return data;
				});
			if (response.token) {
				return router.push({
					pathname: '/dashboard',
				});
			} else {
				return toast.error('Đăng nhập thất bại, có lỗi xảy ra!');
			}
		} catch (error) {
			console.log('error', error);
		}
	};
	const handleChangeUsername = (e) => {
		setAccount((prevAccount) => {
			return { ...prevAccount, username: e.target.value };
		});
	};
	const handleChangePassword = (e) => {
		setAccount((prevAccount) => {
			return { ...prevAccount, password: e.target.value };
		});
	};
	return (
		<div className="container">
			<ToastContainer
				style={{ width: '30%', fontSize: '1.4rem' }}
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<div className={styles.login}>
				<div className={styles.loginTitle}>
					<h1 className={styles.loginTitleContent}>SOIOT SYSTEM</h1>
				</div>
				<div className={styles.loginForm}>
					<div id="loginForm" className="form-container">
						<div className="form-group">
							<input
								className="form-control"
								type="text"
								id="username"
								placeholder="username"
								onChange={(e) => handleChangeUsername(e)}
							/>
						</div>
						<div className="form-group">
							<input
								className="form-control"
								type="password"
								id="password"
								placeholder="password"
								onChange={(e) => handleChangePassword(e)}
							/>
						</div>
						<div className="form-group">
							<div className={styles.loginFormAuth}>
								<button
									className={`btn ${styles.btnLogin}`}
									onClick={handleLogin}
								>
									LOGIN
								</button>
								<a href="#" className={styles.btnRegister}>
									or create new account
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
