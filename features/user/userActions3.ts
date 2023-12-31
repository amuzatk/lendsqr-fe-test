// features/user/userActions.ts SOLUTION FOR THE ACTUAL API

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


import { User } from '../../interfaces/index';
import faker from 'faker';

// Function to replace special characters with real letters
const replaceSpecialChars = (input: string): string => {
  return input.replace(/-/g, faker.random.arrayElement(['A', 'B', 'C', 'D', 'E']))
              .replace(/,/g, faker.random.arrayElement(['X', 'Y', 'Z']));
};

export const generateMockData = (): User[] => {
  const mockData: User[] = [];

  for (let i = 1; i <= 500; i++) {
    const statusArray = ["Inactive", "Pending", "Active", "Blacklisted"];
    const randomStatusIndex = Math.floor(Math.random() * statusArray.length);
    const randomStatus = statusArray[randomStatusIndex];

    const createdAt = new Date().toISOString();
    const createdTime = new Date().toLocaleTimeString(); // Adding createdTime

    const orgName = replaceSpecialChars(faker.company.companyName().toLowerCase().replace(/\s/g, '-').substring(0, 8));
    const firstName = replaceSpecialChars(faker.name.firstName().substring(0, 5));
    const lastName = replaceSpecialChars(faker.name.lastName().substring(0, 5));
    const email = `${firstName}@${orgName}.com`;
    const phoneNumber = replaceSpecialChars(faker.phone.phoneNumber().replace(/\D/g, '').substring(0, 11));

    const user: User = {
      accountBalance: (Math.random() * 5000).toFixed(2),
      accountNumber: `LJDFJCDNSJD${i}`,
      createdAt,
      createdTime, // Adding createdTime
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
        officeEmail: `${firstName}@yahoo.com`, // Use firstName for officeEmail
        sector: "FinTech",
      },
      email,
      guarantor: {
        address: replaceSpecialChars(`${faker.address.streetName()} ${faker.address.city()}`),
        firstName: replaceSpecialChars(faker.name.firstName()),
        gender: faker.random.arrayElement(["Male", "Female"]),
        lastName: replaceSpecialChars(faker.name.lastName()),
        phoneNumber,
      },
      id: i.toString(),
      lastActiveDate: new Date().toISOString(),
      orgName,
      phoneNumber,
      profile: {
        address: replaceSpecialChars(faker.address.streetAddress()),
        avatar: `https://i.pravatar.cc/200?u=${i}`,
        bvn: `${Math.floor(Math.random() * 1000000000)}`,
        currency: "NGN",
        firstName,
        gender: faker.random.arrayElement(["Male", "Female"]),
        lastName,
        phoneNumber,
      },
      socials: {
        facebook: `@${orgName}`,
        instagram: `@${orgName}`,
        twitter: `@${orgName}`,
      },
      userName: `${firstName}.${lastName}`,
      status: {
        0: randomStatus,
        array: [randomStatus],
      },
    };

    mockData.push(user);
  }

  return mockData;
};

// // Replace the fetchUsers function with the mock data
// export const fetchUsers = (): Promise<User[]> => {
//   const mockData = generateMockData();
//   return Promise.resolve(mockData);
// };

// Update the fetchUsers function in userActions3.ts
export const fetchUsers = (filters?: any): Promise<User[]> => {
  const mockData = generateMockData();

  // Return the filtered users
  return Promise.resolve(mockData);
};
