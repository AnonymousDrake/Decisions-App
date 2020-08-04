import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component{
    
    state={
        options: [],
        selectedOption: undefined
    };
    handleSelectedOption= () =>{
        this.setState(()=>({selectedOption: undefined}))
    }
    handlePick= () =>{
        const i= Math.floor(Math.random()*this.state.options.length)
        this.setState(()=>({selectedOption:this.state.options[i]}))
    };
    handleDeleteAll= () => {
        this.setState(()=>( {options: []}))
    };
    handleDeleteOne= (optionToRemove) => {
        this.setState((prevState)=>({options: prevState.options.filter(option=>optionToRemove !== option)}))
    };
    handleAddOption= (newOption) => {
        if(!newOption){
            return "Enter a valid option!"
        }else if(this.state.options.indexOf(newOption) > -1){
            return "This option already exists."
        }
        this.setState(preState=>({options : preState.options.concat(newOption)}));
    };
    componentDidMount(){
        try{
            const options=JSON.parse(localStorage.getItem("options"));
            if(options){
                this.setState(()=>({options}));
            }
        }catch(e){
            //Do nothing
        }
    };
    componentDidUpdate(prevState){
        if(prevState.options !== this.state.options){
            const json=JSON.stringify(this.state.options)
            localStorage.setItem('options',json);
        }
    };
    render(){
        const subtitle="Put your life in the hands of a computer.";
        return(
        <div>
            <Header 
            title={this.props.title} subtitle={subtitle}
            />
            <div className="container">
                <Action 
                handlePick={this.handlePick}
                options={!this.state.options.length}
                />
                <div className="widget">
                    <Options 
                    handleDeleteAll={this.handleDeleteAll}
                    options={this.state.options}
                    handleDeleteOne={this.handleDeleteOne}
                    />
                    <AddOption 
                    handleAddOption={this.handleAddOption}
                    />
                </div>
            </div>
            <OptionModal
            selectedOption={this.state.selectedOption}
            handleSelectedOption={this.handleSelectedOption}
            />
        </div>
        );
    };
};