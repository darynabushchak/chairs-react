import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import SearchBar from "../../common/SearchBar";
import Select from "../../common/Select";
import styles from "./Catalog.module.css";
import Button from "../../common/Button";
import CatalogItem from "../../page_related/CatalogItem/CatalogItem";
import Footer from "../../common/Footer";
import getChairs from "../../../api";
import axios from "axios";


function Catalog() {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [simulatedData, setChairs] = useState([]);

  const categories = [
    { label: "Price", options: ["Large", "Medium", "Small"] },
  ];

  useEffect(() => {
    getChairs().then((data) => {
      setChairs(data);
    });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filterItems = async () => {
    setLoading(true);
  
    try {
      const response = await axios.get('http://localhost:3001/chairs');
      console.log(response.data)
      let filteredDataCopy = response.data;
  
      document.querySelectorAll("select").forEach((filter, index) => {
        const filterValue = filter.value.toLowerCase().trim();
        console.log(filterValue)
        if (filterValue) {
          console.log(filteredDataCopy.filter((item) => String(item.size).toLowerCase().trim() === filterValue))
          filteredDataCopy = filteredDataCopy.filter((item) => String(item.size).toLowerCase().trim() === filterValue);
        }
      });
  
      setFilteredData(filteredDataCopy);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const searching = () => {
    const searchBar = document.getElementById("search-bar");
    const searchValue = searchBar.value.trim().toLowerCase();

    const searchedItems = simulatedData.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );

    setFilteredData(searchedItems);
  };

  useEffect(() => {
    setFilteredData(simulatedData);
  }, [simulatedData]);
  return (
    <>
      <div className={styles.catalog}>
        <Header
          link={styles.link}
          homeButton={styles.homeButton}
          catalogButton={styles.catalogButton}
          cartButton={styles.cartButton}
          className={styles.header}
        />
        <div className={styles.filteringBar}>
          <div className={styles.filters}>
            {categories.map((category, index) => (
              <Select
                key={index}
                className={styles.selection}
                id={`select-${index}`}
                options={category.options}
                onChange={(e) => {
                  console.log(e);
                  handleCategoryChange(e.target.value);
                }}
                disabled={index === 0 && selectedCategory === "all"}
              />
            ))}
            <div className={styles.applyButton}>
              <Button
                onClick={filterItems}
                className={styles.apply}
                text="Apply"
              />
            </div>
          </div>

          <div className={styles.searcher}>
            <SearchBar id="search-bar" className={styles.searchBar} />
            <Button
              onClick={searching}
              className={styles.searchBarButton}
              text="Search"
            />
          </div>
        </div>
        <div className={styles.catalogItems}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            filteredData.map((item, key) => (
              <CatalogItem
                key={key}
                className={styles.catalogItem}
                header={`Chair ${key + 1}`}
                id={item.id}
                text={item.text}
                title={item.title}
                price={item.price}
              />
            ))
          )}
        </div>
        <Footer
          className={styles.footer}
          footerInfo={styles.footerInfo}
          footerLogo={styles.footerLogo}
          footerLinks={styles.footerLinks}
          footerCopyrights={styles.footerCopyrights}
        />
      </div>
    </>
  );
}

export default Catalog;
