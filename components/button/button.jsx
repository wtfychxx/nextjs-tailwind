const defaultClass = 'px-4 h-10 rounded-lg text-white bg-gradient-to-br ';
const primary = (props) => {
    return(
        <button className={`${defaultClass} ${props.className && props.className} from-blue-500 to-teal-700 hover:from-blue-700 hover:to-teal-900 transition duration-500`}>
            { props.children }
        </button>
    )
}

const danger = (props) => {
    return(
        <button className={`${defaultClass} ${props.className && props.className} from-red-500 to-rose-700 hover:from-red-700 hover:to-rose-900 transition duration-500`}>
            { props.children }
        </button>
    )
}

const success = (props) => {
    return(
        <button className={`${defaultClass} ${props.className && props.className} from-green-500 to-cyan-700 hover:from-green-700 hover:to-cyan-900 transition duration-500`}>
            { props.children }
        </button>
    )
}

export { primary, danger, success }