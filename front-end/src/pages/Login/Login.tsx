import { useState } from 'react';
import staticText from '../../utils/staticText';
import styles from './Login.module.scss';

const Login = () => {
  const { lgnFrmHeading, rembrMe, lgnBtn } = staticText; // Destruct the object
  const initialState = {
    username: {
      value: '',
      required: true,
      errorMsg: '',
    },
    password: {
      value: '',
      required: true,
      errorMsg: '',
    },
  };
  const [data, setData] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cloneData: any = { ...data };
    const { name, value } = event.target;
    const cloneEle = { ...cloneData[name] };
    cloneEle.value = value;
    cloneData[name] = cloneEle;
    setData(cloneData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cloneData: any = { ...data };
    if (data.username.value === '') {
      const cloneEle = { ...cloneData.username };
      cloneEle.errorMsg = 'Please enter username.';
      cloneData.username = cloneEle;
    } else {
      const cloneEle = { ...cloneData.username };
      cloneEle.errorMsg = '';
      cloneData.username = cloneEle;
    }

    if (data.password.value === '') {
      const cloneEle = { ...cloneData.password };
      cloneEle.errorMsg = 'Please enter password.';
      cloneData.password = cloneEle;
    } else {
      const cloneEle = { ...cloneData.password };
      cloneEle.errorMsg = '';
      cloneData.password = cloneEle;
    }

    if (data.username.value === '' || data.password.value === '') {
      setData(cloneData);
    } else {
      // Make an API call
      console.log(cloneData);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.appName}>
          <span className={styles.first}>Student</span>
          <span className={styles.second}>Loan</span>
        </div>
        <div className={styles.loginFrmBox}>
          <div className={styles.heading}>{lgnFrmHeading}</div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formBox}>
              <div className={styles.row}>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={data.username.value}
                  className={styles.Sltextbox}
                  placeholder={`Username${data.username.required ? '*' : ''}`}
                  onChange={handleChange}
                />
                {data.username.errorMsg !== '' ? (
                  <p className={styles.error}>{data.username.errorMsg}</p>
                ) : (
                  ''
                )}
              </div>
              <div className={styles.row}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder={`Password${data.password.required ? '*' : ''}`}
                  value={data.password.value}
                  className={styles.Sltextbox}
                  onChange={handleChange}
                />
                {data.password.errorMsg !== '' ? (
                  <p className={styles.error}>{data.password.errorMsg}</p>
                ) : (
                  ''
                )}
              </div>
              <div className={styles.row2}>
                <div>
                  <label htmlFor="remember">
                    <input type="checkbox" name="remember" id="remember" />
                    {rembrMe}
                  </label>
                </div>
                <button type="submit" className={styles.Slbutton}>
                  {lgnBtn}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
