function submitHandler(event){
  event.preventDefault();
  let searchVal= $('[name="statesearch"]').val();
  console.log(searchVal);
}
$('.search-form').on('submit', submitHandler);

// 'X-Api-Key: PgnZNBF1eFlwu12cj9iDVet20makkg9JMroA4RlY' 'https://developer.nps.gov/api/v1/parks?parkCode=acad'
