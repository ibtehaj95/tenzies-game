import Title from "./Title";
import Tiles from "./Tiles";
import Button from "./Button";
import "./Container.css";
import React from "react";
import Confetti from "react-confetti";

export default function Container(){

    const [numbers, setNumbers] = React.useState(gen_init_array());
    const [tenzies, setTenzies] = React.useState(false);

    function rand_ary(array){
        for(let i=0; i<10; ++i){
            array[i] = Math.floor(Math.random()*6);
        }
        return array;
    }

    function gen_init_array(){
        const random_ary = rand_ary([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        let i = -1;
        const init_ary = random_ary.map((number) => {
            i++;
            return {id: i, held: 0, num: number};
        });
        return init_ary;
    }

    React.useEffect(()=>{
        const fnum = numbers[0].num;
        const match = numbers.every((number)=>{
            return number.num===fnum;
        });
        match === true && numbers.every((number)=>{
            return number.held===1;
        }) && setTenzies(true);
    }, [numbers]);

    return(
        <div className="container">
            <Title/>
            <Tiles
                numbers = {numbers}
                setNumbers = {setNumbers}
            />
            <Button
                numbers = {numbers}
                setNumbers = {setNumbers}
                tenzies = {tenzies}
            />
            {tenzies && <Confetti/>}
        </div>
    );
}