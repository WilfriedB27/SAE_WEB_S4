function makeServiceDiscogs() {
  const DISCOGS_API_URL = "https://api.discogs.com";
  const DISCOGS_TOKEN = "hCuEPmdJmfTwNPCoooKtEBscIWzgsrrhHIiIkysR";

  const service = {
    doRequest,
    getReleaseDetails,
    getArtist,
    getMasterDetails,
    getLabel
  };

  function doRequest(search, type = 'release', page = 1, perPage = 50) {  
      const url = `${DISCOGS_API_URL}/database/search?q=${search}&type=${type}&token=${DISCOGS_TOKEN}&page=${page}&per_page=${perPage}`;

      return fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Erreur dans la requête Discogs');
              }
              return response.json();
          })
          .then(data => {
              console.log("Résultats API :", data); 

              if (data.results && data.results.length > 0) {
                  return {
                      results: data.results.map(result => ({
                          id: result.id,
                          title: result.title,
                          image: result.cover_image,
                          type: type
                      })),
                      pagination: data.pagination
                  };
              } else {
                  throw new Error('Aucun résultat trouvé');
              }
          })
          .catch(error => {
              console.error("Erreur API Discogs :", error);
              return { results: [], pagination: {} };
          });
  }

  function getReleaseDetails(id) {
    const url = `${DISCOGS_API_URL}/releases/${id}?token=${DISCOGS_TOKEN}`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement de l’album');
        }
        return response.json();
      });
  }

  function getArtist(id) {
    const url = `${DISCOGS_API_URL}/artists/${id}?token=${DISCOGS_TOKEN}`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Erreur dans la requête Discogs pour l'artiste");
        }
        return response.json();
      });
  }

  function getMasterDetails(id) {
    const url = `${DISCOGS_API_URL}/masters/${id}?token=${DISCOGS_TOKEN}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du master');
            }
            return response.json();
        })
        .then(data => ({
            id: data.id,
            title: data.title,
            images: data.images,
            year: data.year,
            artists: data.artists,
            versions: data.versions || []
        }));
  }

  function getLabel(id) {
    const url = `${DISCOGS_API_URL}/labels/${id}?token=${DISCOGS_TOKEN}`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Erreur dans la requête Discogs pour le label");
        }
        return response.json();
      });
  }

  return service;
}
