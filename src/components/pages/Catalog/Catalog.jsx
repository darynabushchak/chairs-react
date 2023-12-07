import React, { useState, useEffect, useMemo } from "react";
import Header from "../../common/Header";
import SearchBar from "../../common/SearchBar";
import Select from "../../common/Select";
import styles from "./Catalog.module.css";
import Button from "../../common/Button";
import CatalogItem from "../../page_related/CatalogItem/CatalogItem";
import Footer from "../../common/Footer";

export const data = [
  { id: 1, title: "Chair A", text: "Comfortable chair", price: 60 },
  { id: 2, title: "Chair B", text: "Modern chair", price: 300 },
  { id: 3, title: "Chair C", text: "Classic chair", price: 550 },
];

function Catalog() {
  const [catalogData, setCatalogData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const categories = [
    { label: "Price", options: ["all", "Expensive", "Medium", "Cheap"] },
  ];

  const simulatedData = useMemo(() => data, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const filterByPrice = (catalogData, filterValue) => {
    return catalogData.filter((item) => {
      switch (filterValue) {
        case "cheap":
          return item.price < 70;
        case "medium":
          return item.price >= 70 && item.price < 500;
        case "expensive":
          return item.price >= 500;
        default:
          return true;
      }
    });
  };

  const filterItems = () => {
    setLoading(true);

    let filteredDataCopy = [...simulatedData];

    document.querySelectorAll("select").forEach((filter, index) => {
      const filterValue = filter.value.toLowerCase().trim();
      if (filterValue && filterValue !== "all") {
        filteredDataCopy = filterByPrice(filteredDataCopy, filterValue);
      }
    });

    setFilteredData(filteredDataCopy);
    setLoading(false);
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
    setCatalogData(simulatedData);
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
                onChange={(value) =>
                  index === 0
                    ? handleCategoryChange(value)
                    : handleSubcategoryChange(value)
                }
                disabled={index === 1 && !selectedCategory}
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
