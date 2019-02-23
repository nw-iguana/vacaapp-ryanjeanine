function submitHandler(event){
  event.preventDefault();
  let stateSearchVal = $('.form__state-input').val();
  getParkData(stateSearchVal);
}

$('.search-form').on('submit', submitHandler);


function getParkData(stateSearchVal) {
    let endpoint = 'https://api.nps.gov/api/v1/parks';
    let query = `${endpoint}?stateCode=${stateSearchVal}`;
    console.log(query);
    let apiKey = 'PgnZNBF1eFlwu12cj9iDVet20makkg9JMroA4RlY';
    const options = {
      headers: new Headers({
        "X-Api-Key": apiKey,
        "Accept": "application/json",
        "Content-Type": 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*"
      })
    }

    console.log(options);

    fetch(query,options)
    .then((response)=> response.json())
    .then((responseJson) => console.log(responseJson));

}

"https://api.nps.gov/api/v1/parks?stateCode=ca"








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