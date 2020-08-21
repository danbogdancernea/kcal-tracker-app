import React, { Component } from 'react'

export default class MacroCalculatorScreen extends Component {


        calculateCalories = () => {
            function find(id) {return document.getElementById(id);}

            var show = document.getElementById('result');
            show.style.display='block';

            var age = find("age".value)
            var height = find("height").value
            var weight = find("weight").value
            var activity = find("activity").value
            var result = 0
            if(age ==='' || height==='' || weight==='' || activity==="act"){
                show.style.display ='none';
                return;
            }
                
            else if(find("male").checked){
                switch(activity){
                    case "act_0":
                        result = 1.2 * (10 * weight + 6.25 * height - 5 * age + 5)
                        break;
                    case "act_1":
                        result = 1.375 * (10 * weight + 6.25 * height - 5 * age + 5)
                        break;
                    case "act_2":
                        result = 1.55 * (10 * weight + 6.25 * height - 5 * age + 5)
                        break;
                    case "act_3":
                        result = 1.725 * (10 * weight + 6.25 * height - 5 * age + 5)
                        break;
                    default: result = 0;
                }
            }
            else if (find("female").checked){
                switch(find("activity").value){
                    case "act_0":
                        result = 1.2 * (10 * weight + 6.25 * height -5 * age -161)
                        break;
                    case "act_1":
                        result = 1.375 * (10 * weight + 6.25 * height -5 * age -161)
                        break;
                    case "act_2":
                        result = 1.55 * (10 * weight + 6.25 * height -5 * age -161)
                        break;
                    case "act_3":
                        result = 1.725 * (10 * weight + 6.25 * height -5 * age -161)
                        break;
                    default: result = 0;
                }
            }
            if(result > 500){
            find("totalCalsLose").innerHTML = Math.round( result ) - Math.round(0.2 * result)
            find("totalCalsMaintain").innerHTML = Math.round( result )
            find("totalCalsGain").innerHTML = Math.round( result ) + Math.round(0.2 * result)
            }else{
                console.log("error");
            }
        }

        
    
    render(){
        return(
            <div className="macro-calculator">
                <h3>Find out how many calories you need!</h3>
                <form>
                    <div className="macro-calculator-container">
                        <div className="gender">
                        <label>Gender: </label>
                        <input type="radio" name="gender" id="male"/>Male
                        <input type="radio" name="gender" id="female"/>Female
                        </div>
                    </div>
                    <div className="macro-calculator-container">
                        <label>Age: </label>
                        <input type="number"
                        id="age"
                        placeholder="Enter your current age"
                        />
                    </div>
                    <div className="macro-calculator-container">
                        <label>Height (cm): </label>
                        <input type="number"
                        id="height"
                        placeholder="Enter your height (cm)"
                         
                        />
                    </div>
                    <div className="macro-calculator-container">
                        <label>Weight (kg): </label>
                        <input type="number"
                        id="weight"
                        placeholder="Enter your weight (kg)"
                        required/>
                    </div>
                    <div className="macro-calculator-container">
                        <label>Activity: </label>
                        <select id="activity">
                        <option value="act">Select your activity level</option>
                        <option value="act_0" >Sedentary activity (up to 30min/day)</option>
                        <option value="act_1" >Moderate activity (up to 60min/day)</option>
                        <option value="act_2" >Active (up to 120min/day)</option>
                        <option value="act_3" >Very active (performance athlete)</option>
                        </select>
                    </div>
                    <div className="calculate-macro-btn">
                    <input type="button" value="Calculate" onClick={this.calculateCalories}/>
                    </div>
                        <div className="result" id="result">
                            <div className="lose-weight">
                                To lose weight: <b><span id="totalCalsLose"></span></b> kcal per day.
                            </div>
                            <div className="maintain-weight">
                                To maintain your weight: <b><span id="totalCalsMaintain"></span></b> kcal per day.
                            </div>
                            <div className="gain-weight">
                                To gain weight: <b><span id="totalCalsGain"></span></b> kcal per day.
                            </div>
                        </div>

                </form>

            </div>
        )
    }
}