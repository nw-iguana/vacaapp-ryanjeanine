function submitHandler(event){
  event.preventDefault();
  let stateSearchVal = $('.form__state-input').val();
  let limitVal = $('.form__limit-input').val();
  getParkData(stateSearchVal,limitVal);
}

$('.search-form').on('submit', submitHandler);


function getParkData(stateSearchVals,limitVal) {
  //stateSearchArr = stateSearchVals.split(',');


  let apiKey = 'PgnZNBF1eFlwu12cj9iDVet20makkg9JMroA4RlY';
    let endpoint = 'https://api.nps.gov/api/v1/parks';
    let query = `${endpoint}?stateCode=${stateSearchVals}&limit=${limitVal -1}
    &api_key${apiKey}`;
    let responseObj = 'null';    
      fetch(query)
      .then((response)=> response.json())
      .then((responseJson) => {
        renderResults(responseJson); 
    });
}

function renderResults(responseJson){

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
    $(".results-list").html(htmlData.join(''));
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