import {useState} from "react";

type FilterType = 'All' | 'Dollars' | 'Hryvnias';

export const GetMoney = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Hryvnias', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Hryvnias', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Hryvnias', value: 50, number: ' v1234567890'},
    ]);

    const[filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money;
    if (filter === 'Hryvnias') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Hryvnias');
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars');
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span> {objFromMoneyArr.value}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => onClickFilterHandler('All')}>All</button>
                <button onClick={() => onClickFilterHandler('Hryvnias')}>Hryvnias</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>

    )
}