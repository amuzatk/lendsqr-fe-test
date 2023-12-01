export interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
}

export interface MonthlyIncome extends Array<string> {}

export interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  address: string;
}

export interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface User {
  status: string;
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
  userName: string;
  date: string;
  profile: Profile;
  socials: Socials;
}
