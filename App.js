'use strict';

  class T extends React.Component {
    render(){
        return <div>
            <h2>CLASS</h2>
            <h2>2nd CLASS</h2>
        </div>;
    }
}

  function F (){
    return (<div>
      <h1>FUNCTION</h1>
      <h1>2nd FUNCTION</h1>
      </div>);
  }
  var e = <div><h1>HELLO </h1> <T /> <F />  </div>

  const r = ReactDOM.createRoot(document.getElementById("root"))
  r.render(e)
