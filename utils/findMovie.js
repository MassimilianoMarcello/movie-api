const findMovie=(movies,id)=>{
    return movies.find((movie) => movie.id === parseInt(id));
}

export default findMovie