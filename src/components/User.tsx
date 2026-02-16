interface UserProps {
        name: string
        age: number
        backNum:(value:number, im:string) => void;
    }


const User = (props: UserProps) => {
    let a = 5;
const changeParam = () =>{
    props.backNum(a, 'Hi');
}
    return <div>
        
        {props.name}
        {props.age}
        <button onClick={changeParam}>
            
        Жми
        </button>
    </div>
    
}

export default User;