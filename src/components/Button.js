import "./Button.css";

export default function Button(props){

    // console.log(props.tenzies);

    function roll(event){
        if(props.tenzies === true){
            window.location.reload();
        }
        else{
            const array = props.numbers.map((num) => {
                if(num.held === 1){
                    return num;
                }
                else if(num.held === 0){
                    return {
                        id: num.id,
                        held: 0, 
                        num: Math.floor(Math.random()*6)
                    };
                }
                else{
                    console.log("Exception");
                    return 0;
                }
            });
            props.setNumbers(array);
        }
    }

    return(
        <div className="button" onClick={roll}>{props.tenzies === false ? "Roll":"Restart"}</div>
    );
}