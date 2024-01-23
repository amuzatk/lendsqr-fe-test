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
  email?: string;
  relationship?: string;
  firstName?: string;
  gender?: string;
  lastName?: string;
  phoneNumber?: string;
}


 interface Profile {
  address?: string;
  email?: string;
  avatar?: string;
  maritalStatus?: string;
  noOfChildren?: number;
  residenceType?: string;
  bvn?: string;
  currency?: string;
  firstName?: string;
  gender?: string;
  lastName?: string;
  phoneNumber?: string;
}

 interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface Status {
  [key: number]: string;
  array: string[];
}

export interface User {
  accountBalance?: string;
  accountNumber?: string;
  lensqrRegNumber?: string;
  bankName?: string;
  createdAt?: string;
  createdTime?: string;
  education?: Education;
  email?: string;
  guarantor: Guarantor;
  id?: string;
  lastActiveDate?: string;
  orgName?: string;
  phoneNumber?: string;
  profile: Profile;
  socials: Socials;
  userName?: string;
  status?: Status;
}

