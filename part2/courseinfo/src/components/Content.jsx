import ContentPart from "./ContentPart"

const Content = ( props ) => {
    const courseParts = props.parts.map( ( part ) => {
        return (
            <ContentPart 
                key={part.id} 
                name={part.name} 
                exercises={part.exercises}
            />
        )
    })

    return courseParts
}

export default Content