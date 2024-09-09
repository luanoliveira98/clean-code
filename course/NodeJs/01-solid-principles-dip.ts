// Wrong
import { createUserOnDatabase } from 'db';

function createUser() {
    createUserOnDatabase()
}

// Right
function createUser(
    createUserOnDatabase: () => void
) {
    createUserOnDatabase()
}

-----

import { createUserOnDatabase } from 'db';

createUser(createUserOnDatabase)


