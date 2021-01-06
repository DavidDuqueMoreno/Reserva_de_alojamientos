import '../global.css';

export default class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<section>
					<img className='header_logo' src={this.props.photo} alt={'logo'} />
				</section>
				<section className='date_header'>
					<p>
						Hoteles desde el <strong>{this.props.date1}</strong>
						<br />
						hasta el <strong>{this.props.date2}</strong>
					</p>
				</section>
			</div>
		);
	}
}
