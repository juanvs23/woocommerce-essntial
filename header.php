<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ztgroup-theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
	<header id="masthead" class="site-header ">
		<div class="headers-section-container ">	
			<div class="header-top row d-none d-md-block">
				<div class="container">
					<div class="row">
					</div>
				</div>
			</div>
			<div class="header-center">
			<div class="container">
				<div class="row">
				<div class="col-12 col-md-4 logo--section col-lg-3 ">
					<div class="site-branding">
						<?php
						the_custom_logo();
						if ( is_front_page() && is_home() ) :
							?>
							<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
							<?php
						else :
							?>
							<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
							<?php
						endif;
						$ztgroup_theme_description = get_bloginfo( 'description', 'display' );
						if ( $ztgroup_theme_description || is_customize_preview() ) :
							?>
							<p class="site-description"><?php echo $ztgroup_theme_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
						<?php endif; ?>
					</div><!-- .site-branding -->
					<div class="open-search">
						<button id="open-search-btn" class="open-search-btn" ><i class="fa fa-search"></i></button>
					</div>
				</div>
				<div id="search-section" class="col-12 col-md-8 search-section col-lg-6 ">
					<div class="search-container">
						<form role="search" method="get" class="search-form-header" action="<?php echo home_url( '/' ); ?>">
							<label for="s" class="form-label">
							
								<input type="text" class="search-field form-control" placeholder="<?php echo esc_attr_x( 'Buscar...', 'placeholder' ) ?>" value="<?php echo get_search_query() ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
							</label>

							<button type="submit" class="search-btn"><i class="fa fa-search"></i> </button>
						</form>
					</div>
				</div>
				</div>
			</div>
				
			</div>
			<div class="header-bottom ">
				<div class="container">
					<div class="row">
					<div class="menu-container ">
					<ul class="navigation-mobil">
						<?php 
						if(is_user_logged_in()){
							echo '<li> <a class="" href="'. network_site_url( '/' ).'mi-cuenta/customer-logout/"> <i class="fa fa-sign-out-alt"></i> </a> </li>';
							
							echo '<li> <a class="'. network_site_url( '/' ).'mi-cuenta/" href="#"> <i class="fa fa-home"></i> </a> </li>';
						}else{
							echo '<li> <a title="Cadastre-se"  class="" href="'. network_site_url( '/' ).'mi-cuenta/?=registrar=si"> <i class="fa fa-user-plus"></i> </a> </li>';
							echo '<li> <a class="" href="'. network_site_url( '/' ).'mi-cuenta/?=registrar=no"> <i class="fa fa-user"></i> </a> </li>';
						}
						?>
						
						

						
						
						<li class="class-mini-cart"> 
							<a class="open-minicart-mobil" href="#">
								<i class="fa fa-shopping-cart"></i> 

							</a>
								<ul class="mini-cart-content" >
									<li><a class="cart-customlocation" href="<?php echo wc_get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>"><?php echo sprintf ( _n( '%d item', '%d items', WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() ); ?> – <?php echo WC()->cart->get_cart_total(); ?></a></li>
								</ul>
							
						</li>
						<li> <a class="" conclick="openNav()" id="open-menu" href="javascript:void(0)"> <i class="fa fa-ellipsis-v"></i> </a> </li>
					</ul>
				</div>
				<div class="nav-container">
					<nav id="site-navigation" class="main-navigation">
						
						<?php
						wp_nav_menu(
							array(
								'theme_location' => 'menu-1',
								'menu_id'        => 'primary-menu',
							)
						);
						?>
					</nav><!-- #site-navigation -->
				</div>
					</div>
				</div>
			
			</div>
		</div>
	</header><!-- #masthead -->
	
<div id="mySidenav" class="sidenav">
<a href="javascript:void(0)" class="closebtn" id="cerradorBtn">&times;</a>
<?php
						wp_nav_menu(
							array(
								'container_id'=>'primary-menu',
								'theme_location' => 'menu-1',
								'menu_id'        => 'menu-container',
							)
						);
						?>
</div>
	<div id="page" class="site">
