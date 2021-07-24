import React, {Component } from 'react';
import './App.css';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Content from "./components/Content"


class App extends Component {
  constructor(props){ //초기화 담당
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'Web', sub : 'World Wide Web!'},
      welcome:{title:'Welcome', des:'Hello, React!!'},
	  selected_content_id:1,
      contents:[
        {id:1, title:'HTML', des:'HTML is for information'},
        {id:2, title:'CSS', des:'CSS is for design'},
        {id:3, title:'JavaScript', des:'Javascript is for interactive'},
      ]
    }
  }
  render(){
    var _title, _des = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _des = this.state.welcome.des;
    }
    else if(this.state.mode === 'read'){
		var i = 0;
		while(i < this.state.contents.length){
			var data = this.state.contents[i];
			if(data.id === this.state.selected_content_id){
				_title = data.title;
				_des = data.des;
				break;
			}
			i = i+1;
		}
    }
    return (
        <div className="App">
            <Subject 
				title = {this.state.subject.title} 
				sub = {this.state.subject.sub}
				onChangePage={function(){
					this.setState({
						mode:'welcome'
					});
				}.bind(this)}
			>
            </Subject>
            <TOC onChangePage={function(id){
				this.setState({
					mode:'read',
					selected_content_id:Number(id)
				});
			}.bind(this)} 
			data={this.state.contents}></TOC>
            <Content title = {_title} des = {_des}></Content>
        </div>
    );
  }
}

export default App;
