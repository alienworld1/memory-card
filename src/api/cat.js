const fetchCats = async length => {
  const catRequest = await fetch(`https://cataas.com/api/cats?limit=${length}`);
  const catArray = await catRequest.json();
  return catArray;
}

const getImageUrl = id => (
  `https://cataas.com/cat/${id}?position=center`
)

export {fetchCats, getImageUrl};
