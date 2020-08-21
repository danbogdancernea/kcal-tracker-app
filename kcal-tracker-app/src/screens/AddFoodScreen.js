import React, {Component} from 'react';
import axios from 'axios';

export default class AddProductScreen extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeKcal =  this.onChangeKcal.bind(this);
        this.onChangeProtein = this.onChangeProtein.bind(this);
        this.onChangeFats = this.onChangeFats.bind(this);
        this.onChangeCarbs = this.onChangeCarbs.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
           name:'',
           weight:'',
           kcal:'',
           protein:'',
           fats:'',
           carbs:''
        }
    }

    onChangeName (e){
        this.setState({
            name: e.target.value
        })
    }

    onChangeWeight (e){
        this.setState({
            weight: e.target.value
        })
    }

    onChangeKcal (e){
        this.setState({
            kcal: e.target.value
        })
    }

    onChangeProtein (e){
        this.setState({
            protein: e.target.value
        })
    }

    onChangeFats (e) {
        this.setState({
            fats: e.target.value
        })
    }

    onChangeCarbs (e) {
        this.setState({
            carbs: e.target.value
        })
    }

    onSubmit (e) {
        e.preventDefault();

        const product = {
            name: this.state.name,
            weight: this.state.weight,
            kcal: this.state.kcal,
            protein: this.state.protein,
            fats: this.state.fats,
            carbs: this.state.carbs
        }

        axios.post('http://localhost:5000/products/addproduct', product)
            .then(res => console.log(res.data));
        
        window.location ='/';
    }

    render(){
    return(
        <div className="add-product">
            <h3>Add new product</h3>
            <form onSubmit={this.onSubmit}>
                <div className="add-product-container">
                    <label>Name: </label>
                    <input type="text"
                    required
                    placeholder="Enter a name"
                    value={this.state.name}
                    onChange={this.onChangeName}/>
                </div>
                <div className="add-product-container">
                    <label>Weight (grams): </label>
                    <input type="text"
                    required
                    placeholder="Enter the weight (grams)"
                    value={this.state.weight}
                    onChange={this.onChangeWeight}/>
                </div>
                <div className="add-product-container">
                    <label>Kcal: </label>
                    <input type="text"
                    required
                    placeholder="Enter kcal"
                    value={this.state.kcal}
                    onChange={this.onChangeKcal}/>
                </div>
                <div className="add-product-container">
                    <label>Protein (grams): </label>
                    <input type="text"
                    required
                    placeholder="Enter the protein amount"
                    value={this.state.protein}
                    onChange={this.onChangeProtein}/>
                </div>
                <div className="add-product-container">
                    <label>Fats (grams): </label>
                    <input type="text"
                    required
                    placeholder="Enter the fats amount"
                    value={this.state.fats}
                    onChange={this.onChangeFats}/>
                </div>
                <div className="add-product-container">
                    <label>Carbs (grams): </label>
                    <input type="text"
                    required
                    placeholder="Enter the carbs amount"
                    value={this.state.carbs}
                    onChange={this.onChangeCarbs}/>
                </div>
                <div className="add-product-btn">
                    <input type="submit" value="Create Product"/>
                </div>
            </form>
        </div>
    )
    }
}