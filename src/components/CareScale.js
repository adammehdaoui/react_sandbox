import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function requirementsAlert(careType){
    alert(`test ${careType}`);
}

function CareScale(props) {
    const scaleValue = props.scaleValue
    const careType = props.careType;
    const scaleType = props.careType === 'water' ? water : sun;
    const range = [1, 2, 3]

    return (
        <div onClick={
            () => requirementsAlert(careType)
        }>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}><img alt={ scaleType } src={ scaleType } /></span> : null
            )}
        </div>
    )
}

export default CareScale;
