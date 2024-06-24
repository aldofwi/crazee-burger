import { useState } from "react";

export const useSuccessMsg = (timeDelay = 2000) => { 
    // State
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Comportements
    const displaySuccessMsg = () => { 
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, timeDelay);
      }

    return {isSubmitted, displaySuccessMsg}
  }

  /*
        Custom HOOK
  */