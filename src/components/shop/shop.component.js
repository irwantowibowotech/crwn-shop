import React, { Component } from "react";
import PreviewCollection from "../preview-collection/preview-collection.component";

import shopData from "./shop.data";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: shopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
