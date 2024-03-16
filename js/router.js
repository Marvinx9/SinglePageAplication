//rota do evento
export class Router {
    router = {}

    add(routeName, page) {
        this.router[routeName] = page
    }
    route(event) {
        event = event || window.event
        // não faça o default (padrão)
        event.preventDefault()
        window.history.pushState({}, "", event.target.href )
        // o this é uma referencia a alguma coisa dentro do meu par de chaves
        this.handle()
    }

    handle() {
        // const pathname = window.location.pathname
        // desestruturar a função
        // localiza o nome da route e atribui a variável pathname
        const { pathname } = window.location
        const route = this.router[pathname] || this.router[404]
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html 
        })
    }
}
