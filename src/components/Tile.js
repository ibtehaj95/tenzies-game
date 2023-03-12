import "./Tile.css";
import React from "react";

export default function Tile(props){

    function tile_click(event){
        const index = parseInt(event.target.id[5]);
        let array = [...props.num_ary];
        array[index] = {
                id: index, 
                held: props.num_ary[props.index].held?0:1,
                num: props.num_ary[props.index].num
            };
        props.setNumbers(array);
    }

    return (
        <div className={props.num_ary[props.index].held!==0?"tile tile-select":"tile tile-deselect"} id={`tile-${props.num_ary[props.index].id}`} onClick={tile_click}>
            {props.num_ary[props.index].num}
        </div>
    );
}