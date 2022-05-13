import styles from '../styles/Login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();
	const [account, setAccount] = useState({});
	const [errorLogin, setErrorLogin] = useState(false);
	const handleLogin = async () => {
		try {
			console.log(account);
			if (account.username && account.password) {
				setErrorLogin(false);
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
					// return toast.error('Đăng nhập thất bại, có lỗi xảy ra!');
					setErrorLogin(true);
				}
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
						{account.username === '' && (
							<span className={styles.loginFormError}>
								this field is required!
							</span>
						)}
						<div className="form-group">
							<input
								className="form-control"
								type="password"
								id="password"
								placeholder="password"
								onChange={(e) => handleChangePassword(e)}
							/>
						</div>
						{account.password === '' ? (
							<span className={styles.loginFormError}>
								this field is required!
							</span>
						) : (
							errorLogin && (
								<span className={styles.loginFormError}>
									username or password is incorrect !
								</span>
							)
						)}
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
