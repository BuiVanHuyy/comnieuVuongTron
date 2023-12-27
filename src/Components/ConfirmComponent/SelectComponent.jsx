import { Form } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../utils/AppContext";

const SelectComponent = () => {
    const { userInfo, setUserInfo } = useContext(Context);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState({ name: "", code: "" });
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState({ name: "", code: "" });
    const [wards, setWards] = useState([]);
    const [selectedWard, setSelectedWard] = useState({ name: "", code: "" });

    useEffect(() => {
        fetch("https://provinces.open-api.vn/api/p/")
            .then((response) => response.json())
            .then((data) => setCities(data));
    }, []);

    const handleCityChange = (e) => {
        const cityCode = e.target.value;
        const cityName = e.target.options[e.target.selectedIndex].text;
        setSelectedCity({ name: cityName, code: cityCode });
        setUserInfo({
            ...userInfo,
            cityValue: {
                name: cityName,
                code: cityCode,
            },
            districtValue: {},
            wardValue: {},
        });
        setSelectedDistrict({ name: "", code: "" });
        setSelectedWard({ name: "", code: "" });
        fetch(`https://provinces.open-api.vn/api/p/${cityCode}/?depth=3`)
            .then((response) => response.json())
            .then((data) => setDistricts(data.districts));
    };

    const handleDistrictChange = (e) => {
        const districtCode = e.target.value;
        const districtName = e.target.options[e.target.selectedIndex].text;
        setSelectedDistrict({ name: districtName, code: districtCode });
        setSelectedWard({ name: "", code: "" });
        setUserInfo({
            ...userInfo,
            districtValue: {
                name: districtName,
                code: districtCode,
            },
            wardValue: {},
        });
        fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
            .then((response) => response.json())
            .then((data) => setWards(data.wards));
    };

    const handleWardChange = (e) => {
        const wardCode = e.target.value;
        const wardName = e.target.options[e.target.selectedIndex].text;
        setSelectedWard({ name: wardName, code: wardCode });
        setUserInfo({
            ...userInfo,
            wardValue: {
                name: wardName,
                code: wardCode,
            },
        });
    };

    return (
        <>
            <Form.Select className="mb-3" value={selectedCity.code} onChange={handleCityChange}>
                <option value="">Chọn tỉnh, thành phố</option>
                {cities.map((city) => (
                    <option key={city.code} value={city.code}>
                        {city.name}
                    </option>
                ))}
            </Form.Select>

            <Form.Select className="mb-3" value={selectedDistrict.code} onChange={handleDistrictChange}>
                <option value="">Chọn quận, huyện</option>
                {districts.map((district) => (
                    <option key={district.code} value={district.code}>
                        {district.name}
                    </option>
                ))}
            </Form.Select>

            <Form.Select className="mb-3" value={selectedWard.code} onChange={handleWardChange}>
                <option value="">Chọn phường, xã</option>
                {wards.map((ward) => (
                    <option key={ward.code} value={ward.code}>
                        {ward.name}
                    </option>
                ))}
            </Form.Select>
        </>
    );
};

export default SelectComponent;
