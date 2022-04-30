import question from "../packages/questions";
import Slot from "./component/Slot";

const Form = (props) => {
    const formSubmitHandler = () => {
        const opts = document.querySelectorAll('[id=opt]')

        var hi = 0;

        for(let i = 0; i < opts.length; i++){
            if(opts[i].checked === true){
                hi += parseInt(opts[i].value)
            }
        }
        console.log(hi)
        localStorage.setItem('hIndex',hi)
        props.updateHappinessIndex(hi.toString())
        window.location.href = '/result'
    }
    return(
        <div className="w-full h-full">
        {
            question.map(que => {
                return <Slot data={que}/>
            })
        }
            <div className="w-full flex justify-end">
                <button onClick={formSubmitHandler} className='p-2 mb-5 mr-5 mt-5 pl-4 pr-4 text-lg rounded bg-button shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75'>Submit</button>
            </div>
        </div>
    )
}

export default Form