import './Reset.scss';
import staticText from '../../utils/staticText';
import { useState } from 'react';

function Reset() {
    const { resetFrmHeading } = staticText;
    let initialdata = {
        username: {
            value: '',
            error: '',
            required: true
        }
    }
    const [data, setData] = useState<any>(initialdata);
    const validateUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        console.log("name: ", name);
        console.log("value: ", value);
        let tempData: any = { ...data };
        tempData[e.target.name] = { ...data[e.target.name] }
        tempData[e.target.name].value = e.target.value;
        if (value === '') {
            tempData[e.target.name].error = 'Please enter username.';
        }
        else {
            tempData[e.target.name].error = '';
        }
        setData(tempData);
    }
    const OnContinue = () => {
        let tempData: any = { ...data };
        if (data.username.value === '') {
            tempData['username'].error = 'Please enter username.';
        }
        else {
            tempData['username'].error = '';
        }
        console.log("after continue: ",tempData);
        setData(tempData); 
    }
    return (
        <div className="resetMain">
            <div className="resetSection">
                <div>
                    <h3 className="resetHeading">{resetFrmHeading}</h3>
                </div>
                <form>
                    <input
                        className="resetTextbox"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                        value={data.username.value}
                        onChange={validateUsername}
                    />
                    <div className="errorMesg">
                        {data.username.error !== '' ? (<p>Please enter the username</p>) : ('')}
                    </div>
                    <div className="resetBtns">
                        <button type="button" className="resetBtnCon" onClick={OnContinue}>Continue</button>
                        <button type="button" className="resetBtnCan">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reset;