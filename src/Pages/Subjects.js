import React from 'react'
import { createUseStyles } from 'react-jss'
import SubjectsTable from '../Components/SubjectsTable/SubjectsTable'

const homeStyles = createUseStyles({
  homeWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
  }
})

const Subjects = () => {
    const classes = homeStyles()
  return (
    <div className={classes.homeWrapper}>
        <SubjectsTable/>
    </div>
  )
}

export default Subjects