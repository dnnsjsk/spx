<?php

/**
 * Init EDD updater.
 *
 * @since 1.0
 */

if( !class_exists( 'EDD_SL_Plugin_Updater' ) ) {
	// load our custom updater
	include( plugin_dir_path( __FILE__ ) . '/edd-sl-updater.php' );
}

/**
 * Plugin updater.
 *
 * @since 1.0
 */

function spxPluginUpdater() {

	$license_key = trim( get_option( 'spx_license_key' ) );

	$plugin_data = get_plugin_data( SPX );
    $plugin_version = $plugin_data['Version'];

	new EDD_SL_Plugin_Updater( SPX_STORE_URL, SPX,
		array(
			'version' => $plugin_version,
			'license' => $license_key,
			'item_id' => SPX_ITEM_ID,
			'author'  => 'Harmoni',
			'url'     => home_url(),
			'beta'    => FALSE,
		)
	);

}
add_action( 'admin_init', 'spxPluginUpdater', 0 );


/**
 * Add admin page.
 *
 * @since 1.0
 */

function spxLicenseMenu() {
	add_submenu_page( 'tools.php', 'spx', 'spx', 'spx', SPX_LICENSE_PAGE, 'spxLicensePage' );
}

add_action('admin_menu', 'spxLicenseMenu');

function spxLicensePage() {
	$license = get_option( 'spx_license_key' );
	$status  = get_option( 'spx_license_status' );
	?>
	<div class="wrap">
		<h2><?php _e('spx License Options'); ?></h2>
		<form method="post" action="options.php">

			<?php settings_fields('spx_license'); ?>

			<table class="form-table">
				<tbody>
					<tr valign="top">
						<th scope="row" valign="top">
							<?php _e('License Key'); ?>
						</th>
						<td style="display: flex; align-items: center;">
							<input id="spx_license_key" name="spx_license_key" type="text" class="regular-text" value="<?php esc_attr_e( $license ); ?>" />
							<label style="margin-left: 20px;" class="description" for="spx_license_key"><?php _e('Enter your license key'); ?></label>
						</td>
					</tr>
					<?php if( FALSE !== $license ) { ?>
						<tr valign="top">
							<th scope="row" valign="top">
								<?php _e('Activate License'); ?>
							</th>
							<td style="display: flex; align-items: center;">
								<?php if( $status !== FALSE && $status == 'valid' ) { ?>
									<span style="color:green; margin-right: 20px;"><?php _e('active'); ?></span>
									<?php wp_nonce_field( 'spx_nonce', 'spx_nonce' ); ?>
									<input type="submit" class="button-secondary" name="spx_license_deactivate" value="<?php _e('Deactivate License'); ?>"/>
								<?php } else {
									wp_nonce_field( 'spx_nonce', 'spx_nonce' ); ?>
									<input type="submit" class="button-secondary" name="spx_license_activate" value="<?php _e('Activate License'); ?>"/>
								<?php } ?>
							</td>
						</tr>
					<?php } ?>
				</tbody>
			</table>
			<?php submit_button(); ?>

		</form>
	<?php
}

/**
 * Register option.
 *
 * @since 1.0
 */

function spxRegisterOption() {
	register_setting('spx_license', 'spx_license_key', 'spxSanitizeLicense' );
}
add_action('admin_init', 'spxRegisterOption');

function spxSanitizeLicense( $new ) {
	$old = get_option( 'spx_license_key' );
	if( $old && $old != $new ) {
		delete_option( 'spx_license_status' );
	}
	return $new;
}

/**
 * Activate license.
 *
 * @since 1.0
 */

function spxActivateLicense() {

	// listen for our activate button to be clicked
	if( isset( $_POST['spx_license_activate'] ) ) {
        ob_start();
		// run a quick security check
	 	if( ! check_admin_referer( 'spx_nonce', 'spx_nonce' ) )
			{return;}

	 	// retrieve the license from the database
		// $license = trim( get_option( 'spx_license_key' ) );
	 	$license = $_POST['spx_license_key'] ? sanitize_text_field($_POST['spx_license_key']) : FALSE;

	 	update_option( 'spx_license_key', $license );

		// data to send in our API request
		$api_params = array(
			'edd_action' => 'activate_license',
			'license'    => $license,
			'item_name'  => urlencode( SPX_ITEM_NAME ), // the name of our product in EDD
			'url'        => home_url()
		);

		// Call the custom API.
		$response = wp_remote_post( SPX_STORE_URL, array( 'timeout' => 15, 'sslverify' => FALSE, 'body' => $api_params ) );

		// make sure the response came back okay
		if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {

			if ( is_wp_error( $response ) ) {
				$message = $response->get_error_message();
			} else {
				$message = __( 'An error occurred, please try again.' );
			}

		} else {

			$license_data = json_decode( wp_remote_retrieve_body( $response ) );

			if ( FALSE === $license_data->success ) {

				switch( $license_data->error ) {

					case 'expired' :

						$message = sprintf(
							__( 'Your license key expired on %s.' ),
							date_i18n( get_option( 'date_format' ), strtotime( $license_data->expires, current_time( 'timestamp' ) ) )
						);
						break;

					case 'disabled' :
					case 'revoked' :

						$message = __( 'Your license key has been disabled.' );
						break;

					case 'missing' :

						$message = __( 'Invalid license.' );
						break;

					case 'invalid' :
					case 'site_inactive' :

						$message = __( 'Your license is not active for this URL.' );
						break;

					case 'item_name_mismatch' :

						$message = sprintf( __( 'This appears to be an invalid license key for %s.' ), SPX_ITEM_NAME );
						break;

					case 'no_activations_left':

						$message = __( 'Your license key has reached its activation limit.' );
						break;

					default :

						$message = __( 'An error occurred, please try again.' );
						break;
				}

			}

		}

		// Check if anything passed on a message constituting a failure
		if ( ! empty( $message ) ) {
			$base_url = admin_url( 'plugins.php?page=' . SPX_LICENSE_PAGE );
			$redirect = add_query_arg( array( 'sl_activation' => 'false', 'message' => urlencode( $message ) ), $base_url );

			wp_redirect( $redirect );
			exit();
		}

		// $license_data->license will be either "valid" or "invalid"
		update_option( 'spx_license_status', $license_data->license );
		wp_redirect( admin_url( 'plugins.php?page=' . SPX_LICENSE_PAGE ) );
		exit();
	}
}
add_action('admin_init', 'spxActivateLicense');


