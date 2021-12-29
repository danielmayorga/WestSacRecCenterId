import React,{ useEffect } from 'react';
import {OnlyNumberRegex} from './helper';

export function Home(){

    return(
        <div>
            <canvas id="barcode"></canvas>
            <dl>
                <dt>Name:</dt>
                <dd></dd>
            </dl>
        </div>
    );
}