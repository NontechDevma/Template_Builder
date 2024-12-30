// App.jsx
import { useEffect, useRef } from 'react';
import Typed from 'typed.js'

const ThreeJSScene = () => {
    const animateRef = useRef('null');

  useEffect(() => {
    const typed = new Typed(animateRef.current,{
        strings : ["Build Your Resume For Your Career Enhancement.", "Create Your Biodata For Your Personal Information.", "Make Your College Template For Your College Projects.", "Build Your School Template For Your School Assignment."],
        typeSpeed:50,
        backSpeed:50,
        loop:true,
      })
  
    //   console.log(animateRef)
      return () => {
        typed.destroy()
      }
  }, []);

  return <div style={{
    fontWeight: "800",
    color: "#DD2859",
    // fontFamily:"algerian",
    textAlign:"center",
  }} ref={animateRef} />;
};

export default ThreeJSScene;
