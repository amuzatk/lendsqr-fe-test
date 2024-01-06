// pages/index.tsx

import { useRouter } from 'next/router';
import Pablo from '../public/assets/images/pablo-sign-in.webp';
import Logo from '../public/assets/logo/logo.webp';
import styles from "../styles/pages/Login.module.scss";
import Image from 'next/image';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    // For simplicity, always redirect to /dashboard on login button click
    router.push('/dashboard');
  };

  return (
    <div>
      <Image src={Pablo} width={600} height={337.57} alt='Login Image' />
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <div>
        {/* <input type="submit" onClick={handleLogin}/> */}

          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;



// import { useRouter } from 'next/router';
// import Pablo from '../public/assets/images/pablo-sign-in.webp';
// import Logo from '../public/assets/logo/logo.webp';
// import  PabloSignIn  from "../public/assets/images/pablo.svg";

// import Image from 'next/image';
// import styles from "../styles/pages/Login.module.scss";

// const Login = () => {
//   const router = useRouter();

//   const handleLogin = () => {
//     router.push('/dashboard');
//   };
//   return (
//     // <div className={styles.loginContainer}>
//     <main className={styles.container}>
//       <section className={styles.image}>
//          <Image src={Logo} width={173.76} height={36}  alt='Login Image' />
//          <Image src={PabloSignIn} className={styles.illustration} width={600} height={337.57} alt='Login Image' />
//          {/* <PabloSignIn className="illustration" /> */}
     
//       </section>
//       <section className={styles.login}>
//          <Image src={Logo}  alt='Login Image' className={styles.mobile}/>
//         <section className={styles.info}>
//           <h1>Welcome!</h1>
//           <p>Enter details to login.</p>
//           <form action="" className={styles.form}>
//             <input
//               placeholder="Email"
//               className={styles.email}
//             />

//             <div className={styles.passwordC}>
//               <input
//                 // type="password"
//                 placeholder="Password"
//                 className={styles.password}
//               />
//               <span className={styles.cont}>SHOW</span>
//             </div>

//             <p>FORGOT PASSWORD?</p>
//             <input
//               onClick={handleLogin}
//               type="submit"
//               className={styles.submit}
//               value="LOG IN"
//             />
//           </form>
//         </section>
//       </section>
//     </main>
//     // </div>
//   );
// };

// export default Login;

// import { useRouter } from 'next/router';
// import Pablo from '../public/assets/images/pablo-sign-in.webp';
// import Pablo2 from '../public/assets/images/pablo.svg';
// import Logo from '../public/assets/logo/logo.webp';
// import Image from 'next/image';
// import styles from "../styles/pages/Login.module.scss";

// const Login = () => {
//   const router = useRouter();

//   const handleLogin = () => {
//     router.push('/dashboard');
//   };
//   return (
//     <main  className={styles.container}>
//       <section className={styles.images}>
//          <Image src={Logo} width={173.76} height={36}  alt='Login Image' />
//          <Image src={Pablo2} className={styles.pab}  width={600} height={300}  alt='Login Image' />
//       </section>
//       <section >
//          {/* <Image src={Logo}  alt='Login Image' /> */}
//         <section >
//           <h1>Welcome!</h1>
//           <p>Enter details to login.</p>
//           <form action="" >
//             <input
//               placeholder="Email"
             
//             />

//             <div >
//               <input
//                 type="password"
//                 placeholder="Password"
               
//               />
//               <span >SHOW</span>
//             </div>

//             <p>FORGOT PASSWORD?</p>
//             <input
//               onClick={handleLogin}
//               type="submit"
      
//               value="LOG IN"
//             />
//           </form>
//         </section>
//       </section>
//     </main>
//   );
// };

// export default Login;

// import React from "react";
// // import '../../src/styles/loginStyles.css';
// import { Button, Form, Input, message } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { showLoading, hideLoading } from "../redux/features/alertSlice";
// import { loginSuccess } from "../redux/features/authSlice";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const onFinishHandler = async (values) => {
//     try {
//       dispatch(showLoading());
//       const res = await axios.post("/api/v1/user/login", values);
//       dispatch(hideLoading());
//       if (res.data.success) {
//         localStorage.setItem("token", res.data.token);
//         dispatch(loginSuccess({ user: res.data.user, token: res.data.token }));
//         message.success("Login Successfully");
//         navigate("/");
//       } else {
//         message.error(res.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       console.log(error);
//       message.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="form-contaiber">
//       {/* <Form layout='vertical' onFinish={onFinishHandler} className='card p-4 register-form' > */}
//       <Form
//         layout="vertical"
//         onFinish={onFinishHandler}
//         className="register-form"
//       >
//         <h3 className="text-center">Login Form</h3>
//         <Form.Item label="Email" name="email">
//           <Input type="email" required />
//         </Form.Item>
//         <Form.Item label="Password" name="password">
//           <Input type="password" required />
//         </Form.Item>
//         <Link to="/register" className=" text-white">
//           Not a user? Register here
//         </Link>
//         <Button className="btn btn-primary mt-2 bb" htmlType="submit">
//           Login
//         </Button>
//       </Form>
//     </div>
//   );

// };

// export default Login;

