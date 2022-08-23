const fetchUser = async(username) => {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const user = await response.json()
    return user
}

const filterData = async(user) => {
    const { name, avatar_url, followers, following, created_at } = user
    return {
        name,
        avatar_url, 
        followers, 
        following, 
        created_at
    }
}

const main = async(username) => {
    const user = await fetchUser(username)
    const filteredData = await filterData(user)
    console.log(filteredData)
}

main('ArthurPMachado')