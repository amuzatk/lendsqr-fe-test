// export interface Education {
//   level: string;
//   employmentStatus: string;
//   sector: string;
//   duration: string;
//   officeEmail: string;
// }

// export interface MonthlyIncome extends Array<string> {}

// export interface Guarantor {
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   gender: string;
//   address: string;
// }

// export interface Profile {
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   avatar: string;
//   gender: string;
//   address: string;
//   bvn: string;
//   currency:string
// }

// export interface Socials {
//   facebook: string;
//   instagram: string;
//   twitter: string;
// }

// export interface User {
//   userId: string;
//   status: string;
//   accountBalance: string;
//   accountNumber: string;
//   createdAt: string;
//   education: Education;
//   email: string;
//   guarantor: Guarantor;
//   id: string;
//   lastActiveDate: string;
//   orgName: string;
//   phoneNumber: string;
//   userName: string;
//   date: string;
//   profile: Profile;
//   socials: Socials;
//   // user: [];
// }

export interface MonthlyIncome {
  [key: number]: string;
  length: number;
}

export interface Education {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  monthlyIncome: MonthlyIncome;
  officeEmail: string;
  sector: string;
}

export interface Guarantor {
  address: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

export interface Profile {
  address: string;
  avatar: string;
  bvn: string;
  currency: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

export interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}

// export interface Status {
//   [key: number]: string;
// }
interface Status {
  [key: number]: string;
  array: string[];
}

export interface User {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  education: Education;
  email: string;
  guarantor: Guarantor;
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  profile: Profile;
  socials: Socials;
  userName: string;
  status: Status;
}
