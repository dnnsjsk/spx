<?php

/**
 * Edit AJAX handler.
 *
 * @date    28/07/2020
 * @since   1.0.0
 */
function spxEditButtonAjaxHandler() {
	if ( current_user_can( 'manage_options' ) ) {

		/**
		 * Get post ID.
		 */
		$post_id = $_POST['post_id'];

		foreach ( $_POST as $key => $value ) {

			if ( strpos( $value, 'eF3ztPlKSglSF2g7uPUIs8fGWQnkeHqnacf' ) !== FALSE ) {
				update_field( $key,
					htmlspecialchars( str_replace( 'eF3ztPlKSglSF2g7uPUIs8fGWQnkeHqnacf', '', $value ), ENT_QUOTES, 'UTF-8' ), $post_id );
			}

			if ( strpos( $value, 'eF3ztPlKSglSF2g7uPUIs8fGWQnkeHqnoption' ) !== FALSE ) {
				update_option( $key,
					htmlspecialchars( str_replace( 'eF3ztPlKSglSF2g7uPUIs8fGWQnkeHqnoption', '', $value ), ENT_QUOTES, 'UTF-8' ) );
			}

			if ( strpos( $value, 'eF3ztPlKSglSF2g7uPUIs8fGWQnkeHqnparentacf' ) !== FALSE ) {

				$string = str_replace( ',_', ",", $key );
				$array  = explode( ',', $string );

				echo json_encode( $array );

				update_sub_field( $array,
					htmlspecialchars( str_replace( 'eF3ztPlKSglSF2g7uPUIs8fGWQnkeHqnparentacf', '', $value ), ENT_QUOTES, 'UTF-8' ), $post_id );
			}
		}

		/**
		 * Create hook.
		 */
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