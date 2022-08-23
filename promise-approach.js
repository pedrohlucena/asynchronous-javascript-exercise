const fetchUser = (username) => {
    const user = fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => data)
    return user
}

const filterData = (user) => {
    const { name, avatar_url, followers, following, created_at } = user
    return {
        name,
        avatar_url, 
        followers, 
        following, 
        created_at
    }
}

fetchUser('ArthurPMachado')
    .then(user => filterData(user))
    .then(filteredData => console.log(filteredData))
    .catch(error => console.log(error))