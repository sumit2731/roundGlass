/**
 * @Feature Readyonly and optional types in js
 */

export interface Card {
    readonly id: string;
    title: string;
    subtitle: string;
    styleObject?: StyleObject | {};
    index?: number;
}

// export interface Partial<>

/**
 * @Feature Indexed Types in Typecript
 */
export interface StyleObject {
    width: string;
    height: string;
    [property: string]: string;
}