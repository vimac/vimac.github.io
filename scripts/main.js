var messages = {
    cn: {
        'Visual SQLMap code generator': '可视化 SQLMap 代码生成器',
        'SQLMap Framework for PHP': 'PHP SQLMap 持久化框架',
        'Bootstrap your YouzanCloud PHP Application': '开启您的有赞云 PHP 应用'
    },
}

var i18n = new VueI18n({
    locale: 'cn',
    fallbackLocale: 'en',
    formatFallbackMessages: true,
    messages: messages
})

Vue.use(VueI18n)

var windowLocation = location.hostname

new Vue({
    el: '#app',
    i18n: i18n,
    mounted: function () {
        this.setLanguage()
    },
    data: function () {
        var cookieLang = Cookies.get('_lang')
        if (!cookieLang) {
            var lang = (window.navigator.userLanguage || window.navigator.language || 'en').toLowerCase()
            if (lang.indexOf('zh') !== -1 && lang.indexOf('cn') !== -1) {
                cookieLang = 'cn'
            }
        }
        return {
            lang: cookieLang,
            enClass: 'iconfont icon-english',
        }
    },
    methods: {
        setLanguage: function () {
            this.$i18n.locale = this.lang
        },
        setLang: function (lang) {
            this.lang = lang
            var domain = windowLocation
            if (domain.indexOf('vifix.cn') !== -1) {
                domain = '.vifix.cn'
            }
            Cookies.set('_lang', this.lang, {
                domain: domain,
                expires: new Date('01/01/3100')
            })
            this.setLanguage()
        }
    }
})