export const genreFilter = (movie,filter)=>{
    if(filter===""){
        return movie
    }
    return movie.filter(({genre})=> genre.find(item => item === filter))
}

export const yearFilter = (movie,filter)=>{
    if(filter === ""){
        return movie
    }
    return movie.filter(({year})=> Number(year) === Number(filter) )
}

export const ratingFilter = (movie,filter)=>{
    if(filter === ""){
        return movie
    }
    return movie.filter(({rating})=> Number(rating)=== Number(filter))
}

export const searchFilter = (movie,filter)=>{
  return movie.filter(({title,cast,director})=> title.toLowerCase().includes((filter.toLowerCase())) || director.toLowerCase().includes((filter.toLowerCase())) || cast.find((name)=> name.toLowerCase().includes(filter.toLowerCase())) )
}