/**
 * Deactivate license.
 *
 * @since 1.0
 */

function spxDeactivateLicense() {

	// listen for our activate button to be clicked
	if( isset( $_POST['spx_license_deactivate'] ) ) {
        ob_start();
		// run a quick security check
	 	if( ! check_admin_referer( 'spx_nonce', 'spx_nonce' ) )
			{return;} // get out if we didn't click the Activate button

		// retrieve the license from the database
		$license = trim( get_option( 'spx_license_key' ) );
        $license = $_POST['spxlicense_key'] && strlen($_POST['spx_license_key']) > 8 ? sanitize_text_field($_POST['spx_license_key']) : $license;

		// data to send in our API request
		$api_params = array(
			'edd_action' => 'deactivate_license',
			'license'    => $license,
			'item_name'  => urlencode( SPX_ITEM_NAME ), // the name of our product in EDD
			'url'        => home_url()
		);

		// Call the custom API.
		$response = wp_remote_post( SPX_STORE_URL, array( 'timeout' => 15, 'sslverify' => FALSE, 'body' => $api_params ) );

		// make sure the response came back okay
		if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {

			if ( is_wp_error( $response ) ) {
				$message = $response->get_error_message();
			} else {
				$message = __( 'An error occurred, please try again.' );
			}

			$base_url = admin_url( 'plugins.php?page=' . SPX_LICENSE_PAGE );
			$redirect = add_query_arg( array( 'sl_activation' => 'false', 'message' => urlencode( $message ) ), $base_url );

			wp_redirect( $redirect );
			exit();
		}

		// decode the license data
		// $license_data = json_decode( wp_remote_retrieve_body( $response ) );

		// $license_data->license will be either "deactivated" or "failed"
		// if( $license_data->license == 'deactivated' ) {
		//	delete_option( 'spx_license_status' );
		// }

		delete_option( 'spx_license_status' );
		delete_option( 'spx_license_key' );

		wp_redirect( admin_url( 'plugins.php?page=' . SPX_LICENSE_PAGE ) );
		exit();

	}
}
add_action('admin_init', 'spxDeactivateLicense');

/**
 * Check license.
 *
 * @since 1.0
 */

function spxCheckLicense() {

	global $wp_version;

	$license = trim( get_option( 'spx_license_key' ) );

	$api_params = array(
		'edd_action' => 'check_license',
		'license' => $license,
		'item_name' => urlencode( SPX_ITEM_NAME ),
		'url'       => home_url()
	);

	// Call the custom API.
	$response = wp_remote_post( SPX_STORE_URL, array( 'timeout' => 15, 'sslverify' => FALSE, 'body' => $api_params ) );

	if ( is_wp_error( $response ) )
		{return FALSE;}

	$license_data = json_decode( wp_remote_retrieve_body( $response ) );

	if( $license_data->license == 'valid' ) {
		echo 'valid'; exit;
		// this license is still valid
	} else {
		echo 'invalid'; exit;
		// this license is no longer valid
	}
}

/**
 * Admin notices.
 *
 * @since 1.0
 */

function spxAdminNotices() {
	if ( isset( $_GET['sl_activation'] ) && ! empty( $_GET['message'] ) ) {

		switch( $_GET['sl_activation'] ) {

			case 'false':
				$message = urldecode( $_GET['message'] );
				?>
				<div class="error">
					<p><?php echo $message; ?></p>
				</div>
				<?php
				break;

			case 'true':
			default:
				$message = urldecode( $_GET['message'] );
				?>
				<div class="notice notice-success">
					<p><?php echo $message; ?></p>
				</div>
				<?php
				break;

				break;

		}
	}
}
add_action( 'admin_notices', 'spxAdminNotices' );