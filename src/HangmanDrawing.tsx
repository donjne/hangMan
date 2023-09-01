import React from 'react'

    type HangmanDrawingProps = {
        numberOfGuesses: number
    }

function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {


    const HEAD = (
        <div style={{
            width: "20px",
            height: "20px",
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top: "40px",
            right: "-15px",
        }} 
        />
    )

    const BODY = (
        <div style={{
            width: "10px",
            height: "50px",
            background: "black",
            position: "absolute",
            top: "70px",
            right: "0",
        }} 
        />
    )

    const RIGHT_ARM = (
        <div style={{
            width: "50px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "95px",
            right: "-50px",
            rotate: "-30deg",
            transformOrigin: "left bottom",
        }} 
        />
    )

    const LEFT_ARM = (
        <div style={{
            width: "50px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "95px",
            right: "10px",
            rotate: "30deg",
            transformOrigin: "right bottom",
        }} 
        />
    )

    const RIGHT_LEG = (
        <div style={{
            width: "50px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "110px",
            right: "-40px",
            rotate: "60deg",
            transformOrigin: "left bottom",
        }} 
        />
    )

    const LEFT_LEG = (
        <div style={{
            width: "50px",
            height: "10px",
            background: "black",
            position: "absolute",
            top: "110px",
            right: "0",
            rotate: "-60deg",
            transformOrigin: "right bottom",
        }} 
        />
    )

    const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

  return (
    <div style={{position: "relative",}}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{position: "absolute", top: "0", right: "0", height: "50px", width: "10px", background: "black", marginLeft: "70px"}}></div>
        <div style={{height: "10px", width: "100px", background: "black", marginLeft: "70px"}}></div>
        <div style={{height: "190px", 
            width: "10px", 
            background: "black", 
            marginLeft: "70px"}}>
        </div>
        <div style={{height: "10px", width: "150px", background: "black",}}></div>
    </div>
  )
}

export default HangmanDrawing