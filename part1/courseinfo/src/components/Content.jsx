import ContentPart from "./ContentPart"

const Content = ( props ) => {
    const courseParts = props.parts.map((part, i) => {
        return (
            <ContentPart 
                key={i} 
                name={part.name} 
                exercises={part.exercises}
            />
        )
    })

    return courseParts
}

export default Content