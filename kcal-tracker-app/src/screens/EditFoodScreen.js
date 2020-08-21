import React, { Component } from 'react';
import axios from 'axios';

export default class EditFoodScreen extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeKcal = this.onChangeKcal.bind(this);
        this.onChangeProtein = this.onChangeProtein.bind(this);
        this.onChangeFats = this.onChangeFats.bind(this);
        this.onChangeCarbs = this.onChangeCarbs.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            products: []
        }
    }

    async componentDidMount() {
      await  axios.get('http://localhost:5000/products/' + this.props.match.params.id)

            .then(res => {
                let details = [];
                for(var i in res.products){
                    details.push({name:i, value: res.products})
                }
                this.setState({products: details})
            })
            .catch(function (err) {
                console.log(err);
            })
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeWeight(e) {
        this.setState({
            weight: e.target.value
        })
    }

    onChangeKcal(e) {
        this.setState({
            kcal: e.target.value
        })
    }

    onChangeProtein(e) {
        this.setState({
            protein: e.target.value
        })
    }

    onChangeFats(e) {
        this.setState({
            fats: e.target.value
        })
    }

    onChangeCarbs(e) {
        this.setState({
            carbs: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const product = {
            name: this.state.name,
            weight: this.state.weight,
            kcal: this.state.kcal,
            protein: this.state.protein,
            fats: this.state.fats,
            carbs: this.state.carbs
        }

        axios.post('http://localhost:5000/products/update/' + this.props.match.params.id, product)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        
        return (
            <div className="edit-product">
                <h3>Edit the product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="edit-product-container">
                        <label>Name: </label>
                        <input type="text"
                            required
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="edit-product-container">
                        <label>Weight (grams): </label>
                        <input type="text"
                            required
                            onChange={this.onChangeWeight} />
                    </div>
                    <div className="edit-product-container">
                        <label>Kcal: </label>
                        <input type="text"
                            required
                            onChange={this.onChangeKcal} />
                    </div>
                    <div className="edit-product-container">
                        <label>Protein (grams): </label>
                        <input type="text"
                            required
                            onChange={this.onChangeProtein} />
                    </div>
                    <div className="edit-product-container">
                        <label>Fats (grams): </label>
                        <input type="text"
                            required
                            onChange={this.onChangeFats} />
                    </div>
                    <div className="edit-product-container">
                        <label>Carbs (grams): </label>
                        <input type="text"
                            required
                            onChange={this.onChangeCarbs} />
                    </div>
                    <div className="edit-product-btn">
                        <input type="submit" value="Edit Product" />
                    </div>
                </form>
          </div>
        )
    }
}
