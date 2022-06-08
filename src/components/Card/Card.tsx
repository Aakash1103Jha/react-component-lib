import React, {type FC} from 'react'
import { CardPropTypes } from './CardPropTypes'
import styles from './Card.module.css'

const Card: FC<CardPropTypes> = (props) =>{
    return <div className={`${styles.card}`}>{props.text}</div>
}

export default Card