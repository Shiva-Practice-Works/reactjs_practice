//import Hello_world from './1_Hello_world/Hello_world'
//import HelloWorldJSX from './2_Hello_world_jsx/Hello_world_jsx.jsx'
//import SmComp from './3_Small_Component/Small_component'
//import CompProps from './4_Props/Props.jsx'
import ClassComp from './5_class_comp/ClassComp.jsx'
import ClassComp2 from './5_class_comp/2_class_comp.jsx'
import ClassCompProps from './6_class_props/class_props.jsx'
function App() {
  return (
    <div className="App">
      
      <ul>
        {/*          <li> <Hello_world/></li> 
                      <li> <HelloWorldJSX/> </li> 
                     <li> <SmComp/> </li>                  
                    <li> <CompProps name = 'React'/> </li>      
                    <li><ClassComp/> </li>                   
                    <li><ClassComp2/></li>          */}
                    <li><ClassCompProps name = 'React Js '/></li>
      </ul>
    </div>
  );
}

export default App;
