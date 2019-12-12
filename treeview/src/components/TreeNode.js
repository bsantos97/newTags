import React, { Component } from 'react';
import Arrow from '../components/Arrow';
import CheckContent from '../components/CheckContent';


export default class TreeNode extends Component {

    constructor(props) {
        super(props);
        this.state = {collapsed: false, showCheckContent: false, hide: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {  
    this.setState({
      showCheckContent: !this.state.showCheckContent
    });
    }

    onClick() {
        
      this.setState({
            collapsed: !this.state.collapsed
        });

    }

    hideClick(){
        this.setState({
            collapsed: !this.state.collapsed
        });

    }

    render() {
        
        let subtree = null;
        if (this.props.data.children) {
          subtree = this.props.data.children.map(function(child) {
                        return <TreeNode key={child.id} data={child}/>;
                    }.bind(this));
        }

        var arrowClassName = 'tree-node-arrow';
        var containerClassName = 'tree-node-children';
        var checkClassName = 'check-tree';
        if (!this.state.collapsed) {
            arrowClassName += ' tree-node-arrow-collapsed';
            containerClassName += ' tree-node-children-collapsed';
            checkClassName += 'check-tree-collapsed';
        }

        if (this.state.showCheckContent) {
            return (
            <div >
                <a data-id={this.props.data.id}>
                    {this.props.data.name}: {this.props.data.content} 
                </a>
                <CheckContent/>
                <button onClick={this.handleClick}>Aceptar</button>
            </div>
          );
        }


        if (subtree) {
          return (
            <div className="tree-node">
                <Arrow arrowClassName={arrowClassName} onClick={this.onClick.bind(this)} />  
                <a data-id={this.props.data.id} onClick={this.handleClick}>
                    {this.props.data.name}: {this.props.data.content} 
                </a>
                <div className={containerClassName}>
                    {subtree}
                </div>
            </div>
          );
        }
        else {
          return (
            <div className="tree-node-leaf">
                <a data-id={this.props.data.id} onClick={this.handleClick}>
                    {this.props.data.name}: {this.props.data.content} 
                </a>
            </div>
        );
        }

        
    }
};
