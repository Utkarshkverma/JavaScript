
(function chai(){ // ! Named IIFE
    console.log(`DB Connected`); //! IIFE  to run the function immediately when this script is loaded in browser to avoid error from pollution
})(); // ! Make sure to put ; after the end of this

((name)=>{ // ! Unnamed  IIFE
    console.log(`Hello ${name}!`);
})("Utkarsh");



