// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import Sidebar from './components/sidebar';
import ProgressBar from './components/ProgressBar';
import ClaimForm from './components/ClaimForm';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <ProgressBar />
        <ClaimForm />
      </div>
    </div>
  );
}

export default App;
