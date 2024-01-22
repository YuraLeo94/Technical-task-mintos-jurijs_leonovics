import React, { useState } from "react";
import "./currenciesSelection.css";
import Chip from "../../atoms/Chip/chip";
import { Currency } from "../../type/global";
import { ChipType } from "../../atoms/Chip/chip.type";

interface CurrenciesSelectionProps {
    currenciesData: Currency[];
    keyName?: string;
    displayName?: string;
}

const CurrenciesSelection: React.FC<CurrenciesSelectionProps> = (props: CurrenciesSelectionProps) => {
    const {
        currenciesData = [],
        keyName = 'key',
        displayName = 'value'
    } = props;

    const [currencies, setCurrencies] = useState(currenciesData);
    const [selectedCurrencies, setSelectedCurrencies] = useState([]);

    const selectCurrency = (currency: Currency) => {
        updateCurrency(currency);
        setSelectedCurrencies([...selectedCurrencies, currency]);
    }

    const removeSelectedCurrency = (currency: Currency) => {
        updateCurrency(currency);
        setSelectedCurrencies(selectedCurrencies?.filter(item => item?.[keyName] !== currency?.[keyName]));
    }

    const updateCurrency = (currency: Currency) => {
        setCurrencies(currencies?.map(item => {
            if(item?.[keyName] === currency?.[keyName]) return currency;
            return item;
        }));
    }

    return (
        <div className="currencies-selection-container">
            <div className="currencies-selection-container__selected">
                {
                    selectedCurrencies?.length > 0 ?
                        selectedCurrencies?.map((currency, index) => {
                            return (
                                <Chip
                                    key={`${currency?.key}${index}`}
                                    type={ChipType.Secondary}
                                    currency={currency}
                                    isSelectable={false}
                                    removeSelectedCurrency={removeSelectedCurrency} />
                            );
                        })
                        : <></>
                }
            </div>
            <div className="currencies-selection-container__list">
                {
                    currencies?.map((currency, index) => {
                        return (
                            <Chip
                                key={`${currency?.key}${index}`}
                                currency={currency}
                                displayName={displayName}
                                selectCurrency={selectCurrency}
                                removeSelectedCurrency={removeSelectedCurrency} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CurrenciesSelection;