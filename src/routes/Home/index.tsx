import React from "react"
import {connect} from "react-redux"
import {TypeRootState} from "../../store/reducers/index"
import {TypeHome} from "../../store/reducers/home"
import actions from "../../store/actions/home"
import {RouteComponentProps} from "react-router"
import "./index.less"
interface State{

}
//属性来源 : 1,mapStateProps返回值,2,actions,3,router,4,自定义
type StateProps= ReturnType<typeof mapStateProps>
type DispactchProps= typeof actions
interface IParams{
}
type RouteProps = RouteComponentProps<IParams>
type Props = StateProps&DispactchProps&RouteProps&{
    children?:any
}
class Home extends React.Component<Props,State>{
    render(){
        return <div>首页</div>
    }
}
let mapStateProps=(state:TypeRootState):TypeHome=>state.home

export default connect(mapStateProps,actions)(Home)