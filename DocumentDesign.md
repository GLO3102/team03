**Team 03**
=======
Lancer l'application à partir de index.html

Page Actor
----------

**Urls**: 

 - team03/index.html#actors
 - team03/index.html#/actors/:id

**Explications**: L'onglet Actor redirige vers la recherche d'un acteur. Il suffit alors d'entrer dans la recherche les mots clés concernant l'acteur recherché et d'appuyer soit sur la loupe ou sur "Enter".
                  Lorsque la liste des acteurs trouvÃ©s est affichée, il suffit de cliquer sur celui qui nous intéresse. La page de recherche est alors remplacée par celle qui permet de voir les informations de l'acteur ainsi qu'une liste de ses films.


Page Movie
----------

**Urls:**

 - team03/index.html#movie
 - team03/index.html#movie/:id
 - team03/index.html#movie/addToWatchlist/:id

**Explication:** L'onglet Movie redirige vers la recherche d'un film. Il suffit alors d'entrer dans la recherche les mots clé© concernant le titre du film recherché et d'appuyer soit sur la loupe ou sur "Enter".
                 Lorsque la liste des films trouvés est affichée, il suffit de cliquer sur celui qui nous intéresse. La page de recherche est alors remplacée par celle qui permet de voir les informations du film ainsi qu'une option pour ajouter le présent film à une watchlist existante.
                 En cliquant sur le lien pour afficher une watchlist, on arrive sur une page ou toutes les watchlists sont affichées et ou on a qu'a cliquer sur le boutton associé à la watchlist voulue pour ajouter le film dans celle-ci.

Page TvShow
-----------

**Urls:** 

 - team03/index.html#tvshows
 - team03/index.html#/tvshows/:id
 
**Explications:** L'onglet Tv Show redirige vers la recherche d'une série télé. Il suffit alors d'entrer dans la recherche les mots clé concernant la série recherchée et d'appuyer soit sur la loupe ou "Enter".
                  Lorsque la liste des séries télé trouvées est affichée, il suffit de cliquer sur celle qui nous intéresse. La page de recherche est alors remplacée par celle qui permet de voir les informations de la série ainsi qu'une liste de ses épisodes.

Page Watchlist
--------------

**Urls:** 

 - team03/index.html#/watchlists
 - team03/index.html#/watchlist/:watchlistId/movies
 - team03/index.html#/watchlist/:watchlistId/addMovies

**Explications:** Lorsque l'on clique sur l'onglet Watchlist, nous sommes redirigés vers la liste des watchlists du serveur (Pas regroupées en terme d'utilisateur). Pour crÃ©er une watchlist, il suffit d'entrer
                  un nom dans le label "Name" et d'appuyer sur "Create Watchlist". Les watchlists peuvent être supprimées en appuyant sur le bouton "Delete Watchlist" qui se trouve sur la ligne de la watchlist à supprimer.
                  Pour modifier le nom d'une watchlist, il suffit de changer le nom de celle-ci dans son propre label et d'appuyer sur "Enter" quand le nom est bien rentré.
                  Par la suite, il est possible de consulter les films d'une watchlist en appuyant sur "Show movies".
                  Dans show movies, il est possible d'ajouter un film en appuyant sur "Add movies to this watchlist". Il suffit alors de rechercher le film desiré et d'appuyer sur "Add this movie to watchlist" pour le film recherché.
                  Il est aussi possible de cliquer sur le nom du film pour avoir sa description et d'ajouter autant de fois que désiré les films de cette recherche. Lorsque l'ajout est terminé, il suffit de cliquer sur "Return to watchlist".
                  De retour à la liste des films de la watchlist, il est possible d'appuyer sur "Remove from watchlist" pour enlever un film de la watchlist.


Page User/My Profile
--------------

**Urls:**

 - team03/index.html#/users/:id'
 - team03/index.html#/users/:id/watchlists
 - team03/index.html#/users/:id/following
 - team03/index.html#/users/:id/search

**Explications:** Lorsque l'on clique sur le nom de l'utilisateur en haut à droite, nous avons la posibilité de sélectionner My Profile. Cette action nous redirige vers le profile de l'utilsateur courant de l'application.
                  La liste des watchlist de l'utilisateur est automatiquement affichée. En cliquant sur delete, la watchlist correspondante est supprimée seulement lorsque l'utilisateur est sur son propre profile.
                  Il est toujours possible de revenir à cet liste en cliquant sur Watchlists (en dessou des informations du profil).
                  En cliquant sur Firends, l'ustilisateur a accès à sa liste d'amis. Lorsque l'utilisateur est sur son propre profile, il a  la possibilité de supprimer des amis de sa liste.
                  L'onglet Find User permet la recherche d'autres utilisateur. Il suffit d'inscrire le nom d'utilisateur recherché, d'appuyer sur la loupe et sélectionner un utilisateur.
                  Nous somme alors redirigé vers le profile de l'utilisateur sélectionné. Même si les onglet sont présent, il n'est par contre pas possible de supprimer des watchlists ou des firends de la liste d'un autre utilisateur.
                  Si l'utilisateur courant n'est pas amis avec l'utilisateur affiché à l'écran, un bouton Follow lui est offert pour le suivre. Si non, un bouton UnFollow apparaît lorsque c'est un ami présent dans notre liste.