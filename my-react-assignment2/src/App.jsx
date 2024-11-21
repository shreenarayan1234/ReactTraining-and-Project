// import React from 'react'
// import Count from './components/Count'
// import SpreadOperatorInObj from './components/SpreadOperatorInObj'
// import RenderList from './components/RenderList'

// const App = () => {
//   return (
//     <>
//       <Count/>
//       <SpreadOperatorInObj/>
//       <RenderList/>
//     </>
//   )
// }

// export default App

function App() {
  const items = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 3, text: "Item 4" },
  ];
  const listItems = items.map((item, index) => (
    <li key={index}>{item.text}</li>
  ));

  return <ul>{listItems}</ul>;
}
export default App;
