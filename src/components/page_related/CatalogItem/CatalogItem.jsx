import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/chairs_in_cart';
import Button from '../../common/Button';
import styles from './CatalogItem.module.css';
import DentalChair from '../../../images/dental_chair.png';

function CatalogItem(props) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(props));
  };

  return (
    <div id={props.id} className={props.className}>
      <header>{props.header}</header>
      <img
        src={DentalChair}
        alt=""
        className="dentalChair"
        width="180px"
      />
      <h3>{props.title}</h3>
      {props.text ? (
        props.text
      ) : (
        <section>
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s,
          </p>
          <p>
            when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </p>
          <p>It has survived not only five centuries, but also the leap into electronic</p>
        </section>
      )}
      <div className={styles.price}>Price: ${props.price}</div>
      <Link
        to={{
          pathname: `/catalogItem/${props.id}`,
        }}
      >
        <Button className={styles.viewButton} text="View More" />
      </Link>
      <Button
        className={styles.addToCartButton}
        text="Add to Cart"
        onClick={handleAddToCart}
      />
    </div>
  );
}

export default CatalogItem;
