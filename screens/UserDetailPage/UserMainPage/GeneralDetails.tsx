import React from 'react'
import PersonalInfo from './sections/PersonalInfo'
import EducationNEmployment from './sections/Education&Employment'
import Socials from './sections/Socials'
import Guarantor from './sections/Guarantor'
import OtherVitals from './sections/OtherVitals'

const GeneralDetails = ({userDetails}) => {
  console.log(userDetails,'userDetails <<<====>> userDetails')
  return (
    <div>
      < PersonalInfo />
      {/* <EducationNEmployment />
      <Socials />
      <Guarantor />
      <OtherVitals /> */}
    </div>
  )
}

export default GeneralDetails
