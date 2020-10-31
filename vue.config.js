// vue.config.js
module.exports = {
    pages: {
        index: 'src/index/main.ts',
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        work: 'src/work/main.ts'
    },
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                nsis: {
                    allowToChangeInstallationDirectory: true,
                    installerIcon: './build/icons/icon.ico',
                    uninstallerIcon: './build/icons/icon.ico',
                    installerHeaderIcon: './build/icons/icon.ico', 
                }
            }
        }
    }
}