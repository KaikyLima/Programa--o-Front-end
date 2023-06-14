const LabelValue = ({label,value}) => {
    return(
        <h3>{label}:{value}</h3>
    )
}

 const FormattedText = ({label, value}) => {

//     const renderLabelValue = () => {
//         return(
//             <h3>{label}:{value}</h3>
//         )
//     }

    return (
        <div>
            <LabelValue label={label} value={value}/>
        </div>
    );
}

export default FormattedText;