import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

const propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
};

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    const { item, addItem } = this.props;
    addItem(item);
  }

  render() {
    const { name, price, imageUrl } = this.props.item;

    return (
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <CustomButton inverted onClick={this.handleAddToCart}>
          Add to cart
        </CustomButton>
      </div>
    );
  }
}

CollectionItem.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
