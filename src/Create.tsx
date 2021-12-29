import React, { useEffect, useState } from "react";
import {OnlyNumberRegex} from './helper';
import JsBarcode from "jsbarcode";
import './Create.css';

export function Create(){
    const[id, setId] = useState('0');
    const[name, setName] = useState('');
    
    useEffect(() =>{
        if(id != null && id.match(OnlyNumberRegex)){
            JsBarcode("#barcode", id, {format:'code128' })
        }
    }, [id]);

    return(
        <div>
            {}
            <div className="barcode-container">
                <canvas id="barcode"></canvas>
            </div>
            
            <form>
                <div className="mb-3">
                    <label 
                        className="form-label"
                        htmlFor="member">
                            Gym Member Name
                    </label>
                    <input 
                        name="member"
                        id="member"
                        value={name} 
                        className="form-control"
                        onChange={e => setName(e.target.value)}/>
                    <div id="memberHelp" className="form-text">Your Name (i.e. Jane Doe)</div>
                </div>
                <div className="mb-3">
                    <label 
                        className="form-label"
                        htmlFor="identifier">
                        Gym Identifier Number
                    </label>
                    <input 
                        name="identifier"
                        id="identifier"
                        value={id} 
                        className="form-control"
                        onChange={e => setId(e.target.value)} />
                    <div id="identifierHelp" className="form-text">Numeric Code to generate bar code. Provided by the Gym</div>
                </div>
                <div className="button-container">
                <button id="submit" type="submit" className="btn btn-primary">Create Rec Center Id</button>
                </div>
            </form>
        </div>
    );
}