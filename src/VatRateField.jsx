import React from "react";

const VatRateField = (props) => {
    return (
        <div className={props.customstyle}>
            VAT Rate:
            <select>
                <option value="20">20%</option>
                <option value="15">15%</option>
                <option value="12.5">12.5%</option>
                <option value="0">Exempt</option>
            </select>

        </div>
    );
}

export default VatRateField; 