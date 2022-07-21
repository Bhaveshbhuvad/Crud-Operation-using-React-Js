import {React, Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component
{
  constructor()
  {
    super();
    this.state={
      title: "My React First App",
      employeeData :[],
      act :0,
      index:''
    }
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    let employeeData=this.state.employeeData;
    let name=this.refs.txtName.value;
    let age=this.refs.txtAge.value;

    if(this.state.act === 0)
    {
      let newEmployee={
        "name" : name,
        "age" : age
      }
      employeeData.push(newEmployee);
    }
    else
    {
      let index=this.state.index;
      employeeData[index].name=name;
      employeeData[index].age=age;
    }

    this.setState({employeeData : employeeData, act:0})

    this.refs.myForm.reset();
  }

  handleEdit=(i)=>{
    let employeeData=this.state.employeeData[i];
    this.refs.txtName.value=employeeData.name;
    this.refs.txtAge.value=employeeData.age;
    this.setState({
      act:1,
      index : i
    });
  }

  handleDelete=(i)=>{
    let employeeData=this.state.employeeData;
    employeeData.splice(i,1);
    this.setState({
      employeeData : employeeData
    });
  }

  render()
  {
    let employeeData = this.state.employeeData;
    return(
      <div>
        <form ref="myForm" className='myForm'>
        <h1 className='App'>{this.state.title}</h1>
        <lable>Name</lable>
        <br></br>
        <input type="text" ref="txtName" placeholder='Enter Name'></input>
        <br></br>
        <lable>Age</lable>
        <br></br>
        <input type="text" ref="txtAge" placeholder='Enter Age'></input>
        <br></br>
        <button className='myButton' onClick={e=>this.handleSubmit(e)}>Save</button>
      </form>
      <table className='table'>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {
          employeeData.map((data, i) =>
          <tr key={i} className='formFeild'>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td><button className='myButton' onClick={e=>this.handleEdit(i)}>Edit</button></td>
            <td><button className='myButton' onClick={e=>this.handleDelete(i)}>Delete</button></td>
          </tr>
          )
        }
      </table>
      </div>
    )
  }
}

export default App
