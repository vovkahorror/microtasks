import React from 'react';
import styles from './Cars.module.css';

type CarsType = {
    manufacturer: string;
    model: string;
}

type CarsListType = {
    cars: Array<CarsType>;
}

export const Cars = (props: CarsListType) => {
    return (
        <>
            <table className={styles.table}>
                <tbody>
                {props.cars.map((el, ind) => {
                    return (
                        <tr key={ind}>
                            <td className={styles.table__cell}>{ind + 1}</td>
                            <td className={styles.table__cell}>{el.manufacturer}</td>
                            <td className={styles.table__cell}>{el.model}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}