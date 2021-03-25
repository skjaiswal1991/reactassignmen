import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ViewUsers from './component/user/Viewusers'
import Invoice from './component/user/Invoice'
import DefaultLayout from './layout/default'
import DefaulttwoLayout from './layout/defaulttwo'

const Approute  = ({component: Component,layout:Layout, ...rest})=>(
  <Route {...rest} render={(props)=>(
    <Layout>
      <Component {...props}></Component>
    </Layout>
  )}></Route>
)

function App() {
  return (
    
    <Router>      
      <Approute exact path="/" layout={DefaultLayout} component={ViewUsers}/>
      <Approute exact path="/invoice" layout={DefaulttwoLayout} component={Invoice}/>
    </Router>

  );
}

export default App;
