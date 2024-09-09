const users = ['Luan', 'Estefâne', 'Fabrício']

// Wrong
const filtered = users.filter(u => {
    return u.startsWith('L')
})

// Right
const usersStartingWithLetterL = users.filter(user => {
    return user.startsWith('L')
})

// Wrong
function getUsers() {
    const data = getUsersFromDatabasse()

    return data
}

// Right
function getUsers() {
    const users = getUsersFromDatabasse()

    return users
}