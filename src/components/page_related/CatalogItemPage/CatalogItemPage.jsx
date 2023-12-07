import styles from "./CatalogItemPage.module.css";
import { Link } from "react-router-dom";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Select from "../../common/Select";
import SearchBar from "../../common/SearchBar";
import Button from "../../common/Button";
import DentalChair from "../../../images/dental_chair.png";
import { data } from "../../pages/Catalog/Catalog";

const CatalogItemPage = () => {
  const { id } = useParams();
  const [chairData, setChairData] = useState(data);

  useEffect(() => {
    const numericId = parseInt(id, 10);
    const foundChair = data.find((item) => item.id === numericId);

    if (foundChair) {
      setChairData(foundChair);
    } else {
      console.error(`Chair with id ${numericId} not found`);
    }
  }, [id]);

  if (!chairData) {
    return null;
  }

  const characteristics = [];

  const filteringBarItems = (items) => {
    return items.map((options, index) => (
      <Select
        key={index}
        className={styles.selection}
        id={`select-${index}`}
        options={options}
      />
    ));
  };

  return (
    <>
      <Header
        link={styles.link}
        homeButton={styles.homeButton}
        catalogButton={styles.catalogButton}
        cartButton={styles.cartButton}
        className={styles.header}
      />
      <div className={styles.catalogItemPage}>
        <div className={styles.top}>
          <div className={styles.photo}>
            <img src={DentalChair} alt="" className="dentalChair" width="180px" />
          </div>
          <div className={styles.info}>
            <div className={styles.characteristics}>
              {Object.keys(characteristics).map((key) => (
                <div key={key} className={styles.char}>
                  {characteristics[key]}
                </div>
              ))}
            </div>
            <div className={styles.title}>{chairData.title}</div>
            <div className={styles.text}>{chairData.text}</div>
            <div className={styles.fields}>
              <div>
                Countable Field
                <SearchBar className={styles.searchBar} />
              </div>
              <div className={styles.select}>
                Option Field
                {filteringBarItems([["Option 1", "Option 2", "Option 3"]])}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>Price: ${chairData.price}</div>
          <Link to="/catalog" className={styles.goBack} >Go back</Link>
          <Button className={styles.addCart} text="Add to Cart" />
        </div>
      </div>
      <Footer
        className={styles.footer}
        footerInfo={styles.footerInfo}
        footerLogo={styles.footerLogo}
        footerLinks={styles.footerLinks}
        footerCopyrights={styles.footerCopyrights}
      />
    </>
  );
};

export default CatalogItemPage;
