const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create(); 
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const htmlmin = require("gulp-htmlmin")



//Лакалльынй сервер
function browser() {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    })
}

//Работа с html
function html() {
    return src('src/index.html')
    .pipe(htmlmin({
        // collapseWhitespace: true //Делает файл в одну строчку
        collapseInlineTagWhitespace: true //Уберает пробелы между элементами
    }))
    .pipe(concat('index.min.html'))
    .pipe(dest('dist/'))
    
}

//Работа с препроцессором SCSS
function styles() {
    return src('src/scss/style.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('src/css/'))
        .pipe(browserSync.stream())
}
//РАботы с JS файлами
function scripts(){
    return src([
        //При добавлении новых JS файлов надо проиписать путь
        // 'node_modules/jquery/dist/jquery.js',
        'src/js/main.js'  
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('src/js'))
    .pipe(browserSync.stream())
}

//Очистка папки dist
function cleandist(){
    return del('dist')
}

//Загрузка в dist
function build(){
    return src([
        'src/css/style.min.css',
        'src/fonts/**/*.*',
        'src/js/main.min.js',
        'src/images/**/*.*'
    ], {base: 'src'})
    .pipe(dest('dist'))
}


//Слежение и обновление файлов
function watching() {
    watch(['src/js/**/*.js' , '!src/js/main.min.js'], scripts)
    watch(['src/scss/**/*.scss'], styles);
    watch(['src/*.html']).on('change', browserSync.reload);
}


//Экспорт плагинов
exports.styles = styles;
exports.watching = watching;
exports.browser = browser;
exports.scripts = scripts;
exports.html = html;

exports.build = series(cleandist, html, build);
exports.default = series(
    parallel(browser, watching, scripts)
);

