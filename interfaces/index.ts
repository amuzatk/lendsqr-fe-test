 interface MonthlyIncome {
  [key: number]: string;
  length: number;
}

 interface Education {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  monthlyIncome: MonthlyIncome;
  officeEmail: string;
  sector: string;
}

 interface Guarantor {
  address: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

 interface Profile {
  address: string;
  avatar: string;
  bvn: string;
  currency: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

 interface Socials {
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
  createdTime: string;
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
