import StatisticsLine from "./StatisticsLine"

const Statistics = ( { good, neutral, bad } ) => {
    
    const total = good + neutral + bad

    const getAverage = (good, neutral, bad, total) => {
        const goodValues = good * 1
        const neutralValues = neutral * 0
        const badValues = bad * -1
        return (goodValues + neutralValues + badValues) / total
    }

    return (
        <table>
            <StatisticsLine text="Good" value={good} />
            <StatisticsLine text="Neutral" value={neutral} />
            <StatisticsLine text="Bad" value={bad} />
            <StatisticsLine text="All" value={total} />
            <StatisticsLine text="Average" value={ getAverage(good, neutral, bad, total) } />
            <StatisticsLine text="Positive" value={ good / total } />
        </table>
    )
}

export default Statistics