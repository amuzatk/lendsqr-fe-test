// import Link from "next/link";
// import Layout from "../components/Layout";
// import styles from "../styles/pages/Login.module.scss";

// const IndexPage = () => (
//   // <Layout title="Home | Next.js + TypeScript Example" isDetailPage={false}>
//     <div className={styles.container}>
//       <div className={styles.top}>
       
//       </div>
//       <div></div>
//     </div>
//   // {/* </Layout> */}
// );

// export default IndexPage;
// pages/index.tsx

// import { useState } from 'react';
// import { useRouter } from 'next/router';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = () => {

//     if (email.trim() === '' && password.trim() === '') {
//       // Redirect to the dashboard
//       router.push('/dashboard');
//     } else {
//       // Handle invalid login (show error message, etc.)
//       console.error('Invalid login');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <div>
//           <button type="button" onClick={handleLogin}>
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

// pages/index.tsx

import { useRouter } from 'next/router';
import Pablo from '../public/assets/images/pablo-sign-in.webp';
import Logo from '../public/assets/logo/logo.webp';
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
