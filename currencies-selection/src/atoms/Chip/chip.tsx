import React, { useEffect, useState } from "react";
import "./chip.css";
import { ChipProps, ChipType } from "./chip.type";

const Chip: React.FC<ChipProps> = (props: ChipProps) => {
    const {
        type = ChipType.Primary,
        isSelectable = true,
        displayName = 'value',
        currency,
        selectCurrency,
        removeSelectedCurrency
    } = props;
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (type !== ChipType.Secondary) setSelected(currency.isSelected);
    }, [currency]);

    const onChipClick = () => {
        setSelected(!selected);
        if (!selected) {
            selectCurrency?.({ ...currency, isSelected: true });
        }
        else {
            onCancel();
        }
    }

    const onCancel = () => {
        removeSelectedCurrency?.({ ...currency, isSelected: false });
    }

    return (
        <div
            className={`chip-container chip--${type} 
            ${selected && ChipType.Secondary !== type ? 'chip--selected' : ''}`}
            onClick={isSelectable ? onChipClick : undefined}>
            {isSelectable && <span className="chip-container__select-mark"></span>}

            {ChipType.Secondary === type && <span className="chip-container__cancel" onClick={onCancel}>
                <div className="chip-container__cancel-circle"></div>
                <div className="chip-container__cancel-stem"></div>
                <div className="chip-container__cancel-stem2"></div>
            </span>}
            <span>{currency[displayName]}</span>
        </div>
    );
}

export default Chip;