import logo from './logo.svg';
import './App.css';

function App() 
{
	return (
  		<body class="App-Body">
			<header id="App-Header">
				<div class="App-Container">
					<h1>Covid Resource App</h1>
				</div>
			</header>

			<section id="App-Section-0">
				<div class="App-Container">Getting Started...</div>
			</section>
			
			<section id="App-Section-1">
				<div class="App-Container">
					<h3 class="head">For Resource Seekers</h3>
					<p1 class="body">To search for information regarding covid related resources</p1>
					<br></br><br></br><br></br>	
					<button class="button">Continue...</button>				
				</div>
			</section>

			<section id="App-Section-2">
				<div class="App-Container">
					<h3 class="head">For Resource Sellers</h3>
					<p1 class="body">To provide information covid related resources</p1>
					<br></br><br></br><br></br><br></br>
					<button class="button">Continue...</button>				
				</div>
			</section>
		</body>
	);
}

export default App;
