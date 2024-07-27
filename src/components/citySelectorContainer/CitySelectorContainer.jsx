import styles from "./citySelectorContainer.module.css";
import BtnConvMany from "../btnPagConverterMany/BtnConvMany";
import SelectedCities from "../selectedCities/SelectedCities";
import { useState } from "react";

const CitySelectorContainer = () => {
  const [selectedCities, setSelectedCities] = useState([]);
  const handleCitySelection = (selectedCity) => {
    setSelectedCities([...selectedCities, selectedCity]);
  };
  return (
    <div className={styles.mainContainer}>
      <BtnConvMany
        placeholderText={"Seleccione ciudades de destino"}
        onSelectedCity={handleCitySelection}
      />

      <SelectedCities cities={selectedCities} />
    </div>
  );
};

export default CitySelectorContainer;
