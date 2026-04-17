Em vez de fetch em allproductspage e productcard:

A solução com Context API:
Em vez de guardares os produtos no useState do componente Pai, guardas num Contexto que envolve o BrowserRouter.
App/Context: Faz o fetch uma única vez quando a app abre.
Pai: Lê os produtos do Contexto e faz o .map.
Filho (ProductCard): Pega no ID do URL (useParams) e procura esse ID dentro da lista que já está no Contexto.
