import React, { Component } from "react";
import "./index.css";
import Table from "./component/Table";
import Form from "./component/Form";
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks : [],
    }
  }
  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks
      });
    }
  }
  s4(){ return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1)};
  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-'
    + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
  }
  onSubmit = (data) =>{
    var { tasks }= this.state;
    if(data.id===''){
    data.id= this.generateID();
    tasks.push(data);
    }else{
      var index = this.findIndex(data.id);
      tasks[index]=data;
    };
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks)); 
  }
  findIndex = (id) =>{
    var{ tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index)=>{  
      if (task.id === id){
        result = index;
      }
    });
    return result;
  }
  onDelete = (id) =>{
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if(index !== -1){
      tasks.splice(index,1);
      this.setState({
        tasks : tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));  
    }
  }
render() {
  console.log(this.state.tasks)
    return(
      <div className="container">
        <div className="text-center">
          <h1>Intership</h1><hr/>
        </div>
        <div className="text-center">
        
        <Form 
          onSubmit={this.onSubmit}

          />
        
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
               <Table
              //  taskEditing={this.state.taskEditing}
               onSubmit={this.onSubmit}
               tasks={this.state.tasks}
               onDelete={this.onDelete}
                />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

