<?php

function r_dashboard_widgets() {
	wp_add_dashboard_widget(
		'r_latest_recipe_rating_widget',
		'Latest Recipe Ratings',
		'r_latest_recipe_rating_display',
	);
}

function r_latest_recipe_rating_display() {
	echo 'Hello World';
}
