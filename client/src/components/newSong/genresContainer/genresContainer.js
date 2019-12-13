import React from "react";
import Checkbox from "../../common/checkbox";
import './genresContainer.css';
import { genres as list } from "../../../constants/genres";

class GenresContainer extends React.Component {
  constructor(props) {
    super(props);
    this.checkboxes = this.props.genres;
  }

  render() {
    return (
      <div className="genres">
        {list.map(item => (
          <label key={item.key} className="item">
            {item.name}
            <Checkbox
              name={item.name}
              checked={this.props.genres.get(item.name)}
              onChange={this.props.onChange}
            />
          </label>
        ))}
      </div>
    );
  }
}

export default GenresContainer;
