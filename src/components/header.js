import React from 'react';

import { NavLink } from 'react-router-dom';

import companyLogo from '../img/logo.svg';
import searchIcon from '../img/search.png';
import cartIcon from '../img/cart.svg';

const Header = ({HOST}) => {
  return(	
  <header className="container header px-4 px-md-0">
		<div className="row justify-content-between align-items-center">
			<div className="col-lg-2 col-6">
				<a href={`${HOST}`} className="logo-link">
					<img width="128" src={companyLogo} alt="logo: Willberries" className="logo-image"/>
				</a>
			</div>
			<div className="col-lg-6 d-none d-lg-block">
				<nav>
					<ul className="navigation d-flex justify-content-around">
						<li className="navigation-item">
							<NavLink to='/goods' className="navigation-link" data-field="gender">Womens</NavLink>
						</li>
						<li className="navigation-item">
							<NavLink to='/goods' className="navigation-link" data-field="gender">Mens</NavLink>
						</li>
						<li className="navigation-item">
							<NavLink to='/goods' className="navigation-link" data-field="category">Clothing</NavLink>
						</li>
						<li className="navigation-item">
							<NavLink to='/goods' className="navigation-link" data-field="category">Accessories</NavLink>
						</li>
						<li className="navigation-item">
							<NavLink to='/goods' className="navigation-link" data-field="category">Shoes</NavLink>
						</li>
						<li className="navigation-item">
							<NavLink to='/goods' className="navigation-link">All</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<div className="col-lg-2 d-none d-lg-block">
				<div className="form-control search-block">
					<input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username"
						aria-describedby="button-addon2"/>
					<button className="btn btn-outline-secondary" type="button" id="button-addon2">
						<img src={searchIcon} alt="search"/>
					</button>
				</div>
			</div>
			<div className="col-lg-2 col-6 d-flex justify-content-end">
				<button className="button button-cart">
					<img className="button-icon" src={cartIcon} alt="icon: cart"/>
					<span className="button-text">Cart</span>
					<span className="button-text cart-count"></span>
				</button>
			</div>
		</div>
	</header>
  );
}

export default Header;