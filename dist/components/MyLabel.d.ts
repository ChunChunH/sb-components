/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Text of the label
     */
    label: string;
    /**
     * Size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * All the words in capital letters
     */
    allCaps?: boolean;
    /**
     * Color of the words
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom font color
     */
    fontColor?: string;
    /**
     * Background color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
export default MyLabel;
