import './mylabel.css'

export interface MyLabelProps {
    /**
     * Text of the label
     */
    label: string
    /**
     * Size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3'
    /**
     * All the words in capital letters
     */
    allCaps?: boolean
    /**
     * Color of the words
     */
    color?: 'primary' | 'secondary' | 'tertiary'
    /**
     * Custom font color
     */
    fontColor?: string
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: MyLabelProps) => {
    return (
        <span 
            className={ `label ${ size } text-${ color }` }
            style={{ color: fontColor }}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}