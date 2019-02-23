function submitHandler(event){
  event.preventDefault();
  let stateSearchVal = $('.form__state-input').val();
  getParkData(stateSearchVal);
}

$('.search-form').on('submit', submitHandler);


function getParkData(stateSearchVal) {
  let apiKey = 'PgnZNBF1eFlwu12cj9iDVet20makkg9JMroA4RlY';
    let endpoint = 'https://api.nps.gov/api/v1/parks';
    let query = `${endpoint}?stateCode=${stateSearchVal}&api_key${apiKey}`;
    let responseObj = 'null';
    console.log(query);
    // const options = {
    //     mode: "cors",
    //   headers: new Headers({
    //     "X-Api-Key": apiKey
        // "Accept": "application/jsonp",
        // "Content-Type": 'application/jsonp;charset=UTF-8',
        // "Access-Control-Allow-Origin": "*"
      // })
      
      // console.log(options);
      
      fetch(query)
      .then((response)=> response.json())
      .then((responseJson) => {
        renderResults(responseJson); 
    });
}

function renderResults(responseJson){
  console.log(responseJson);

  function createListItem(park){
    let name = park.name;
    let description = park.description;
    let url = park.url;
    return `<li>
    <h2>${name}</h2>
    <p>${description}</p>
    <a href=${url}>Visit the website!</a>
    </li>`;
  }
    let htmlData = responseJson.data.map(function(park){
      return createListItem(park);
    });

    console.log(htmlData);
    $(".resultslist").html(htmlData.join(''));
    $('.searchresults').removeClass('hidden');
}



// "https://api.nps.gov/api/v1/parks?stateCode=ca"








// 'X-Api-Key: PgnZNBF1eFlwu12cj9iDVet20makkg9JMroA4RlY' 'https://developer.nps.gov/api/v1/parks?parkCode=acad'
// function createStateSearchObj(userValue) {
//   return {
//     searchType: 'stateCode',
//     value: userValue
//   }
// }


// function formatUrlSearch(searchObj) {
//   return `${searchObj.searchType}=${searchObj.value}`;
// }