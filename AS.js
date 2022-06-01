const table = $('.mydatatable').DataTable();
const requestURL = 'https://apidata.mos.ru/v1/datasets/2601/rows?$top=603&api_key=6504f4ccfc89283836f726f5ef37c2e6'

function sendRequest(url) {
  return fetch(url).then ( response=> {
	return response.json()
	})
}

sendRequest(requestURL)
  .then(data => {
    for (let id = 0; id < data.length; id++) {
      table.row.add( [
        data[id].Number,
        data[id].Cells.FullName,
        data[id].Cells.Address,
        data[id].Cells.Category,
        data[id].Cells.Specialization,
        data[id].Cells.OKVED_Description
      ] ).draw(true)
    }
  })
  .catch(err => console.log(err))
  

 