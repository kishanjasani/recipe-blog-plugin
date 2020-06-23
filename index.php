<?php
/**
 * Plugin Name: Recipe
 * Description: A simple WordPress plugin that allows user to create recipes and rate those recipes
 * Version: 1.0
 * Author: Udemy
 * Author URI: https://udemy.com
 * Text Domain: recipe
 */

if ( ! function_exists( 'add_action' ) ) {
	echo "Hi there! I'm just a plugin, not much I can do when called directly.";
	exit;
}

// Setup
define( 'RECIPE_PLUGIN_URL', __FILE__ );

// Includes
include( 'includes/activate.php' );
include( 'includes/init.php' );
include( 'process/save-post.php' );
include( 'process/filter-content.php' );
include( 'includes/front/enqueue.php' );
include( 'process/rate-recipe.php' );
include( 'includes/admin/init.php' );
include( 'blocks/enqueue.php' );
require dirname( RECIPE_PLUGIN_URL ) . '/includes/widget.php';
require 'includes/widgets/daily-recipe.php';
require 'includes/cron.php';
require 'includes/utility.php';
require 'includes/deactivate.php';

// Hooks.
register_activation_hook( __FILE__, 'r_activate_plugin' );
register_deactivation_hook( __FILE__, 'r_deactivate_plugin' );
add_action( 'init', 'recipe_init' );
add_action( 'save_post_recipe', 'r_save_post_admin', 10, 3 );
add_filter( 'the_content', 'r_filter_recipe_content' );
add_action( 'wp_enqueue_scripts', 'r_enqueue_scripts', 100 );
add_action( 'wp_ajax_r_rate_recipe', 'r_rate_recipe' );
add_action( 'wp_ajax_nopriv_r_rate_recipe', 'r_rate_recipe' );
add_action( 'admin_init', 'recipe_admin_init' );
add_action( 'enqueue_block_editor_assets', 'r_enqueue_block_editor_assets' );
add_action( 'enqueue_block_assets', 'r_enqueue_block_assets' );
add_action( 'widgets_init', 'r_widgets_init' );
add_action( 'r_daily_recipe', 'r_daily_generate_recipe' );

// Shortcodes.
