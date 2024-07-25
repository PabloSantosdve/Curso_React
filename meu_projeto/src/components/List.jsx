import Item from './Item'

function List(){
	return(
		<>
			<h1>Minha lista</h1>
			<ul>
				<Item marca="Nike" lancamento={1985} />
				<Item marca="Adidas" lancamento={1965} />
				<Item marca="Puma" lancamento={1975} />

			</ul>
		</>
	)
}
export default List