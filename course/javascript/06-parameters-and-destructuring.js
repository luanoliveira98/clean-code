// Route to user create (name, email, password)
// Controller (name, email, password)
// Repository (name, email, password)

// Wrong
function createUserRoute(body) {
    // validations

    createUserController(body)
}

function createUserController(data) {
    userRepository.create(data)
}

const userRepository = {
    create(data) {
        // create user (name, email, password)
    }
}
// Right
function createUserRoute(body) {
    // validations

    const { name, email, password } = data

    createUserController({ name, email, password })
}

function createUserController(data) {
    const { name, email, password } = data

    userRepository.create({ name, email, password })
}

const userRepository = {
    create(data) {
        // create user (name, email, password)
    }
}

// Wrong
createUserRoute({ name, email, password }, { id: 1 })
createUserRoute(null, { id: 1 })

function createUserRoute(body, params) {
    // validations

    const { name, email, password } = data

    createUserController({ name, email, password })
}

// Wrong
createUserRoute({ name, email, password }, { id: 1 })
createUserRoute(null, { id: 1 })

function createUserRoute(body, params) {
    // validations

    const { name, email, password } = data

    createUserController({ name, email, password })
}

const userRepository = {
    create(data) {
        const user = createUserOnDatabase()

        return user
    }
}

// Right
createUserRoute({ 
    body: { name, email, password },
    params: { id: 1 },
})
createUserRoute({ 
    params: { id: 1 },
})

function createUserRoute({ body, params }) {
    // validations

    const { name, email, password } = data

    createUserController({ name, email, password })
}

const userRepository = {
    create(data) {
        const user = createUserOnDatabase()

        return {
            user,
        }
    }
}