

export default function UserInput({onChangeInput,userInput}) {
   
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} onChange={(e) => onChangeInput('initialInvestment', e.target.value)} required />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="number" value={userInput.annualInvestment} onChange={(e) => onChangeInput('annualInvestment', e.target.value)} required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} onChange={(e) => onChangeInput('expectedReturn', e.target.value)} required />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" value={userInput.duration} onChange={(e) => onChangeInput('duration', e.target.value)} required />
                </p>
            </div>
        </section>
    );
}