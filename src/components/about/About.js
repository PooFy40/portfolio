import React, { Component } from 'react'
import classes from './About.module.css';
import "animate.css/animate.min.css";

// class About extends Component {
    const About = (props)=> {

        return (
            <div className={classes.box} id="about">
                 <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> {props.disc}</p>
                        <p className={classes.br}>{props.disc2}</p>
                    </div>
            </div>
        )
    }


export default About;