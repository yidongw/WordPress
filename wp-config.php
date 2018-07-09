<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1:3306' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'tH@uQ>7jN,kNlXp-%!qt-:-/sq{Z2F=x@{0M)L@IIrqcRo?vo-|3~,44?.wob@e`' );
define( 'SECURE_AUTH_KEY',  'B0f8ej5:H@?-_delq<!^q HM!J+{_gbYmszd)oKsm/t%$x}T^is0_%$DMf!Wz&qL' );
define( 'LOGGED_IN_KEY',    '0i^XxSzDJjeRAV9Y%Ye>fq(dP`ySl9=&L7(yBuGX3s.Amz@,=TTYDtBcE{;RrEpw' );
define( 'NONCE_KEY',        ' dxz+vQ2IGCJkvVjt5uHh&mC`iPou.ddCt{(.v_k_G)qh1l}sYO8m>J Hdo9<dcd' );
define( 'AUTH_SALT',        'jnu).~B(NJE!?*/B5FUA;H9J@z$_2u-:y Yqrz8M;WbKls&:h?6?b|hvbvCEFEti' );
define( 'SECURE_AUTH_SALT', ';LR2zE*5d;;Rpw3nC*;_ ldRV#HuYrEAe`WET5S[5U-{|>j3m,q!AyFax}liwuC~' );
define( 'LOGGED_IN_SALT',   'J`OOL*yr&zRtW>qK9`f_?L)Mj5lB_a]eL3|VJFl~gQR-b!M1jgOgoYL4-e-[01U=' );
define( 'NONCE_SALT',       'oZiinZSZ>Y=cHXO4w)t|PEt2kf1ZgG%UF]4DFCsKRGlrHE[n; 7$9u;YL{E=v<jF' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
