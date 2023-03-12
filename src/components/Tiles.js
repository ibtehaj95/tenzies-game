import "./Tiles.css";
import Tile from "./Tile";

export default function Tiles(props){
    return(
        <div className="tiles-row">
            <div className="tiles">
                        <Tile
                            num_ary = {props.numbers}
                            index = {props.numbers[0].id}
                            setNumbers = {props.setNumbers}
                        />
                        <Tile
                            num_ary = {props.numbers}
                            index = {props.numbers[1].id}
                            setNumbers = {props.setNumbers}
                        />
                        <Tile
                            num_ary = {props.numbers}
                            index = {props.numbers[2].id}
                            setNumbers = {props.setNumbers}
                        />
                        <Tile
                            num_ary = {props.numbers}
                            index = {props.numbers[3].id}
                            setNumbers = {props.setNumbers}
                        />
                        <Tile
                            num_ary = {props.numbers}
                            index = {props.numbers[4].id}
                            setNumbers = {props.setNumbers}
                        />
                    </div>
                    <div className="tiles">
                        <Tile
                            num_ary = {props.numbers}
                            index = {props.numbers[5].id}
                            setNumbers = {props.setNumbers}
                        />
                        <Tile
                            num_ary = {props.numbers}
                            index = {props.numbers[6].id}
                            setNumbers = {props.setNumbers}
                        />
                        <Tile
                            num_ary = {props.numbers}
                            index = {props.numbers[7].id}
                            setNumbers = {props.setNumbers}
                        />
                        <Tile
                            num_ary = {props.numbers}
                            index = {props.numbers[8].id}
                            setNumbers = {props.setNumbers}
                        />
                        <Tile
                            num_ary = {props.numbers}
                            index = {props.numbers[9].id}
                            setNumbers = {props.setNumbers}
                        />
            </div>
        </div>
    );
}