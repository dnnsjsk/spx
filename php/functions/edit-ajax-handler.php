<?php

/**
 * Edit AJAX handler.
 *
 * @since 1.0
 */

function spxEditAjaxHandler() {
	if ( current_user_can( 'edit_posts' ) ) {

		/** Get post ID. */

		$post_id = $_POST['post_id'];

		/** For each loop. */

		foreach ( $_POST as $key => $value ) {

			/** Update ACF field. */

			update_field( $key, $value, $post_id );
		}

		/** Create hook. */

		do_action( 'spxEditAjax' );

		die();
	} else {
		die();
	}
}

add_action( 'wp_ajax_spxEditAjaxHandler', 'spxEditAjaxHandler' );
