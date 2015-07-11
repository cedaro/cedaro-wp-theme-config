module.exports = function( grunt, options ) {
	var tasks = {
		'build:css': [
			'build:css:theme'
		],
		'build:css:theme': [
			'less:theme',
			'pixrem:theme',
			'postcss:theme',
			'wpcss:theme',
			'cssjanus:theme'
		],
		'build:css:plugins': [],
		'build:css:wpcom': [
			'less:wpcom',
			'pixrem:wpcom',
			'postcss:wpcom',
			'wpcss:wpcom',
			'cssjanus:wpcom'
		],
		'check': [
			'search:themeSlugs',
			'complexity:theme'
		],
		'package': [
			'check',
			'replace:functionsVersion',
			'replace:styleVersion',
			'build',
			'clean:package',
			'copy:package',
			'replace:templateHeader',
			'addtextdomain:package',
			'makepot:package',
			'compress:package',
			'clean:package'
		]
	};

	if ( grunt.file.exists( options.paths.less + '/plugins/easy-digital-downloads.less' ) ) {
		tasks['build:css:plugins:easy-digital-downloads'] = [
			'less:easy-digital-downloads',
			'pixrem:easy-digital-downloads',
			'postcss:easy-digital-downloads',
			'wpcss:easy-digital-downloads',
			'cssjanus:easy-digital-downloads'
		];

		tasks['build:css:plugins'].push( 'build:css:plugins:easy-digital-downloads' );
	}

	if ( grunt.file.exists( options.paths.less + '/plugins/woocommerce.less' ) ) {
		tasks['build:css:plugins:woocommerce'] = [
			'less:woocommerce',
			'pixrem:woocommerce',
			'postcss:woocommerce',
			'wpcss:woocommerce',
			'cssjanus:woocommerce'
		];

		tasks['build:css:plugins'].push( 'build:css:plugins:woocommerce' );
	}

	return tasks;
};
