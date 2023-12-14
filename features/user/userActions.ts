// // features/user/userActions.ts SOLUTION FOR THE ACTUAL API

// import { AnyAction } from 'redux';
// import axios from '../../lib/axiosConfig';
// import { User } from '../../interfaces/index';

// export const fetchUsers = (): Promise<User[]> => {
//   return axios.get('/users')
//     .then((response) => response.data)
//     .catch((error) => {
//       throw new Error('Error fetching users');
//     });
// };


// //features/user/userActions.ts SOLUTION FOR ANTD TABLE

// // import { AnyAction } from 'redux';
// // import axios from '../../lib/axiosConfig';
// import { User } from '../../interfaces/index';
// import faker from 'faker';

// export const generateMockData = (): User[] => {
//   const mockData: User[] = [];

//   for (let i = 1; i <= 500; i++) {
//     const statusArray = ["Inactive", "Pending", "Active", "Blacklisted"];
//     const randomStatusIndex = Math.floor(Math.random() * statusArray.length);
//     const randomStatus = statusArray[randomStatusIndex];

//     const user: User = {
//       accountBalance: (Math.random() * 5000).toFixed(2),
//       accountNumber: `LJDFJCDNSJD${i}`,
//       createdAt: new Date().toISOString(),
//       education: {
//         duration: `${Math.floor(Math.random() * 5) + 1} Years`,
//         employmentStatus: "Employed",
//         level: "Bsc",
//         loanRepayment: (Math.random() * 200).toFixed(2),
//         monthlyIncome: {
//           0: (Math.random() * 200).toFixed(2),
//           1: (Math.random() * 200).toFixed(2),
//           length: 2,
//         },
//         officeEmail: `${faker.name.firstName()}@yahoo.com`,
//         sector: "FinTech",
//       },
//       email: `${faker.name.firstName()}.${faker.name.lastName()}@gmail.com`,
//       guarantor: {
//         address: `${faker.address.streetName()} ${faker.address.city()}`,
//         firstName: faker.name.firstName(),
//         gender: faker.random.arrayElement(["Male", "Female"]),
//         lastName: faker.name.lastName(),
//         phoneNumber: faker.phone.phoneNumberFormat(),
//       },
//       id: i.toString(),
//       lastActiveDate: new Date().toISOString(),
//       orgName: faker.company.companyName().toLowerCase().replace(/\s/g, '-'),
//       phoneNumber: faker.phone.phoneNumber(),
//       profile: {
//         address: faker.address.streetAddress(),
//         avatar: `https://i.pravatar.cc/200?u=${i}`,
//         bvn: `${Math.floor(Math.random() * 1000000000)}`,
//         currency: "NGN",
//         firstName: faker.name.firstName(),
//         gender: faker.random.arrayElement(["Male", "Female"]),
//         lastName: faker.name.lastName(),
//         phoneNumber: faker.phone.phoneNumber(),
//       },
//       socials: {
//         facebook: `@${faker.company.companyName().toLowerCase().replace(/\s/g, '-')}`,
//         instagram: `@${faker.company.companyName().toLowerCase().replace(/\s/g, '-')}`,
//         twitter: `@${faker.company.companyName().toLowerCase().replace(/\s/g, '-')}`,
//       },
//       userName: `${faker.name.firstName()}.${faker.name.lastName()}`,
//        status: {
//         0: randomStatus,
//         array: [randomStatus],
//       },
//     };

//     mockData.push(user);
//   }

//   return mockData;
// };


// // Replace the fetchUsers function with the mock data
// export const fetchUsers = (): Promise<User[]> => {
//   const mockData = generateMockData();
//   return Promise.resolve(mockData);
// };

// // Other actions...

// //features/user/userActions.ts SOLUTION FOR REACT TABLE
import { User } from '../../interfaces/index';
import faker from 'faker';

export const generateMockData = (): User[] => {
  const mockData: User[] = [];

  for (let i = 1; i <= 10; i++) {
    const statusArray = ["Inactive", "Pending", "Active", "Blacklisted"];
    const randomStatusIndex = Math.floor(Math.random() * statusArray.length);
    const randomStatus = statusArray[randomStatusIndex];

    const user: User = {
      accountBalance: (Math.random() * 5000).toFixed(2),
      accountNumber: `LJDFJCDNSJD${i}`,
      createdAt: new Date().toISOString(),
      education: {
        duration: `${Math.floor(Math.random() * 5) + 1} Years`,
        employmentStatus: "Employed",
        level: "Bsc",
        loanRepayment: (Math.random() * 200).toFixed(2),
        monthlyIncome: {
          0: (Math.random() * 200).toFixed(2),
          1: (Math.random() * 200).toFixed(2),
          length: 2,
        },
        officeEmail: `${faker.name.firstName()}@yahoo.com`,
        sector: "FinTech",
      },
      email: `${faker.name.firstName()}.${faker.name.lastName()}@gmail.com`,
      guarantor: {
        address: `${faker.address.streetName()} ${faker.address.city()}`,
        firstName: faker.name.firstName(),
        gender: faker.random.arrayElement(["Male", "Female"]),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumberFormat(),
      },
      id: i.toString(),
      lastActiveDate: new Date().toISOString(),
      orgName: faker.company.companyName().toLowerCase().replace(/\s/g, '-'),
      phoneNumber: faker.phone.phoneNumber(),
      profile: {
        address: faker.address.streetAddress(),
        avatar: `https://i.pravatar.cc/200?u=${i}`,
        bvn: `${Math.floor(Math.random() * 1000000000)}`,
        currency: "NGN",
        firstName: faker.name.firstName(),
        gender: faker.random.arrayElement(["Male", "Female"]),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
      },
      socials: {
        facebook: `@${faker.company.companyName().toLowerCase().replace(/\s/g, '-')}`,
        instagram: `@${faker.company.companyName().toLowerCase().replace(/\s/g, '-')}`,
        twitter: `@${faker.company.companyName().toLowerCase().replace(/\s/g, '-')}`,
      },
      userName: `${faker.name.firstName()}.${faker.name.lastName()}`,
       status: {
        0: randomStatus,
        array: [randomStatus],
      },
    };

    mockData.push(user);
  }

  return mockData;
};


// Replace the fetchUsers function with the mock data
// export const fetchUsers = (): Promise<User[]> => {
//   const mockData = generateMockData();
//   return Promise.resolve(mockData);
// };



// Other actions...

