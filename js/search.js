function gAPIOnLoadCallback() {
    gapi.client.load('youtube', 'v3', youtubeApiLoadCallback);
}

function youtubeApiLoadCallback() {
    gapi.client.setApiKey('AIzaSyCc31z5nGanStEs8UBJGIeCfDFI4syvRO4');

    // Juste pour tester, a enlever
    youtubeSearch();
}

function youtubeSearch(query) {
    var request = gapi.client.youtube.search.list({
        part: 'id',
        maxResults: 1,
        q: query
    });

    request.execute(youtubeSearchResponse);
}

function youtubeSearchResponse(response) {
    console.log(response);
}