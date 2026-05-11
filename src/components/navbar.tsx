import { Show } from "@clerk/tanstack-react-start";
import { Link } from "@tanstack/react-router";
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="brand">
				<div className="mark">
					<div className="glyph" />
				</div>

				<Link to="/">
					<span>Skild</span>
				</Link>
			</div>

			<div className="actions">
				<Show when="signed-out">
				</Show>

			</div>
		</nav >
	);
};

export default Navbar;
