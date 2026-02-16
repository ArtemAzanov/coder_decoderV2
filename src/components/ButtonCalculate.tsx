interface ButtonCalculateProps{
    op: number
back: (r: number) => void;
}

const ButtonCalculate = (props: ButtonCalculateProps) =>{
    return <div>
        {props.op}
    </div>
}
export default ButtonCalculate;