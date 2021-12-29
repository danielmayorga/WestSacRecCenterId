import React, { FormEvent, useEffect, useState } from "react";
import { OnlyNumberRegex, UserInfo, AppRoutes, NumericPatternRegex } from './helper';
import JsBarcode from "jsbarcode";
import './Create.css';
import { useNavigate } from "react-router-dom";

export function Create(props :{ setUserInfo: (userInfo: UserInfo) => void }){
    const[id, setId] = useState('0');
    const[name, setName] = useState('');
    const navigator = useNavigate();
    const { setUserInfo } = props;
    
    useEffect(() =>{
        if(id != null && id.match(OnlyNumberRegex)){
            JsBarcode("#barcode", id, {format:'code128' });
        }
    }, [id]);

    /** Set local storage and go to Home Page */
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        let userInfo: UserInfo = { name, id};
        if(!id.match(OnlyNumberRegex)) return ;
        setUserInfo(userInfo);
        navigator(AppRoutes.Home);
    }

    return(
        <div>
            {}
            <div className="barcode-container">
                <canvas id="barcode"></canvas>
            </div>
            
            <form onSubmit={onSubmit}>
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
                        onChange={e => setName(e.target.value)}
                        required />
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
                        onChange={e => setId(e.target.value)} 
                        pattern={NumericPatternRegex}
                        title="Please enter a numeric input. No letters, spaces or symbols."
                        required />
                    <div id="identifierHelp" className="form-text">
                        Numeric Code to generate bar code. Provided by the Gym
                    </div>
                </div>
                <div className="button-container">
                <button id="submit" type="submit" className="btn btn-primary">Create Rec Center Id</button>
                </div>
            </form>
        </div>
    );
}