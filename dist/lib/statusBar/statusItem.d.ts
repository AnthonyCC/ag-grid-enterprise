// ag-grid-enterprise v4.0.0
import { Component } from 'ag-grid';
export declare class StatusItem extends Component {
    private static TEMPLATE;
    private lbValue;
    constructor(label: string);
    private init();
    setValue(value: number): void;
}