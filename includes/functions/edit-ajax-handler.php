<?php

/**
 * Edit AJAX handler.
 *
 * @since 1.0
 */

function spxEditButtonAjaxHandler() {
	if ( current_user_can( 'manage_options' ) ) {

		/** Get post ID. */

		$post_id = $_POST['post_id'];
		$type    = $_POST['type'];

		if ( $type === 'acf' ) {

			/** For each loop. */

			foreach ( $_POST as $key => $value ) {

				/** Update ACF field. */

				update_field( $key, htmlspecialchars( $value, ENT_QUOTES, 'UTF-8' ), $post_id );
			}

		} else {

			/** For each loop. */

			foreach ( $_POST as $key => $value ) {

				/** Update option. */

				update_option( $key, htmlspecialchars( $value, ENT_QUOTES, 'UTF-8' ) );
			}

		}

		/** Create hook. */

		do_action( 'spxEditButtonAjax' );

		die();
	} else {
		die();
	}
}

add_action( 'plugins_loaded', function () {
	if ( current_user_can( 'manage_options' ) ) {
		add_action( 'wp_ajax_spxEditButtonAjaxHandler', 'spxEditButtonAjaxHandler' );
	}
} );