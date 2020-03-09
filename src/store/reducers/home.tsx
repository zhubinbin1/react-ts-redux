
import {TypeAction} from "../../typings/common"


export interface TypeHome{

}
let initialState={

}

export default function(state:TypeHome=initialState,action:TypeAction){
    switch(action.type){
        default:
            return state;
    }
}