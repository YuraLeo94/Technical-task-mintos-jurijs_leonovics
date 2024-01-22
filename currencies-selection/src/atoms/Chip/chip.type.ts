import { Currency } from "../../type/global";

export enum ChipType {
    Primary = 'primary',
    Secondary = 'secondary'
}

export interface ChipProps {
    type?: ChipType;
    isSelectable?: boolean;
    displayName?: string;
    currency: Currency | any;
    selectCurrency?: (currency: Currency | any) => void;
    removeSelectedCurrency?: (currency: Currency | any) => void;
}