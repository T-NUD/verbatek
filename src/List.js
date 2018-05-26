import React, { PureComponent } from "react";
import WindowedList from "react-windowed-list";
 
const CONTAINER_STYLE = {
  height: 500,
  overflow: "auto"
};
 
class List extends PureComponent {
  renderItem = (index, key) => {
    return (
      <div key={key}>I am rendering stuff for the item at index {index}!</div>
    );
  };
 
  render() {
    const { items } = this.props;
 
    return (
      <div>
        <h1>List example</h1>
 
        <div style={CONTAINER_STYLE}>
          <WindowedList
            itemRenderer={this.renderItem}
            length={items.length}
            type="uniform"
          />
        </div>
      </div>
    );
  }
}

export default List;