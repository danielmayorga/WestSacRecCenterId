import React from 'react';
import style from './IOsInstructions.module.css';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from './helper';

interface IOsInstructionsProps{
    setIOsWebIgnore: React.Dispatch<React.SetStateAction<boolean>>;
}

export function IOsInstructions(props: IOsInstructionsProps){
    const navigator = useNavigate();
    const ignore = () => {
        setIgnoreIOs();
        props.setIOsWebIgnore(true);
        navigator(AppRoutes.Home);
    }

    return (
        <div className={style.center}>
            <h1>Install West Sac Id</h1>
            <p>
                Install this application on your home screen for quick and easy access.
            </p>
            <p>
                Just tap <img className={style.shareImage} src="./iphone-share-icon.jpeg" alt='Share Icon' />then 'Add to Home Screen'
            </p>
            <button onClick={ignore} className='btn btn-outline-secondary'> Continue Anyway </button>
        </div>
    );
}

function isIOs() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator?.platform)
    // iPad on iOS 13 detection
    || (navigator?.userAgent.includes("Mac") && "ontouchend" in document)
}

// Ignore Notification...It's in their best interest but if they want to use the website instead they can
const IGNORE_KEY = "IOsIgnore";
let ignoreState = localStorage.getItem(IGNORE_KEY) != null;
const ignoreIOs = () => ignoreState;

export function setIgnoreIOs(){
    localStorage.setItem(IGNORE_KEY, "ignore");
    ignoreState = true;
}

//check if you're a standalone web app
const isStandalone = () =>  window.matchMedia('(display-mode: standalone)').matches;

/**
 * We need to have instructions on how to add this to the home screen.
 * Users can use the web app, but it's inconvinent and they need to re-navigate to it.
 * Just install it since you're going to the gym and it's one button press
 * @returns iOS running device on browser with no Web App
 */
export const IOsNeedsToSee = () => !ignoreIOs() && isIOs() && !isStandalone();