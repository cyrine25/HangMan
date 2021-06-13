import React from 'react'
import Rod from "../../assests/Rod.PNG"
import Neck from "../../assests/Neck.PNG"
import Body from "../../assests/Body.PNG"
import LeftArm from "../../assests/LeftArm.PNG"
import RightArm from "../../assests/RightArm.PNG"
import RightLeg from "../../assests/RightLeg.PNG"
import LeftLeg from "../../assests/LeftLeg.PNG"

const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length

  return (
    <div height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      {errors === 0 && <img src={Rod} alt="Rod" />}
      {/* <!-- Neck --> */}
      {errors === 1 && <img src={Neck} alt="Neck" />}
      {/* <!-- Body --> */}
      {errors === 2 && <img src={Body} alt="Body" />}
      {/* <!-- LeftArm --> */}
      {errors === 4 && <img src={LeftArm} alt="LeftArm" />}
      {/* <!-- RightArm --> */}
      {errors === 3 && <img src={RightArm} alt="RightArm" />}
      
      {/* <!-- LeftLeg --> */}
      {errors === 6 && <img src={LeftLeg} alt="LeftLeg" /> }
      {/* <!-- RightLeg --> */}
      {errors === 5 && <img src={RightLeg} alt="RightLeg" /> }
      
    </div>
  )
}

export default Figure