import Hello from "../home";
import store from "../../redux/store";
import {connect} from 'react-redux'
const mapStateToProps = (state) => {
  
}
const mapDispatch =(dispathc)=>{
  
}

export default   connect(state=>({count: state}), mapDispatch)(Hello)