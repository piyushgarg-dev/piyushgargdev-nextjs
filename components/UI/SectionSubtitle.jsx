import React from "react"
import { AiFillYoutube } from "react-icons/ai"
import classes from "../../styles/subtitle.module.css"

const SectionSubtitle = (props) => {
  return (
    <div className={`${classes.section__subtitle} flex items-center space-x-4`}>
      <div>{props.subtitle}</div>
      <AiFillYoutube size={40} />
    </div>
  )
}

export default SectionSubtitle
