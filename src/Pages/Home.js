import React from 'react'
import Sidebar from '../Components/SideBar/Sidebar'
import BooksSections from '../Components/BooksComponent/BooksSections'
import { createUseStyles } from 'react-jss'

const homeStyles = createUseStyles({
  homeWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
  }
})

const Home = () => {
    const classes = homeStyles()
  return (
    <div className={classes.homeWrapper}>
        <Sidebar/>
        <BooksSections/>
    </div>
  )
}

export default Home