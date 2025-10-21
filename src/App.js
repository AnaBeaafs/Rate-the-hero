import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Header } from './common-components/Header/Header';
export function App() {
	return (
		<>
			<NormalizeStyles />
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/detalhes/:id" exact>
						<Details />
					</Route>
					<Route path="/" exact>
						<Search />
					</Route>
					<Route path="*">Página não encontrada</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}