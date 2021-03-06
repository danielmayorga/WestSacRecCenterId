import JsBarcode from 'jsbarcode';
import React, { useEffect } from 'react';
import { UserInfo } from './helper';
import style from "./Home.module.css";

export function Home(props: {userInfo : UserInfo}){
    const {userInfo} = props;
    useEffect(() =>{
        JsBarcode("#barcode", userInfo.id, {format:'code128' });
    },[userInfo.id]);

    return(
        <div className={style.center}>
            <div className='barcode-container'>
                <canvas id="barcode"></canvas>
            </div>
            <dl>
                <dt>Name:</dt>
                <dd>{userInfo.name}</dd>
            </dl>
        </div>
    );
}