import React, {Component, useState} from 'react';
import './FavName.css';

class FavName extends React.Component {

 
    count = 0
    state = {  //이 부분 db 만들어서 연결
        mainValue: "",
        subValue: ""
    };

    onChange = (e) => {

        const mainValue = this.mainValue.value;
        const subValue = this.subValue.value;

        this.setState({mainValue : mainValue, subValue: subValue});
    }

    addBtn(){
        this.count = this.count +1
        return(
            <button value = "state.mainValue" id = "count"></button>
            )
        
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const mainValue = this.state.mainValue;
        const subValue = this.state.subValue;
        alert("Upload Complete")

        console.log (mainValue);
        console.log(subValue);
        this.addBtn();
    };

    render(){
        console.log('State: ', this.state)
        return (
        <div className = "Name">
            <div><input type = "text" placeholder = "주제 제목" className = "Main_name" onChange={this.onChange} ref = {(input) => this.mainValue = input}/></div>
            <div><textarea type = "text" placeholder = "주제에 관한 설명(없어도 무관)" className = "Sub_explain" onChange={this.onChange}
            ref = {(input) => this.subValue = input}/></div>
            <div><button className = "CreateBtn" onClick={this.handleSubmit}>For Maniac!</button></div>
        </div>
        );
    }
}

export default FavName